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

namespace app\listener\pay;


use app\services\pay\PayNotifyServices;
use app\services\wechat\WechatMessageServices;
use crmeb\utils\Hook;

/**
 * 支付异步回调
 * Class Notify
 * @package app\listener\pay
 */
class Notify
{

    /**
     * @param $type
     * @param $notify
     * @return bool
     */
    public function handle($type, $notify)
    {
        if (isset($notify->out_trade_no)) {
            if (isset($notify->attach) && $notify->attach) {
                if (($count = strpos($notify->out_trade_no, '_')) !== false) {
                    $notify->trade_no = $notify->out_trade_no;
                    $notify->out_trade_no = substr($notify->out_trade_no, $count + 1);
                }
                return (new Hook(PayNotifyServices::class, $type))->listen($notify->attach, $notify->out_trade_no, $type == 'wechat' ? $notify->transaction_id : $notify->trade_no);
            }
        }

        if ($type === 'wechat' && isset($notify->out_trade_no)) {
            /** @var WechatMessageServices $wechatMessageService */
            $wechatMessageService = app()->make(WechatMessageServices::class);
            $wechatMessageService->setOnceMessage($notify, $notify->openid, 'payment_success', $notify->out_trade_no);
        }

        return false;
    }
}
