(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5ef03c2f"],{"24be":function(t,e,n){"use strict";var a=n("bd32");n.n(a).a},"277f":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return u})),n("99af");var a=n("6b6c");function r(t){return Object(a.a)({url:"setting/notification/index?type=".concat(t),method:"get"})}function c(t,e){return Object(a.a)({url:"setting/notification/info?id=".concat(t,"&type=").concat(e),method:"get"})}function i(t){return Object(a.a)({url:"setting/notification/save",method:"post",data:t})}function u(t,e,n){return Object(a.a)({url:"setting/notification/set_status/".concat(t,"/").concat(e,"/").concat(n),method:"put"})}},aa0a:function(t,e,n){"use strict";n.r(e),n("d81d");var a=n("277f"),r=n("b562"),c={data:function(){return{modalTitle:"",notificationModal:!1,headerList:[{label:"通知会员",value:"1"},{label:"通知平台",value:"2"}],columns:[{title:"ID",key:"id",align:"center",width:60},{title:"通知类型",slot:"name",align:"center",width:200},{title:"通知场景说明",slot:"title",align:"center",minWidth:200},{title:"站内信",slot:"is_system",align:"center",minWidth:100},{title:"公众号模板",slot:"is_wechat",align:"center",minWidth:100},{title:"小程序订阅",slot:"is_routine",align:"center",minWidth:100},{title:"发送短信",slot:"is_sms",align:"center",minWidth:100},{title:"设置",slot:"setting",width:150,align:"center"}],columns2:[{title:"ID",key:"id",align:"center",width:60},{title:"通知类型",slot:"name",align:"center",width:200},{title:"通知场景说明",slot:"title",align:"center",minWidth:200},{title:"站内信",slot:"is_system",align:"center",minWidth:100},{title:"公众号模板",slot:"is_wechat",align:"center",minWidth:100},{title:"发送短信",slot:"is_sms",align:"center",minWidth:100},{title:"企业微信",slot:"is_ent_wechat",align:"center",minWidth:100},{title:"设置",slot:"setting",width:150,align:"center"}],levelLists:[],currentTab:"1",loading:!1,formData:{}}},created:function(){this.changeTab(this.currentTab)},methods:{changeSwitch:function(t,e){var n=this;Object(a.d)(e,t[e],t.id).then((function(t){n.$Message.success(t.msg)})).catch((function(t){n.$Message.error(t.msg)}))},changeTab:function(t){var e=this;Object(a.b)(t).then((function(t){e.levelLists=t.data}))},routineTemplate:function(){var t=this;Object(r.j)().then((function(e){t.$Message.success(e.msg),t.changeTab(t.currentTab)})).catch((function(e){t.$Message.error(e.msg)}))},wechatTemplate:function(){var t=this;Object(r.t)().then((function(e){t.$Message.success(e.msg),t.changeTab(t.currentTab)})).catch((function(e){t.$Message.error(e.msg)}))},changeStatus:function(){},notice:function(){},setting:function(t,e){this.$router.push({path:"/admin/setting/notification/notificationEdit?id="+e.id})},getData:function(t,e,n){var r=this;this.formData={},Object(a.a)(e.id,n).then((function(e){t.map((function(t,n){r.formData[t]=e.data[t]})),r.formData.type=n,r.notificationModal=!0}))}}};n("24be"),n=n("2877"),n=Object(n.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message"},[n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("div",{staticClass:"mb20"},[n("Tabs",{on:{"on-click":t.changeTab},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.headerList,(function(t,e){return n("TabPane",{key:e,attrs:{label:t.label,name:t.value.toString()}})})),1)],1),1==t.currentTab?n("Row",{staticClass:"mb20",attrs:{type:"flex"}},[n("Col",t._b({},"Col",t.grid,!1),[n("Button",{directives:[{name:"auth",rawName:"v-auth",value:["app-wechat-template-sync"],expression:"['app-wechat-template-sync']"}],staticStyle:{"margin-left":"20px"},attrs:{icon:"md-list",type:"success"},on:{click:t.routineTemplate}},[t._v("同步小程序订阅消息")]),n("Button",{directives:[{name:"auth",rawName:"v-auth",value:["app-wechat-template-sync"],expression:"['app-wechat-template-sync']"}],staticStyle:{"margin-left":"20px"},attrs:{icon:"md-list",type:"success"},on:{click:t.wechatTemplate}},[t._v("同步微信模版消息")])],1)],1):t._e(),1==t.currentTab?n("Alert",[n("template",{slot:"desc"},[t._v("\n        登录微信公众号后台，选择模版消息，将模版消息的所在行业修改副行业为《其他/其他》"),n("br"),t._v("登录微信小程序后台，基本设置，服务类目增加《生活服务\n        > 百货/超市/便利店》\n      ")])],2):t._e(),n("Table",{ref:"table",staticClass:"mt25",attrs:{columns:1==t.currentTab?t.columns:t.columns2,data:t.levelLists,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"name",fn:function(e){var a=e.row;return e.index,[n("span",{staticClass:"table"},[t._v("\n          "+t._s(a.name)+"\n        ")])]}},{key:"title",fn:function(e){var a=e.row;return e.index,[n("span",{staticClass:"table"},[t._v(t._s(a.title))])]}},t._l(["is_system","is_wechat","is_routine","is_sms","is_ent_wechat"],(function(e){return{key:e,fn:function(a){var r=a.row;return["is_ent_wechat"===e&&1==t.currentTab?n("div",{key:t.index},[t._v("--")]):t._e(),0<r[e]&&1!==t.currentTab?n("i-switch",{attrs:{value:r[e],"true-value":1,"false-value":2,size:"large"},on:{"on-change":function(n){return t.changeSwitch(r,e)}},model:{value:r[e],callback:function(n){t.$set(r,e,n)},expression:"row[item]"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])]):t._e()]}}})),{key:"setting",fn:function(e){var a=e.row;return e.index,[n("span",{staticClass:"setting btn",on:{click:function(e){return t.setting(t.item,a)}}},[t._v("设置")])]}}],null,!0)})],1)],1)}),[],!1,null,"0299bfaf",null);e.default=n.exports},b562:function(t,e,n){"use strict";n.d(e,"j",(function(){return r})),n.d(e,"t",(function(){return c})),n.d(e,"p",(function(){return i})),n.d(e,"a",(function(){return u})),n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"q",(function(){return m})),n.d(e,"s",(function(){return p})),n.d(e,"r",(function(){return b})),n.d(e,"x",(function(){return g})),n.d(e,"k",(function(){return w})),n.d(e,"c",(function(){return v})),n.d(e,"w",(function(){return _})),n.d(e,"u",(function(){return T})),n.d(e,"v",(function(){return j})),n.d(e,"o",(function(){return O})),n.d(e,"m",(function(){return y})),n.d(e,"n",(function(){return k})),n.d(e,"l",(function(){return E})),n.d(e,"b",(function(){return x})),n("99af");var a=n("6b6c");function r(){return Object(a.a)({url:"app/routine/syncSubscribe",method:"GET"})}function c(){return Object(a.a)({url:"app/wechat/syncSubscribe",method:"GET"})}function i(t){return Object(a.a)({url:"app/wechat/menu",method:"get"})}function u(t){return Object(a.a)({url:"app/wechat/menu",method:"post",data:t})}function o(t){return Object(a.a)({url:t.url,method:"post",data:t.key})}function s(t){return Object(a.a)({url:"app/routine/download",method:"post",data:t})}function l(){return Object(a.a)({url:"app/routine/info",method:"get"})}function d(t){return Object(a.a)({url:"app/wechat/keyword",method:"get",params:t})}function f(t){return Object(a.a)({url:"app/wechat/keyword/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function h(t,e){return Object(a.a)({url:t,method:"get",params:e.key})}function m(t){return Object(a.a)({url:"/app/wechat/news",method:"POST",data:t})}function p(t){return Object(a.a)({url:"app/wechat/news",method:"GET",params:t})}function b(t){return Object(a.a)({url:"app/wechat/news/".concat(t),method:"GET"})}function g(t){return Object(a.a)({url:"app/wechat/user",method:"GET",params:t})}function w(){return Object(a.a)({url:"app/wechat/user/tag_group",method:"GET"})}function v(t){return Object(a.a)({url:t,method:"GET"})}function _(){return Object(a.a)({url:"app/wechat/tag",method:"GET"})}function T(){return Object(a.a)({url:"app/wechat/tag/create",method:"GET"})}function j(t){return Object(a.a)({url:"app/wechat/tag/".concat(t,"/edit"),method:"GET"})}function O(){return Object(a.a)({url:"app/wechat/group",method:"GET"})}function y(){return Object(a.a)({url:"app/wechat/group/create",method:"GET"})}function k(t){return Object(a.a)({url:"app/wechat/group/".concat(t,"/edit"),method:"GET"})}function E(t){return Object(a.a)({url:"app/wechat/action",method:"GET",params:t})}function x(t){return Object(a.a)({url:"app/wechat/code_reply/".concat(t),method:"GET"})}},bd32:function(t,e,n){}}]);