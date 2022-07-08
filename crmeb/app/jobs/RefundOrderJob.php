<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2021 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace app\jobs;

use app\services\order\OutStoreOrderRefundServices;
use crmeb\basic\BaseJobs;
use crmeb\traits\QueueTrait;
use think\facade\Log;

/**
 * 售后单消息队列
 * Class RefundOrderJob
 * @package app\jobs
 */
class RefundOrderJob extends BaseJobs
{
    use QueueTrait;

    /**
     * 订单推送
     * @param int $oid
     * @param int $step
     * @return bool
     */
    public function push(int $oid, int $step = 0): bool
    {
        if ($step > 2) {
            Log::error('售后单' . $oid . '推送失败');
            return true;
        }

        try {
            /** @var OutStoreOrderRefundServices $services */
            $services = app()->make(OutStoreOrderRefundServices::class);
            if (!$services->push($oid)) {
                RefundOrderJob::dispatchSece(($step + 1) * 5, 'push', [$oid, $step + 1]);
            }
        } catch (\Exception $e) {
            Log::error('售后单' . $oid . '推送失败,失败原因:' . $e->getMessage());
            RefundOrderJob::dispatchSece(($step + 1) * 5, 'push', [$oid, $step + 1]);
        }
        return true;
    }
}