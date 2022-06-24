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
    100000 => 'Saved succeeded',
    100001 => 'Modification successful',
    100002 => 'Deletion succeeded',
    100003 => 'Display successful',
    100004 => 'Hidden successfully',
    100005 => 'operation failed',
    100006 => 'Save failed',
    100007 => 'Modification failed',
    100008 => 'Delete failed',
    100009 => 'Picture uploaded successfully',
    100010 => 'Operation successful',
    100011 => 'No data',
    100012 => 'Update successful',
    100013 => 'Update failed',
    100014 => 'Set successfully',
    100015 => 'Setting failed',
    100016 => 'Get failed',
    100017 => 'Submitted successfully',
    100018 => 'Submit failed',
    100019 => 'Cancellation succeeded',
    100020 => 'Cancel failed',
    100021 => 'Successfully added',
    100022 => 'Add failed',
    100023 => 'Failed to save token',
    100024 => 'Remarks successful',
    100025 => 'Remarks failed',
    100026 => 'Data does not exist',
    100027 => 'Successful application',
    100028 => 'Application failed',
    100029 => 'No such method',
    100030 => 'Sent successfully',
    100031 => 'fail in send',
    100032 => 'Upload successful',
    100033 => 'Upload failed',
    100034 => 'Move successful',
    100035 => 'Move failed',
    100036 => 'Refund successful',
    100037 => 'Refund failed',
    100038 => 'Synchronization succeeded',
    100039 => 'Synchronization failed',
    100040 => 'recovery was successful',
    100041 => 'restore failed',
    100042 => 'Exit successful',
    100043 => 'Exit failed',
    100044 => 'Successfully opened',
    100045 => 'Failed to open',
    100046 => 'Data cleared successfully',
    100047 => 'Optimization succeeded',
    100048 => 'Optimization failed',
    100049 => 'Repair successful',
    100050 => 'Repair failed',
    100051 => 'Backup successful',
    100052 => 'Backup failed',
    100100 => 'Parameter error',
    100101 => 'Illegal operation',
    100102 => 'Data acquisition failed',
    100103 => 'Site upgrade in progress, please visit later',

    // 处理特殊状态码
    110000 => 'You do not have access right for the time being',
    110001 => 'The interface is not authorized and you cannot access it',
    //用户登录特殊
    110002 => 'Please login',
    110003 => 'Login has expired, please login again',
    110004 => 'Login status error, please login again',
    //客服登录特殊
    110005 => 'Please login',
    110006 => 'Login has expired, please login again',
    110007 => 'Login status error, please login again',

    //微信相关错误
    45008 => 'Text message exceeds limit',
    45007 => 'Voice playback time exceeds the limit',
    45006 => 'Picture link field exceeds limit',
    45005 => 'Link field exceeds limit',
    45004 => 'Description field exceeds limit',
    45003 => 'Title field exceeds limit',
    45002 => 'Message content exceeds limit',
    45001 => 'Multimedia file size exceeds limit',
    44004 => 'Text message content is empty',
    44003 => 'Text message content is empty',
    44002 => 'Post packet is empty',
    44001 => 'Multimedia file is empty',
    43019 => 'The recipient needs to be removed from the blacklist',
    43005 => 'Need friends',
    43004 => 'Need recipient is attention',
    43003 => 'HTTPS request required',
    43002 => 'Post request required',
    43001 => 'Get request required',
    42007 => 'The user modifies the wechat password. The accesstoken and refreshtoken are invalid and need to be re authorized',
    42003 => 'oauth_ Code timeout',
    42002 => 'refresh_token timeout',
    42001 => 'access_ Token timeout, please check access_ For the validity period of the token, please refer to basic support - get access_ In token, access_ Detailed mechanism description of token',
    41009 => 'Missing openid',
    41008 => 'Missing oauth code',
    41007 => 'Missing submenu data',
    41006 => 'Missing media_ ID parameter',
    41005 => 'Missing multimedia file data',
    41004 => 'Missing secret parameter',
    41003 => 'Missing refresh_token parameter',
    41002 => 'Missing appid parameter',
    41001 => 'Missing access_token parameter',
    40163 => 'oauth_ Code used',
    40155 => 'Do not add links to other wechat home pages',
    40137 => 'Unsupported picture format',
    40132 => 'Wechat number is illegal',
    40125 => 'Invalid appsecret',
    40121 => 'Illegal media_ ID type',
    40120 => 'Sub button error in type',
    40119 => 'button error in type',
    40118 => 'media_id Illegal size',
    40117 => 'Illegal group name',
    40060 => 'When deleting a single article, the specified article_ Illegal idx',
    40051 => 'Illegal group name',
    40050 => 'Illegal grouping ID',
    40048 => 'Invalid URL',
    40039 => 'Illegal URL length',
    40035 => 'Illegal parameter',
    40038 => 'Illegal request format',
    40033 => 'Illegal request character, cannot contain characters in \uxxxx format',
    40032 => 'Illegal openid list length',
    40031 => 'Illegal openid list',
    40030 => 'Illegal refresh_token',
    40029 => 'Invalid OAuth_ code',
    40028 => 'Illegal user-defined menu user',
    40027 => 'Illegal submenu button URL length',
    40026 => 'Illegal submenu button key length',
    40025 => 'Illegal submenu button name length',
    40024 => 'Illegal submenu button type',
    40023 => 'Number of illegal submenu buttons',
    40022 => 'Illegal submenu level',
    40021 => 'Illegal menu version number',
    40020 => 'Illegal button URL length',
    40019 => 'Illegal button key length',
    40018 => 'Illegal button name length',
    40017 => 'Illegal button type',
    40016 => 'Number of illegal buttons',
    40015 => 'Illegal menu type',
    40014 => 'Illegal access_ Token, please compare access carefully_ The validity of the token (for example, whether it is expired), or check whether the interface is being called for the appropriate official account',
    40013 => 'Illegal appid, please check the correctness of appid, avoid abnormal characters, and pay attention to case',
    40012 => 'Illegal thumbnail file size',
    40011 => 'Illegal video file size',
    40010 => 'Illegal voice file size',
    40009 => 'Illegal picture file size',
    40008 => 'Illegal message type',
    40007 => 'Illegal media file ID',
    40006 => 'Illegal file size',
    40005 => 'Illegal file type',
    40004 => 'Illegal media file type',
    40003 => 'Illegal openid. Please confirm whether openid (the user) has paid attention to wechat or whether it is the openid of other wechat',
    40002 => 'Illegal voucher type',
    40001 => 'Get access_ Appsecret error in token, or access_ The token is invalid. Please carefully compare the correctness of appsecret or check whether the interface is being called for the appropriate wechat',
];
