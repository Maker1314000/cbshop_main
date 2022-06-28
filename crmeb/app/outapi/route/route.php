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
use app\http\middleware\AllowOriginMiddleware;
use app\outapi\middleware\AuthTokenMiddleware;
use think\facade\Config;
use think\facade\Route;
use think\Response;

Route::group(function () {

    //获取token
    Route::post('access_token', 'Login/getToken')->name('getToken');
    //刷新token
    Route::post('refresh_token', 'Login/refreshToken')->name('refreshToken');

    Route::group(function () {
        //商品分类
        Route::get('category', 'StoreCategory/index')->option(['real_name' => '分类列表']);
        Route::get('category/:id', 'StoreCategory/read')->option(['real_name' => '获取分类']);
        Route::post('category', 'StoreCategory/save')->option(['real_name' => '新增分类']);
        Route::put('category/:id', 'StoreCategory/update')->option(['real_name' => '修改分类']);
        Route::delete('category/:id', 'StoreCategory/delete')->option(['real_name' => '删除分类']);
        Route::put('category/set_show/:id/:is_show', 'StoreCategory/set_show')->option(['real_name' => '修改分类状态']);

        //商品
        Route::get('product', 'StoreProduct/index')->option(['real_name' => '商品列表']);
        Route::post('product', 'StoreProduct/save')->option(['real_name' => '新增商品']);
        Route::put('product/:id', 'StoreProduct/update')->option(['real_name' => '修改商品']);
        Route::get('product/:id', 'StoreProduct/read')->option(['real_name' => '获取商品']);
        Route::put('product/set_show/:id/:is_show', 'StoreProduct/set_show')->option(['real_name' => '修改商品状态']);
    })->middleware(AuthTokenMiddleware::class);

})->middleware(AllowOriginMiddleware::class);

Route::miss(function () {
    if (app()->request->isOptions()) {
        $header = Config::get('cookie.header');
        $header['Access-Control-Allow-Origin'] = app()->request->header('origin');
        return Response::create('ok')->code(200)->header($header);
    } else
        return Response::create()->code(404);
});
