<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2020 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------
return [
    100000 => '保存成功',
    100001 => '修改成功',
    100002 => '删除成功',
    100003 => '显示成功',
    100004 => '隐藏成功',
    100005 => '操作失败',
    100006 => '保存失败',
    100007 => '修改失败',
    100008 => '删除失败',
    100009 => '图片上传成功',
    100010 => '操作成功',
    100011 => '暂无数据',
    100012 => '更新成功',
    100013 => '更新失败',
    100014 => '设置成功',
    100015 => '设置失败',
    100016 => '获取失败',
    100017 => '提交成功',
    100018 => '提交失败',
    100019 => '取消成功',
    100020 => '取消失败',
    100021 => '添加成功',
    100022 => '添加失败',
    100023 => '保存token失败',
    100024 => '备注成功',
    100025 => '备注失败',
    100026 => '数据不存在',
    100027 => '申请成功',
    100028 => '申请失败',
    100029 => '暂无此方法',
    100030 => '发送成功',
    100031 => '发送失败',
    100032 => '上传成功',
    100033 => '上传失败',
    100034 => '移动成功',
    100035 => '移动失败',
    100036 => '退款成功',
    100037 => '退款失败',
    100038 => '同步成功',
    100039 => '同步失败',
    100040 => '恢复成功',
    100041 => '恢复失败',
    100042 => '退出成功',
    100043 => '退出失败',
    100044 => '开通成功',
    100045 => '开通失败',
    100046 => '清除数据成功',
    100047 => '优化成功',
    100048 => '优化失败',
    100049 => '修复成功',
    100050 => '修复失败',
    100051 => '备份成功',
    100052 => '备份失败',
    100100 => '参数错误',
    100101 => '非法操作',
    100102 => '数据获取失败',
    100103 => '站点升级中，请稍候访问',

    // 处理特殊状态码
    110000 => '您暂时没有访问权限',
    110001 => '接口未授权，您无法访问',
    //用户登录特殊
    110002 => '请登录',
    110003 => '登录已过期,请重新登录',
    110004 => '登录状态有误,请重新登录',
    //客服登录特殊
    110005 => '请登录',
    110006 => '登录已过期,请重新登录',
    110007 => '登录状态有误,请重新登录',

    //微信相关错误
    45008 => '图文消息超过限制',
    45007 => '语音播放时间超过限制',
    45006 => '图片链接字段超过限制',
    45005 => '链接字段超过限制',
    45004 => '描述字段超过限制',
    45003 => '标题字段超过限制',
    45002 => '消息内容超过限制',
    45001 => '多媒体文件大小超过限制',
    44004 => '文本消息内容为空',
    44003 => '图文消息内容为空',
    44002 => 'POST 的数据包为空',
    44001 => '多媒体文件为空',
    43019 => '需要将接收者从黑名单中移除',
    43005 => '需要好友关系',
    43004 => '需要接收者关注',
    43003 => '需要 HTTPS 请求',
    43002 => '需要 POST 请求',
    43001 => '需要 GET 请求',
    42007 => '用户修改微信密码， accesstoken 和 refreshtoken 失效，需要重新授权',
    42003 => 'oauth_code 超时',
    42002 => 'refresh_token 超时',
    42001 => 'access_token 超时，请检查 access_token 的有效期，请参考基础支持 - 获取 access_token 中，对 access_token 的详细机制说明',
    41009 => '缺少 openid',
    41008 => '缺少 oauth code',
    41007 => '缺少子菜单数据',
    41006 => '缺少 media_id 参数',
    41005 => '缺少多媒体文件数据',
    41004 => '缺少 secret 参数',
    41003 => '缺少 refresh_token 参数',
    41002 => '缺少 appid 参数',
    41001 => '缺少 access_token 参数',
    40163 => 'oauth_code已使用',
    40155 => '请勿添加其他公众号的主页链接',
    40137 => '不支持的图片格式',
    40132 => '微信号不合法',
    40125 => '无效的appsecret',
    40121 => '不合法的 media_id 类型',
    40120 => '子 button 类型错误',
    40119 => 'button 类型错误',
    40118 => 'media_id 大小不合法',
    40117 => '分组名字不合法',
    40060 => '删除单篇图文时，指定的 article_idx 不合法',
    40051 => '分组名字不合法',
    40050 => '不合法的分组 id',
    40048 => '无效的url',
    40039 => '不合法的 URL 长度',
    40035 => '不合法的参数',
    40038 => '不合法的请求格式',
    40033 => '不合法的请求字符，不能包含 \uxxxx 格式的字符',
    40032 => '不合法的 openid 列表长度',
    40031 => '不合法的 openid 列表',
    40030 => '不合法的 refresh_token',
    40029 => '无效的 oauth_code',
    40028 => '不合法的自定义菜单使用用户',
    40027 => '不合法的子菜单按钮 URL 长度',
    40026 => '不合法的子菜单按钮 KEY 长度',
    40025 => '不合法的子菜单按钮名字长度',
    40024 => '不合法的子菜单按钮类型',
    40023 => '不合法的子菜单按钮个数',
    40022 => '不合法的子菜单级数',
    40021 => '不合法的菜单版本号',
    40020 => '不合法的按钮 URL 长度',
    40019 => '不合法的按钮 KEY 长度',
    40018 => '不合法的按钮名字长度',
    40017 => '不合法的按钮类型',
    40016 => '不合法的按钮个数',
    40015 => '不合法的菜单类型',
    40014 => '不合法的 access_token ，请开发者认真比对 access_token 的有效性（如是否过期），或查看是否正在为恰当的公众号调用接口',
    40013 => '不合法的 AppID ，请开发者检查 AppID 的正确性，避免异常字符，注意大小写',
    40012 => '不合法的缩略图文件大小',
    40011 => '不合法的视频文件大小',
    40010 => '不合法的语音文件大小',
    40009 => '不合法的图片文件大小',
    40008 => '不合法的消息类型',
    40007 => '不合法的媒体文件 id',
    40006 => '不合法的文件大小',
    40005 => '不合法的文件类型',
    40004 => '不合法的媒体文件类型',
    40003 => '不合法的 OpenID ，请开发者确认 OpenID （该用户）是否已关注公众号，或是否是其他公众号的 OpenID',
    40002 => '不合法的凭证类型',
    40001 => '获取 access_token 时 AppSecret 错误，或者 access_token 无效。请开发者认真比对 AppSecret 的正确性，或查看是否正在为恰当的公众号调用接口',
];
