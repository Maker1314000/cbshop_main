(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-101ff634"],{"1be5":function(t,e,n){t.exports=n.p+"img/pcbanner.23f05e2e.png"},"1fa1":function(t,e,n){t.exports=n.p+"img/kefu.6c63578f.png"},2144:function(t,e,n){"use strict";var i=n("5a6e"),a=n.n(i);a.a},"31b4":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.FromData?n("div",[n("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[["/marketing/coupon/save.html"===t.FromData.action?n("div",{staticClass:"radio acea-row row-middle"},[n("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),n("Radio-group",{on:{"on-change":t.couponsType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("Radio",{attrs:{label:0}},[t._v("通用券")]),n("Radio",{attrs:{label:1}},[t._v("品类券")]),n("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],n("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(t.FromData.rules),handleIcon:"false"},on:{"on-submit":t.onSubmit}})],2)],1):t._e()},a=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("9860"),o=n.n(s),c=n("6b6c"),u=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"edit",components:{formCreate:o.a.$form()},computed:d({},Object(u["e"])("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(t,e){200===t.status?e.url=t.data.src:this.Message.error(t.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(t){var e=this,n={};n=t,Object(c["a"])({url:this.FromData.action,method:this.FromData.method,data:n}).then((function(t){e.$parent.getList(),e.$Message.success(t.msg),e.modals=!1,setTimeout((function(){e.$emit("submitFail")}),1e3)})).catch((function(t){e.$Message.error(t.msg)}))},cancel:function(){this.type=0}}},m=f,p=(n("a116"),n("2877")),g=Object(p["a"])(m,i,a,!1,null,"6b606342",null);e["a"]=g.exports},"34e3":function(t,e,n){},"5a6e":function(t,e,n){},8593:function(t,e,n){"use strict";n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return s})),n.d(e,"N",(function(){return o})),n.d(e,"n",(function(){return c})),n.d(e,"l",(function(){return u})),n.d(e,"m",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"C",(function(){return f})),n.d(e,"u",(function(){return m})),n.d(e,"B",(function(){return p})),n.d(e,"z",(function(){return g})),n.d(e,"w",(function(){return b})),n.d(e,"x",(function(){return h})),n.d(e,"y",(function(){return v})),n.d(e,"A",(function(){return O})),n.d(e,"K",(function(){return _})),n.d(e,"O",(function(){return j})),n.d(e,"o",(function(){return y})),n.d(e,"d",(function(){return C})),n.d(e,"f",(function(){return x})),n.d(e,"c",(function(){return w})),n.d(e,"e",(function(){return k})),n.d(e,"g",(function(){return P})),n.d(e,"r",(function(){return I})),n.d(e,"p",(function(){return E})),n.d(e,"q",(function(){return T})),n.d(e,"E",(function(){return $})),n.d(e,"F",(function(){return D})),n.d(e,"J",(function(){return L})),n.d(e,"I",(function(){return F})),n.d(e,"a",(function(){return M})),n.d(e,"b",(function(){return S})),n.d(e,"t",(function(){return R})),n.d(e,"M",(function(){return U})),n.d(e,"v",(function(){return V})),n.d(e,"Q",(function(){return B})),n.d(e,"P",(function(){return G})),n.d(e,"D",(function(){return z})),n.d(e,"G",(function(){return A})),n.d(e,"H",(function(){return H})),n.d(e,"s",(function(){return J})),n.d(e,"L",(function(){return W}));var i=n("6b6c");function a(t){return Object(i["a"])({url:"setting/config_class",method:"get",params:t})}function r(t){return Object(i["a"])({url:"setting/config_class/create",method:"get"})}function s(t){return Object(i["a"])({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function o(t){return Object(i["a"])({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function c(t){return Object(i["a"])({url:"setting/config",method:"get",params:t})}function u(t){return Object(i["a"])({url:"setting/config/create",method:"get",params:t})}function l(t){return Object(i["a"])({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function d(t,e){return Object(i["a"])({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function f(t){return Object(i["a"])({url:"setting/group",method:"get",params:t})}function m(t){return Object(i["a"])({url:t.url,method:t.method,data:t.datas})}function p(t){return Object(i["a"])({url:"setting/group/".concat(t),method:"get"})}function g(t,e){return Object(i["a"])({url:e,method:"get",params:t})}function b(t,e){return Object(i["a"])({url:e,method:"get",params:t})}function h(t,e){return Object(i["a"])({url:e,method:"get",params:t})}function v(t,e){return Object(i["a"])({url:e,method:"get",params:t})}function O(t){return Object(i["a"])({url:t,method:"PUT"})}function _(t){return Object(i["a"])({url:"system/log/search_admin",method:"GET"})}function j(t){return Object(i["a"])({url:"system/log",method:"GET",params:t})}function y(){return Object(i["a"])({url:"system/file",method:"GET"})}function C(){return Object(i["a"])({url:"system/backup",method:"GET"})}function x(t){return Object(i["a"])({url:"system/backup/read",method:"GET",params:t})}function w(t){return Object(i["a"])({url:"system/backup/backup",method:"put",data:t})}function k(t){return Object(i["a"])({url:"system/backup/optimize",method:"put",data:t})}function P(t){return Object(i["a"])({url:"system/backup/repair",method:"put",data:t})}function I(t){return Object(i["a"])({url:"system/backup/file_list",method:"GET"})}function E(t){return Object(i["a"])({url:"backup/download",method:"get",params:t})}function T(t){return Object(i["a"])({url:"system/backup/import",method:"POST",data:t})}function $(t){return Object(i["a"])({url:"system/file/opendir",method:"GET",params:t})}function D(t){return Object(i["a"])({url:"system/file/openfile?filepath=".concat(t),method:"GET"})}function L(t){return Object(i["a"])({url:"system/file/savefile",method:"post",data:t})}function F(t){return Object(i["a"])({url:"system/replace_site_url",method:"post",data:t})}function M(){return Object(i["a"])({url:"auth",method:"get"})}function S(t){return Object(i["a"])({url:"auth_apply",method:"post",data:t})}function R(){return Object(i["a"])({url:"setting/get_kf_adv",method:"get"})}function U(t){return Object(i["a"])({url:"setting/set_kf_adv",method:"post",data:t})}function V(){return Object(i["a"])({url:"setting/group_all",method:"get"})}function B(t){return Object(i["a"])({url:"system/version_list",method:"get",params:t})}function G(){return Object(i["a"])({url:"system/version_crate",method:"get"})}function z(t){return Object(i["a"])({url:"setting/group_data/save_all",method:"POST",data:t})}function A(t){return Object(i["a"])({url:"setting/config/get_system/".concat(t),method:"get"})}function H(t){return Object(i["a"])({url:"setting/config/save_basics",method:"POST",data:t})}function J(){return Object(i["a"])({url:"setting/get_user_agreement",method:"get"})}function W(t){return Object(i["a"])({url:"setting/set_user_agreement",method:"post",data:t})}},a116:function(t,e,n){"use strict";var i=n("34e3"),a=n.n(i);a.a},a9d8:function(t,e,n){"use strict";var i=n("af2f"),a=n.n(i);a.a},af2f:function(t,e,n){},ce94:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"i-layout-page-header"},[i("span",{staticClass:"ivu-page-header-title mr20"},[t._v(t._s(t.$route.meta.title))]),i("div",[i("div",{staticStyle:{float:"right"}},[i("Button",{staticClass:"bnt",attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)])]),i("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[i("Row",{staticClass:"ivu-mt box-wrapper"},[i("Col",{staticClass:"left-wrapper",attrs:{xs:24,sm:24,md:6,lg:3}},[i("div",{staticClass:"left_box"},[i("div",{staticClass:"left_cont",class:1==t.pageId?"on":"",on:{click:function(e){return t.menu(1)}}},[t._v("网站LOGO")]),i("div",{staticClass:"left_cont",class:"pc_home_banner"==t.pageId?"on":"",on:{click:function(e){return t.menu("pc_home_banner")}}},[t._v("首页轮播图")])])]),i("div",{staticStyle:{display:"flex",width:"83%"}},[1==t.pageId||"pc_home_banner"==t.pageId?i("Col",{staticClass:"pciframe",attrs:{bordered:!1,"dis-hover":""}},[i("img",{staticClass:"pciframe-box",attrs:{src:n("1be5")}}),1==t.pageId?i("div",{staticClass:"logoimg"},[i("img",{attrs:{src:t.pclogo}})]):t._e(),"pc_home_banner"==t.pageId?i("div",{staticClass:"pcmoddile_goods"},[""==t.tabList.list?i("div",{staticClass:"nofonts"},[t._v("暂无照片，请添加~")]):i("swiper",{staticClass:"pcswiperimg_goods",attrs:{options:t.swiperOption}},t._l(t.tabList.list,(function(t,e){return i("swiper-slide",{key:e,staticClass:"spcwiperimg_goods"},[i("img",{attrs:{src:t.image}})])})),1)],1):t._e()]):t._e(),3==t.pageId?i("Col",{staticClass:"pciframe",attrs:{bordered:!1,"dis-hover":""}},[i("img",{staticClass:"pciframe-box",attrs:{src:n("1fa1")}}),i("div",{staticClass:"box3_sile"},[i("div",{domProps:{innerHTML:t._s(t.formValidate.content)}})])]):t._e(),"pc_home_banner"==t.pageId?i("Col",[i("div",{staticClass:"content"},[i("div",{staticClass:"right-box"},[i("div",{staticClass:"hot_imgs"},[i("div",{staticClass:"title"},[t._v("轮播图设置")]),i("div",{staticClass:"title-text"},[t._v("建议尺寸：690 * 240px，拖拽图片可调整图片顺序哦，最多添加五张。")]),i("div",{staticClass:"title-text"},[t._v("除轮播图外，页面其他内容仅供参考")]),i("div",{staticClass:"list-box"},["pc_home_banner"==t.pageId?i("draggable",{staticClass:"dragArea list-group",attrs:{list:t.tabList.list,group:"peoples",handle:".move-icon"}},t._l(t.tabList.list,(function(e,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"move-icon"},[i("span",{staticClass:"iconfont icondrag2"})]),i("div",{staticClass:"img-box imgBoxs",on:{click:function(e){return t.modalPicTap("单选",n)}}},[e.image?i("img",{attrs:{src:e.image,alt:""}}):i("div",{staticClass:"upload-box"},[i("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1),i("div",{staticClass:"delect-btn",staticStyle:{"line-height":"0px"},on:{click:function(i){return i.stopPropagation(),t.bindDelete(e,n)}}},[i("Icon",{attrs:{type:"md-close-circle",size:"26"}})],1)]),i("div",{staticClass:"info"},[i("div",{staticClass:"info-item"},[i("span",[t._v("图片名称：")]),i("div",{staticClass:"input-box"},[i("Input",{attrs:{placeholder:"请填写名称"},model:{value:e.title,callback:function(n){t.$set(e,"title",n)},expression:"item.title"}})],1)]),i("div",{staticClass:"info-item"},[i("span",[t._v("链接地址：")]),i("div",{staticClass:"input-box"},[i("Input",{attrs:{placeholder:"选择链接"},model:{value:e.url,callback:function(n){t.$set(e,"url",n)},expression:"item.url"}})],1)])])])})),0):t._e(),i("div",[i("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":999},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?i("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)],1),[i("div",{staticClass:"add-btn"},[i("Button",{staticStyle:{width:"100px",height:"35px","background-color":"#1890FF",color:"#FFFFFF"},attrs:{type:"primary",ghost:""},on:{click:t.addBox}},[t._v("添加图片\n\t\t\t\t\t\t\t\t\t               ")])],1)]],2)])])]):t._e(),1==t.pageId?i("Col",[i("div",{staticClass:"content"},[i("div",{staticClass:"right-box"},[i("div",{staticClass:"hot_imgs"},[i("div",{staticClass:"title"},[t._v("页面设置")]),i("div",{staticClass:"title-text"},[t._v("建议尺寸：690 * 240px")]),i("div",{staticClass:"title-text"},[t._v("除LOGO图标外，页面其他内容仅供参考")]),i("div",{staticClass:"list-box"},[i("div",{staticClass:"img-boxs",on:{click:function(e){return t.modalPicTap("单选",0)}}},[i("img",{attrs:{src:t.pclogo,alt:""}}),i("div",{staticClass:"img_font"}),i("div",{staticClass:"img_fonts"},[t._v("更换图片")])]),i("div",[i("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":999},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?i("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)])])])])]):t._e(),3==t.pageId?i("Col",{staticStyle:{"margin-left":"40px"},attrs:{xs:24,sm:24,md:12,lg:14}},[i("div",{staticClass:"table_box"},[i("Row",{attrs:{type:"flex"}},[i("Col",t._b({},"Col",t.grid,!1),[i("div",{staticClass:"title"},[t._v("隐私权限页面展示：")])])],1),i("div",[i("Form",{ref:"formValidate",staticClass:"form",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[i("div",{staticClass:"goodsTitle acea-row"}),i("FormItem",{staticStyle:{margin:"0px"},attrs:{label:"",prop:"content"}},[i("vue-ueditor-wrap",{attrs:{config:t.myConfig},on:{beforeInit:t.addCustomDialog},model:{value:t.formValidate.content,callback:function(e){t.$set(t.formValidate,"content",e)},expression:"formValidate.content"}})],1)],1)],1)],1)]):t._e()],1)],1)],1),i("linkaddress",{ref:"linkaddres",on:{linkUrl:t.linkUrl}})],1)},a=[],r=(n("8e6e"),n("456d"),n("ac6a"),n("96cf"),n("3b8d")),s=(n("7f7f"),n("bd86")),o=n("2f62"),c=n("6625"),u=n.n(c),l=(n("f478"),n("31b4")),d=n("8593"),f=n("310e"),m=n.n(f),p=n("b0e7"),g=n("7af3");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={name:"list",components:{editFrom:l["a"],draggable:m.a,uploadPictures:p["a"],linkaddress:g["a"],VueUeditorWrap:u.a},data:function(){return{ruleValidate:{},formValidate:{content:""},pclogo:"",grid:{xl:7,lg:7,md:12,sm:24,xs:24},swiperOption:{pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:2e3,disableOnInteraction:!1},loop:!1},pageId:1,tabList:[],lastObj:{add_time:"",config_name:"",id:"",image:"",sort:1,status:1,title:"",url:""},isChoice:"单选",modalPic:!1,gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},activeIndex:0,myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},activeIndexs:0}},computed:h(h({},Object(o["e"])("admin/layout",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.menu(1),this.info()},methods:{linkUrl:function(t){this.tabList.list[this.activeIndexs].url=t},getContent:function(t){this.formValidate.content=t},onsubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;Object(d["M"])(e.formValidate).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(n.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))}))},getKfAdv:function(){var t=this;Object(d["t"])().then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=n.data,t.formValidate={content:i.content};case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var n=new window.UE.ui.Dialog({iframeUrl:"/admin/widget.images/index.html?fodder=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:960px;height:550px;padding:20px;"});this.dialog=n;var i=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){n.render(),n.open()}});return i}),37)},groupAdd:function(){var t=this;this.$modalForm(Object(d["w"])({config_name:this.pageId},"setting/group_data/create")).then((function(){return t.info()}))},info:function(){var t=this;"pc_home_banner"==this.pageId&&Object(d["z"])({config_name:this.pageId},"setting/group_data").then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.tabList=n.data,t.tabList.list.forEach((function(t,e,n){"string"!=typeof t.image&&"undefined"!=t.image&&(t.image=t.image[0])}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)})),1==this.pageId&&Object(d["G"])("pc_logo").then((function(e){t.pclogo=e.data.value})),3==this.pageId&&this.getKfAdv()},menu:function(t){this.pageId=t,this.info()},addBox:function(){if(0==this.tabList.list.length)this.tabList.list.push(this.lastObj),this.lastObj={add_time:"",comment:"",gid:"",id:"",img:"",link:"",sort:"",status:1};else if(5==this.tabList.list.length)this.$Message.warning("最多添加五张呦");else{var t=JSON.parse(JSON.stringify(this.lastObj));this.tabList.list.push(t)}},bindDelete:function(t,e){1==this.tabList.list.length&&(this.lastObj=this.tabList.list[0]),this.tabList.list.splice(e,1)},modalPicTap:function(t,e){this.activeIndex=e,this.modalPic=!0},getPic:function(t){var e=this;this.$nextTick((function(){"pc_home_banner"==e.pageId?e.tabList.list[e.activeIndex].image=t.att_dir:e.pclogo=t.att_dir,e.modalPic=!1}))},save:function(){var t=this;"pc_home_banner"==this.pageId&&Object(d["D"])({config_name:this.pageId,data:this.tabList.list}).then((function(e){t.$Message.success(e.msg)})).catch((function(e){t.$Message.error(e.msg)})),1==this.pageId&&Object(d["H"])({pc_logo:this.pclogo}).then((function(e){t.$Message.success(e.msg)})).catch((function(e){t.$Message.error(e.msg)})),3==this.pageId&&this.onsubmit("formValidate")},link:function(t){this.activeIndexs=t,this.$refs.linkaddres.modals=!0}}},O=v,_=(n("a9d8"),n("2144"),n("2877")),j=Object(_["a"])(O,i,a,!1,null,"7ad59b3c",null);e["default"]=j.exports}}]);