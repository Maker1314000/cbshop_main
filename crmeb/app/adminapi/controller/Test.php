<?php
/**
 * @author: liaofei<136327134@qq.com>
 * @day: 2020/9/12
 */

namespace app\adminapi\controller;

use app\services\product\product\StoreCategoryServices;
use crmeb\exceptions\ApiException;
use crmeb\services\UploadService;

class Test
{
    public function index()
    {
        throw new ApiException(412041,['cart_num'=>1,'unit_name'=>'wam']);
    }
}

