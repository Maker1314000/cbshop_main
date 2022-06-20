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
namespace app\api\validate\user;

use think\Validate;

/**
 * 用户地址验证类
 * Class AddressValidate
 * @package app\http\validates\user
 */
class AddressValidate extends Validate
{
    //移动
    protected $regex = ['phone' => '/^1[3456789]\d{9}|([0-9]{3,4}-)?[0-9]{7,8}$/'];

    protected $rule = [
        'real_name' => 'require|max:25',
        'phone' => 'require|regex:phone',
        'province' => 'require',
        'city' => 'require',
        'district' => 'require',
        'detail' => 'require',
    ];

    protected $message = [
        'real_name.require' => 411655,
        'real_name.max' => 411656,
        'phone.require' => 411657,
        'phone.regex' => 411658,
        'province.require' => 411659,
        'city.require' => 411660,
        'district.require' => 411661,
        'detail.require' => 411662,
    ];
}
