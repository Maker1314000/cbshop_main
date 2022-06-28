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

namespace app\jobs;


use app\services\message\SystemNotificationServices;
use app\services\message\TemplateMessageServices;
use crmeb\basic\BaseJobs;
use crmeb\services\template\Template;
use crmeb\traits\QueueTrait;
use think\facade\Log;
use think\facade\Route;

/**
 * Class TemplateJob
 * @package app\jobs
 */
class TemplateJob extends BaseJobs
{
    use QueueTrait;

    /**
     * @param $type
     * @param $openid
     * @param $tempCode
     * @param $data
     * @param $link
     * @param $color
     * @return bool|mixed
     */
    public function doJob($type, $openid, $tempCode, $data, $link, $color)
    {
        try {
            if (!$openid) return true;
            $template = new Template($type ?: 'wechat');
            $template->to($openid);
            if ($color) {
                $template->color($color);
            }
            if ($link) {
                switch ($type) {
                    case 'wechat':
                        $link = sys_config('site_url') . Route::buildUrl($link)->suffix('')->domain(false)->build();
                        break;
                    default:
                        break;
                }
                $template->url($link);
            }
            //判断小程序还是公众号，获取数据id
            $typeField = $type == 'wechat' ? 'wechat_id' : 'routine_id';
            /** @var SystemNotificationServices $notifyServices */
            $notifyServices = app()->make(SystemNotificationServices::class);
            $typeId = $notifyServices->value(['mark' => $tempCode], $typeField);

            //获取模版id
            /** @var TemplateMessageServices $tempMsgServices */
            $tempMsgServices = app()->make(TemplateMessageServices::class);
            $tempid = $tempMsgServices->value(['id' => $typeId], 'tempid');

            return $template->send($tempid, $data);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return true;
        }
    }

}
