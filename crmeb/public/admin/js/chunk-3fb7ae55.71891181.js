(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fb7ae55"],{"644de":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Row",{staticClass:"mb20",attrs:{type:"flex"}},[n("Col",{attrs:{span:"24"}},[n("Button",{staticClass:"mr10",attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("发布版本")])],1)],1),n("Table",{attrs:{columns:t.columns1,data:t.tableList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"platform",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(1===r.platform?"安卓":"苹果"))])]}},{key:"is_force",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(1===r.is_force?"强制":"非强制"))])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,"show-elevator":"","show-total":"","page-size":t.tableFrom.limit},on:{"on-change":t.pageChange}})],1)],1)],1)},u=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("bd86")),i=n("2f62"),a=n("8593");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"index",computed:s(s(s({},Object(i["e"])("media",["isMobile"])),Object(i["e"])("userLevel",["categoryId"])),{},{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"left"}}),data:function(){return{verModal:!1,total:20,tableFrom:{page:1,limit:15},columns1:[{title:"版本号",key:"version",width:80},{title:"平台类型",slot:"platform",align:"center",minWidth:120},{title:"升级信息",key:"info",minWidth:60},{title:"是否强制",slot:"is_force",minWidth:120},{title:"下载地址",key:"url",minWidth:120},{title:"操作",slot:"action",align:"center",minWidth:50}],loading:!1,tableList:[]}},created:function(){this.getList()},methods:{submitFail:function(){this.getList()},record:function(t){this.rows=t,this.modals3=!0,this.isChat=!0,this.getListRecord()},add:function(){var t=this;this.$modalForm(Object(a["P"])()).then((function(e){t.getList()}))},getList:function(){var t=this;this.loading=!0,Object(a["Q"])().then((function(e){t.tableList=e.data.list,t.total=e.data.count,t.loading=!1})).catch((function(e){t.$Message.error(e),t.loading=!1}))},del:function(t,e,n){var r=this,u={title:e,num:n,url:"app/wechat/kefu/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(u).then((function(t){r.$Message.success(t.msg),r.tableList.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(t){t?e.$Message.success("成功!"):e.$Message.error("失败!")}))},handleReset:function(t){this.$refs[t].resetFields()},pageChange:function(){}}},f=d,l=n("2877"),m=Object(l["a"])(f,r,u,!1,null,"11c70cc4",null);e["default"]=m.exports},8593:function(t,e,n){"use strict";n.d(e,"j",(function(){return u})),n.d(e,"h",(function(){return o})),n.d(e,"i",(function(){return i})),n.d(e,"N",(function(){return a})),n.d(e,"n",(function(){return c})),n.d(e,"l",(function(){return s})),n.d(e,"m",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"C",(function(){return l})),n.d(e,"u",(function(){return m})),n.d(e,"B",(function(){return h})),n.d(e,"z",(function(){return g})),n.d(e,"w",(function(){return b})),n.d(e,"x",(function(){return p})),n.d(e,"y",(function(){return O})),n.d(e,"A",(function(){return j})),n.d(e,"K",(function(){return y})),n.d(e,"O",(function(){return v})),n.d(e,"o",(function(){return _})),n.d(e,"d",(function(){return w})),n.d(e,"f",(function(){return k})),n.d(e,"c",(function(){return P})),n.d(e,"e",(function(){return T})),n.d(e,"g",(function(){return E})),n.d(e,"r",(function(){return C})),n.d(e,"p",(function(){return L})),n.d(e,"q",(function(){return $})),n.d(e,"E",(function(){return M})),n.d(e,"F",(function(){return G})),n.d(e,"J",(function(){return F})),n.d(e,"I",(function(){return S})),n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return D})),n.d(e,"t",(function(){return W})),n.d(e,"M",(function(){return z})),n.d(e,"v",(function(){return J})),n.d(e,"Q",(function(){return R})),n.d(e,"P",(function(){return U})),n.d(e,"D",(function(){return B})),n.d(e,"G",(function(){return I})),n.d(e,"H",(function(){return Q})),n.d(e,"s",(function(){return q})),n.d(e,"L",(function(){return A}));var r=n("6b6c");function u(t){return Object(r["a"])({url:"setting/config_class",method:"get",params:t})}function o(t){return Object(r["a"])({url:"setting/config_class/create",method:"get"})}function i(t){return Object(r["a"])({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function a(t){return Object(r["a"])({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function c(t){return Object(r["a"])({url:"setting/config",method:"get",params:t})}function s(t){return Object(r["a"])({url:"setting/config/create",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function f(t,e){return Object(r["a"])({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function l(t){return Object(r["a"])({url:"setting/group",method:"get",params:t})}function m(t){return Object(r["a"])({url:t.url,method:t.method,data:t.datas})}function h(t){return Object(r["a"])({url:"setting/group/".concat(t),method:"get"})}function g(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function b(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function p(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function O(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function j(t){return Object(r["a"])({url:t,method:"PUT"})}function y(t){return Object(r["a"])({url:"system/log/search_admin",method:"GET"})}function v(t){return Object(r["a"])({url:"system/log",method:"GET",params:t})}function _(){return Object(r["a"])({url:"system/file",method:"GET"})}function w(){return Object(r["a"])({url:"system/backup",method:"GET"})}function k(t){return Object(r["a"])({url:"system/backup/read",method:"GET",params:t})}function P(t){return Object(r["a"])({url:"system/backup/backup",method:"put",data:t})}function T(t){return Object(r["a"])({url:"system/backup/optimize",method:"put",data:t})}function E(t){return Object(r["a"])({url:"system/backup/repair",method:"put",data:t})}function C(t){return Object(r["a"])({url:"system/backup/file_list",method:"GET"})}function L(t){return Object(r["a"])({url:"backup/download",method:"get",params:t})}function $(t){return Object(r["a"])({url:"system/backup/import",method:"POST",data:t})}function M(t){return Object(r["a"])({url:"system/file/opendir",method:"GET",params:t})}function G(t){return Object(r["a"])({url:"system/file/openfile?filepath=".concat(t),method:"GET"})}function F(t){return Object(r["a"])({url:"system/file/savefile",method:"post",data:t})}function S(t){return Object(r["a"])({url:"system/replace_site_url",method:"post",data:t})}function x(){return Object(r["a"])({url:"auth",method:"get"})}function D(t){return Object(r["a"])({url:"auth_apply",method:"post",data:t})}function W(){return Object(r["a"])({url:"setting/get_kf_adv",method:"get"})}function z(t){return Object(r["a"])({url:"setting/set_kf_adv",method:"post",data:t})}function J(){return Object(r["a"])({url:"setting/group_all",method:"get"})}function R(t){return Object(r["a"])({url:"system/version_list",method:"get",params:t})}function U(){return Object(r["a"])({url:"system/version_crate",method:"get"})}function B(t){return Object(r["a"])({url:"setting/group_data/save_all",method:"POST",data:t})}function I(t){return Object(r["a"])({url:"setting/config/get_system/".concat(t),method:"get"})}function Q(t){return Object(r["a"])({url:"setting/config/save_basics",method:"POST",data:t})}function q(){return Object(r["a"])({url:"setting/get_user_agreement",method:"get"})}function A(t){return Object(r["a"])({url:"setting/set_user_agreement",method:"post",data:t})}}}]);