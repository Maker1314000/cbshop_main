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
namespace app\adminapi\controller\v1\application\wechat;

use app\adminapi\controller\AuthController;
use crmeb\exceptions\AdminException;
use app\services\message\TemplateMessageServices;
use crmeb\services\{
    FormBuilder as Form, template\Template
};
use crmeb\services\app\WechatService;
use think\facade\App;
use think\facade\Route as Url;
use think\Request;
use think\facade\Cache;

/**
 * 微信模板消息
 * Class WechatTemplate
 * @package app\adminapi\controller\v1\application\wechat
 */
class WechatTemplate extends AuthController
{
    protected $cacheTag = '_system_wechat';

    /**
     * 构造方法
     * WechatTemplate constructor.
     * @param App $app
     * @param TemplateMessageServices $services
     */
    public function __construct(App $app, TemplateMessageServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * 显示资源列表
     *
     * @return \think\Response
     */
    public function index()
    {
        $where = $this->request->getMore([
            ['name', ''],
            ['status', '']
        ]);
        $where['type'] = 1;
        $data = $this->services->getTemplateList($where);
        $industry = Cache::tag($this->cacheTag)->remember('_wechat_industry', function () {
            try {
                $cache = (new Template('wechat'))->getIndustry();
                if (!$cache){
                    $cache = (new Template('wechat'))->getIndustry();
                }
                Cache::tag($this->cacheTag, ['_wechat_industry']);
                return $cache->toArray();
            } catch (\Exception $e) {
                return $e->getMessage();
            }
        }, 0) ?: [];
        !is_array($industry) && $industry = [];
        $industry['primary_industry'] = isset($industry['primary_industry']) ? $industry['primary_industry']['first_class'] . ' | ' . $industry['primary_industry']['second_class'] : '未选择';
        $industry['secondary_industry'] = isset($industry['secondary_industry']) ? $industry['secondary_industry']['first_class'] . ' | ' . $industry['secondary_industry']['second_class'] : '未选择';
        $lst = array(
            'industry' => $industry,
            'count' => $data['count'],
            'list' => $data['list']
        );
        return app('json')->success($lst);
    }

    /**
     * 显示创建资源表单页.
     *
     * @return \think\Response
     */
    public function create()
    {
        $f = array();
        $f[] = Form::input('tempkey', '模板编号');
        $f[] = Form::input('tempid', '模板ID');
        $f[] = Form::input('name', '模板名');
        $f[] = Form::input('content', '回复内容')->type('textarea');
        $f[] = Form::radio('status', '状态', 1)->options([['label' => '开启', 'value' => 1], ['label' => '关闭', 'value' => 0]]);
        return app('json')->success(create_form('添加模板消息', $f, Url::buildUrl('/app/wechat/template'), 'POST'));
    }

    /**
     * 保存新建的资源
     *
     * @param Request $request
     * @return \think\Response
     */
    public function save(Request $request)
    {
        $data = $this->request->postMore([
            'tempkey',
            'tempid',
            'name',
            'content',
            ['status', 0],
            ['type', 1]
        ]);
        if ($data['tempkey'] == '') return app('json')->fail(400230);
        if ($this->services->getOne(['tempkey' => $data['tempkey']])) return app('json')->fail(400231);
        if ($data['tempid'] == '') return app('json')->fail(400232);
        if ($data['name'] == '') return app('json')->fail(400233);
        if ($data['content'] == '') return app('json')->fail(400234);
        $data['add_time'] = time();
        $this->services->save($data);
        return app('json')->success(400235);
    }

    /**
     * 显示指定的资源
     *
     * @param int $id
     * @return \think\Response
     */
    public function read($id)
    {
        //
    }

    /**
     * 显示编辑资源表单页.
     *
     * @param int $id
     * @return \think\Response
     */
    public function edit($id)
    {
        if (!$id) return app('json')->fail(100026);
        $product = $this->services->get($id);
        if (!$product) return app('json')->fail(100026);
        $f = array();
        $f[] = Form::input('tempkey', '模板编号', $product->getData('tempkey'))->disabled(1);
        $f[] = Form::input('name', '模板名', $product->getData('name'))->disabled(1);
        $f[] = Form::input('tempid', '模板ID', $product->getData('tempid'));
        $f[] = Form::radio('status', '状态', $product->getData('status'))->options([['label' => '开启', 'value' => 1], ['label' => '关闭', 'value' => 0]]);
        return app('json')->success(create_form('编辑模板消息', $f, Url::buildUrl('/app/wechat/template/' . $id), 'PUT'));

    }

    /**
     * 保存更新的资源
     *
     * @param Request $request
     * @param int $id
     * @return \think\Response
     */
    public function update(Request $request, $id)
    {
        $data = $this->request->postMore([
            'tempid',
            ['status', 0],
            ['type', 1]
        ]);
        if ($data['tempid'] == '') return app('json')->fail(400232);
        if (!$id) return app('json')->fail(100026);
        $product = $this->services->get($id);
        if (!$product) return app('json')->fail(100026);
        $this->services->update($id, $data, 'id');
        return app('json')->success(100001);
    }

    /**
     * 删除指定资源
     *
     * @param int $id
     * @return \think\Response
     */
    public function delete($id)
    {
        if (!$id) return app('json')->fail(100026);
        if (!$this->services->delete($id))
            return app('json')->fail(100008);
        else
            return app('json')->success(100002);
    }

    /**
     * 修改状态
     * @param $id
     * @param $status
     * @return mixed
     */
    public function set_status($id, $status)
    {
        if ($status == '' || $id == 0) return app('json')->fail(100100);
        $this->services->update($id, ['status' => $status], 'id');
        return app('json')->success(100014);
    }

    /**
     * 同步微信模版消息
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function syncSubscribe()
    {
        if (!sys_config('wechat_appid') || !sys_config('wechat_appsecret')) {
            throw new AdminException(400248);
        }
        $tempall = $this->services->getTemplateList(['status' => 1, 'type' => 1]);
        /*
         * 删除所有模版ID
         */
        //获取微信平台已经添加的模版
        $list = WechatService::getPrivateTemplates();//获取所有模版
        foreach ($list->template_list as $v)
        {
            //删除已有模版
            WechatService::deleleTemplate($v['template_id']);
        }

        foreach ($tempall['list'] as $temp)
        {
            //添加模版消息
            $res = WechatService::addTemplateId($temp['tempkey']);
//            if($temp['tempid'])
//            {
//                //删除已有模版
//                WechatService::deleleTemplate($temp['tempid']);
//            }
            if(!$res->errcode && $res->template_id){
                $this->services->update($temp['id'],['tempid'=>$res->template_id]);
            }
        }
        return app('json')->success(400249);

        /**
         * 批量修改模版格式
         */
        //获取所有模版
//        $list = WechatService::getPrivateTemplates();//获取所有模版
//
//        foreach ($tempall['list'] as $v)
//        {
//            foreach ($list->template_list as $item)
//            {
//                echo $item['template_id'];
//                if ($item['template_id'] == $v['tempid']) {
//                    $this->services->update($v['id'], ['content'=>'']);
//                }
//            }
//
//        }
    }
}
