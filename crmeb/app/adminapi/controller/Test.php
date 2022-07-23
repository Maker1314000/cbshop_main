<?php
/**
 * @author: liaofei<136327134@qq.com>
 * @day: 2020/9/12
 */

namespace app\adminapi\controller;

use app\services\serve\ServeServices;

class Test
{
    public function index()
    {
        /** @var ServeServices $services */
        $services = app()->make(ServeServices::class);
        $smsMake = $services->sms('aliyun');
        //发送短信
        $res = $smsMake->send(13310900872, 'SMS_186942842', ['code'=>123456]);
    }
}

