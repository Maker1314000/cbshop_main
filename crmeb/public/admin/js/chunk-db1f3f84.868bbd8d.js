(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-db1f3f84"],{"31b4":function(t,i,e){"use strict";var s=e("f3f3"),a=e("9860"),n=(a=e.n(a),e("6b6c")),o=e("2f62");a={name:"edit",components:{formCreate:a.a.$form()},computed:Object(s.a)({},Object(o.e)("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},update:{type:Boolean,default:!0}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(t,i){200===t.status?i.url=t.data.src:this.Message.error(t.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(t){var i=this;Object(n.a)({url:this.FromData.action,method:this.FromData.method,data:t}).then((function(t){i.update&&i.$parent.getList(),i.$Message.success(t.msg),i.modals=!1,setTimeout((function(){i.$emit("submitFail")}),1e3)})).catch((function(t){i.$Message.error(t.msg)}))},cancel:function(){this.type=0}}},e("3c71"),s=e("2877"),o=Object(s.a)(a,(function(){var t=this,i=t.$createElement;i=t._self._c||i;return t.FromData?i("div",[i("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(i){t.modals=i},expression:"modals"}},[["/marketing/coupon/save.html"===t.FromData.action?i("div",{staticClass:"radio acea-row row-middle"},[i("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),i("Radio-group",{on:{"on-change":t.couponsType},model:{value:t.type,callback:function(i){t.type=i},expression:"type"}},[i("Radio",{attrs:{label:0}},[t._v("通用券")]),i("Radio",{attrs:{label:1}},[t._v("品类券")]),i("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],i("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(t.FromData.rules),handleIcon:"false"},on:{"on-submit":t.onSubmit}})],2)],1):t._e()}),[],!1,null,"671a3e20",null);i.a=o.exports},"3c71":function(t,i,e){"use strict";var s=e("be2f");e.n(s).a},"590d":function(t,i,e){t.exports=e.p+"img/pclogin.3d27e2c2.png"},"713f":function(t,i,e){t.exports=e.p+"img/bluesgin.032bae4b.png"},"857a":function(t,i,e){var s=e("e330"),a=e("1d80"),n=e("577e"),o=/"/g,r=s("".replace);t.exports=function(t,i,e,s){t=n(a(t));var l="<"+i;return""!==e&&(l+=" "+e+'="'+r(n(s),o,"&quot;")+'"'),l+">"+t+"</"+i+">"}},"89c2":function(t,i,e){t.exports=e.p+"img/oragesgin.00077d3a.png"},"90be":function(t,i,e){t.exports=e.p+"img/redsgin.d8b0c12e.png"},"943f":function(t,i,e){t.exports=e.p+"img/pinksgin.0e1c51b4.png"},9911:function(t,i,e){"use strict";var s=e("23e7"),a=e("857a");s({target:"String",proto:!0,forced:e("af03")("link")},{link:function(t){return a(this,"a","href",t)}})},af03:function(t,i,e){var s=e("d039");t.exports=function(t){return s((function(){var i=""[t]('"');return i!==i.toLowerCase()||3<i.split('"').length}))}},b9a6:function(t,i,e){},bceb:function(t,i,e){t.exports=e.p+"img/greesgin.43ae54b5.png"},be2f:function(t,i,e){},c338:function(t,i,e){"use strict";var s=e("b9a6");e.n(s).a},cb18:function(t,i,e){"use strict";e.r(i);var s=e("c964"),a=e("f3f3"),n=(e("96cf"),e("ac1f"),e("5319"),e("b0c0"),e("d3b7"),e("9911"),e("159b"),e("e9c4"),e("a434"),e("a069")),o=e("d708"),r=e("f478"),l=e("2f62"),c=e("31b4"),d=e("c4c8"),u=e("8593"),m=e("310e"),g=(m=e.n(m),e("b0e7")),f=e("7af3"),p=e("c276");c={name:"list",components:{editFrom:c.a,draggable:m.a,uploadPictures:g.a,linkaddress:f.a,WangEditor:n.a},computed:Object(a.a)({bgcolors:function(){return{"--color-theme":this.bgCol}},labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"}},Object(l.e)("admin/layout",["menuCollapse"])),data:function(){return{formValidate:{content:""},ruleValidate:{},myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},a:0,guide:0,bgimg:0,columns1:[],bgCol:"",name:"routine_home_bast_banner",grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,sginList:[],progress:0,swiperOption:{pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:2e3,disableOnInteraction:!1},loop:!1},url:"",BaseURL:o.a.apiBaseURL.replace(/adminapi/,""),pageId:0,theme3:"light",tabList:[],upload_type:"",uploadData:{},lastObj:{add_time:"",comment:"",gid:"",id:"",img:"",link:"",sort:"",status:1},isChoice:"单选",modalPic:!1,gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},groupAll:[],activeIndex:0,sortName:null,activeIndexs:0,cmsList:[],loadingExist:!1,formItem:{time:"",type:"pic",status:1,value:[],video_link:""},fileUrl:o.a.apiBaseURL+"/file/upload",cardUrl:o.a.apiBaseURL+"/file/upload/1",header:{},type:0,upload:{videoIng:!1}}},created:function(){this.color(),this.uploadType(),this.getToken()},mounted:function(){this.getGroupAll(),this.info(),this.url=this.BaseURL+"pages/columnGoods/HotNewGoods/index?type=1"},methods:{getEditorContent:function(t){this.formValidate.content=t},delVideo:function(){this.$set(this.formItem,"video_link","")},uploadType:function(){var t=this;Object(d.H)().then((function(i){t.upload_type=i.data.upload_type}))},handleSuccess:function(t,i,e){200===t.status?(this.$set(this.formItem,"video_link",t.data.src),this.$Message.success(t.msg)):this.$Message.error(t.msg)},zh_uploadFile:function(){this.video_link?this.formValidate.video_link=this.video_link:this.$refs.refid.click()},zh_uploadFile_change:function(t){var i=this;if(-1===t.target.files[0].name.substr(t.target.files[0].name.indexOf(".")).indexOf(".mp4"))return i.$Message.error("只能上传MP4文件");Object(d.s)().then((function(e){i.$videoCloud.videoUpload({type:e.data.type,evfile:t,res:e,uploading:function(t,e){i.upload.videoIng=t}}).then((function(t){i.formValidate.video_link=t.url,i.$Message.success("视频上传成功")})).catch((function(t){i.$Message.error(t)}))})).catch((function(t){i.$Message.error(t.msg)}))},getToken:function(){this.header["Authori-zation"]="Bearer "+Object(p.d)("token")},beforeUpload:function(){var t=this;return this.uploadData={},new Promise((function(i){t.$nextTick((function(){i(!0)}))}))},linkUrl:function(t){this.tabList.list[this.activeIndexs].link=t},color:function(){var t=this;Object(r.h)("color_change").then((function(i){switch(i.data.status){case 1:t.bgCol="#3875EA",t.bgimg=1;break;case 2:t.bgCol="#00C050",t.bgimg=2;break;case 3:t.bgCol="#E93323",t.bgimg=3;break;case 4:t.bgCol="#FF448F",t.bgimg=4;break;case 5:t.bgCol="#FE5C2D",t.bgimg=5}}))},groupAdd:function(){var t=this;this.$modalForm(Object(u.B)({gid:this.pageId,config_name:this.name},"setting/group_data/create")).then((function(){t.url=t.BaseURL+"pages/users/user_sgin/index",t.info()}))},info:function(){var t=this;Object(u.E)({config_name:this.name},"setting/group_data").then(function(){var i=Object(s.a)(regeneratorRuntime.mark((function i(e){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t.tabList=e.data,"admin_login_slide"==t.name?t.tabList.list.forEach((function(t,i,e){"string"!=typeof t.slide&&"undefined"!=t.slide&&(t.slide=t.slide[0])})):"sign_day_num"==t.name?t.cmsList=e.data.list:"user_recharge_quota"==t.name?t.sginList=e.data:t.tabList.list.forEach((function(t,i,e){"string"!=typeof t.img&&"undefined"!=t.img&&(t.img=t.img[0])}));case 2:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}()).catch((function(i){t.loading=!1,t.$Message.error(i.msg)}))},edits:function(t){var i=this;if(this.pageId=t.id||0,this.name=t.config_name||"",1==t)this.a=1,this.guide=0,this.getAgreement();else if(2==t)this.a=0,this.guide=2,Object(u.x)().then((function(t){t.data?(i.formItem=t.data,i.tabList.list=t.data.value):(i.formItem={time:"",type:"pic",status:1,value:[],video_link:""},i.tabList.list=[])}));else switch(this.info(),this.guide=0,this.a=0,t.config_name){case"routine_home_bast_banner":this.url=this.BaseURL+"pages/columnGoods/HotNewGoods/index?type=1&name=精品推荐";break;case"sign_day_num":this.url="",this.getListHeader();break;case"combination_banner":this.url=this.BaseURL+"pages/activity/goods_combination/index";break;case"routine_home_hot_banner":this.url=this.BaseURL+"pages/columnGoods/HotNewGoods/index?type=2&name=热门榜单";break;case"routine_home_new_banner":this.url=this.BaseURL+"pages/columnGoods/HotNewGoods/index?type=3&name=首发新品";break;case"routine_home_benefit_banner":this.url=this.BaseURL+"pages/columnGoods/HotNewGoods/index?type=4&name=促销单品";break;case"user_recharge_quota":this.url="",this.getListHeader();break;case"admin_login_slide":case"integral_shop_banner":this.url=""}},addBox:function(){var t;0==this.tabList.list.length?(this.tabList.list.push(this.lastObj),this.lastObj={add_time:"",comment:"",gid:"",id:"",img:"",link:"",sort:"",status:1}):5==this.tabList.list.length?this.$Message.warning("最多添加五张呦"):(t=JSON.parse(JSON.stringify(this.lastObj)),this.tabList.list.push(t))},bindDelete:function(t,i){this.tabList.list.splice(i,1)},modalPicTap:function(t,i){this.activeIndex=i,this.modalPic=!0},getPic:function(t){var i=this;this.$nextTick((function(){"admin_login_slide"==i.name?i.tabList.list[i.activeIndex].slide=t.att_dir:i.tabList.list[i.activeIndex].img=t.att_dir,i.modalPic=!1}))},save:function(){var t=this;1==this.a?this.onsubmit("formValidate"):2==this.guide?(this.formItem.value=this.tabList.list,Object(u.J)(this.formItem).then((function(i){t.$Message.success(i.msg)}))):(this.loadingExist=!0,Object(u.I)({gid:this.pageId,config_name:this.name,data:this.tabList.list}).then((function(i){t.loadingExist=!1,t.$Message.success(i.msg)})).catch((function(i){t.loadingExist=!1,t.$Message.error(i.msg)})))},link:function(t){this.activeIndexs=t,this.$refs.linkaddres.modals=!0},getListHeader:function(){var t=this;this.loading=!0,Object(u.D)({config_name:this.name},"setting/sign_data/header").then((function(i){i=i.data.header,t.columns1=i,t.loading=!1})).catch((function(i){t.loading=!1,t.$Message.error(i.msg)}))},edit:function(t){var i=this;this.$modalForm(Object(u.C)({gid:this.pageId,config_name:this.name},"setting/group_data/"+t.id+"/edit")).then((function(){i.info(),i.url=i.BaseURL+"pages/users/user_sgin/index"}))},del:function(t,i,e){var s=this;i={title:i,num:e,url:"setting/group_data/"+t.id,method:"DELETE",ids:""};this.$modalSure(i).then((function(t){s.info(),s.$Message.success(t.msg)})).catch((function(t){s.$Message.error(t.msg)}))},onchangeIsShow:function(t){var i=this;Object(u.F)("setting/group_data/set_status/"+t.id+"/"+t.status).then(function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.url=i.BaseURL+"/pages/users/user_sgin/index",i.$Message.success(e.msg),i.info();case 3:case"end":return t.stop()}}),t)})));return function(i){return t.apply(this,arguments)}}()).catch((function(t){i.url=i.BaseURL+"/pages/users/user_sgin/index",i.$Message.error(t.msg)}))},getGroupAll:function(){var t=this;Object(u.A)().then(function(){var i=Object(s.a)(regeneratorRuntime.mark((function i(e){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t.groupAll=e.data,t.sortName=e.data[0].config_name,t.pageId=e.data[0].id;case 3:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}()).catch((function(i){t.$Message.error(i.msg)}))},getContent:function(t){this.formValidate.content=t},onsubmit:function(t){var i=this;this.$refs[t].validate((function(t){if(!t)return!1;Object(u.T)(i.formValidate).then(function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.$Message.success(e.msg);case 1:case"end":return t.stop()}}),t)})));return function(i){return t.apply(this,arguments)}}()).catch((function(t){i.$Message.error(t.msg)}))}))},getAgreement:function(){var t=this;Object(u.t)().then(function(){var i=Object(s.a)(regeneratorRuntime.mark((function i(e){var s;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:s=e.data,t.formValidate={content:s.content};case 2:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}()).catch((function(i){t.loading=!1,t.$Message.error(i.msg)}))}}},e("c338"),m=e("2877"),g=Object(m.a)(c,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{style:t.bgcolors},[s("div",{staticClass:"i-layout-page-header"},[s("span",{staticClass:"ivu-page-header-title mr20"},[t._v(t._s(t.$route.meta.title))]),s("div",[s("div",{staticStyle:{float:"right"}},[s("Button",{staticClass:"bnt",attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)])]),s("div",{staticClass:"box-wrapper"},[!t.$route.params.id&&t.groupAll.length?s("div",{staticClass:"left-wrapper"},[s("Menu",{attrs:{theme:t.theme3,"active-name":t.sortName,width:"auto"}},[s("MenuGroup",[t._l(t.groupAll,(function(i,e){return s("MenuItem",{key:e,staticClass:"menu-item",attrs:{name:i.config_name},nativeOn:{click:function(e){return t.edits(i)}}},[t._v("\n            "+t._s(i.name)+"\n          ")])})),s("MenuItem",{staticClass:"menu-item",attrs:{name:"guide"},nativeOn:{click:function(i){return t.edits(2)}}},[t._v(" 开屏广告 ")])],2)],1)],1):t._e(),"user_recharge_quota"==t.name?s("div",{staticClass:"iframe"},[s("div",{staticClass:"iframe-boxs"},[s("div",{staticClass:"moneyBox"},[t._m(0),s("div",{staticClass:"moneyBox_content"},[t._m(1),s("div",{staticClass:"box3"},[t._l(t.sginList.list,(function(i,e){return s("div",{directives:[{name:"show",rawName:"v-show",value:0!=i.status,expression:"item.status != 0"}],key:e,staticClass:"box3_box"},[s("div",[t._v(t._s(i.price)),s("i",{staticClass:"font"},[t._v("元")])]),s("div",{staticClass:"font"},[t._v("赠送:"+t._s(i.give_money)+"元")])])})),t._m(2)],2),t._m(3),s("div",{staticClass:"box5"},[t._v("立即充值")])])])])]):t._e(),"admin_login_slide"==t.name?s("div",{staticClass:"pciframe",attrs:{bordered:!1,"dis-hover":""}},[s("img",{staticClass:"pciframe-box",attrs:{src:e("590d")}}),s("div",{staticClass:"pcmoddile_goods"},[""==t.tabList.list?s("div",{staticClass:"nofont"},[t._v("暂无照片，请添加~")]):s("swiper",{staticClass:"pcswiperimg_goods",attrs:{options:t.swiperOption}},t._l(t.tabList.list,(function(t,i){return s("swiper-slide",{key:i,staticClass:"spcwiperimg_goods"},[s("img",{attrs:{src:t.slide}})])})),1)],1)]):t._e(),"integral_shop_banner"==t.name?s("div",{staticClass:"iframe",attrs:{bordered:!1}},[s("div",{staticClass:"iframe-box"},[s("img",{staticStyle:{width:"100%"},attrs:{src:e("d50d")}}),s("div",{staticClass:"moddile_goods"},[""!=t.tabList.list&&t.tabList.list.length&&t.tabList.list[0].img?s("swiper",{staticClass:"pcswiperimg_goods",attrs:{options:t.swiperOption}},t._l(t.tabList.list,(function(t,i){return s("swiper-slide",{key:i,staticClass:"swiperimg_goods"},[s("img",{attrs:{src:t.img}})])})),1):s("div",{staticClass:"nofonts"},[t._v("\n            暂无照片，请添加~\n          ")])],1)])]):t._e(),"sign_day_num"!=t.name&&"admin_login_slide"!=t.name&&"user_recharge_quota"!=t.name&&"integral_shop_banner"!=t.name&&1!=t.a&&2!=t.guide?s("div",{staticClass:"iframe",attrs:{bordered:!1,"dis-hover":""}},[s("iframe",{staticClass:"iframe-box",attrs:{src:t.url,frameborder:"0"}}),s("div",{staticClass:"moddile"}),"routine_home_bast_banner"==t.name||"routine_home_hot_banner"==t.name||"routine_home_new_banner"==t.name||"routine_home_benefit_banner"==t.name?s("div",{staticClass:"moddile_box"},[""!=t.tabList.list&&t.tabList.list.length&&t.tabList.list[0].img?s("swiper",{staticClass:"swiperimg",attrs:{options:t.swiperOption}},t._l(t.tabList.list,(function(t,i){return s("swiper-slide",{key:i,staticClass:"swiperimg"},[s("img",{attrs:{src:t.img}})])})),1):s("div",{staticClass:"nofonts"},[t._v("\n          暂无照片，请添加~\n        ")])],1):t._e(),"combination_banner"==t.name?s("div",{staticClass:"moddile_goods"},[""==t.tabList.list?s("div",{staticClass:"nofonts"},[t._v("暂无照片，请添加~")]):s("swiper",{staticClass:"swiperimg_goods",attrs:{options:t.swiperOption}},t._l(t.tabList.list,(function(t,i){return s("swiper-slide",{key:i,staticClass:"swiperimg_goods"},[s("img",{attrs:{src:t.img}})])})),1)],1):t._e()]):t._e(),"sign_day_num"==t.name?s("div",{staticClass:"iframe",attrs:{bordered:!1}},[s("div",{staticClass:"iframe-box"},[1==t.bgimg?s("img",{attrs:{src:e("713f")}}):t._e(),2==t.bgimg?s("img",{attrs:{src:e("bceb")}}):t._e(),3==t.bgimg?s("img",{attrs:{src:e("90be")}}):t._e(),4==t.bgimg?s("img",{attrs:{src:e("943f")}}):t._e(),5==t.bgimg?s("img",{attrs:{src:e("89c2")}}):t._e()])]):t._e(),1==t.a?s("div",{staticClass:"iframe",attrs:{bordered:!1}},[s("div",{staticClass:"agreement-box"},[s("div",{staticClass:"template"}),s("div",{staticClass:"htmls_box"},[s("div",{staticClass:"htmls_top"},[t._v("服务协议与隐私政策")]),t._m(4),s("div",{staticClass:"htmls",domProps:{innerHTML:t._s(t.formValidate.content)}})])])]):t._e(),1==t.a?s("div",{staticStyle:{"margin-left":"40px"}},[s("div",{staticClass:"table_box"},[s("div",{attrs:{type:"flex"}},[s("div",t._b({},"div",t.grid,!1),[s("div",{staticClass:"title"},[t._v("隐私权限页面展示：")])])]),s("div",[s("Form",{ref:"formValidate",staticClass:"form",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[s("div",{staticClass:"goodsTitle acea-row"}),s("FormItem",{staticStyle:{margin:"0px"},attrs:{label:"",prop:"content"}},[s("WangEditor",{staticStyle:{width:"90%"},attrs:{content:t.formValidate.content},on:{editorContent:t.getEditorContent}})],1)],1)],1)])]):t._e(),2==t.guide?s("div",{staticClass:"iframe",attrs:{bordered:!1}},[""!=t.tabList.list&&t.tabList.list.length&&t.tabList.list[0].img?s("swiper",{staticClass:"swiperimgs",attrs:{options:t.swiperOption}},t._l(t.tabList.list,(function(t,i){return s("swiper-slide",{key:i,staticClass:"swiperimgs"},[s("img",{attrs:{src:t.img}})])})),1):s("div",{staticClass:"nofonts"},[t._v("\n        暂无照片，请添加~\n      ")])],1):t._e(),"sign_day_num"==t.name?s("div",{staticStyle:{"margin-left":"20px"}},[s("div",{staticClass:"table_box"},[s("div",{attrs:{type:"flex"}},[s("div",t._b({},"div",t.grid,!1),[s("div",{staticClass:"title"},[t._v("签到天数设置")]),s("Button",{staticStyle:{"margin-left":"14px","margin-top":"30px"},attrs:{type:"primary",icon:"md-add"},on:{click:function(i){return t.groupAdd("添加数据")}}},[t._v("添加数据")])],1)]),s("div",{staticClass:"table"},[s("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.cmsList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"status",fn:function(i){var e=i.row;return i.index,[s("i-switch",{attrs:{value:e.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(i){return t.onchangeIsShow(e)}},model:{value:e.status,callback:function(i){t.$set(e,"status",i)},expression:"row.status"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(i){var e=i.row,a=i.index;return[s("a",{on:{click:function(i){return t.edit(e,"编辑")}}},[t._v("编辑")]),s("Divider",{attrs:{type:"vertical"}}),s("a",{on:{click:function(i){return t.del(e,"删除这条信息",a)}}},[t._v("删除")])]}}],null,!1,1621473426)})],1)])]):t._e(),"user_recharge_quota"==t.name?s("div",{staticStyle:{"margin-left":"20px"}},[s("div",{staticClass:"table_box"},[s("div",{attrs:{type:"flex"}},[s("div",t._b({},"div",t.grid,!1),[s("div",{staticClass:"title"},[t._v("充值金额设置")]),s("Button",{staticStyle:{"margin-left":"14px","margin-top":"30px"},attrs:{type:"primary",icon:"md-add"},on:{click:function(i){return t.groupAdd("添加数据")}}},[t._v("添加数据")])],1)]),s("div",{staticClass:"table"},[s("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.sginList.list,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"status",fn:function(i){var e=i.row;return i.index,[s("i-switch",{attrs:{value:e.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(i){return t.onchangeIsShow(e)}},model:{value:e.status,callback:function(i){t.$set(e,"status",i)},expression:"row.status"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(i){var e=i.row,a=i.index;return[s("a",{on:{click:function(i){return t.edit(e,"编辑")}}},[t._v("编辑")]),s("Divider",{attrs:{type:"vertical"}}),s("a",{on:{click:function(i){return t.del(e,"删除这条信息",a)}}},[t._v("删除")])]}}],null,!1,1621473426)})],1)])]):s("div",["sign_day_num"!=t.name&&1!=t.a&&2!=t.guide?s("div",{class:"admin_login_slide"!=t.name?"content":"contents"},[s("div",{staticClass:"right-box"},[s("div",{staticClass:"hot_imgs"},["admin_login_slide"==t.name?s("div",{staticClass:"title"},[t._v("幻灯片设置")]):s("div",{staticClass:"title"},[t._v("轮播图设置")]),s("div",{staticClass:"title-text"},[t._v("建议尺寸：690 * 240px，拖拽图片可调整图片顺序哦，最多添加五张")]),s("div",{staticClass:"list-box"},["admin_login_slide"==t.name?s("draggable",{staticClass:"dragArea list-group Bbox",attrs:{list:t.tabList.list,group:"peoples",handle:".move-icon"}},t._l(t.tabList.list,(function(i,e){return s("div",{key:e,staticClass:"items"},[s("div",{staticClass:"move-icon"},[s("span",{staticClass:"iconfont icondrag2"})]),s("div",{staticClass:"img-box",on:{click:function(i){return t.modalPicTap("单选",e)}}},[i.slide?s("img",{attrs:{src:i.slide,alt:""}}):s("div",{staticClass:"upload-box"},[s("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1),s("div",{staticClass:"delect-btn",on:{click:function(s){return s.stopPropagation(),t.bindDelete(i,e)}}},[s("Icon",{attrs:{type:"md-close-circle",size:"26"}})],1)]),s("div",{staticClass:"info"})])})),0):s("draggable",{staticClass:"dragArea list-group",attrs:{list:t.tabList.list,group:"peoples",handle:".move-icon"}},t._l(t.tabList.list,(function(i,e){return s("div",{key:e,staticClass:"item"},[s("div",{staticClass:"move-icon"},[s("span",{staticClass:"iconfont icondrag2"})]),s("div",{staticClass:"img-box",on:{click:function(i){return t.modalPicTap("单选",e)}}},[i.img?s("img",{attrs:{src:i.img,alt:""}}):s("div",{staticClass:"upload-box"},[s("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1),s("div",{staticClass:"delect-btn",on:{click:function(s){return s.stopPropagation(),t.bindDelete(i,e)}}},[s("Icon",{attrs:{type:"md-close-circle",size:"26"}})],1)]),s("div",{staticClass:"info"},[s("div",{staticClass:"info-item"},[s("span",[t._v("图片名称：")]),s("div",{staticClass:"input-box"},[s("Input",{attrs:{placeholder:"请填写名称"},model:{value:i.comment,callback:function(e){t.$set(i,"comment",e)},expression:"item.comment"}})],1)]),s("div",{staticClass:"info-item"},[s("span",[t._v("链接地址：")]),s("div",{staticClass:"input-box",on:{click:function(i){return t.link(e)}}},[s("Input",{attrs:{icon:"ios-arrow-forward",readonly:"",placeholder:"选择链接"},model:{value:i.link,callback:function(e){t.$set(i,"link",e)},expression:"item.link"}})],1)])])])})),0),s("div",[s("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":999},model:{value:t.modalPic,callback:function(i){t.modalPic=i},expression:"modalPic"}},[t.modalPic?s("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)],1),[s("div",{staticClass:"add-btn"},[s("Button",{staticStyle:{width:"100px",height:"35px","background-color":"#1890ff",color:"#ffffff"},attrs:{type:"primary",ghost:""},on:{click:t.addBox}},[t._v("添加图片\n                ")])],1)]],2)])]):t._e()]),2===t.guide?s("div",{class:"admin_login_slide"!=t.name?"content":"contents"},[s("div",{staticClass:"right-box"},[s("div",{staticClass:"hot_imgs"},[s("div",{staticClass:"title"},[t._v("引导页设置")]),s("div",{staticClass:"title-text"},[t._v("建议尺寸：750 * 1334px，拖拽图片可调整图片顺序哦，最多添加五张")]),s("div",{staticClass:"list-box"},[s("div",[s("Form",{attrs:{model:t.formItem,"label-width":80}},[s("FormItem",{attrs:{label:"开屏广告:"}},[s("i-switch",{attrs:{"true-value":1,"false-value":0,size:"large"},model:{value:t.formItem.status,callback:function(i){t.$set(t.formItem,"status",i)},expression:"formItem.status"}},[s("span",{attrs:{slot:"开"},slot:"开"},[t._v("开启")]),s("span",{attrs:{slot:"关"},slot:"关"},[t._v("关闭")])])],1),s("FormItem",{attrs:{label:"广告时间:"}},[s("Input",{staticStyle:{width:"150px"},attrs:{type:"number",placeholder:"请输入开屏广告时间"},model:{value:t.formItem.time,callback:function(i){t.$set(t.formItem,"time",t._n(i))},expression:"formItem.time"}}),t._v("\n                  单位(秒)\n                ")],1)],1)],1),s("draggable",{staticClass:"dragArea list-group",attrs:{list:t.tabList.list,group:"peoples",handle:".move-icon"}},t._l(t.tabList.list,(function(i,e){return s("div",{key:e,staticClass:"item"},[s("div",{staticClass:"move-icon"},[s("span",{staticClass:"iconfont icondrag2"})]),s("div",{staticClass:"img-box",on:{click:function(i){return t.modalPicTap("单选",e)}}},[i.img?s("img",{attrs:{src:i.img,alt:""}}):s("div",{staticClass:"upload-box"},[s("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1),s("div",{staticClass:"delect-btn",on:{click:function(s){return s.stopPropagation(),t.bindDelete(i,e)}}},[s("Icon",{attrs:{type:"md-close-circle",size:"26"}})],1)]),s("div",{staticClass:"info"},[s("div",{staticClass:"info-item"},[s("span",[t._v("图片名称：")]),s("div",{staticClass:"input-box"},[s("Input",{attrs:{placeholder:"请填写名称"},model:{value:i.comment,callback:function(e){t.$set(i,"comment",e)},expression:"item.comment"}})],1)]),s("div",{staticClass:"info-item"},[s("span",[t._v("链接地址：")]),s("div",{staticClass:"input-box",on:{click:function(i){return t.link(e)}}},[s("Input",{attrs:{icon:"ios-arrow-forward",readonly:"",placeholder:"选择链接"},model:{value:i.link,callback:function(e){t.$set(i,"link",e)},expression:"item.link"}})],1)])])])})),0),s("div",[s("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":999},model:{value:t.modalPic,callback:function(i){t.modalPic=i},expression:"modalPic"}},[t.modalPic?s("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)],1),t.tabList.list.length<5?[s("div",{staticClass:"add-btn"},[s("Button",{staticStyle:{width:"100px",height:"35px","background-color":"#1890ff",color:"#ffffff"},attrs:{type:"primary",ghost:""},on:{click:t.addBox}},[t._v("添加图片\n              ")])],1)]:t._e()],2)])]):t._e()]),s("linkaddress",{ref:"linkaddres",on:{linkUrl:t.linkUrl}})],1)}),[function(){var t=this,i=t.$createElement;i=t._self._c||i;return i("div",{staticClass:"box1"},[i("div",{staticClass:"font1"},[t._v("我的余额")]),i("div",[t._v("￥ "),i("i",{staticClass:"font2"},[t._v("0.00")])])])},function(){var t=this.$createElement;t=this._self._c||t;return t("div",{staticClass:"box2"},[t("div",[this._v("账户充值")]),t("div",[this._v("佣金导入")])])},function(){var t=this.$createElement;t=this._self._c||t;return t("div",{staticClass:"box3_box"},[t("div",{staticClass:"other"},[this._v("其他")])])},function(){var t=this,i=t.$createElement;i=t._self._c||i;return i("div",{staticClass:"box4"},[i("div",{staticClass:"tips"},[t._v("注意事项：")]),i("div",{staticClass:"tips-samll"},[i("p",[t._v("充值后帐户的金额不能提现，可用于商城消费使用。")]),i("p",[t._v("佣金导入账户之后不能再次导出、不可提现。")]),i("p",[t._v("账户充值出现问题可联系商城客服，也可拨打商城客服热线：40088888889。")])])])},function(){var t=this.$createElement;t=this._self._c||t;return t("div",{staticClass:"htmls_font"},[t("div",{staticClass:"ok"},[this._v("我同意")]),t("div",[this._v("不同意")])])}],!1,null,"6f86cc63",null);i.default=g.exports},d50d:function(t,i,e){t.exports=e.p+"img/integral.fcfc352b.png"}}]);