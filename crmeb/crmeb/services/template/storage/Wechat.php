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
namespace crmeb\services\template\storage;

use app\services\message\TemplateMessageServices;
use crmeb\services\template\BaseMessage;
use crmeb\services\WechatService;
use think\facade\Log;

class Wechat extends BaseMessage
{
    /**
     * 初始化
     * @param array $config
     * @return mixed|void
     */
    protected function initialize(array $config)
    {
        parent::initialize($config); // TODO: Change the autogenerated stub
    }

    /**
     * @param string $templateId
     * @return mixed
     */
    public function getTempId(string $templateId)
    {
        /** @var TemplateMessageServices $services */
        $services = app()->make(TemplateMessageServices::class);
        return $services->getTempId($templateId, 1);
    }

    /**
     * 发送消息
     * @param string $templateId
     * @param array $data
     * @return bool|mixed
     */
    public function send(string $templateId, array $data = [])
    {
        //从配置文件中获取模版编号
        $templateId = $this->getTemplateCode($templateId);
        if (!$templateId) {
            return $this->setError('Template number does not exist');
        }
        //根据模版编号获取模版ID
        $tempid = $this->getTempId($templateId);
        if (!$tempid) {
            return $this->setError('Template ID does not exist');
        }
        if (!$this->openId) {
            return $this->setError('Openid does not exist');
        }
        try {
            $res = WechatService::sendTemplate($this->openId, $tempid, $data, $this->toUrl, $this->color);
            $this->clear();
            return $res;
        } catch (\Exception $e) {
            $this->isLog() && Log::error('发送给openid为:' . $this->openId . '微信模板消息失败,模板id为:' . $tempid . ';错误原因为:' . $e->getMessage());
            return $this->setError($e->getMessage());
        }
    }

    /**
     * 获取所有模板
     * @return \EasyWeChat\Support\Collection|mixed
     */
    public function list()
    {
        return WechatService::noticeService()->getPrivateTemplates();
    }

    /**
     * 添加模板消息
     * @param string $shortId
     * @return \EasyWeChat\Support\Collection|mixed
     */
    public function add(string $shortId)
    {
        return WechatService::noticeService()->addTemplate($shortId);
    }

    /**
     * 删除模板消息
     * @param string $templateId
     * @return \EasyWeChat\Support\Collection|mixed
     */
    public function delete(string $templateId)
    {
        return WechatService::noticeService()->deletePrivateTemplate($templateId);
    }

    /**
     * 返回所有支持的行业列表
     * @return \EasyWeChat\Support\Collection
     */
    public function getIndustry()
    {
        return WechatService::noticeService()->getIndustry();
    }
    /**
     * 设置模版消息行业
     * @return \EasyWeChat\Support\Collection
     */
    public function setIndustry($one,$two)
    {
        return WechatService::noticeService()->setIndustry($one,$two);
    }
}
