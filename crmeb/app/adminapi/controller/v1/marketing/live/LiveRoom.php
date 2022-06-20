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
use app\services\activity\live\LiveRoomServices;
use think\facade\App;

/**
 * 直播间
 * Class LiveRoom
 * @package app\adminapi\controller\v1\marketing\live
 */
class LiveRoom extends AuthController
{
    /**
     * LiveRoom constructor.
     * @param App $app
     * @param LiveRoomServices $services
     */
    public function __construct(App $app, LiveRoomServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    public function list()
    {
        $where = $this->request->postMore([
            ['kerword', ''],
            ['status', '']
        ]);
        return app('json')->success($this->services->getList($where));
    }

    public function detail($id)
    {
        if (!$id)
            return app('json')->fail(100100);
        return app('json')->success($this->services->get((int)$id)->toArray());
    }

    public function add()
    {
        $data = $this->request->postMore([
            ['name', ''],
            ['cover_img', ''],
            ['share_img', ''],
            ['anchor_name', ''],
            ['anchor_wechat', ''],
            ['phone', ''],
            ['start_time', ['', '']],
            ['type', 1],
            ['screen_type', 1],
            ['close_like', 0],
            ['close_goods', 0],
            ['close_comment', 0],
            ['replay_status', 1],
            ['sort', 0]
        ]);
        $this->validate($data, \app\adminapi\validate\marketing\LiveRoomValidate::class, 'save');
        $this->services->add($data);
        return app('json')->success(100000);
    }

    public function addGoods()
    {
        [$room_id, $goods_ids] = $this->request->postMore([
            ['room_id', 0],
            ['goods_ids', []]
        ], true);
        $this->services->exportGoods((int)$room_id, $goods_ids);
        return app('json')->success(100000);
    }

    public function apply($id)
    {
        [$status, $msg] = $this->request->postMore([
            ['status', ''],
            ['msg', '']
        ], true);

        $this->services->apply((int)$id, $status, $msg);
        return app('json')->success(100014);
    }

    public function setShow($id, $is_show)
    {
        $this->services->isShow((int)$id, $is_show);
        return app('json')->success(100014);
    }

    public function delete($id)
    {
        $this->services->delete($id);
        return app('json')->success(100002);
    }

    public function syncRoom()
    {
        $this->services->syncRoomStatus();
        return app('json')->success(100038);
    }

}
