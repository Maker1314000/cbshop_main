(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54d008cc"],{"04ee":function(t,e,n){"use strict";var r=n("ce34"),a=n.n(r);a.a},"8c03":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"customer"},[n("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":100},nativeOn:{submit:function(t){t.preventDefault()}}},[n("Row",{attrs:{gutter:24,type:"flex"}},[n("Col",{staticClass:"ivu-text-left",attrs:{span:"24"}},[n("FormItem",{attrs:{label:"搜索日期："}},[n("RadioGroup",{staticClass:"mr",attrs:{type:"button"},on:{"on-change":function(e){return t.selectChange(t.formValidate.data)}},model:{value:t.formValidate.data,callback:function(e){t.$set(t.formValidate,"data",e)},expression:"formValidate.data"}},t._l(t.fromList.fromTxt,(function(e,r){return n("Radio",{key:r,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),n("DatePicker",{staticStyle:{width:"200px"},attrs:{editable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{"on-change":t.onchangeTime}})],1)],1),n("Col",{staticClass:"ivu-text-left",attrs:{span:"12"}},[n("FormItem",{attrs:{label:"用户名称："}},[n("Input",{staticStyle:{width:"90%"},attrs:{search:"","enter-button":"",placeholder:"请输入用户名称"},on:{"on-search":t.userSearchs},model:{value:t.formValidate.nickname,callback:function(e){t.$set(t.formValidate,"nickname",e)},expression:"formValidate.nickname"}})],1)],1)],1)],1),n("Table",{ref:"selection",attrs:{loading:t.loading2,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果",columns:t.columns4,data:t.tableList2},scopedSlots:t._u([{key:"headimgurl",fn:function(t){var e=t.row;t.index;return[n("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.headimgurl,expression:"row.headimgurl"}]})])]}},{key:"user_type",fn:function(e){var r=e.row;e.index;return["wechat"===r.user_type?n("span",[t._v("公众号")]):t._e(),"routine"===r.user_type?n("span",[t._v("小程序")]):t._e(),"h5"===r.user_type?n("span",[t._v("H5")]):t._e(),"pc"===r.user_type?n("span",[t._v("PC")]):t._e()]}},{key:"sex",fn:function(e){var r=e.row;e.index;return[n("span",{directives:[{name:"show",rawName:"v-show",value:1===r.sex,expression:"row.sex ===1"}]},[t._v("男")]),n("span",{directives:[{name:"show",rawName:"v-show",value:2===r.sex,expression:"row.sex ===2"}]},[t._v("女")]),n("span",{directives:[{name:"show",rawName:"v-show",value:0===r.sex,expression:"row.sex ===0"}]},[t._v("保密")])]}},{key:"country",fn:function(e){var r=e.row;e.index;return[n("span",[t._v(t._s(r.country+r.province+r.city))])]}},{key:"subscribe",fn:function(e){var r=e.row;e.index;return[n("span",{domProps:{textContent:t._s(1===r.subscribe?"关注":"未关注")}})]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total2,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange2}})],1)],1)},a=[],u=(n("96cf"),n("1da1")),o=n("90e7"),c={name:"index",data:function(){var t=this;return{formValidate:{page:1,limit:15,data:"",nickname:""},tableList2:[],timeVal:[],fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},currentid:0,productRow:{},columns4:[{title:"选择",key:"chose",width:60,align:"center",render:function(e,n){var r=n.row.uid,a=!1;a=t.currentid===r;var u=t;return e("div",[e("Radio",{props:{value:a},on:{"on-change":function(){if(u.currentid=r,t.productRow=n.row,t.productRow.uid)if("image"===t.$route.query.fodder){var e={image:t.productRow.headimgurl,uid:t.productRow.uid};form_create_helper.set("image",e),form_create_helper.close("image")}else t.$emit("imageObject",{image:t.productRow.headimgurl,uid:t.productRow.uid});else t.$Message.warning("请先选择商品")}}})])}},{title:"ID",key:"uid",width:80},{title:"微信用户名称",key:"nickname",minWidth:180},{title:"客服头像",slot:"headimgurl",minWidth:60},{title:"用户类型",slot:"user_type",minWidth:100},{title:"性别",slot:"sex",minWidth:60},{title:"地区",slot:"country",minWidth:120},{title:"是否关注公众号",slot:"subscribe",minWidth:120}],loading2:!1,total2:0}},created:function(){},mounted:function(){this.getListService()},methods:{onchangeTime:function(t){this.timeVal=t,this.formValidate.data=this.timeVal.join("-"),this.getListService()},selectChange:function(t){this.formValidate.data=t,this.timeVal=[],this.getListService()},getListService:function(){var t=this;this.loading2=!0,Object(o["A"])(this.formValidate).then(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.tableList2=r.list,t.total2=r.count,t.tableList2.map((function(t){t._isChecked=!1})),t.loading2=!1;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading2=!1,t.$Message.error(e.msg)}))},pageChange2:function(t){this.formValidate.page=t,this.getListService()},userSearchs:function(){this.formValidate.page=1,this.getListService()}}},i=c,s=(n("04ee"),n("2877")),d=Object(s["a"])(i,r,a,!1,null,"041f6936",null);e["default"]=d.exports},"90e7":function(t,e,n){"use strict";n.d(e,"p",(function(){return a})),n.d(e,"h",(function(){return u})),n.d(e,"mb",(function(){return o})),n.d(e,"lb",(function(){return c})),n.d(e,"g",(function(){return i})),n.d(e,"O",(function(){return s})),n.d(e,"qb",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return l})),n.d(e,"I",(function(){return m})),n.d(e,"N",(function(){return h})),n.d(e,"S",(function(){return p})),n.d(e,"x",(function(){return g})),n.d(e,"tb",(function(){return b})),n.d(e,"Y",(function(){return v})),n.d(e,"X",(function(){return j})),n.d(e,"u",(function(){return O})),n.d(e,"v",(function(){return w})),n.d(e,"i",(function(){return _})),n.d(e,"j",(function(){return y})),n.d(e,"R",(function(){return x})),n.d(e,"Q",(function(){return k})),n.d(e,"P",(function(){return V})),n.d(e,"T",(function(){return T})),n.d(e,"V",(function(){return C})),n.d(e,"H",(function(){return R})),n.d(e,"W",(function(){return L})),n.d(e,"db",(function(){return S})),n.d(e,"C",(function(){return E})),n.d(e,"cb",(function(){return G})),n.d(e,"m",(function(){return P})),n.d(e,"k",(function(){return W})),n.d(e,"l",(function(){return $})),n.d(e,"n",(function(){return F})),n.d(e,"o",(function(){return N})),n.d(e,"Z",(function(){return I})),n.d(e,"ab",(function(){return M})),n.d(e,"bb",(function(){return U})),n.d(e,"L",(function(){return z})),n.d(e,"M",(function(){return D})),n.d(e,"J",(function(){return q})),n.d(e,"K",(function(){return J})),n.d(e,"E",(function(){return A})),n.d(e,"w",(function(){return B})),n.d(e,"A",(function(){return H})),n.d(e,"z",(function(){return K})),n.d(e,"r",(function(){return Q})),n.d(e,"B",(function(){return X})),n.d(e,"t",(function(){return Y})),n.d(e,"y",(function(){return Z})),n.d(e,"s",(function(){return tt})),n.d(e,"q",(function(){return et})),n.d(e,"D",(function(){return nt})),n.d(e,"f",(function(){return rt})),n.d(e,"c",(function(){return at})),n.d(e,"d",(function(){return ut})),n.d(e,"nb",(function(){return ot})),n.d(e,"ob",(function(){return ct})),n.d(e,"pb",(function(){return it})),n.d(e,"U",(function(){return st})),n.d(e,"eb",(function(){return dt})),n.d(e,"F",(function(){return ft})),n.d(e,"gb",(function(){return lt})),n.d(e,"fb",(function(){return mt})),n.d(e,"hb",(function(){return ht})),n.d(e,"ib",(function(){return pt})),n.d(e,"jb",(function(){return gt})),n.d(e,"kb",(function(){return bt})),n.d(e,"rb",(function(){return vt})),n.d(e,"sb",(function(){return jt})),n.d(e,"G",(function(){return Ot})),n.d(e,"e",(function(){return wt}));var r=n("6b6c");function a(t){return Object(r["a"])({url:"setting/config/header_basics",method:"get",params:t})}function u(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function o(t){return Object(r["a"])({url:t.url,method:"get",params:t.data})}function c(){return Object(r["a"])({url:"notify/sms/temp/create",method:"get"})}function i(t){return Object(r["a"])({url:"serve/login",method:"post",data:t})}function s(t){return Object(r["a"])({url:"serve/modify",method:"post",data:t})}function d(t){return Object(r["a"])({url:"serve/update_phone",method:"post",data:t})}function f(t){return Object(r["a"])({url:"serve/captcha",method:"post",data:t})}function l(t){return Object(r["a"])({url:"serve/checkCode",method:"post",data:t})}function m(t){return Object(r["a"])({url:"serve/register",method:"post",data:t})}function h(){return Object(r["a"])({url:"serve/info",method:"get"})}function p(t){return Object(r["a"])({url:"serve/sms/sign",method:"PUT",data:t})}function g(t){return Object(r["a"])({url:"app/wechat/kefu/login/".concat(t),method:"get"})}function b(t){return Object(r["a"])({url:"app/wechat/speechcraft",method:"get",params:t})}function v(t){return Object(r["a"])({url:"app/wechat/speechcraft/".concat(t,"/edit"),method:"get"})}function j(){return Object(r["a"])({url:"app/wechat/speechcraft/create",method:"get"})}function O(t){return Object(r["a"])({url:"app/feedback",method:"get",params:t})}function w(t){return Object(r["a"])({url:"app/feedback/".concat(t,"/edit"),method:"get"})}function _(){return Object(r["a"])({url:"serve/export_all",method:"get"})}function y(t){return Object(r["a"])({url:"serve/export_temp",method:"get",params:t})}function x(t){return Object(r["a"])({url:"serve/record",method:"get",params:t})}function k(t){return Object(r["a"])({url:"serve/open",method:"get",params:t})}function V(t){return Object(r["a"])({url:"serve/opn_express",method:"post",data:t})}function T(t){return Object(r["a"])({url:"serve/sms/open",method:"get",params:t})}function C(t){return Object(r["a"])({url:"serve/meal_list",method:"get",params:t})}function R(t){return Object(r["a"])({url:"serve/pay_meal",method:"post",data:t})}function L(t){return Object(r["a"])({url:"notify/sms/record",method:"get",params:t})}function S(){return Object(r["a"])({url:"merchant/store",method:"GET"})}function E(){return Object(r["a"])({url:"merchant/store/address",method:"GET"})}function G(t){return Object(r["a"])({url:"merchant/store/".concat(t.id),method:"POST",data:t})}function P(t){return Object(r["a"])({url:"freight/express",method:"get",params:t})}function W(){return Object(r["a"])({url:"/freight/express/create",method:"get"})}function $(t){return Object(r["a"])({url:"freight/express/".concat(t,"/edit"),method:"get"})}function F(t){return Object(r["a"])({url:"freight/express/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function N(){return Object(r["a"])({url:"freight/express/sync_express",method:"get"})}function I(){return Object(r["a"])({url:"app/wechat/speechcraftcate",method:"get"})}function M(){return Object(r["a"])({url:"app/wechat/speechcraftcate/create",method:"get"})}function U(t){return Object(r["a"])({url:"app/wechat/speechcraftcate/".concat(t,"/edit"),method:"get"})}function z(t){return Object(r["a"])({url:"setting/role",method:"GET",params:t})}function D(t){return Object(r["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function q(t){return Object(r["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function J(t){return Object(r["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function A(){return Object(r["a"])({url:"setting/role/create",method:"get"})}function B(t){return Object(r["a"])({url:"app/wechat/kefu",method:"get",params:t})}function H(t){return Object(r["a"])({url:"app/wechat/kefu/create",method:"get",params:t})}function K(){return Object(r["a"])({url:"app/wechat/kefu/add",method:"get"})}function Q(t){return Object(r["a"])({url:"app/wechat/kefu",method:"post",data:t})}function X(t){return Object(r["a"])({url:"app/wechat/kefu/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function Y(t){return Object(r["a"])({url:"app/wechat/kefu/".concat(t,"/edit"),method:"GET"})}function Z(t,e){return Object(r["a"])({url:"app/wechat/kefu/record/".concat(e),method:"GET",params:t})}function tt(t){return Object(r["a"])({url:"app/wechat/kefu/chat_list",method:"GET",params:t})}function et(){return Object(r["a"])({url:"notify/sms/is_login",method:"GET"})}function nt(){return Object(r["a"])({url:"notify/sms/logout",method:"GET"})}function rt(t){return Object(r["a"])({url:"setting/city/list/".concat(t),method:"get"})}function at(t){return Object(r["a"])({url:"setting/city/add/".concat(t),method:"get"})}function ut(t){return Object(r["a"])({url:"setting/city/".concat(t,"/edit"),method:"get"})}function ot(t){return Object(r["a"])({url:"setting/shipping_templates/list",method:"get",params:t})}function ct(t){return Object(r["a"])({url:"setting/shipping_templates/city_list",method:"get"})}function it(t,e){return Object(r["a"])({url:"setting/shipping_templates/save/".concat(t),method:"post",data:e})}function st(t){return Object(r["a"])({url:"setting/shipping_templates/".concat(t,"/edit"),method:"get"})}function dt(){return Object(r["a"])({url:"merchant/store/get_header",method:"get"})}function ft(t){return Object(r["a"])({url:"merchant/store",method:"get",params:t})}function lt(t,e){return Object(r["a"])({url:"merchant/store/set_show/".concat(t,"/").concat(e),method:"put"})}function mt(t){return Object(r["a"])({url:"merchant/store/get_info/".concat(t),method:"get"})}function ht(t){return Object(r["a"])({url:"merchant/store_staff",method:"get",params:t})}function pt(){return Object(r["a"])({url:"merchant/store_staff/create",method:"get"})}function gt(t){return Object(r["a"])({url:"merchant/store_staff/".concat(t,"/edit"),method:"get"})}function bt(t,e){return Object(r["a"])({url:"merchant/store_staff/set_show/".concat(t,"/").concat(e),method:"put"})}function vt(t){return Object(r["a"])({url:"merchant/verify_order",method:"get",params:t})}function jt(t){return Object(r["a"])({url:"merchant/verify/spread_info/".concat(t),method:"get"})}function Ot(){return Object(r["a"])({url:"merchant/store_list",method:"get"})}function wt(){return Object(r["a"])({url:"setting/city/clean_cache",method:"get"})}},ce34:function(t,e,n){}}]);