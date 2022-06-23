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

namespace crmeb\services\sms;

use crmeb\basic\BaseManager;
use crmeb\services\AccessTokenServeService;
use crmeb\services\sms\storage\yihaotong;
use think\Container;
use think\facade\Config;


/**
 * Class Sms1
 * @package crmeb\services\sms
 * @mixin yihaotong
 */
class Sms extends BaseManager
{
    /**
     * @var array|string[]
     */
    protected $type = ['yihaotong', 'aliyun'];

    /**
     * 空间名
     * @var string
     */
    protected $namespace = '\\crmeb\\services\\sms\\storage\\';

    /**
     * 默认驱动
     * @return mixed
     */
    protected function getDefaultDriver()
    {
        return $this->type[(int)sys_config('sms_type', 0)];
//        return Config::get('sms.default', 'yihaotong');
    }


    /**
     * 获取类的实例
     * @param $class
     * @return mixed|void
     */
    protected function invokeClass($class)
    {
        if (!class_exists($class)) {
            throw new \RuntimeException('class not exists: ' . $class);
        }
        $this->getConfigFile();

        if (!$this->config) {
            $this->config = Config::get($this->configFile . '.stores.' . $this->getDefaultDriver(), []);
        }

        $handleAccessToken = new AccessTokenServeService($this->config['account'] ?? '', $this->config['secret'] ?? '');
        $handle = Container::getInstance()->invokeClass($class, [$this->getDefaultDriver(), $handleAccessToken, $this->configFile]);
        $this->config = [];
        return $handle;
    }
}
