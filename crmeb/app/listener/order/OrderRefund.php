<?php

namespace app\listener\order;

use crmeb\interfaces\ListenerInterface;

/**
 * 订单退款事件
 * Class OrderRefund
 * @package app\listener\order
 */
class OrderRefund implements ListenerInterface
{
    public function handle($event): void
    {
        [$order] = $event;
    }
}
