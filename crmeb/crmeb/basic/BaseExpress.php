<?php
/**
 * author:  songtao<375177628@qq.com>
 * Date: 2020/09/21
 */

namespace crmeb\basic;

use crmeb\services\AccessTokenServeService;
use crmeb\services\HttpService;
use think\exception\ValidateException;
use think\facade\Config;
use crmeb\services\CacheService;

/**
 * Class BaseExpress
 * @package crmeb\basic
 */
abstract class BaseExpress extends BaseStorage
{

    /**
     * access_token
     * @var null
     */
    protected $accessToken = NULL;


     public function __construct(string $name, AccessTokenServeService $accessTokenServeService, string $configFile)
    {
        $this->accessToken = $accessTokenServeService;
    }

    /**
     * ��ʼ��
     * @param array $config
     * @return mixed|void
     */
    protected function initialize(array $config = [])
    {
//        parent::initialize($config);
    }


    /**
     * ��ͨ����
     * @return mixed
     */
    abstract public function open();

    /**����׷��
     * @return mixed
     */
    abstract public function query($com, $num);

    /**�����浥
     * @return mixed
     */
    abstract public function dump($data);

    /**��ݹ�˾
     * @return mixed
     */
    //abstract public function express($type, $page, $limit);

    /**�浥ģ��
     * @return mixed
     */
    abstract public function temp($com, $page, $limit);
}
