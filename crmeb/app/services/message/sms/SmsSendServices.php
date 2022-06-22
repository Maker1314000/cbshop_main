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

namespace app\services\message\sms;

use app\services\BaseServices;
use app\services\message\notice\SystemMsgService;
use app\services\message\NoticeService;
use app\services\message\SystemNotificationServices;
use app\services\serve\ServeServices;
use app\jobs\TaskJob;
use crmeb\exceptions\ApiException;
use app\model\system\SystemNotification;
use crmeb\services\CacheService;

/**
 * 短信发送
 * Class SmsSendServices
 * @package app\services\message\sms
 */
class SmsSendServices extends BaseServices
{
    /**
     * 发送短信
     * @param bool $switch
     * @param $phone
     * @param array $data
     * @param string $template
     * @return bool
     */
    public function send(bool $switch, $phone, array $data, string $mark)
    {
        if ($switch && $phone) {
            /** @var ServeServices $services */
            $services = app()->make(ServeServices::class);
            //获取短信ID
            $templateId = CacheService::get('NOTCE_SMS_' . $mark);
            if (!$templateId) {
                $templateId = SystemNotification::where('mark',$mark)->value('sms_id');
                $templateId = $templateId ?? 0;
                CacheService::set('NOTCE_SMS_' . $mark, $templateId);
            }
            $res = $services->sms()->send($phone, $templateId, $data);
            if ($res === false) {
                throw new ApiException($services->getError());
            } else {
                /** @var SmsRecordServices $recordServices */
                $recordServices = app()->make(SmsRecordServices::class);
                $recordServices->save([
                    'uid' => sys_config('sms_account'),
                    'phone' => $phone,
                    'content' => $res['content'] ?? '',
                    'add_time' => time(),
                    'template' => $res['template'] ?? '',
                    'record_id' => $res['id'] ?? ''
                ]);
            }
            TaskJob::dispatchDo('modifyResultCode');
            return true;
        } else {
            return false;
        }
    }

}
