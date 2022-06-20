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

namespace crmeb\utils;


use think\facade\Config;
use think\facade\Lang;
use think\Response;

/**
 * Json输出类
 * Class Json
 * @package crmeb\utils
 */
class Json
{
    private $code = 200;

    public function code(int $code): self
    {
        $this->code = $code;
        return $this;
    }

    public function make(int $status, string $msg, ?array $data = null, ?array $replace = []): Response
    {
        $request = app()->request;
        $res = compact('status', 'msg');

        if (!is_null($data))
            $res['data'] = $data;

        if (is_numeric($res['msg'])) {
            if (!$range = $request->header('lang')) {
                $range = $request->cookie(Config::get('lang.cookie_var'));
            }
            $langData = array_values(Config::get('lang.accept_language', []));
            if (!in_array($range, $langData)) {
                $range = 'zh-cn';
            }

            /** @var Lang $lang */
            $lang = app()->make(Lang::class, Config::get('lang'));

            $res['msg'] = $lang::get($msg, [], $range);

            if (count($replace)) {
                $vars = array_keys($replace);
                foreach ($vars as &$v) {
                    $v = "{:{$v}}";
                }
                $res['msg'] = str_replace($vars, $replace, $res['msg']);
            }
        }

        return Response::create($res, 'json', $this->code);
    }

    public function success($msg = 'success', ?array $data = null, ?array $replace = []): Response
    {
        if (is_array($msg)) {
            $data = $msg;
            $msg = 'success';
        }

        return $this->make(200, $msg, $data, $replace);
    }

    public function fail($msg = 'fail', ?array $data = null, ?array $replace = []): Response
    {
        if (is_array($msg)) {
            $data = $msg;
            $msg = 'fail';
        }

        return $this->make(400, $msg, $data, $replace);
    }

    public function status($status, $msg, $result = [])
    {
        $status = strtoupper($status);
        if (is_array($msg)) {
            $result = $msg;
            $msg = 'success';
        }
        return app('json')->success($msg, compact('status', 'result'));
    }
}
