(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-15ee830b"],{6594:function(t,e,n){},"6fe1":function(t,e,n){"use strict";var r=n("6594");n.n(r).a},8404:function(t,e,n){"use strict";n.r(e);var r=n("f3f3"),u=(n("a434"),n("2f62")),o=n("90e7");r={name:"setting_staff",components:{},computed:Object(r.a)(Object(r.a)(Object(r.a)({},Object(u.e)("media",["isMobile"])),Object(u.e)("userLevel",["categoryId"])),{},{labelWidth:function(){return this.isMobile?void 0:85},labelPosition:function(){return this.isMobile?"top":"right"}}),data:function(){return{grid:{xl:10,lg:10,md:12,sm:24,xs:24},artFrom:{page:1,limit:15,store_id:0},loading:!1,columns:[{title:"ID",key:"id",width:80,sortable:!0},{title:"微信名称",key:"nickname",minWidth:100},{title:"头像",slot:"avatar",minWidth:100},{title:"核销员名称",key:"staff_name",minWidth:100},{title:"所属提货点",key:"name",minWidth:100},{title:"添加时间",key:"add_time",minWidth:100},{title:"状态",slot:"status",minWidth:100},{title:"操作",slot:"action",fixed:"right",minWidth:120}],storeLists:[],storeSelectList:[],total:0}},mounted:function(){this.getList(),this.storeList()},methods:{storeList:function(){var t=this;Object(o.R)().then((function(e){t.storeSelectList=e.data}))},getList:function(){var t=this,e=this;e.loading=!0,Object(o.Bb)(e.artFrom).then((function(t){e.loading=!1,e.storeLists=t.data.list,e.total=t.data.count})).catch((function(e){t.$Message.error(e.msg)}))},userSearchs:function(){this.artFrom.page=1,this.getList()},pageChange:function(t){this.artFrom.page=t,this.getList()},del:function(t,e,n){var r=this;e={title:e,num:n,url:"merchant/store_staff/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){r.$Message.success(t.msg),r.storeLists.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))},add:function(){var t=this;this.$modalForm(Object(o.Cb)(0)).then((function(){return t.getList()}))},onchangeIsShow:function(t,e){var n=this;Object(o.Eb)(t,e).then((function(t){n.$Message.success(t.msg),n.getList()}))},edit:function(t){var e=this;this.$modalForm(Object(o.Db)(t)).then((function(){return e.getList()}))}}},n("6fe1"),u=n("2877"),n=Object(u.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Form",{ref:"artFrom",attrs:{model:t.artFrom,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[n("Row",{attrs:{type:"flex",gutter:24}},[n("Col",t._b({staticClass:"mr"},"Col",t.grid,!1),[n("FormItem",{attrs:{label:"提货点名称：","label-for":"store_name"}},[n("Select",{attrs:{"element-id":"store_id",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.artFrom.store_id,callback:function(e){t.$set(t.artFrom,"store_id",e)},expression:"artFrom.store_id"}},t._l(t.storeSelectList,(function(e){return n("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)],1)],1)],1)],1),n("Row",{attrs:{type:"flex"}},[n("Col",t._b({},"Col",t.grid,!1),[n("Button",{directives:[{name:"auth",rawName:"v-auth",value:["merchant-store_staff-create"],expression:"['merchant-store_staff-create']"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加核销员")])],1)],1),n("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns,data:t.storeLists,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"avatar",fn:function(t){var e=t.row;return t.index,[n("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"row.avatar"}]})])]}},{key:"status",fn:function(e){var r=e.row;return e.index,[n("i-switch",{attrs:{value:r.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(r.id,r.status)}},model:{value:r.status,callback:function(e){t.$set(r,"status",e)},expression:"row.status"}},[t._v(">\n          "),n("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var r=e.row,u=e.index;return[n("a",{on:{click:function(e){return t.edit(r.id)}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.del(r,"删除核销员",u)}}},[t._v("删除")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,current:t.artFrom.page,"show-elevator":"","show-total":"","page-size":t.artFrom.limit},on:{"on-change":t.pageChange}})],1)],1)],1)}),[],!1,null,"613b939a",null);e.default=n.exports},"90e7":function(t,e,n){"use strict";n.d(e,"t",(function(){return u})),n.d(e,"j",(function(){return o})),n.d(e,"Gb",(function(){return c})),n.d(e,"Fb",(function(){return a})),n.d(e,"i",(function(){return i})),n.d(e,"cb",(function(){return s})),n.d(e,"Kb",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return l})),n.d(e,"V",(function(){return m})),n.d(e,"bb",(function(){return h})),n.d(e,"hb",(function(){return b})),n.d(e,"B",(function(){return g})),n.d(e,"Tb",(function(){return p})),n.d(e,"nb",(function(){return O})),n.d(e,"mb",(function(){return j})),n.d(e,"y",(function(){return v})),n.d(e,"z",(function(){return _})),n.d(e,"l",(function(){return w})),n.d(e,"db",(function(){return y})),n.d(e,"m",(function(){return k})),n.d(e,"gb",(function(){return x})),n.d(e,"fb",(function(){return L})),n.d(e,"eb",(function(){return C})),n.d(e,"ib",(function(){return F})),n.d(e,"kb",(function(){return T})),n.d(e,"S",(function(){return E})),n.d(e,"lb",(function(){return S})),n.d(e,"xb",(function(){return G})),n.d(e,"G",(function(){return P})),n.d(e,"wb",(function(){return $})),n.d(e,"p",(function(){return W})),n.d(e,"n",(function(){return q})),n.d(e,"o",(function(){return M})),n.d(e,"q",(function(){return D})),n.d(e,"r",(function(){return I})),n.d(e,"ob",(function(){return z})),n.d(e,"Sb",(function(){return U})),n.d(e,"pb",(function(){return B})),n.d(e,"Nb",(function(){return N})),n.d(e,"qb",(function(){return R})),n.d(e,"Y",(function(){return J})),n.d(e,"Pb",(function(){return A})),n.d(e,"Z",(function(){return H})),n.d(e,"W",(function(){return K})),n.d(e,"X",(function(){return Q})),n.d(e,"P",(function(){return V})),n.d(e,"A",(function(){return X})),n.d(e,"E",(function(){return Y})),n.d(e,"D",(function(){return Z})),n.d(e,"v",(function(){return tt})),n.d(e,"F",(function(){return et})),n.d(e,"Rb",(function(){return nt})),n.d(e,"s",(function(){return rt})),n.d(e,"Ob",(function(){return ut})),n.d(e,"Qb",(function(){return ot})),n.d(e,"x",(function(){return ct})),n.d(e,"C",(function(){return at})),n.d(e,"w",(function(){return it})),n.d(e,"u",(function(){return st})),n.d(e,"O",(function(){return dt})),n.d(e,"h",(function(){return ft})),n.d(e,"e",(function(){return lt})),n.d(e,"f",(function(){return mt})),n.d(e,"Hb",(function(){return ht})),n.d(e,"Ib",(function(){return bt})),n.d(e,"Jb",(function(){return gt})),n.d(e,"jb",(function(){return pt})),n.d(e,"yb",(function(){return Ot})),n.d(e,"Q",(function(){return jt})),n.d(e,"Ab",(function(){return vt})),n.d(e,"zb",(function(){return _t})),n.d(e,"Bb",(function(){return wt})),n.d(e,"Cb",(function(){return yt})),n.d(e,"Db",(function(){return kt})),n.d(e,"Eb",(function(){return xt})),n.d(e,"Lb",(function(){return Lt})),n.d(e,"Mb",(function(){return Ct})),n.d(e,"R",(function(){return Ft})),n.d(e,"g",(function(){return Tt})),n.d(e,"rb",(function(){return Et})),n.d(e,"ub",(function(){return St})),n.d(e,"a",(function(){return Gt})),n.d(e,"b",(function(){return Pt})),n.d(e,"sb",(function(){return $t})),n.d(e,"vb",(function(){return Wt})),n.d(e,"tb",(function(){return qt})),n.d(e,"k",(function(){return Mt})),n.d(e,"T",(function(){return Dt})),n.d(e,"U",(function(){return It})),n.d(e,"ab",(function(){return zt})),n.d(e,"N",(function(){return Ut})),n.d(e,"M",(function(){return Bt})),n.d(e,"I",(function(){return Nt})),n.d(e,"H",(function(){return Rt})),n.d(e,"J",(function(){return Jt})),n.d(e,"L",(function(){return At})),n.d(e,"K",(function(){return Ht})),n("99af");var r=n("6b6c");function u(t){return Object(r.a)({url:"setting/config/header_basics",method:"get",params:t})}function o(t,e){return Object(r.a)({url:e,method:"get",params:t})}function c(t){return Object(r.a)({url:t.url,method:"get",params:t.data})}function a(){return Object(r.a)({url:"notify/sms/temp/create",method:"get"})}function i(t){return Object(r.a)({url:"serve/login",method:"post",data:t})}function s(t){return Object(r.a)({url:"serve/modify",method:"post",data:t})}function d(t){return Object(r.a)({url:"serve/update_phone",method:"post",data:t})}function f(t){return Object(r.a)({url:"serve/captcha",method:"post",data:t})}function l(t){return Object(r.a)({url:"serve/checkCode",method:"post",data:t})}function m(t){return Object(r.a)({url:"serve/register",method:"post",data:t})}function h(){return Object(r.a)({url:"serve/info",method:"get"})}function b(t){return Object(r.a)({url:"serve/sms/sign",method:"PUT",data:t})}function g(t){return Object(r.a)({url:"app/wechat/kefu/login/".concat(t),method:"get"})}function p(t){return Object(r.a)({url:"app/wechat/speechcraft",method:"get",params:t})}function O(t){return Object(r.a)({url:"app/wechat/speechcraft/".concat(t,"/edit"),method:"get"})}function j(){return Object(r.a)({url:"app/wechat/speechcraft/create",method:"get"})}function v(t){return Object(r.a)({url:"app/feedback",method:"get",params:t})}function _(t){return Object(r.a)({url:"app/feedback/".concat(t,"/edit"),method:"get"})}function w(){return Object(r.a)({url:"serve/export_all",method:"get"})}function y(){return Object(r.a)({url:"serve/open",method:"get"})}function k(t){return Object(r.a)({url:"serve/export_temp",method:"get",params:t})}function x(t){return Object(r.a)({url:"serve/record",method:"get",params:t})}function L(t){return Object(r.a)({url:"serve/open",method:"get",params:t})}function C(t){return Object(r.a)({url:"serve/opn_express",method:"post",data:t})}function F(t){return Object(r.a)({url:"serve/sms/open",method:"get",params:t})}function T(t){return Object(r.a)({url:"serve/meal_list",method:"get",params:t})}function E(t){return Object(r.a)({url:"serve/pay_meal",method:"post",data:t})}function S(t){return Object(r.a)({url:"notify/sms/record",method:"get",params:t})}function G(){return Object(r.a)({url:"merchant/store",method:"GET"})}function P(){return Object(r.a)({url:"merchant/store/address",method:"GET"})}function $(t){return Object(r.a)({url:"merchant/store/".concat(t.id),method:"POST",data:t})}function W(t){return Object(r.a)({url:"freight/express",method:"get",params:t})}function q(){return Object(r.a)({url:"/freight/express/create",method:"get"})}function M(t){return Object(r.a)({url:"freight/express/".concat(t,"/edit"),method:"get"})}function D(t){return Object(r.a)({url:"freight/express/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function I(){return Object(r.a)({url:"freight/express/sync_express",method:"get"})}function z(){return Object(r.a)({url:"app/wechat/speechcraftcate",method:"get"})}function U(){return Object(r.a)({url:"app/wechat_qrcode/cate/list",method:"get"})}function B(){return Object(r.a)({url:"app/wechat/speechcraftcate/create",method:"get"})}function N(t){return Object(r.a)({url:"app/wechat_qrcode/cate/create/".concat(t),method:"get"})}function R(t){return Object(r.a)({url:"app/wechat/speechcraftcate/".concat(t,"/edit"),method:"get"})}function J(t){return Object(r.a)({url:"setting/role",method:"GET",params:t})}function A(t){return Object(r.a)({url:"app/wechat_qrcode/list",method:"GET",params:t})}function H(t){return Object(r.a)({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function K(t){return Object(r.a)({url:"setting/role/".concat(t.id),method:"post",data:t})}function Q(t){return Object(r.a)({url:"setting/role/".concat(t,"/edit"),method:"get"})}function V(){return Object(r.a)({url:"setting/role/create",method:"get"})}function X(t){return Object(r.a)({url:"app/wechat/kefu",method:"get",params:t})}function Y(t){return Object(r.a)({url:"app/wechat/kefu/create",method:"get",params:t})}function Z(){return Object(r.a)({url:"app/wechat/kefu/add",method:"get"})}function tt(t){return Object(r.a)({url:"app/wechat/kefu",method:"post",data:t})}function et(t){return Object(r.a)({url:"app/wechat/kefu/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function nt(t){return Object(r.a)({url:"app/wechat_qrcode/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function rt(t){return Object(r.a)({url:"app/wechat_qrcode/user_list/".concat(t.id),method:"get",params:t})}function ut(t){return Object(r.a)({url:"app/wechat_qrcode/info/".concat(t),method:"get"})}function ot(t,e){return Object(r.a)({url:"app/wechat_qrcode/save/".concat(t),method:"post",data:e})}function ct(t){return Object(r.a)({url:"app/wechat/kefu/".concat(t,"/edit"),method:"GET"})}function at(t,e){return Object(r.a)({url:"app/wechat/kefu/record/".concat(e),method:"GET",params:t})}function it(t){return Object(r.a)({url:"app/wechat/kefu/chat_list",method:"GET",params:t})}function st(){return Object(r.a)({url:"notify/sms/is_login",method:"GET"})}function dt(){return Object(r.a)({url:"notify/sms/logout",method:"GET"})}function ft(t){return Object(r.a)({url:"setting/city/list/".concat(t),method:"get"})}function lt(t){return Object(r.a)({url:"setting/city/add/".concat(t),method:"get"})}function mt(t){return Object(r.a)({url:"setting/city/".concat(t,"/edit"),method:"get"})}function ht(t){return Object(r.a)({url:"setting/shipping_templates/list",method:"get",params:t})}function bt(t){return Object(r.a)({url:"setting/shipping_templates/city_list",method:"get"})}function gt(t,e){return Object(r.a)({url:"setting/shipping_templates/save/".concat(t),method:"post",data:e})}function pt(t){return Object(r.a)({url:"setting/shipping_templates/".concat(t,"/edit"),method:"get"})}function Ot(){return Object(r.a)({url:"merchant/store/get_header",method:"get"})}function jt(t){return Object(r.a)({url:"merchant/store",method:"get",params:t})}function vt(t,e){return Object(r.a)({url:"merchant/store/set_show/".concat(t,"/").concat(e),method:"put"})}function _t(t){return Object(r.a)({url:"merchant/store/get_info/".concat(t),method:"get"})}function wt(t){return Object(r.a)({url:"merchant/store_staff",method:"get",params:t})}function yt(){return Object(r.a)({url:"merchant/store_staff/create",method:"get"})}function kt(t){return Object(r.a)({url:"merchant/store_staff/".concat(t,"/edit"),method:"get"})}function xt(t,e){return Object(r.a)({url:"merchant/store_staff/set_show/".concat(t,"/").concat(e),method:"put"})}function Lt(t){return Object(r.a)({url:"merchant/verify_order",method:"get",params:t})}function Ct(t){return Object(r.a)({url:"merchant/verify/spread_info/".concat(t),method:"get"})}function Ft(){return Object(r.a)({url:"merchant/store_list",method:"get"})}function Tt(){return Object(r.a)({url:"setting/city/clean_cache",method:"get"})}function Et(){return Object(r.a)({url:"system/config/storage/config",method:"get"})}function St(t){return Object(r.a)({url:"system/config/storage/config",method:"post",data:t})}function Gt(t){return Object(r.a)({url:"system/config/storage/form/".concat(t),method:"get"})}function Pt(t){return Object(r.a)({url:"system/config/storage/create/".concat(t),method:"get"})}function $t(t){return Object(r.a)({url:"system/config/storage",method:"get",params:t})}function Wt(t){return Object(r.a)({url:"system/config/storage/synch/".concat(t),method:"put"})}function qt(t){return Object(r.a)({url:"system/config/storage/status/".concat(t),method:"put"})}function Mt(t){return Object(r.a)({url:"system/config/storage/domain/".concat(t),method:"get"})}function Dt(){return Object(r.a)({url:"setting/config_list/31",method:"get"})}function It(t){return Object(r.a)({url:"setting/config/save_basics",method:"post",data:t})}function zt(t){return Object(r.a)({url:"system/config/storage/save_type/".concat(t),method:"get"})}function Ut(t){return Object(r.a)({url:"setting/lang_type/list",method:"get",params:t})}function Bt(t){return Object(r.a)({url:"setting/lang_type/form/".concat(t),method:"get"})}function Nt(t){return Object(r.a)({url:"setting/lang_code/list",method:"get",params:t})}function Rt(t){return Object(r.a)({url:"setting/lang_code/info",method:"get",params:t})}function Jt(t){return Object(r.a)({url:"setting/lang_code/save",method:"post",data:t})}function At(t){return Object(r.a)({url:"setting/lang_country/list",method:"get",params:t})}function Ht(t){return Object(r.a)({url:"setting/lang_country/form/".concat(t),method:"get"})}}}]);