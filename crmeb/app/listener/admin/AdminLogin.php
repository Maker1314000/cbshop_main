<?php
/**
 *  +----------------------------------------------------------------------
 *  | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
 *  +----------------------------------------------------------------------
 *  | Copyright (c) 2016~2022 https://www.crmeb.com All rights reserved.
 *  +----------------------------------------------------------------------
 *  | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
 *  +----------------------------------------------------------------------
 *  | Author: CRMEB Team <admin@crmeb.com>
 *  +----------------------------------------------------------------------
 */

namespace app\listener\admin;

/**
 * Class AdminLogin
 * @package app\listener\admin
 */
class AdminLogin
{

    public function handle($event)
    {
        try {
            [$key] = $event;
            //检测消息队列是否执行
            $path = root_path('runtime') . '.queue';
            $content = file_get_contents($path);
            $res = $key === $content;
            unlink($path);
            return $res;
        } catch (\Throwable $e) {
            return false;
        }
    }
}