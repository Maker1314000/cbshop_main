(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5370b01c"],{"277f":function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"a",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"d",(function(){return l}));var s=e("6b6c");function o(t){return Object(s["a"])({url:"setting/notification/index?type=".concat(t),method:"get"})}function i(t,a){return Object(s["a"])({url:"setting/notification/info?id=".concat(t,"&type=").concat(a),method:"get"})}function r(t){return Object(s["a"])({url:"setting/notification/save",method:"post",data:t})}function l(t,a,e){return Object(s["a"])({url:"setting/notification/set_status/".concat(t,"/").concat(a,"/").concat(e),method:"put"})}},"6f8d":function(t,a,e){"use strict";var s=e("ab30"),o=e.n(s);o.a},"9d9f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"edit"},[e("div",{staticClass:"i-layout-page-header"},[e("router-link",{attrs:{to:{path:"/admin/setting/notification/index"}}},[e("Button",{staticClass:"mr20",attrs:{icon:"ios-arrow-back",size:"small"}},[t._v("返回")])],1),e("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])],1),e("div",{staticClass:"tabs"},[e("Row",{attrs:{gutter:32}},[e("Col",{staticClass:"demo-tabs-style1",staticStyle:{padding:"16px"},attrs:{span:"32"}},[e("Tabs",{on:{"on-click":t.changeTabs}},t._l(t.tabsList,(function(a,s){return e("TabPane",{key:s,attrs:{name:a.slot,label:a.title}},[e("Form",{ref:"formData",refInFor:!0,staticClass:"form-sty",attrs:{model:t.formData,rules:t.ruleValidate,"label-width":80}},["is_system"!==a.slot||t.loading?t._e():e("div",[e("FormItem",{attrs:{label:"通知标题"}},[e("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入通知标题"},model:{value:t.formData.system_title,callback:function(a){t.$set(t.formData,"system_title",a)},expression:"formData.system_title"}})],1),e("FormItem",{attrs:{label:"通知内容"}},[e("div",{staticClass:"content"},[e("Input",{staticStyle:{width:"500px"},attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入通知内容"},model:{value:t.formData.system_text,callback:function(a){t.$set(t.formData,"system_text",a)},expression:"formData.system_text"}}),e("div",{staticClass:"trip"},[e("div",[t._v("\n                        请输入模板消息详细内容对应的变量。关键字个数需与已添加的模板一致。\n                        可以使用如下变量：\n                      ")]),t._l(t.formData.variable.split(","),(function(a,s){return e("div",{key:s},[t._v("\n                        "+t._s(a)+"\n                      ")])}))],2)],1)]),e("FormItem",{attrs:{label:"状态",prop:"is_system"}},[e("RadioGroup",{model:{value:t.formData.is_system,callback:function(a){t.$set(t.formData,"is_system",a)},expression:"formData.is_system"}},[e("Radio",{attrs:{label:1}},[t._v("开启")]),e("Radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1),"is_sms"!==a.slot||t.loading?"is_wechat"!==a.slot||t.loading?"is_routine"!==a.slot||t.loading?"is_ent_wechat"!==a.slot||t.loading?t._e():e("div",[e("FormItem",{attrs:{label:"通知内容"}},[e("div",{staticClass:"content"},[e("Input",{staticStyle:{width:"500px"},attrs:{type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入通知内容"},model:{value:t.formData.ent_wechat_text,callback:function(a){t.$set(t.formData,"ent_wechat_text",a)},expression:"formData.ent_wechat_text"}}),e("div",{staticClass:"trip"},[e("div",[t._v("\n                        请输入模板消息详细内容对应的变量。关键字个数需与已添加的模板一致。\n                        可以使用如下变量：\n                      ")]),t._l(t.formData.variable.split(","),(function(a,s){return e("div",{key:s},[t._v("\n                        "+t._s(a)+"\n                      ")])}))],2)],1)]),e("FormItem",{attrs:{label:"机器人链接"}},[e("div",{staticClass:"content"},[e("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入机器人链接"},model:{value:t.formData.url,callback:function(a){t.$set(t.formData,"url",a)},expression:"formData.url"}}),e("div",{staticClass:"trip"},[t._v("企业微信群机器人链接")])],1)]),e("FormItem",{attrs:{label:"状态",prop:"is_ent_wechat"}},[e("RadioGroup",{model:{value:t.formData.is_ent_wechat,callback:function(a){t.$set(t.formData,"is_ent_wechat",a)},expression:"formData.is_ent_wechat"}},[e("Radio",{attrs:{label:1}},[t._v("开启")]),e("Radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1):e("div",[e("FormItem",{attrs:{label:"ID"}},[e("Input",{staticStyle:{width:"500px"},attrs:{disabled:"",placeholder:"请输入通模板编号"},model:{value:t.formData.templage_message_id,callback:function(a){t.$set(t.formData,"templage_message_id",a)},expression:"formData.templage_message_id"}})],1),e("FormItem",{attrs:{label:"模板编号"}},[e("Input",{staticStyle:{width:"500px"},attrs:{disabled:"",placeholder:"请输入通模板编号"},model:{value:t.formData.tempkey,callback:function(a){t.$set(t.formData,"tempkey",a)},expression:"formData.tempkey"}})],1),e("FormItem",{attrs:{label:"模板"}},[e("Input",{staticStyle:{width:"500px"},attrs:{disabled:"",type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入模板"},model:{value:t.formData.content,callback:function(a){t.$set(t.formData,"content",a)},expression:"formData.content"}})],1),e("FormItem",{attrs:{label:"模板ID"}},[e("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入模板ID"},model:{value:t.formData.tempid,callback:function(a){t.$set(t.formData,"tempid",a)},expression:"formData.tempid"}})],1),e("FormItem",{attrs:{label:"状态",prop:"is_routine"}},[e("RadioGroup",{model:{value:t.formData.is_routine,callback:function(a){t.$set(t.formData,"is_routine",a)},expression:"formData.is_routine"}},[e("Radio",{attrs:{label:1}},[t._v("开启")]),e("Radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1):e("div",[e("FormItem",{attrs:{label:"ID"}},[e("Input",{staticStyle:{width:"500px"},attrs:{disabled:"",placeholder:"请输入通模板编号"},model:{value:t.formData.templage_message_id,callback:function(a){t.$set(t.formData,"templage_message_id",a)},expression:"formData.templage_message_id"}})],1),e("FormItem",{attrs:{label:"模板编号"}},[e("Input",{staticStyle:{width:"500px"},attrs:{disabled:"",placeholder:"请输入通模板编号"},model:{value:t.formData.tempkey,callback:function(a){t.$set(t.formData,"tempkey",a)},expression:"formData.tempkey"}})],1),e("FormItem",{attrs:{label:"模板"}},[e("Input",{staticStyle:{width:"500px"},attrs:{disabled:"",type:"textarea",autosize:{minRows:5,maxRows:8},placeholder:"请输入模板"},model:{value:t.formData.content,callback:function(a){t.$set(t.formData,"content",a)},expression:"formData.content"}})],1),e("FormItem",{attrs:{label:"模板ID"}},[e("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"请输入模板ID"},model:{value:t.formData.tempid,callback:function(a){t.$set(t.formData,"tempid",a)},expression:"formData.tempid"}})],1),e("FormItem",{attrs:{label:"状态",prop:"is_wechat"}},[e("RadioGroup",{model:{value:t.formData.is_wechat,callback:function(a){t.$set(t.formData,"is_wechat",a)},expression:"formData.is_wechat"}},[e("Radio",{attrs:{label:1}},[t._v("开启")]),e("Radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1):e("div",[e("FormItem",{attrs:{label:"短信模版ID"}},[e("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"短信模版ID"},model:{value:t.formData.sms_id,callback:function(a){t.$set(t.formData,"sms_id",a)},expression:"formData.sms_id"}})],1),e("FormItem",{attrs:{label:"通知内容"}},[e("div",{staticClass:"content"},[e("Input",{staticStyle:{width:"500px"},attrs:{type:"textarea",disabled:"",autosize:{minRows:5,maxRows:8},placeholder:"请输入通知内容"},model:{value:t.formData.content,callback:function(a){t.$set(t.formData,"content",a)},expression:"formData.content"}})],1)]),e("FormItem",{attrs:{label:"状态",prop:"is_sms"}},[e("RadioGroup",{model:{value:t.formData.is_sms,callback:function(a){t.$set(t.formData,"is_sms",a)},expression:"formData.is_sms"}},[e("Radio",{attrs:{label:1}},[t._v("开启")]),e("Radio",{attrs:{label:2}},[t._v("关闭")])],1)],1)],1),e("FormItem",[e("Button",{attrs:{type:"primary"},on:{click:function(a){return t.handleSubmit("formData")}}},[t._v("提交")])],1)],1)],1)})),1)],1)],1)],1)])},o=[],i=e("277f"),r={data:function(){return{tabs:[{title:"系统通知",slot:"is_system"},{title:"短信通知",slot:"is_sms"},{title:"微信模板消息",slot:"is_wechat"},{title:"微信小程序提醒",slot:"is_routine"},{title:"企业微信",slot:"is_ent_wechat"}],tabsList:[],formData:{},id:0,loading:!0,ruleValidate:{name:[{required:!0,message:"请输入通知场景",trigger:"blur"}],title:[{required:!0,message:"请输入通知场景",trigger:"blur"}],content:[{required:!0,message:"请输入通知内容",trigger:"blur"}]}}},created:function(){this.id=this.$route.query.id,this.changeTabs("is_system")},methods:{changeTabs:function(t){this.getData(this.id,t)},getData:function(t,a){var e=this;this.loading=!0,this.formData={},Object(i["a"])(t,a).then((function(s){e.tabsList.length||e.tabs.map((function(t){s.data[t.slot]&&e.tabsList.push(t)})),e.formData=s.data,e.formData.type=a,e.formData.id=t,e.loading=!1})).catch((function(t){e.$Message.error(t.msg)}))},handleSubmit:function(t){var a=this;Object(i["c"])(this.formData).then((function(t){a.$Message.success("设置成功")})).catch((function(t){a.$Message.error(t)}))},handleReset:function(t){this.$emit("close")}}},l=r,n=(e("6f8d"),e("2877")),c=Object(n["a"])(l,s,o,!1,null,"3045b778",null);a["default"]=c.exports},ab30:function(t,a,e){}}]);