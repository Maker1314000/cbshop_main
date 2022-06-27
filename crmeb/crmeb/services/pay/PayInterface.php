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

namespace crmeb\services\pay;

/**
 * Interface PayInterface
 * @package crmeb\services\pay
 */
interface PayInterface
{

    /**
     * 设置支付类型
     * @param string $type
     * @return $this
     */
    public function setPayType(string $type);

    /**
     * 创建支付
     * @param string $orderId
     * @param string $totalFee
     * @param string $attach
     * @param string $body
     * @param string $detail
     * @param string $tradeType
     * @param array $options
     * @return mixed
     */
    public function creare(string $orderId, string $totalFee, string $attach, string $body, string $detail, array $options = []);

    /**
     * 企业支付到零钱
     * @param string $openid
     * @param string $orderId
     * @param string $amount
     * @param array $options
     * @return mixed
     */
    public function merchantPay(string $openid, string $orderId, string $amount, array $options = []);

    /**
     * 退款
     * @param string $outTradeNo
     * @param string $totalAmount
     * @param string $refund_id
     * @param array $options
     * @return mixed
     */
    public function refund(string $outTradeNo, string $totalAmount, string $refund_id, array $options = []);

    /**
     * 查询订单
     * @param string $outTradeNo
     * @param string $outRequestNo
     * @param array $other
     * @return mixed
     */
    public function queryRefund(string $outTradeNo, string $outRequestNo, array $other = []);

    /**
     * 支付回调
     * @return mixed
     */
    public static function handleNotify();

}
