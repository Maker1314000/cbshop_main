(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7042d861"],{"16d4":function(t,e,a){"use strict";var n=a("eade"),i=a.n(n);i.a},"31b4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.FromData?a("div",[a("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[["/marketing/coupon/save.html"===t.FromData.action?a("div",{staticClass:"radio acea-row row-middle"},[a("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),a("Radio-group",{on:{"on-change":t.couponsType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[a("Radio",{attrs:{label:0}},[t._v("通用券")]),a("Radio",{attrs:{label:1}},[t._v("品类券")]),a("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],a("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(t.FromData.rules),handleIcon:"false"},on:{"on-submit":t.onSubmit}})],2)],1):t._e()},i=[],o=a("f3f3"),s=a("9860"),r=a.n(s),c=a("6b6c"),l=a("2f62"),d={name:"edit",components:{formCreate:r.a.$form()},computed:Object(o["a"])({},Object(l["e"])("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},update:{type:Boolean,default:!0}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(t,e){200===t.status?e.url=t.data.src:this.Message.error(t.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(t){var e=this,a={};a=t,Object(c["a"])({url:this.FromData.action,method:this.FromData.method,data:a}).then((function(t){e.update&&e.$parent.getList(),e.$Message.success(t.msg),e.modals=!1,setTimeout((function(){e.$emit("submitFail")}),1e3)})).catch((function(t){e.$Message.error(t.msg)}))},cancel:function(){this.type=0}}},u=d,m=(a("16d4"),a("2877")),f=Object(m["a"])(u,n,i,!1,null,"1bd28c16",null);e["a"]=f.exports},"821e":function(t,e,a){},"857a":function(t,e,a){var n=a("e330"),i=a("1d80"),o=a("577e"),s=/"/g,r=n("".replace);t.exports=function(t,e,a,n){var c=o(i(t)),l="<"+e;return""!==a&&(l+=" "+a+'="'+r(o(n),s,"&quot;")+'"'),l+">"+c+"</"+e+">"}},9911:function(t,e,a){"use strict";var n=a("23e7"),i=a("857a"),o=a("af03");n({target:"String",proto:!0,forced:o("link")},{link:function(t){return i(this,"a","href",t)}})},af03:function(t,e,a){var n=a("d039");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b412:function(t,e,a){"use strict";var n=a("821e"),i=a.n(n);i.a},cc2e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.bgcolors},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title mr20"},[t._v(t._s(t.$route.meta.title))]),a("div",{staticStyle:{float:"right"}},[a("Button",{staticClass:"bnt",attrs:{type:"primary"},on:{click:function(e){return t.onsubmit("formValidate")}}},[t._v("保存")])],1)]),a("div",{staticClass:"box-wrapper"},[a("div",{staticClass:"iframe",attrs:{bordered:!1}},[a("div",{staticClass:"agreement-box"},[a("div",{staticClass:"template"}),a("div",{staticClass:"htmls_box"},[a("div",{staticClass:"htmls_top"},[t._v("服务协议与隐私政策")]),t._m(0),a("div",{staticClass:"htmls",domProps:{innerHTML:t._s(t.content)}})])])]),a("div",{staticStyle:{"margin-left":"40px"}},[a("div",{staticClass:"table_box"},[a("div",{attrs:{type:"flex"}},[a("div",t._b({},"div",t.grid,!1),[a("div",{staticClass:"title"},[t._v("隐私权限页面展示：")])])]),a("div",[a("Form",{ref:"formValidate",staticClass:"form",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"goodsTitle acea-row"}),a("FormItem",{staticStyle:{margin:"0px"},attrs:{label:""}},[a("WangEditor",{staticStyle:{width:"90%"},attrs:{content:t.formValidate.content},on:{editorContent:t.getEditorContent}})],1)],1)],1)])])]),a("linkaddress",{ref:"linkaddres",on:{linkUrl:t.linkUrl}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"htmls_font"},[a("div",{staticClass:"ok"},[t._v("我同意")]),a("div",[t._v("不同意")])])}],o=a("c964"),s=a("f3f3"),r=(a("96cf"),a("ac1f"),a("5319"),a("9911"),a("b0c0"),a("a069")),c=a("d708"),l=a("f478"),d=a("2f62"),u=a("31b4"),m=(a("c4c8"),a("8593")),f=a("310e"),g=a.n(f),h=a("b0e7"),p=a("7af3"),b=(a("c276"),{name:"list",components:{editFrom:u["a"],draggable:g.a,uploadPictures:h["a"],linkaddress:p["a"],WangEditor:r["a"]},computed:Object(s["a"])({bgcolors:function(){return{"--color-theme":this.bgCol}},labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"}},Object(d["e"])("admin/layout",["menuCollapse"])),data:function(){return{formValidate:{content:""},ruleValidate:{},myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},a:1,guide:0,bgimg:0,columns1:[],bgCol:"",name:"",content:"",grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,sginList:[],progress:0,url:"",BaseURL:c["a"].apiBaseURL.replace(/adminapi/,""),pageId:0,groupAll:[],activeIndex:0,sortName:null,activeIndexs:0,cmsList:[],loadingExist:!1,formItem:{time:"",type:"pic",status:1,value:[],video_link:""},header:{},type:0}},created:function(){this.color(),this.a=1,this.guide=0,this.getAgreement()},mounted:function(){},methods:{linkUrl:function(t){this.tabList.list[this.activeIndexs].link=t},getEditorContent:function(t){this.content=t},color:function(){var t=this;Object(l["h"])("color_change").then((function(e){switch(e.data.status){case 1:t.bgCol="#3875EA",t.bgimg=1;break;case 2:t.bgCol="#00C050",t.bgimg=2;break;case 3:t.bgCol="#E93323",t.bgimg=3;break;case 4:t.bgCol="#FF448F",t.bgimg=4;break;case 5:t.bgCol="#FE5C2D",t.bgimg=5;break}}))},link:function(t){this.activeIndexs=t,this.$refs.linkaddres.modals=!0},getListHeader:function(){var t=this;this.loading=!0,Object(m["D"])({config_name:this.name},"setting/sign_data/header").then((function(e){var a=e.data,n=a.header;t.columns1=n,t.loading=!1})).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},getContent:function(t){this.formValidate.content=t},onsubmit:function(t){var e=this;this.formValidate.content=this.content,Object(m["S"])(this.formValidate).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(a.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},getAgreement:function(){var t=this;Object(m["t"])().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=a.data,t.formValidate={content:n.content},t.content=n.content;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))}}}),v=b,C=(a("b412"),a("2877")),_=Object(C["a"])(v,n,i,!1,null,"1d10e55b",null);e["default"]=_.exports},eade:function(t,e,a){}}]);