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

namespace app\services\message\notice;

use app\jobs\notice\SmsJob;
use app\jobs\TaskJob;
use app\model\system\SystemNotification;
use app\services\message\NoticeService;
use app\services\kefu\service\StoreServiceServices;
use app\services\message\SystemNotificationServices;
use app\services\yihaotong\SmsRecordServices;
use app\services\yihaotong\ServeServices;
use crmeb\exceptions\ApiException;
use crmeb\services\CacheService;
use think\facade\Log;


/**
 * 短信发送消息列表
 * Created by PhpStorm.
 * User: xurongyao <763569752@qq.com>
 * Date: 2021/9/22 1:23 PM
 */
class NoticeSmsService extends NoticeService
{

    /**
     * 判断是否开启权限
     * @var bool
     */
    private $isopend = true;

    /**
     * 是否开启权限
     * @param string $mark
     * @return $this
     */
    public function isOpen(string $mark)
    {
        $this->isopend = $this->notceinfo['is_sms'] === 1;
        return $this;

    }


    /**
     * 发送短信消息
     * @param string $tempCode 模板消息常量名称
     * @param $uid uid
     * @param array $data 模板内容
     * @param string $link 跳转链接
     * @param string|null $color 文字颜色
     * @return bool|mixed
     */
    public function sendSms($phone, array $data, string $mark)
    {
        try {
            $this->isopend = $this->notceinfo['is_sms'] === 1;
            $mark = $this->notceinfo['mark'];
            if ($this->isopend) {
                SmsJob::dispatch('doJob', [$phone, $data, $mark]);
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return true;
        }
    }

    /**
     * 发送短信
     * @param bool $switch
     * @param $phone
     * @param array $data
     * @param string $mark
     * @return bool
     */
    public function send(bool $switch, $phone, array $data, string $mark)
    {
        if ($switch && $phone) {
            /** @var ServeServices $services */
            $services = app()->make(ServeServices::class);
            //获取短信ID
            $templateId = CacheService::get('NOTICE_SMS_' . $mark);
            if (!$templateId) {
                /** @var SystemNotificationServices $notifyServices */
                $notifyServices = app()->make(SystemNotificationServices::class);
                $templateId = $notifyServices->value(['mark' => $mark], 'sms_id') ?? 0;
                CacheService::set('NOTICE_SMS_' . $mark, $templateId);
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

    /**
     * 退款发送管理员消息任务
     * @param $order
     * @return bool
     */
    public function sendAdminRefund($order)
    {
        /** @var StoreServiceServices $StoreServiceServices */
        $StoreServiceServices = app()->make(StoreServiceServices::class);
        $adminList = $StoreServiceServices->getStoreServiceOrderNotice();

        foreach ($adminList as $item) {
            $data = ['order_id' => $order['order_id'], 'admin_name' => $item['nickname']];
            $this->sendSms($item['phone'], $data, 'send_order_apply_refund');
        }
        return true;
    }

    /**
     * 用户确认收货管理员短信提醒
     * @param $switch
     * @param $adminList
     * @param $order
     * @return bool
     */
    public function sendAdminConfirmTakeOver($order)
    {
        /** @var StoreServiceServices $StoreServiceServices */
        $StoreServiceServices = app()->make(StoreServiceServices::class);
        $adminList = $StoreServiceServices->getStoreServiceOrderNotice();
        foreach ($adminList as $item) {
            $data = ['order_id' => $order['order_id'], 'admin_name' => $item['nickname']];
            $this->sendSms($item['phone'], $data, 'send_admin_confirm_take_over');
        }
        return true;
    }

    /**
     * 下单成功给客服管理员发送短信
     * @param $switch
     * @param $adminList
     * @param $order
     * @return bool
     */
    public function sendAdminPaySuccess($order)
    {

        /** @var StoreServiceServices $StoreServiceServices */
        $StoreServiceServices = app()->make(StoreServiceServices::class);
        $adminList = $StoreServiceServices->getStoreServiceOrderNotice();
        foreach ($adminList as $item) {
            $data = ['order_id' => $order['order_id'], 'admin_name' => $item['nickname']];
            $this->sendSms($item['phone'], $data, 'admin_pay_success_code');
        }
        return true;
    }


}
