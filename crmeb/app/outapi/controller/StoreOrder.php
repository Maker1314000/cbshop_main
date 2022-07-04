<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------
namespace app\outapi\controller;

use app\adminapi\validate\order\StoreOrderValidate;
use app\services\order\{OutStoreOrderServices,
    StoreOrderDeliveryServices,
    StoreOrderInvoiceServices};
use app\services\shipping\ExpressServices;
use think\facade\App;

/**
 * 订单管理
 * Class StoreOrder
 * @package app\outapi\controller
 */
class StoreOrder extends AuthController
{
    /**
     * StoreOrder constructor.
     * @param App $app
     * @param OutStoreOrderServices $service
     * @method temp
     */
    public function __construct(App $app, OutStoreOrderServices $service)
    {
        parent::__construct($app);
        $this->services = $service;
    }

    /**
     * 获取订单列表
     * @return mixed
     */
    public function lst()
    {
        $where = $this->request->getMore([
            ['status', ''],
            ['real_name', ''],
            ['is_del', ''],
            ['data', '', '', 'time'],
            ['type', ''],
            ['pay_type', ''],
            ['order', ''],
            ['field_key', ''],
        ]);
        $where['is_system_del'] = 0;
        $where['pid'] = 0;
        return app('json')->success($this->services->getOrderList($where));
    }

    /**
     * 快递公司列表
     * @return mixed
     */
    public function express(ExpressServices $services)
    {
        [$status] = $this->request->getMore([
            ['status', ''],
        ], true);
        if ($status != '') $data['status'] = $status;
        $data['is_show'] = 1;
        return app('json')->success($services->express($data));
    }

    /**
     * 订单发货
     * @param $id 订单id
     * @return mixed
     */
    public function delivery($id, StoreOrderDeliveryServices $services)
    {
        if (!$id) return app('json')->fail(100100);
        $data = $this->request->postMore([
            ['type', 1],
            ['delivery_name', ''],//快递公司名称
            ['delivery_id', ''],//快递单号
            ['delivery_code', ''],//快递公司编码
            ['fictitious_content', '']//虚拟发货内容
        ]);
        $data['express_record_type'] = 1;
        $services->delivery((int)$id, $data);
        return app('json')->success(100010);
    }

    /**
     * 获取订单可拆分发货商品列表
     * @param $id 订单id
     * @return mixed
     */
    public function splitCartInfo($id)
    {
        if (!$id) return app('json')->fail(100100);
        return app('json')->success($this->services->getCartList((int)$id));
    }

    /**
     * 订单拆单发送货
     * @param $id 订单id
     * @return mixed
     */
    public function splitDelivery($id, StoreOrderDeliveryServices $services)
    {
        if (!$id) return app('json')->fail(100100);
        $data = $this->request->postMore([
            ['type', 1],
            ['delivery_name', ''],//快递公司名称
            ['delivery_id', ''],//快递单号
            ['delivery_code', ''],//快递公司编码
            ['fictitious_content', ''],//虚拟发货内容
            ['cart_ids', []]
        ]);

        if (!$data['cart_ids']) {
            return app('json')->fail(400158);
        }
        foreach ($data['cart_ids'] as &$cart) {
            if (!isset($cart['cart_id']) || !$cart['cart_id'] || !isset($cart['cart_num']) || !$cart['cart_num']) {
                return app('json')->fail(400159);
            }
            $cart['cart_id'] = (int)$cart['cart_id'];
            $cart['cart_num'] = (int)$cart['cart_num'];
        }
        $data['express_record_type'] = 1;
        $services->splitDelivery((int)$id, $data);
        return app('json')->success(100010);
    }

    /**
     * 修改订单支付金额等
     * @param $id
     * @return mixed
     */
    public function update($id)
    {
        if (!$id) return app('json')->fail(100100);
        $data = $this->request->postMore([
            ['order_id', ''],
            ['total_price', 0],
            ['total_postage', 0],
            ['pay_price', 0],
            ['pay_postage', 0],
            ['gain_integral', 0],
        ]);

        $this->validate($data, StoreOrderValidate::class);

        if ($data['total_price'] < 0) return app('json')->fail(400155);
        if ($data['pay_price'] < 0) return app('json')->fail(400155);

        $this->services->updateOrder((int)$id, $data);
        return app('json')->success(100001);
    }

    /**
     * 确认收货
     * @param $id 订单id
     * @return mixed
     * @throws \Exception
     */
    public function receive($id)
    {
        if (!$id) return app('json')->fail(100100);
        $this->services->receive((int)$id);
        return app('json')->success(400117);
    }

    /**
     * 设置发票信息
     * @param $id
     * @param StoreOrderInvoiceServices $services
     * @return mixed
     */
    public function setInvoice($id, StoreOrderInvoiceServices $services)
    {
        if (!$id) return app('json')->fail(100100);
        $data = $this->request->postMore([
            [['header_type', 'd'], 1],
            [['type', 'd'], 1],
            ['drawer_phone', ''],
            ['email', ''],
            ['name', ''],
            ['duty_number', ''],
            ['tell', ''],
            ['address', ''],
            ['bank', ''],
            ['card_number', ''],
            ['is_default', 0]
        ]);

        if (!$data['drawer_phone']) return app('json')->fail(410144);
        if (!check_phone($data['drawer_phone'])) return app('json')->fail(410018);
        if (!$data['name']) return app('json')->fail(410145);
        if (!in_array($data['header_type'], [1, 2])) {
            $data['header_type'] = empty($data['duty_number']) ? 1 : 2;
        }
        if ($data['header_type'] == 1 && !preg_match('/^[\x80-\xff]{2,60}$/', $data['name'])) {
            return app('json')->fail(410146);
        }
        if ($data['header_type'] == 2 && !preg_match('/^[0-9a-zA-Z&\(\)\（\）\x80-\xff]{2,150}$/', $data['name'])) {
            return app('json')->fail(410146);
        }
        if ($data['header_type'] == 2 && !$data['duty_number']) {
            return app('json')->fail(410147);
        }
        if ($data['header_type'] == 2 && !preg_match('/^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/', $data['duty_number'])) {
            return app('json')->fail(410148);
        }
        if ($data['card_number'] && !preg_match('/^[1-9]\d{11,19}$/', $data['card_number'])) {
            return app('json')->fail(410149);
        }

        $re = $services->setInvoice($id, $data);
        if ($re) {
            return app('json')->success(100001);
        } else {
            return app('json')->fail(100005);
        }
    }

    /**
     * 设置发票状态
     * @param $id
     * @param StoreOrderInvoiceServices $services
     * @return mixed
     */
    public function setInvoiceStatus($id, StoreOrderInvoiceServices $services)
    {
        if (!$id) return app('json')->fail(100100);
        $data = $this->request->postMore([
            ['is_invoice', 0],
            ['invoice_number', 0],
            ['remark', '']
        ]);

        if ($data['is_invoice'] == 1 && !$data['invoice_number']) {
            return app('json')->fail(400166);
        }
        if ($data['invoice_number'] && !preg_match('/^\d{8,10}$/', $data['invoice_number'])) {
            return app('json')->fail(400167);
        }

        $services->setInvoice((int)$id, $data);
        return app('json')->success(100014);
    }

    /**
     * 订单详情
     * @param $id 订单id
     * @return mixed
     */
    public function read($id)
    {
        if (!$id) return app('json')->fail(100100);
        return app('json')->success($this->services->getInfo((int)$id));
    }

    /**
     * 修改备注
     * @param $id
     * @return mixed
     */
    public function remark($id)
    {
        if (!$id) return app('json')->fail(100100);
        $data = $this->request->postMore([['remark', '']]);
        if (!$data['remark']) return app('json')->fail(400106);

        if (!$order = $this->services->get($id)) {
            return app('json')->fail(400118);
        }
        $order->remark = $data['remark'];
        if ($order->save()) {
            return app('json')->success(100024);
        } else
            return app('json')->fail(100025);
    }

    /**
     * 修改配送信息
     * @param $id 订单id
     * @return mixed
     */
    public function updateDistribution($id, StoreOrderDeliveryServices $services)
    {
        if (!$id) return app('json')->fail(100100);
        $data = $this->request->postMore([['delivery_name', ''], ['delivery_code', ''], ['delivery_id', '']]);
        $services->updateDistribution($id, $data);
        return app('json')->success(100010);
    }
}
