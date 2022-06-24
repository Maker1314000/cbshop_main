<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2022 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace crmeb\services\sms\storage;

use crmeb\basic\BaseSms;
use crmeb\services\HttpService;
use think\facade\Config;


/**
 * Class Aliyun
 * @package crmeb\services\sms\storage
 */
class Aliyun extends BaseSms
{
    protected $apiUrl = 'https://dysmsapi.aliyuncs.com/';

    protected $header = ['x-sdk-client' => 'php/2.0.0'];

    protected $AccessKeySecret = '';

    protected $templates = [];

    protected $param = [
        'AccessKeyId' => '',
        'Action' => 'SendSms',
        'Format' => 'JSON',
        'PhoneNumbers' => '',
        'RegionId' => 'cn-hangzhou',
        'SignName' => '',
        'SignatureMethod' => 'HMAC-SHA1',
        'SignatureNonce' => '',
        'SignatureVersion' => '1.0',
        'Timestamp' => '',
        'Version' => '2017-05-25',
    ];

    /**
     * @param array $config
     * @return mixed|void
     */
    protected function initialize(array $config = [])
    {
        parent::initialize($config);
        $this->param['SignName'] = $config['sign_name'] ?? '';
        $this->param['AccessKeyId'] = $config['access_key_id'] ?? '';
        $this->AccessKeySecret = $config['access_key_secret'] ?? '';
        $this->param['RegionId'] = $config['region_id'] ?? '';
        $this->param['SignatureNonce'] = uniqid(mt_rand(0, 0xffff), true);
        $this->param['Timestamp'] = gmdate('Y-m-d\TH:i:s\Z');
        $this->templates = Config::get($this->configFile . '.stores.' . $this->name . '.template_id', []);
    }

    /**
     * @param string $phone
     * @param string $templateId
     * @param array $data
     * @return array[]|bool|mixed
     */
    public function send(string $phone, string $templateId, array $data = [])
    {
        if (empty($phone)) {
            return $this->setError('电话号码不能为空');
        }
        $param = $this->param;
        if (!$param['SignName'] || !$param['AccessKeyId'] || $param['RegionId'] || !$this->AccessKeySecret) {
            return $this->setError('请先配置短信秘钥');
        }

        $param['TemplateCode'] = $this->templates[$templateId];
        $param['TemplateParam'] = $data;
        $body = $this->rpc($param, 'post');
        $result = HttpService::request($this->apiUrl, 'POST', $body, $this->header);
        if ($result === false) {
            return $this->setError(HttpService::getCurlError());
        }
        $json = json_decode($result);
        if ($json === false) {
            return $this->setError(json_last_error_msg());
        }
        if ($json['Code'] != 'OK') {
            return $this->setError($json->Message);
        }
        return [
            'data' => [
                'id' => $json['RequestId'],
                'content' => $param['TemplateParam'],
                'template' => $param['TemplateCode'],
            ]
        ];
    }

    /**
     * @param array $params
     * @param string $method
     * @return string
     */
    private function rpc(array $params = [], string $method = 'POST'): string
    {
        if (isset($params['TemplateParam']) && is_array($params['TemplateParam'])) {
            $params['TemplateParam'] = json_encode($params['TemplateParam'], JSON_UNESCAPED_UNICODE);
        }
        $sortedQuery = $this->toString($params);
        $signature = $method . '&%2F&' . $this->percentEncode($sortedQuery);
        $signature = base64_encode(hash_hmac('sha1', $signature, $this->AccessKeySecret . '&', true));
        return 'Signature=' . $signature . '&' . $sortedQuery;
    }

    /**
     * @param $data
     * @return false|string
     */
    private function toString($data)
    {
        ksort($data);
        $string = '';
        foreach ($data as $key => $value) {
            if ($value === '' || $value === null) {
                continue;
            }
            $string .= '&' . $this->percentEncode($key) . '=' . $this->percentEncode($value);
        }
        return substr($string, 1);
    }

    /**
     * @param $string
     * @return array|string|string[]|null
     */
    private function percentEncode($string)
    {
        $result = urlencode($string);
        $result = str_replace(['+', '*'], ['%20', '%2A'], $result);
        return preg_replace('/%7E/', '~', $result);
    }

    public function open()
    {
    }

    public function modify(string $sign = null, string $phone, string $code)
    {
    }

    public function info()
    {
    }

    public function temps(int $page = 0, int $limit = 10, int $type = 1)
    {
    }

    public function apply(string $title, string $content, int $type)
    {
    }

    public function applys(int $tempType, int $page, int $limit)
    {
    }

    public function record($record_id)
    {
    }
}
