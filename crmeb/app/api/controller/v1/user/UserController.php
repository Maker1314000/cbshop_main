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
namespace app\api\controller\v1\user;

use app\Request;
use app\services\user\UserCancelServices;
use app\services\user\UserServices;
use app\services\wechat\WechatUserServices;


/**
 * 用户类
 * Class UserController
 * @package app\api\controller\store
 */
class UserController
{
    protected $services = NUll;

    /**
     * UserController constructor.
     * @param UserServices $services
     */
    public function __construct(UserServices $services)
    {
        $this->services = $services;
    }

    /**
     * 获取用户信息
     * @param Request $request
     * @return mixed
     */
    public function userInfo(Request $request)
    {
        $info = $request->user()->toArray();
        return app('json')->success($this->services->userInfo($info));
    }

    /**
     * 用户资金统计
     * @param Request $request
     * @return mixed
     */
    public function balance(Request $request)
    {
        $uid = (int)$request->uid();
        return app('json')->success($this->services->balance($uid));
    }

    /**
     * 个人中心
     * @param Request $request
     * @return mixed
     */
    public function user(Request $request)
    {
        $user = $request->user()->toArray();
        return app('json')->success($this->services->personalHome($user, $request->tokenData()));
    }

    /**
     * 添加点赞
     * @param Request $request
     * @return mixed
     */
//    public function like_add(Request $request)
//    {
//        list($id, $category) = UtilService::postMore([['id',0], ['category','product']], $request, true);
//        if(!$id || !is_numeric($id))  return app('json')->fail('参数错误');
//        $res = StoreProductRelation::productRelation($id,$request->uid(),'like',$category);
//        if(!$res) return  app('json')->fail(StoreProductRelation::getErrorInfo());
//        else return app('json')->success();
//    }

    /**
     * 取消点赞
     * @param Request $request
     * @return mixed
     */
//    public function like_del(Request $request)
//    {
//        list($id, $category) = UtilService::postMore([['id',0], ['category','product']], $request, true);
//        if(!$id || !is_numeric($id)) return app('json')->fail('参数错误');
//        $res = StoreProductRelation::unProductRelation($id, $request->uid(),'like',$category);
//        if(!$res) return app('json')->fail(StoreProductRelation::getErrorInfo());
//        else return app('json')->success();
//    }


    /**
     * 获取活动状态
     * @return mixed
     */
    public function activity()
    {
        return app('json')->success($this->services->activity());
    }

    /**
     * 用户修改信息
     * @param Request $request
     * @return mixed
     */
    public function edit(Request $request)
    {
        list($avatar, $nickname) = $request->postMore([
            ['avatar', ''],
            ['nickname', ''],
        ], true);
        if (!$avatar && $nickname == '') {
            return app('json')->fail(411095);
        }
        $uid = (int)$request->uid();
        if ($this->services->eidtNickname($uid, ['avatar' => $avatar, 'nickname' => $nickname])) {
            return app('json')->success(100001);
        }
        return app('json')->fail(100007);
    }

    /**
     * 推广人排行
     * @param Request $request
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function rank(Request $request)
    {
        $data = $request->getMore([
            ['page', ''],
            ['limit', ''],
            ['type', '']
        ]);
        return app('json')->success($this->services->getRankList($data));
    }

    /**
     * 添加访问记录
     * @param Request $request
     * @return mixed
     */
    public function set_visit(Request $request)
    {
        $data = $request->postMore([
            ['url', ''],
            ['stay_time', 0]
        ]);
        if ($data['url'] == '') return app('json')->fail(100100);
        $data['uid'] = (int)$request->uid();
        $data['ip'] = $request->ip();
        if ($this->services->setVisit($data)) {
            return app('json')->success(100021);
        } else {
            return app('json')->fail(100022);
        }
    }

    /**
     * 静默绑定推广人
     * @param Request $request
     * @return mixed
     */
    public function spread(Request $request)
    {
        [$spreadUid, $code] = $request->postMore([
            ['puid', 0],
            ['code', 0]
        ], true);
        $uid = (int)$request->uid();
        $this->services->spread($uid, (int)$spreadUid, $code);
        return app('json')->success();
    }

    /**
     * 推荐用户
     * @param Request $request
     * @return mixed
     */
    public function spread_people(Request $request)
    {
        $spreadInfo = $request->postMore([
            ['grade', 0],
            ['keyword', ''],
            ['sort', ''],
        ]);
        if (!in_array($spreadInfo['grade'], [0, 1])) {
            return app('json')->fail(100100);
        }
        $uid = $request->uid();
        return app('json')->success($this->services->getUserSpreadGrade($uid, $spreadInfo['grade'], $spreadInfo['sort'], $spreadInfo['keyword']));
    }

    /**
     * 是否关注
     * @param Request $request
     * @return mixed
     */
    public function subscribe(Request $request)
    {
        if ($request->uid()) {
            /** @var WechatUserServices $wechatUserService */
            $wechatUserService = app()->make(WechatUserServices::class);
            $subscribe = (bool)$wechatUserService->value(['uid' => $request->uid()], 'subscribe');
            return app('json')->success(['subscribe' => $subscribe]);
        } else {
            return app('json')->success(['subscribe' => true]);
        }
    }

    /**
     * 用户注销
     * @param Request $request
     * @return mixed
     */
    public function SetUserCancel(Request $request)
    {
        /** @var UserCancelServices $userCancelServices */
        $userCancelServices = app()->make(UserCancelServices::class);
        $userCancelServices->SetUserCancel($request->uid());
        return app('json')->success(411099);
    }
}
