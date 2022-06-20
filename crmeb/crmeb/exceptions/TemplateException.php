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

namespace crmeb\exceptions;


use think\facade\Config;
use think\facade\Lang;
use Throwable;

/**
 * Class TemplateException
 * @package crmeb\exceptions
 */
class TemplateException extends \RuntimeException
{
    public function __construct($message, $replace = [], $code = 0, Throwable $previous = null)
    {
        if (is_array($message)) {
            $errInfo = $message;
            $message = $errInfo[1] ?? '未知错误';
            if ($code === 0) {
                $code = $errInfo[0] ?? 400;
            }
        }

        if (is_numeric($message)) {
            $code = $message;

            if (!$range = app()->request->header('lang')) {
                $range = app()->request->cookie(Config::get('lang.cookie_var'));
            }
            $langData = array_values(Config::get('lang.accept_language', []));
            if (!in_array($range, $langData)) {
                $range = 'zh-cn';
            }

            /** @var Lang $lang */
            $lang = app()->make(Lang::class, Config::get('lang'));

            $message = $lang::get($message, [], $range);

            if (count($replace)) {
                $vars = array_keys($replace);
                foreach ($vars as &$v) {
                    $v = "{:{$v}}";
                }
                $message = str_replace($vars, $replace, $message);
            }
        }

        parent::__construct($message, $code, $previous);
    }
}
