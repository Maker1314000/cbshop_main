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

namespace app\adminapi\controller\v1\marketing\live;

use app\adminapi\controller\AuthController;
use app\services\activity\live\LiveGoodsServices;
use think\facade\App;

/**
 * 直播间商品
 * Class LiveGoods
 * @package app\controller\admin\store
 */
class LiveGoods extends AuthController
{
    /**
     * LiveGoods constructor.
     * @param App $app
     * @param LiveGoodsServices $services
     */
    public function __construct(App $app, LiveGoodsServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    public function list()
    {
        $where = $this->request->postMore([
            ['kerword', ''],
            ['status', ''],
            ['is_show', ''],
            ['live_id', 0]
        ]);
        return app('json')->success($this->services->getList($where));
    }

    public function create()
    {
        [$product_ids] = $this->request->postMore([
            ['product_id', []]
        ], true);
        return app('json')->success($this->services->create($product_ids));
    }

    public function add()
    {
        [$goods_info] = $this->request->postMore([
            ['goods_info', []]
        ], true);
        foreach ($goods_info as $goods) {
            $this->validate($goods, \app\adminapi\validate\marketing\LiveGoodsValidate::class, 'save');
        }
        $this->services->add($goods_info);
        return app('json')->success(100000);
    }

    public function detail($id)
    {
        if (!$id)
            return app('json')->fail(100100);
        $goods = $this->services->get($id, ['*'], ['product']);
        return app('json')->success($goods ? $goods->toArray() : []);
    }

    public function syncGoods()
    {
        $this->services->syncGoodStatus();
        return app('json')->success(100038);
    }

    public function audit($id)
    {
        if (!$id)
            return app('json')->fail(100100);
        $this->services->audit((int)$id);
        return app('json')->success(100014);
    }

    public function resetAudit($id)
    {
        if (!$id)
            return app('json')->fail(100100);
        $this->services->resetAudit((int)$id);
        return app('json')->success(100014);
    }

    public function setShow(int $id, $is_show)
    {
        if (!$id)
            return app('json')->fail(100100);
        return app('json')->success($this->services->isShow($id, $is_show));
    }

    public function delete($id)
    {
        if (!$id)
            return app('json')->fail(100100);
        $this->services->delete($id);
        return app('json')->success(100002);
    }

}
