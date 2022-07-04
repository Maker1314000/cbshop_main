<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2022 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------
namespace app\outapi\controller;

use app\Request;
use app\services\order\OutStoreOrderRefundServices;
use app\services\order\StoreOrderRefundServices;
use app\services\order\StoreOrderServices;
use app\services\user\UserServices;
use think\facade\App;

class RefundOrder extends AuthController
{
    /**
     * RefundOrder constructor.
     * @param App $app
     * @param OutStoreOrderRefundServices $service
     * @method temp
     */
    public function __construct(App $app, OutStoreOrderRefundServices $service)
    {
        parent::__construct($app);
        $this->services = $service;
    }

    /**
     * 获取售后订单列表
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function lst()
    {
        $where = $this->request->getMore([
            ['order_id', ''],
            ['time', ''],
            ['refund_type', 0]
        ]);
        $where['is_cancel'] = 0;

        return app('json')->success($this->services->refundList($where));
    }

    /**
     * 修改备注
     * @param $id
     * @param StoreOrderRefundServices $services
     * @return mixed
     */
    public function remark($id, StoreOrderRefundServices $services)
    {
        if (!$id) return app('json')->fail(100100);
        [$remark] = $this->request->postMore([['remark', '']], true);

        $services->updateRemark((int)$id, $remark);
        return app('json')->success(100024);
    }

    /**
     * 同意退款
     * @param $id
     * @param StoreOrderRefundServices $services
     * @return mixed
     */
    public function agree($id, StoreOrderRefundServices $services)
    {
        if (!$id) return app('json')->fail(100100);
        $services->agreeExpress($id);
        return app('json')->success(100010);
    }

    /**
     * 订单不退款
     * @param $id
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function refuse($id, StoreOrderRefundServices $services)
    {
        if (!$id) return app('json')->fail(100100);
        [$refund_reason] = $this->request->postMore([['refund_reason', '']], true);
        $services->refuse($id, $refund_reason);
        return app('json')->success(100010);
    }

    /**
     * 订单详情
     * @param $id
     * @return mixed
     */
    public function read($id)
    {
        if (!$id) return app('json')->fail(100100);
        $data = $this->services->getInfo($id);
        return app('json')->success($data);
    }

    /**
     * 订单退款
     * @param $id
     * @param Request $request
     * @param StoreOrderServices $services
     * @param StoreOrderRefundServices $refundServices
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function refundPrice($id, Request $request, StoreOrderServices $services, StoreOrderRefundServices $refundServices)
    {
        if (!$id) return app('json')->fail(100100);
        $data = $request->postMore([
            ['refund_price', 0],
            ['type', 1]
        ]);

        $orderRefund = $this->services->get($id);
        if (!$orderRefund) {
            return app('json')->fail(100026);
        }
        if ($orderRefund['is_cancel'] == 1) {
            return app('json')->fail(400118);
        }
        $order = $services->get((int)$orderRefund['store_order_id']);
        if (!$order) {
            return app('json')->fail(100026);
        }
        if (!in_array($orderRefund['refund_type'], [1, 5])) {
            return app('json')->fail(400144);
        }

        if ($data['type'] == 1) {
            $data['refund_type'] = 6;
        } else if ($data['type'] == 2) {
            $data['refund_type'] = 3;
        }
        $data['refunded_time'] = time();
        $type = $data['type'];
        //拒绝退款
        if ($type == 2) {
            $refundServices->refuseRefund((int)$id, $data, $orderRefund);
            return app('json')->success(400145);
        } else {
            //0元退款
            if ($orderRefund['refund_price'] == 0 && in_array($orderRefund['refund_type'], [1, 5])) {
                $refund_price = 0;
            } else {
                if (!$data['refund_price']) {
                    return app('json')->fail(400146);
                }
                if ($orderRefund['refund_price'] == $orderRefund['refunded_price']) {
                    return app('json')->fail(400147);
                }
                $refund_price = $data['refund_price'];

                $data['refunded_price'] = bcadd($data['refund_price'], $orderRefund['refunded_price'], 2);
                $bj = bccomp((string)$orderRefund['refund_price'], (string)$data['refunded_price'], 2);
                if ($bj < 0) {
                    return app('json')->fail(400148);
                }
            }

            unset($data['type']);
            $refund_data['pay_price'] = $order['pay_price'];
            $refund_data['refund_price'] = $refund_price;
            if ($order['refund_price'] > 0) {
                mt_srand();
                $refund_data['refund_id'] = $order['order_id'] . rand(100, 999);
            }
            //修改订单退款状态
            unset($data['refund_price']);
            if ($refundServices->agreeRefund($id, $refund_data)) {
                $refundServices->update($id, $data);
                return app('json')->success(400149);
            } else {
                $refundServices->storeProductOrderRefundYFasle((int)$id, $refund_price);
                return app('json')->fail(400150);
            }
        }
    }

}
