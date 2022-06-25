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

namespace crmeb\services\pay\storage;


use crmeb\basic\BasePay;
use crmeb\exceptions\PayException;
use crmeb\interfaces\PayInterface;
use crmeb\services\MiniProgramService;
use crmeb\services\WechatService;
use EasyWeChat\Payment\API;
use EasyWeChat\Payment\Order;

/**
 * 微信支付
 * Class WechatPay
 * @package crmeb\services\pay\storage
 */
class WechatPay extends BasePay implements PayInterface
{

    protected function initialize(array $config)
    {
        // TODO: Implement initialize() method.
    }

    /**
     * 创建订单进行支付
     * @param string $orderId
     * @param string $totalFee
     * @param string $attach
     * @param string $body
     * @param string $detail
     * @param array $options
     * @return array|mixed|string
     */
    public function creare(string $orderId, string $totalFee, string $attach, string $body, string $detail, array $options = [])
    {
        $this->authSetPayType();

        switch ($this->payType) {
            case Order::NATIVE:
                return WechatService::nativePay(null, $orderId, $totalFee, $attach, $body, $detail);
                break;
            case Order::APP:
                if (empty($options['openid'])) {
                    throw new PayException('缺少openid');
                }
                return WechatService::appPay($options['openid'], $orderId, $totalFee, $attach, $body, $detail);
                break;
            case Order::JSAPI:
                if (empty($options['openid'])) {
                    throw new PayException('缺少openid');
                }
                if (request()->isRoutine()) {
                    return MiniProgramService::jsPay($options['openid'], $orderId, $totalFee, $attach, $body, $detail);
                }
                return WechatService::jsPay($options['openid'], $orderId, $totalFee, $attach, $body, $detail);
            case 'h5':
                return WechatService::paymentPrepare(null, $orderId, $totalFee, $attach, $body, $detail);
            default:
                throw new PayException('微信支付:支付类型错误');
        }
    }

    /**
     * 支付到零钱
     * @param string $openid
     * @param string $orderId
     * @param string $amount
     * @param array $options
     * @return bool|mixed
     */
    public function merchantPay(string $openid, string $orderId, string $amount, array $options = [])
    {
        return WechatService::merchantPay($openid, $orderId, $amount, $options['desc'] ?? '');
    }

    /**
     * 退款
     * @param string $outTradeNo
     * @param string $totalAmount
     * @param string $refund_id
     * @param array $options
     * @return \EasyWeChat\Support\Collection|mixed|\Psr\Http\Message\ResponseInterface
     */
    public function refund(string $outTradeNo, string $totalAmount, string $refund_id, array $options = [])
    {
        $totalFee = floatval(bcmul($totalAmount, '100', 0));
        $refundPrice = floatval(bcmul($options['refund_price'], '100', 0));
        return WechatService::refund($outTradeNo, $refund_id, $totalFee, $refundPrice);
    }

    /**
     * 查询退款订单
     * @param string $outTradeNo
     * @param string $outRequestNo
     * @param array $other
     * @return \EasyWeChat\Support\Collection|mixed|\Psr\Http\Message\ResponseInterface
     */
    public function queryRefund(string $outTradeNo, string $outRequestNo, array $other = [])
    {
        return WechatService::queryRefund($outTradeNo, $other['type'] ?? API::OUT_TRADE_NO);
    }

    /**
     * 异步回调
     * @return mixed|\Symfony\Component\HttpFoundation\Response
     * @throws \EasyWeChat\Core\Exceptions\FaultException
     */
    public static function handleNotify()
    {
        return WechatService::handleNotify();
    }
}
