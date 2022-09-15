<?php

namespace app\adminapi\controller\v1\setting;

use app\adminapi\controller\AuthController;
use app\services\system\lang\LangCodeServices;
use think\facade\App;

class LangCode extends AuthController
{
    /**
     * @param App $app
     * @param LangCodeServices $services
     */
    public function __construct(App $app, LangCodeServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * 获取语言列表
     * @return mixed
     * @throws \ReflectionException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function langCodeList()
    {
        $where = $this->request->getMore([
            ['is_admin', 0],
            ['type_id', 0],
            ['code', ''],
            ['remarks', '']
        ]);
        return app('json')->success($this->services->langCodeList($where));
    }

    /**
     * 获取语言详情
     * @return mixed
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function langCodeInfo()
    {
        [$code] = $this->request->getMore([
            ['code', ''],
        ], true);
        return app('json')->success($this->services->langCodeInfo($code));
    }

    /**
     * 新增编辑语言
     * @return mixed
     * @throws \Exception
     */
    public function langCodeSave()
    {
        $data = $this->request->postMore([
            ['is_admin', 0],
            ['code', ''],
            ['remarks', ''],
            ['list', []]
        ]);
        $this->services->langCodeSave($data);
        return app('json')->success(100000);
    }

    /**
     * 删除语言
     * @param $id
     * @return mixed
     */
    public function langCodeDel($id)
    {
        $this->services->langCodeDel($id);
        return app('json')->success(100002);
    }
}