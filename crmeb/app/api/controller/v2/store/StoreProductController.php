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

namespace app\api\controller\v2\store;

use app\Request;
use app\services\product\product\StoreProductServices;
use app\services\product\sku\StoreProductAttrServices;
use crmeb\utils\ErrorCode;

class StoreProductController
{
    protected $services;

    public function __construct(StoreProductServices $services)
    {
        $this->services = $services;
    }

    /**
     * 获取商品属性
     * @param Request $request
     * @return mixed
     */
    public function getProductAttr(Request $request)
    {
        list($id, $type) = $request->getMore([
            ['id', 0],
            ['type', 0]
        ], true);
        if (!$id) return app('json')->fail(ErrorCode::ERR_PARAM_MISS);
        /** @var StoreProductAttrServices $storeProductAttrServices */
        $storeProductAttrServices = app()->make(StoreProductAttrServices::class);
        list($data['productAttr'], $data['productValue']) = $storeProductAttrServices->getProductAttrDetail($id, $request->uid(), $type);
        $storeInfo = $this->services->getOne(['id' => $id]);
        $data['storeInfo'] = $storeInfo ? $storeInfo->toArray() : [];
        return app('json')->success($data);
    }
}
