(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8dd1b8bc"],{"1be5":function(t,i,e){t.exports=e.p+"img/pcbanner.23f05e2e.png"},"1fa1":function(t,i,e){t.exports=e.p+"img/kefu.6c63578f.png"},"31b4":function(t,i,e){"use strict";var a=e("f3f3"),s=e("9860"),n=(s=e.n(s),e("6b6c")),o=e("2f62");s={name:"edit",components:{formCreate:s.a.$form()},computed:Object(a.a)({},Object(o.e)("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},update:{type:Boolean,default:!0}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(t,i){200===t.status?i.url=t.data.src:this.Message.error(t.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(t){var i=this;Object(n.a)({url:this.FromData.action,method:this.FromData.method,data:t}).then((function(t){i.update&&i.$parent.getList(),i.$Message.success(t.msg),i.modals=!1,setTimeout((function(){i.$emit("submitFail")}),1e3)})).catch((function(t){i.$Message.error(t.msg)}))},cancel:function(){this.type=0}}},e("3c71"),a=e("2877"),o=Object(a.a)(s,(function(){var t=this,i=t.$createElement;i=t._self._c||i;return t.FromData?i("div",[i("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(i){t.modals=i},expression:"modals"}},[["/marketing/coupon/save.html"===t.FromData.action?i("div",{staticClass:"radio acea-row row-middle"},[i("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),i("Radio-group",{on:{"on-change":t.couponsType},model:{value:t.type,callback:function(i){t.type=i},expression:"type"}},[i("Radio",{attrs:{label:0}},[t._v("通用券")]),i("Radio",{attrs:{label:1}},[t._v("品类券")]),i("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],i("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(t.FromData.rules),handleIcon:"false"},on:{"on-submit":t.onSubmit}})],2)],1):t._e()}),[],!1,null,"671a3e20",null);i.a=o.exports},"3c71":function(t,i,e){"use strict";var a=e("be2f");e.n(a).a},"5cdf":function(t,i,e){"use strict";var a=e("e018");e.n(a).a},6785:function(t,i,e){},a9d8:function(t,i,e){"use strict";var a=e("6785");e.n(a).a},be2f:function(t,i,e){},ce94:function(t,i,e){"use strict";e.r(i);var a=e("c964"),s=e("f3f3"),n=(e("d3b7"),e("159b"),e("e9c4"),e("a434"),e("96cf"),e("2f62")),o=e("a069"),c=(e("f478"),e("31b4")),r=e("8593"),l=e("310e"),d=(l=e.n(l),e("b0e7")),u=e("7af3");c={name:"list",components:{editFrom:c.a,draggable:l.a,uploadPictures:d.a,linkaddress:u.a,WangEditor:o.a},data:function(){return{ruleValidate:{},formValidate:{content:""},pclogo:"",grid:{xl:7,lg:7,md:12,sm:24,xs:24},swiperOption:{pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:2e3,disableOnInteraction:!1},loop:!1},pageId:1,tabList:[],lastObj:{add_time:"",config_name:"",id:"",image:"",sort:1,status:1,title:"",url:""},isChoice:"单选",modalPic:!1,gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},activeIndex:0,myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},activeIndexs:0}},computed:Object(s.a)(Object(s.a)({},Object(n.e)("admin/layout",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.menu(1),this.info()},methods:{getEditorContent:function(t){this.formValidate.content=t},linkUrl:function(t){this.tabList.list[this.activeIndexs].url=t},getContent:function(t){this.formValidate.content=t},onsubmit:function(t){var i=this;this.$refs[t].validate((function(t){if(!t)return!1;Object(r.V)(i.formValidate).then(function(){var t=Object(a.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.$Message.success(e.msg);case 1:case"end":return t.stop()}}),t)})));return function(i){return t.apply(this,arguments)}}()).catch((function(t){i.$Message.error(t.msg)}))}))},getKfAdv:function(){var t=this;Object(r.w)().then(function(){var i=Object(a.a)(regeneratorRuntime.mark((function i(e){var a;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:a=e.data,t.formValidate={content:a.content};case 2:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}()).catch((function(i){t.loading=!1,t.$Message.error(i.msg)}))},groupAdd:function(){var t=this;this.$modalForm(Object(r.B)({config_name:this.pageId},"setting/group_data/create")).then((function(){return t.info()}))},info:function(){var t=this;"pc_home_banner"==this.pageId&&Object(r.E)({config_name:this.pageId},"setting/group_data").then(function(){var i=Object(a.a)(regeneratorRuntime.mark((function i(e){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t.tabList=e.data,t.tabList.list.forEach((function(t,i,e){"string"!=typeof t.image&&"undefined"!=t.image&&(t.image=t.image[0])}));case 2:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}()).catch((function(i){t.$Message.error(i.msg)})),1==this.pageId&&Object(r.N)("pc_logo").then((function(i){t.pclogo=i.data.value})),3==this.pageId&&this.getKfAdv()},menu:function(t){this.pageId=t,this.info()},addBox:function(){var t;0==this.tabList.list.length?(this.tabList.list.push(this.lastObj),this.lastObj={add_time:"",comment:"",gid:"",id:"",img:"",link:"",sort:"",status:1}):5==this.tabList.list.length?this.$Message.warning("最多添加五张呦"):(t=JSON.parse(JSON.stringify(this.lastObj)),this.tabList.list.push(t))},bindDelete:function(t,i){1==this.tabList.list.length&&(this.lastObj=this.tabList.list[0]),this.tabList.list.splice(i,1)},modalPicTap:function(t,i){this.activeIndex=i,this.modalPic=!0},getPic:function(t){var i=this;this.$nextTick((function(){"pc_home_banner"==i.pageId?i.tabList.list[i.activeIndex].image=t.att_dir:i.pclogo=t.att_dir,i.modalPic=!1}))},save:function(){var t=this;"pc_home_banner"==this.pageId&&Object(r.I)({config_name:this.pageId,data:this.tabList.list}).then((function(i){t.$Message.success(i.msg)})).catch((function(i){t.$Message.error(i.msg)})),1==this.pageId&&Object(r.O)({pc_logo:this.pclogo}).then((function(i){t.$Message.success(i.msg)})).catch((function(i){t.$Message.error(i.msg)})),3==this.pageId&&this.onsubmit("formValidate")},link:function(t){this.activeIndexs=t,this.$refs.linkaddres.modals=!0}}},e("a9d8"),e("5cdf"),l=e("2877"),d=Object(l.a)(c,(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title mr20"},[t._v(t._s(t.$route.meta.title))]),a("div",[a("div",{staticStyle:{float:"right"}},[a("Button",{staticClass:"bnt",attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)])]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{staticClass:"ivu-mt box-wrapper"},[a("Col",{staticClass:"left-wrapper",attrs:{xs:24,sm:24,md:6,lg:3}},[a("div",{staticClass:"left_box"},[a("div",{staticClass:"left_cont",class:1==t.pageId?"on":"",on:{click:function(i){return t.menu(1)}}},[t._v("网站LOGO")]),a("div",{staticClass:"left_cont",class:"pc_home_banner"==t.pageId?"on":"",on:{click:function(i){return t.menu("pc_home_banner")}}},[t._v("\n              首页轮播图\n            ")]),a("div",{staticClass:"left_cont",class:3==t.pageId?"on":"",on:{click:function(i){return t.menu(3)}}},[t._v("客服页面广告")])])]),a("div",{staticStyle:{display:"flex",width:"83%"}},[1==t.pageId||"pc_home_banner"==t.pageId?a("Col",{staticClass:"pciframe",attrs:{bordered:!1,"dis-hover":""}},[a("img",{staticClass:"pciframe-box",attrs:{src:e("1be5")}}),1==t.pageId?a("div",{staticClass:"logoimg"},[a("img",{attrs:{src:t.pclogo}})]):t._e(),"pc_home_banner"==t.pageId?a("div",{staticClass:"pcmoddile_goods"},[""==t.tabList.list?a("div",{staticClass:"nofonts"},[t._v("暂无照片，请添加~")]):a("swiper",{staticClass:"pcswiperimg_goods",attrs:{options:t.swiperOption}},t._l(t.tabList.list,(function(t,i){return a("swiper-slide",{key:i,staticClass:"spcwiperimg_goods"},[a("img",{attrs:{src:t.image}})])})),1)],1):t._e()]):t._e(),3==t.pageId?a("Col",{staticClass:"pciframe",attrs:{bordered:!1,"dis-hover":""}},[a("img",{staticClass:"pciframe-box",attrs:{src:e("1fa1")}}),a("div",{staticClass:"box3_sile"},[a("div",{domProps:{innerHTML:t._s(t.formValidate.content)}})])]):t._e(),"pc_home_banner"==t.pageId?a("Col",[a("div",{staticClass:"content"},[a("div",{staticClass:"right-box"},[a("div",{staticClass:"hot_imgs"},[a("div",{staticClass:"title"},[t._v("轮播图设置")]),a("div",{staticClass:"title-text"},[t._v("建议尺寸：690 * 240px，拖拽图片可调整图片顺序哦，最多添加五张。")]),a("div",{staticClass:"title-text"},[t._v("除轮播图外，页面其他内容仅供参考")]),a("div",{staticClass:"list-box"},["pc_home_banner"==t.pageId?a("draggable",{staticClass:"dragArea list-group",attrs:{list:t.tabList.list,group:"peoples",handle:".move-icon"}},t._l(t.tabList.list,(function(i,e){return a("div",{key:e,staticClass:"item"},[a("div",{staticClass:"move-icon"},[a("span",{staticClass:"iconfont icondrag2"})]),a("div",{staticClass:"img-box imgBoxs",on:{click:function(i){return t.modalPicTap("单选",e)}}},[i.image?a("img",{attrs:{src:i.image,alt:""}}):a("div",{staticClass:"upload-box"},[a("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1),a("div",{staticClass:"delect-btn",staticStyle:{"line-height":"0px"},on:{click:function(a){return a.stopPropagation(),t.bindDelete(i,e)}}},[a("Icon",{attrs:{type:"md-close-circle",size:"26"}})],1)]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-item"},[a("span",[t._v("图片名称：")]),a("div",{staticClass:"input-box"},[a("Input",{attrs:{placeholder:"请填写名称"},model:{value:i.title,callback:function(e){t.$set(i,"title",e)},expression:"item.title"}})],1)]),a("div",{staticClass:"info-item"},[a("span",[t._v("链接地址：")]),a("div",{staticClass:"input-box"},[a("Input",{attrs:{placeholder:"选择链接"},model:{value:i.url,callback:function(e){t.$set(i,"url",e)},expression:"item.url"}})],1)])])])})),0):t._e(),a("div",[a("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":999},model:{value:t.modalPic,callback:function(i){t.modalPic=i},expression:"modalPic"}},[t.modalPic?a("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)],1),[a("div",{staticClass:"add-btn"},[a("Button",{staticStyle:{width:"100px",height:"35px","background-color":"#1890ff",color:"#ffffff"},attrs:{type:"primary",ghost:""},on:{click:t.addBox}},[t._v("添加图片\n                      ")])],1)]],2)])])]):t._e(),1==t.pageId?a("Col",[a("div",{staticClass:"content"},[a("div",{staticClass:"right-box"},[a("div",{staticClass:"hot_imgs"},[a("div",{staticClass:"title"},[t._v("页面设置")]),a("div",{staticClass:"title-text"},[t._v("建议尺寸：140px * 60px")]),a("div",{staticClass:"title-text"},[t._v("除LOGO图标外，页面其他内容仅供参考")]),a("div",{staticClass:"list-box"},[a("div",{staticClass:"img-boxs",on:{click:function(i){return t.modalPicTap("单选",0)}}},[a("img",{attrs:{src:t.pclogo,alt:""}}),a("div",{staticClass:"img_font"}),a("div",{staticClass:"img_fonts"},[t._v("更换图片")])]),a("div",[a("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":999},model:{value:t.modalPic,callback:function(i){t.modalPic=i},expression:"modalPic"}},[t.modalPic?a("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)])])])])]):t._e(),3==t.pageId?a("Col",{staticStyle:{"margin-left":"40px"},attrs:{xs:24,sm:24,md:12,lg:14}},[a("div",{staticClass:"table_box"},[a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("div",{staticClass:"title"},[t._v("隐私权限页面展示：")])])],1),a("div",[a("Form",{ref:"formValidate",staticClass:"form",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"goodsTitle acea-row"}),a("FormItem",{staticStyle:{margin:"0px"},attrs:{label:"",prop:"content"}},[a("WangEditor",{attrs:{content:t.formValidate.content},on:{editorContent:t.getEditorContent}})],1)],1)],1)],1)]):t._e()],1)],1)],1),a("linkaddress",{ref:"linkaddres",on:{linkUrl:t.linkUrl}})],1)}),[],!1,null,"35a1817e",null);i.default=d.exports},e018:function(t,i,e){}}]);