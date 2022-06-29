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

namespace crmeb\services\express\storage;

use crmeb\services\express\BaseExpress;

/**
 * Class AliyunExpress
 * @package crmeb\services\express\storage
 */
class AliyunExpress extends BaseExpress
{
    /**
     * @var string[]
     */
    protected static $api = [
        'query' => 'https://wuliu.market.alicloudapi.com/kdi'
    ];

    /**
     * @param string $no
     * @param string $type
     * @return bool|mixed
     */
    public function query(string $no = '', string $type = '')
    {
        $appCode = sys_config('system_express_app_code');
        if (!$appCode) return false;
        $res = HttpService::getRequest(self::$api['query'], compact('no', 'type'), ['Authorization:APPCODE ' . $appCode]);
        $result = json_decode($res, true) ?: false;
        return $result;
    }

    public function open()
    {
        // TODO: Implement open() method.
    }

    public function dump($data)
    {
        // TODO: Implement dump() method.
    }

    public function temp(string $com)
    {
        // TODO: Implement temp() method.
    }
}
