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

/**
 * 错误码统一存放类
 * Class ErrorCode
 * @package crmeb\utils
 */
class ErrorCode
{
    /** 保存失败 400 */
    const ERR_ADD_FAILED = 'addFailed';
    /** 保存成功 200 */
    const ADD_SUCCESS = 'addSuccess';
    /** 参数错误或缺少参数 400 */
    const ERR_PARAM_MISS = 'paramMiss';
    /** 删除成功 200 */
    const DEL_SUCCESS = 'delSuccess';
    /** 删除失败 400 */
    const ERR_DEL_FAILED = 'delFailed';
    /** 设置成功 400 */
    const ERR_SET_SUCCESS = 'setSuccess';
    /** 设置失败 400 */
    const ERR_SET_FAILED = 'setFailed';
    /** 显示成功 200 */
    const SHOW_SUCCESS = 'showSuccess';
    /** 隐藏成功 200 */
    const HIDE_SUCCESS = 'hideSuccess';
    /** 显示失败 400 */
    const SHOW_FAILED = 'showFailed';
    /** 隐藏失败 400 */
    const HIDE_FAILED = 'hideFailed';
    /** 修改成功 200 */
    const MODIFY_SUCCESS = 'modifySuccess';
    /** 修改失败 400 */
    const MODIFY_FAILED = 'modifyFailed';
    /** 取消成功 200 */
    const CANCEL_SUCCESS = 'cancelSuccess';
    /** 取消失败 400 */
    const CANCEL_FAILED = 'cancelFailed';
    /** 操作失败 400 */
    const OPERATION_FAILED = 'operationFailed';
    /** 操作成功 200 */
    const OPERATION_SUCCESS = 'operationSuccess';
    /** 数据不存在 400 */
    const ERR_DATA_NOT_EXIST = 'dataNotExist';
    /** 二维码生成失败 400 */
    const ERR_QR_CODE_GEN_FAILED = 'QRCodeGenFailed';
    /** 海报生成失败 400 */
    const ERR_POSTER_GEN_FAILED = 'posterGenFailed';
    /** 打印成功 200 */
    const PRINT_SUCCESS = 'printSuccess';
    /** 打印失败 400 */
    const PRINT_FAILED = 'printFailed';
    /** 提交成功 200 */
    const SUBMIT_SUCCESS = 'submitSuccess';
    /** 提交失败 400 */
    const SUBMIT_FAILED = 'submitFailed';
    /** 登录成功 200 */
    const LOGIN_SUCCESS = 'loginSuccess';
    /** 登录失败 400 */
    const LOGIN_FAILED = 'loginFailed';
    /** 非法操作 400 */
    const ILLEGAL_OPERATION = 'illegalOperation';
    /** 添加附件失败 400 */
    const ERR_ADD_ATTACHMENT_FAILED = 'addAttachmentFailed';
    /** 商品不存在 411018 */
    const PRODUCT_NOT_EXIST = [411018, 'productNotExist'];
    /** 订单不存在 412000 */
    const ORDER_NOT_EXIST = [412000, 'orderNotExist'];


}