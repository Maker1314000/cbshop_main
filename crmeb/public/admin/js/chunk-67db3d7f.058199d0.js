(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67db3d7f"],{"1bae":function(t,a,i){t.exports=i.p+"img/sort03.67811897.jpg"},"2d61":function(t,a,i){},4274:function(t,a,i){t.exports=i.p+"img/sort01.e157a5ea.jpg"},"44e9":function(t,a,i){},"574c":function(t,a,i){"use strict";var e=i("44e9"),s=i.n(e);s.a},"757d":function(t,a,i){},"857a":function(t,a,i){var e=i("e330"),s=i("1d80"),n=i("577e"),r=/"/g,o=e("".replace);t.exports=function(t,a,i,e){var c=n(s(t)),l="<"+a;return""!==i&&(l+=" "+i+'="'+o(n(e),r,"&quot;")+'"'),l+">"+c+"</"+a+">"}},8752:function(t,a,i){},9911:function(t,a,i){"use strict";var e=i("23e7"),s=i("857a"),n=i("af03");e({target:"String",proto:!0,forced:n("link")},{link:function(t){return s(this,"a","href",t)}})},af03:function(t,a,i){var e=i("d039");t.exports=function(t){return e((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}))}},b27c:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"i-layout-page-header"},[i("span",{staticClass:"ivu-page-header-title mr20"},[t._v("页面装修")]),i("div",[1==t.cardShow||2==t.cardShow?i("div",{staticStyle:{float:"right"}},[i("Button",{staticClass:"bnt",attrs:{type:"primary",loading:t.loadingExist},on:{click:t.submit}},[t._v("保存")]),i("Button",{staticClass:"bnt ml20",on:{click:t.reast}},[t._v("重置")])],1):t._e()])]),i("Row",{staticClass:"ivu-mt box-wrapper"},[i("Col",{staticClass:"left-wrapper",attrs:{span:"3"}},[i("Menu",{attrs:{theme:t.theme3,"active-name":1,width:"auto"}},[i("MenuGroup",t._l(t.menuList,(function(a,e){return i("MenuItem",{key:e,attrs:{name:a.id},nativeOn:{click:function(a){return t.bindMenuItem(e)}}},[t._v("\n            "+t._s(a.name)+"\n          ")])})),1)],1)],1),i("Col",{staticClass:"right-wrapper",attrs:{span:"21"}},[0==t.cardShow?i("Card",{attrs:{bordered:!1,"dis-hover":""}},[0==t.cardShow?i("Row",[t.isDiy?i("Col",{staticStyle:{width:"310px",height:"550px","margin-right":"30px",position:"relative"}},[i("iframe",{ref:"iframe",staticClass:"iframe-box",attrs:{src:t.imgUrl,frameborder:"0"}}),i("div",{staticClass:"mask"})]):t._e(),i("Col",t._b({class:t.isDiy?"table":"",attrs:{span:t.isDiy?"":24}},"Col",t.isDiy?t.grid:"",!1),[i("div",{staticClass:"acea-row row-between-wrapper"},[i("Row",{attrs:{type:"flex"}},[i("Col",t._b({},"Col",t.grid,!1),[i("div",{staticClass:"button acea-row row-middle"},[i("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加专题页")])],1)])],1)],1),i("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.list,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"region",fn:function(a){a.row,a.index;return[i("div",{staticClass:"font-blue"},[t._v("首页")])]}},{key:"type_name",fn:function(a){var e=a.row;a.index;return[e.is_diy?i("Tag",{attrs:{color:"primary"}},[t._v(t._s(e.type_name)+t._s(e.id))]):i("Tag",{attrs:{color:"warning"}},[t._v(t._s(e.type_name))]),1==e.status?i("Tag",{attrs:{color:"success"}},[t._v("首页")]):t._e()]}},{key:"action",fn:function(a){var e=a.row,s=a.index;return[e.status||e.is_diy?i("div",{staticStyle:{display:"inline-block"},on:{click:function(a){return t.edit(e)}}},[1===e.is_diy?i("a",{ref:"target",staticClass:"target",attrs:{href:t.url+"/admin/setting/pages/diy_index?id="+e.id+"&name="+(e.template_name||"moren"),target:"_blank"}},[t._v("\n                    编辑")]):i("a",{staticClass:"target"},[t._v("编辑")])]):t._e(),(e.status||e.is_diy)&&1!=e.id&&1!=e.status?i("Divider",{attrs:{type:"vertical"}}):t._e(),1!=e.id&&1!=e.status?i("div",{staticStyle:{display:"inline-block"}},[i("a",{on:{click:function(a){return t.del(e,"删除此模板",s)}}},[t._v("删除")])]):t._e(),1!=e.id&&1!=e.status||e.is_diy?i("Divider",{attrs:{type:"vertical"}}):t._e(),e.is_diy?i("div",{staticStyle:{display:"inline-block"}},[i("a",{on:{click:function(a){return t.preview(e,s)}}},[t._v("预览")])]):t._e(),e.is_diy&&1!=e.status?i("Divider",{attrs:{type:"vertical"}}):t._e(),1!=e.status?i("div",{staticStyle:{display:"inline-block"}},[i("a",{on:{click:function(a){return t.setStatus(e,s)}}},[t._v("设为首页")])]):t._e()]}}],null,!1,4022603061)}),i("div",{staticClass:"acea-row row-right page"},[i("Page",{attrs:{total:t.total,current:t.diyFrom.page,"show-elevator":"","show-total":"","page-size":t.diyFrom.limit},on:{"on-change":t.pageChange}})],1)],1)],1):t._e()],1):1==t.cardShow?i("goodClass",{ref:"category",on:{parentFun:t.getChildData}}):i("users",{ref:"users",on:{parentFun:t.getChildData}})],1)],1),i("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:"开发移动端链接","z-index":1,width:"500"},on:{"on-cancel":t.cancel},model:{value:t.isTemplate,callback:function(a){t.isTemplate=a},expression:"isTemplate"}},[i("div",{staticClass:"article-manager"},[i("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[i("Form",{ref:"formItem",attrs:{model:t.formItem,"label-width":120,"label-position":"right",rules:t.ruleValidate},nativeOn:{submit:function(t){t.preventDefault()}}},[i("Row",{attrs:{type:"flex",gutter:24}},[i("Col",{attrs:{span:"24"}},[i("Col",t._b({},"Col",t.grid,!1),[i("FormItem",{attrs:{label:"开发移动端链接：",prop:"link","label-for":"link"}},[i("Input",{attrs:{placeholder:"http://localhost:8080"},model:{value:t.formItem.link,callback:function(a){t.$set(t.formItem,"link",a)},expression:"formItem.link"}})],1)],1)],1)],1),i("Row",{attrs:{type:"flex"}},[i("Col",t._b({},"Col",t.grid,!1),[i("Button",{staticClass:"ml20",staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(a){return t.handleSubmit("formItem")}}},[t._v("提交")])],1)],1)],1)],1)],1)]),i("Modal",{attrs:{title:"预览","footer-hide":""},model:{value:t.modal,callback:function(a){t.modal=a},expression:"modal"}},[i("div",[i("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"acea-row row-around code"},[i("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[i("div",{ref:"qrCodeUrl",staticClass:"QRpic"}),i("span",{staticClass:"mt10"},[t._v("公众号二维码")])]),i("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[i("div",{staticClass:"QRpic"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.qrcodeImg,expression:"qrcodeImg"}]})]),i("span",{staticClass:"mt10"},[t._v("小程序二维码")])])])])])],1)},s=[],n=i("c964"),r=i("f3f3"),o=(i("96cf"),i("ac1f"),i("5319"),i("99af"),i("9911"),i("d708")),c=(i("b311"),i("f478")),l=i("2f62"),d=i("d044"),u=i.n(d),p=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"goodClass"},[i("Card",{attrs:{bordered:!1,"dis-hover":""}},[i("div",{staticClass:"list acea-row row-top"},t._l(t.classList,(function(a,e){return i("div",{key:e,staticClass:"item",class:t.activeStyle==e?"on":"",on:{click:function(a){return t.selectTap(e)}}},[i("div",{staticClass:"pictrue"},[i("img",{attrs:{src:a.image}})]),i("div",{staticClass:"name"},[t._v(t._s(a.name))])])})),0)])],1)},m=[],v={name:"goodClass",props:{},data:function(){return{classList:[{image:i("4274"),name:"样式1"},{image:i("e4dc"),name:"样式2"},{image:i("1bae"),name:"样式3"}],activeStyle:"-1"}},created:function(){this.getInfo()},methods:{getInfo:function(){var t=this;Object(c["h"])("category").then((function(a){t.activeStyle=a.data.status?a.data.status-1:0}))},selectTap:function(t){this.activeStyle=t},onSubmit:function(t){var a=this;this.$emit("parentFun",!0),this.activeStyle=1==t?0:this.activeStyle,Object(c["b"])(1==t?1:this.activeStyle+1,"category").then((function(t){a.$emit("parentFun",!1),a.$Message.success(t.msg)})).catch((function(t){a.$Message.error(t.msg),a.$emit("parentFun",!1)}))}}},h=v,f=(i("db87"),i("2877")),g=Object(f["a"])(h,p,m,!1,null,"167eb568",null),C=g.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"users"},[e("Card",{attrs:{bordered:!1,"dis-hover":""}},[e("div",{staticClass:"acea-row row-top"},[e("div",{staticClass:"left",style:t.colorStyle},[e("div",{staticClass:"header",class:3==t.userData.status?"bgColor":""},[e("div",{staticClass:"top acea-row row-between-wrapper"},[e("div",{staticClass:"picTxt acea-row row-middle"},[e("div",{staticClass:"pictrue"},[e("img",{attrs:{src:i("cdfe")}})]),e("div",{staticClass:"txt"},[e("div",{staticClass:"name"},[t._v("用户名称用户名称")]),e("div",{staticClass:"phone acea-row row-center-wrapper"},[t._v("\n                  绑定手机号"),e("span",{staticClass:"iconfont iconjinru"})])])]),e("div",{staticClass:"acea-row row-middle"},[e("div",{staticClass:"news"},[e("span",{staticClass:"iconfont icons-kefu"}),e("div",{staticClass:"num"},[t._v("6")])]),e("span",{staticClass:"iconfont iconshezhi"})])]),e("div",{staticClass:"center acea-row row-around"},[e("div",{staticClass:"item"},[e("div",{staticClass:"num"},[t._v("0.00")]),e("div",{staticClass:"font"},[t._v("我的余额")])]),e("div",{staticClass:"item"},[e("div",{staticClass:"num"},[t._v("65749")]),e("div",{staticClass:"font"},[t._v("当前积分")])]),e("div",{staticClass:"item"},[e("div",{staticClass:"num"},[t._v("25")]),e("div",{staticClass:"font"},[t._v("优惠券")])])]),1==t.userData.status?e("div",{staticClass:"bottom acea-row row-between-wrapper"},[e("div",[t._v("会员到期 2022-12-31")]),e("div",{staticClass:"renew"},[t._v("立即续费"),e("span",{staticClass:"iconfont iconjinru"})])]):t._e(),3==t.userData.status?e("div",{staticClass:"bottomB acea-row row-between"},[e("div",{staticClass:"vip"},[e("img",{attrs:{src:i("bf67")}}),t._v("开通会员VIP")]),e("div",[t._v("会员可享多项权益"),e("span",{staticClass:"iconfont iconjinru"})])]):t._e()]),2==t.userData.status?e("div",{staticClass:"member acea-row row-between-wrapper"},[e("div",{staticClass:"text"},[e("div",{staticClass:"title"},[t._v("会员可享多项权益")]),e("div",[t._v("会员剩余360天")])]),e("div",{staticClass:"bnt"},[t._v("立即续费")])]):t._e(),e("div",{staticClass:"orderCenter on dotted",class:4==t.current?"solid":"",on:{click:function(a){return t.currentShow(4)}}},[e("div",{staticClass:"title acea-row row-between-wrapper"},[e("div",[t._v("订单中心")]),e("div",{staticClass:"all"},[t._v("查看全部"),e("span",{staticClass:"iconfont iconjinru"})])]),e("div",{staticClass:"list acea-row row-around"},[e("div",{staticClass:"item"},[e("div",{staticClass:"iconfont",class:t.order.dfk}),e("div",[t._v("待付款")])]),e("div",{staticClass:"item"},[e("div",{staticClass:"iconfont",class:t.order.dfh}),e("div",[t._v("待发货")])]),e("div",{staticClass:"item"},[e("div",{staticClass:"iconfont",class:t.order.dsh}),e("div",[t._v("待收货")])]),e("div",{staticClass:"item"},[e("div",{staticClass:"iconfont",class:t.order.dpj}),e("div",[t._v("待评价")])]),e("div",{staticClass:"item"},[e("div",{staticClass:"iconfont",class:t.order.sh}),e("div",[t._v("售后/退款")])])])]),e("div",{staticClass:"carousel dotted",class:1==t.current?"solid":"",on:{click:function(a){return t.currentShow(1)}}},[t.userData.routine_my_banner.length?e("swiper",{staticClass:"swiperimg",attrs:{options:t.swiperOption}},[t._l(t.userData.routine_my_banner,(function(t,a){return e("swiper-slide",{key:a,staticClass:"swiperimg"},[e("img",{attrs:{src:t.pic}})])})),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):e("div",{staticClass:"default"},[t._v("暂无广告数据")])],1),e("div",{staticClass:"orderCenter service dotted",class:2==t.current?"solid":"",on:{click:function(a){return t.currentShow(2)}}},[e("div",{staticClass:"title acea-row row-between-wrapper"},[e("div",[t._v("我的服务")])]),e("div",{staticClass:"list acea-row"},t._l(t.MyMenus,(function(a,i){return a.pic?e("div",{key:i,staticClass:"item"},[e("div",{staticClass:"pictrue"},[a.pic&&""!=a.pic?e("img",{attrs:{src:a.pic}}):e("span",{staticClass:"iconfont icontupian1"})]),e("div",[t._v(t._s(a.name?a.name:"服务名称"))])]):t._e()})),0)]),e("div",{staticClass:"orderCenter service dotted",class:3==t.current?"solid":"",on:{click:function(a){return t.currentShow(3)}}},[e("div",{staticClass:"title acea-row row-between-wrapper"},[e("div",[t._v("商家管理")])]),e("div",{staticClass:"list acea-row"},t._l(t.storeMenu,(function(a,i){return a.pic?e("div",{key:i,staticClass:"item"},[e("div",{staticClass:"pictrue"},[e("img",{attrs:{src:a.pic}})]),e("div",[t._v(t._s(a.name))])]):t._e()})),0)])]),e("div",{staticClass:"right"},[e("div",{staticClass:"title"},[t._v("页面设置")]),e("div",{staticClass:"c_row-item"},[e("Col",{staticClass:"label",attrs:{span:"4"}},[t._v(" 页面风格： ")]),e("Col",{staticClass:"slider-box",attrs:{span:"20"}},[e("RadioGroup",{model:{value:t.userData.status,callback:function(a){t.$set(t.userData,"status",a)},expression:"userData.status"}},[e("Radio",{attrs:{label:1}},[e("Icon"),e("span",[t._v("样式1")])],1),e("Radio",{attrs:{label:2}},[e("Icon"),e("span",[t._v("样式2")])],1),e("Radio",{attrs:{label:3}},[e("Icon"),e("span",[t._v("样式3")])],1)],1)],1)],1),4==t.current?e("div",{staticClass:"c_row-item"},[e("Col",{staticClass:"label",attrs:{span:"4"}},[t._v(" 订单中心： ")]),e("Col",{staticClass:"slider-box",attrs:{span:"20"}},[e("RadioGroup",{on:{"on-change":t.orderStyle},model:{value:t.userData.order_status,callback:function(a){t.$set(t.userData,"order_status",a)},expression:"userData.order_status"}},[e("Radio",{attrs:{label:1}},[e("Icon"),e("span",[t._v("样式1")])],1),e("Radio",{attrs:{label:2}},[e("Icon"),e("span",[t._v("样式2")])],1),e("Radio",{attrs:{label:3}},[e("Icon"),e("span",[t._v("样式3")])],1),e("Radio",{attrs:{label:4}},[e("Icon"),e("span",[t._v("样式4")])],1),e("Radio",{attrs:{label:5}},[e("Icon"),e("span",[t._v("样式5")])],1)],1)],1)],1):t._e(),1==t.current?e("div",{staticClass:"c_row-item acea-row row-top"},[e("Col",{staticClass:"label",attrs:{span:"4"}},[t._v(" 广告位： ")]),e("Col",{staticClass:"slider-box",attrs:{span:"20"}},[e("i-switch",{staticStyle:{"margin-bottom":"12px"},model:{value:t.userData.my_banner_status,callback:function(a){t.$set(t.userData,"my_banner_status",a)},expression:"userData.my_banner_status"}}),e("div",{staticClass:"info"},[t._v("建议尺寸：690 * 240px，拖拽图片可调整图片显示顺序哦，最多添加五张")]),e("uploadPic",{attrs:{listData:t.userData.routine_my_banner,type:2}})],1)],1):t._e(),2==t.current?e("div",{staticClass:"c_row-item acea-row row-top"},[e("Col",{staticClass:"label",attrs:{span:"4"}},[t._v(" 我的服务： ")]),e("Col",{staticClass:"slider-box",attrs:{span:"20"}},[e("div",{staticClass:"info"},[t._v("建议尺寸：86 * 86px，拖拽图片可调整图片显示顺序哦")]),e("uploadPic",{attrs:{listData:t.MyMenus}})],1)],1):t._e(),3==t.current?e("div",{staticClass:"c_row-item acea-row row-top"},[e("Col",{staticClass:"label",attrs:{span:"4"}},[t._v(" 商家管理： ")]),e("Col",{staticClass:"slider-box",attrs:{span:"20"}},[e("div",{staticClass:"info"},[t._v("建议尺寸：86 * 86px，拖拽图片可调整图片显示顺序哦，最多添加五张")]),e("uploadPic",{attrs:{listData:t.storeMenu,type:1}})],1)],1):t._e()])])])],1)},b=[],y=(i("d3b7"),i("159b"),i("b0c0"),function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"hot_imgs"},[i("div",{staticClass:"list-box"},[i("draggable",{staticClass:"dragArea list-group",attrs:{list:t.listData,group:"peoples",handle:".move-icon"}},t._l(t.listData,(function(a,e){return i("div",{key:e,staticClass:"item"},[i("div",{staticClass:"move-icon"},[i("span",{staticClass:"iconfont-diy icondrag"})]),i("div",{staticClass:"img-box",on:{click:function(a){return t.modalPicTap("单选",e)}}},[a.pic&&""!=a.pic?i("img",{attrs:{src:a.pic,alt:""}}):i("div",{staticClass:"upload-box"},[i("Icon",{attrs:{type:"ios-camera-outline",size:"36"}})],1)]),i("div",{staticClass:"info"},[a.hasOwnProperty("name")?i("div",{staticClass:"info-item"},[i("span",[t._v(t._s(1==t.type?"管理名称：":2==t.type?"广告名称":"服务名称："))]),i("div",{staticClass:"input-box"},[i("Input",{attrs:{placeholder:2==t.type?"请输入名称":"服务中心",maxlength:4},model:{value:a.name,callback:function(i){t.$set(a,"name",i)},expression:"item.name"}})],1)]):t._e(),i("div",{staticClass:"info-item"},[i("span",[t._v("链接地址：")]),i("div",{staticClass:"input-box",on:{click:function(a){return t.getLink(e)}}},[i("Input",{attrs:{icon:"ios-arrow-forward",readonly:"",placeholder:"选择链接"},model:{value:a.url,callback:function(i){t.$set(a,"url",i)},expression:"item.url"}})],1)])]),1!=t.type?i("div",{staticClass:"delect-btn",on:{click:function(i){return i.stopPropagation(),t.bindDelete(a,e)}}},[i("span",{staticClass:"iconfont-diy icondel_1"})]):t._e()])})),0),i("div",[i("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":1},model:{value:t.modalPic,callback:function(a){t.modalPic=a},expression:"modalPic"}},[t.modalPic?i("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)],1),t.listData?[1!=t.type&&2!=t.type||2==t.type&&t.listData.length<5?i("div",{staticClass:"add-btn"},[i("Button",{staticStyle:{width:"100px",height:"30px",background:"#1890ff",color:"#fff","font-size":"13px"},attrs:{type:"primary",ghost:""},on:{click:t.addBox}},[t._v("添加板块")])],1):t._e()]:t._e(),i("linkaddress",{ref:"linkaddres",on:{linkUrl:t.linkUrl}})],2)}),_=[],k=(i("a9e3"),i("e9c4"),i("a434"),i("310e")),x=i.n(k),D=i("b0e7"),S=i("7af3"),F={name:"uploadPic",props:{listData:{type:Array},type:{type:Number}},components:{draggable:x.a,uploadPictures:D["a"],linkaddress:S["a"]},data:function(){return{modalPic:!1,isChoice:"单选",gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},activeIndex:0,lastObj:{name:"",pic:"",url:""}}},mounted:function(){},watch:{configObj:{handler:function(t,a){},deep:!0}},methods:{linkUrl:function(t){this.listData[this.activeIndex].url=t},getLink:function(t){this.activeIndex=t,this.$refs.linkaddres.modals=!0},addBox:function(){if(0==this.listData.length)this.listData.push(this.lastObj);else{var t=JSON.parse(JSON.stringify(this.listData[this.listData.length-1]));t.name="",t.pic="",t.url="",this.listData.push(t)}},modalPicTap:function(t,a){this.activeIndex=a,this.modalPic=!0},addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,a){var i=new window.UE.ui.Dialog({iframeUrl:"/admin/widget.images/index.html?fodder=dialog",editor:t,name:a,title:"上传图片",cssRules:"width:960px;height:550px;padding:20px;"});this.dialog=i;var e=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){i.render(),i.open()}});return e}),37)},getPic:function(t){var a=this;this.$nextTick((function(){a.listData[a.activeIndex].pic=t.att_dir,a.modalPic=!1}))},bindDelete:function(t,a){1==this.listData.length&&(this.lastObj=this.listData[0]),this.listData.splice(a,1)}}},A=F,I=(i("ef80"),Object(f["a"])(A,y,_,!1,null,"21ad77f6",null)),j=I.exports,M={name:"users",components:{uploadPic:j},props:{},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"},autoplay:{delay:2e3,disableOnInteraction:!1},loop:!1},userData:{my_banner_status:!0,routine_my_banner:[],routine_my_menus:[],status:"",order_status:""},MyMenus:[{pic:"",url:"",name:"",sort:1,status:1}],storeMenu:[{pic:"",url:"",name:"",sort:1,status:1}],current:1,colorStyle:"",order:{},order01:{dfk:"icondaifukuan1",dfh:"icondaifahuo1",dsh:"icondaishouhuo1",dpj:"icondaipingjia1",sh:"iconshouhou_tuikuan"},order02:{dfk:"icondaifukuan-lan",dfh:"icondaifahuo-lan",dsh:"icondaishouhuo-lan",dpj:"icondaipingjia-lan",sh:"iconshouhou-tuikuan-lan"},order03:{dfk:"icondaifukuan-ju",dfh:"icondaifahuo-ju",dsh:"icondaishouhuo-ju",dpj:"icondaipingjia-ju",sh:"iconshouhou-tuikuan-ju"},order04:{dfk:"icondaifukuan-fen",dfh:"icondaifahuo-fen",dsh:"icondaishouhuo-fen",dpj:"icondaipingjia-fen",sh:"icona-shouhoutuikuan-fen"},order05:{dfk:"icondaifukuan-lv",dfh:"icondaifahuo-lv",dsh:"icondaishouhuo-lv",dpj:"icondaipingjia-lv",sh:"iconshouhou-tuikuan-lv"}}},created:function(){this.getInfo()},methods:{currentShow:function(t){this.current=t},switchOrder:function(t){switch(t){case 1:this.order=this.order01;break;case 2:this.order=this.order02;break;case 3:this.order=this.order03;break;case 4:this.order=this.order04;break;case 5:this.order=this.order05;break;default:this.order=this.order01;break}},orderStyle:function(t){this.switchOrder(t)},getInfo:function(){var t=this,a="--view-theme: #42CA4D;--view-priceColor:#FF7600;--view-minorColor:rgba(108, 198, 94, 0.5);--view-minorColorT:rgba(66, 202, 77, 0.1);--view-bntColor:#FE960F;",i="--view-theme: #e93323;--view-priceColor:#e93323;--view-minorColor:rgba(233, 51, 35, 0.5);--view-minorColorT:rgba(233, 51, 35, 0.1);--view-bntColor:#FE960F;",e="--view-theme: #1DB0FC;--view-priceColor:#FD502F;--view-minorColor:rgba(58, 139, 236, 0.5);--view-minorColorT:rgba(9, 139, 243, 0.1);--view-bntColor:#22CAFD;",s="--view-theme: #FF448F;--view-priceColor:#FF448F;--view-minorColor:rgba(255, 68, 143, 0.5);--view-minorColorT:rgba(255, 68, 143, 0.1);--view-bntColor:#282828;",n="--view-theme: #FE5C2D;--view-priceColor:#FE5C2D;--view-minorColor:rgba(254, 92, 45, 0.5);--view-minorColorT:rgba(254, 92, 45, 0.1);--view-bntColor:#FDB000;";Object(c["k"])().then((function(r){t.userData.status=r.data.status,t.userData.order_status=r.data.order_status,t.userData.my_banner_status=r.data.my_banner_status;var o=[],c=[];switch(t.switchOrder(r.data.order_status),r.data.color_change){case 1:t.colorStyle=e;break;case 2:t.colorStyle=a;break;case 3:t.colorStyle=i;break;case 4:t.colorStyle=s;break;case 5:t.colorStyle=n;break;default:t.colorStyle=i;break}r.data.routine_my_banner.forEach((function(t,a,i){t.pic.length&&(t.pic=t.pic[0])})),r.data.routine_my_banner.length?t.userData.routine_my_banner=r.data.routine_my_banner:t.userData.routine_my_banner=[],r.data.routine_my_menus.forEach((function(t,a,i){t.pic.length&&(t.pic=t.pic[0]),"/pages/admin/order/index"==t.url||"/pages/admin/order_cancellation/index"==t.url||"客服接待"==t.name?o.push(t):c.push(t)})),c.length&&(t.MyMenus=c),o.length&&(t.storeMenu=o)}))},onSubmit:function(){var t=this;this.userData.routine_my_menus=this.MyMenus.concat(this.storeMenu),this.$emit("parentFun",!0),Object(c["p"])(this.userData).then((function(a){t.$emit("parentFun",!1),t.$Message.success(a.msg)})).catch((function(a){t.$Message.error(a.msg),t.$emit("parentFun",!1)}))}}},B=M,O=(i("b3a2"),Object(f["a"])(B,w,b,!1,null,"62d1b8e1",null)),U=O.exports,T=i("c276"),P={name:"devise_list",computed:Object(r["a"])({},Object(l["e"])("admin/layout",["menuCollapse"])),components:{goodClass:C,users:U},data:function(){return{grid:{sm:10,md:12,lg:19},loading:!1,theme3:"light",menuList:[{name:"商城首页",id:1},{name:"商品分类",id:2},{name:"个人中心",id:3}],columns1:[{title:"页面ID",key:"id",width:80},{title:"模板名称",key:"name",minWidth:100},{title:"模板类型",slot:"type_name",minWidth:100},{title:"添加时间",key:"add_time",minWidth:100},{title:"更新时间",key:"update_time",minWidth:100},{title:"操作",slot:"action",minWidth:180}],list:[],imgUrl:"",modal:!1,BaseURL:o["a"].apiBaseURL.replace(/adminapi/,""),cardShow:0,loadingExist:!1,isDiy:1,qrcodeImg:"",diyFrom:{type:"",page:1,limit:10},total:0,formItem:{id:0,link:""},isTemplate:!1,ruleValidate:{link:[{required:!0,message:"请输入移动端链接",trigger:"blur"}]},url:window.location.origin}},created:function(){this.getList(),this.imgUrl="".concat(location.origin,"/pages/index/index?type=iframeWindow")},mounted:function(){},methods:{cancel:function(){this.$refs["formItem"].resetFields()},getChildData:function(t){this.loadingExist=t},submit:function(){1==this.cardShow?this.$refs.category.onSubmit():this.$refs.users.onSubmit()},reast:function(){1==this.cardShow?this.$refs.category.onSubmit(1):this.$refs.users.getInfo()},bindMenuItem:function(t){this.cardShow=t},onCopy:function(){this.$Message.success("复制预览链接成功")},onError:function(){this.$Message.error("复制预览链接失败")},creatQrCode:function(t){this.$refs.qrCodeUrl.innerHTML="";var a="".concat(this.BaseURL,"pages/annex/special/index?id=").concat(t);new u.a(this.$refs.qrCodeUrl,{text:a,width:160,height:160,colorDark:"#000000",colorLight:"#ffffff",correctLevel:u.a.CorrectLevel.H})},routineCode:function(t){var a=this;Object(c["n"])(t).then((function(t){a.qrcodeImg=t.data.image})).catch((function(t){a.$Message.error(t)}))},preview:function(t){this.modal=!0,this.creatQrCode(t.id),this.routineCode(t.id)},handleSubmit:function(t){var a=this;this.$refs[t].validate((function(t){if(!t)return!1;Object(T["q"])("moveLink",a.formItem.link),a.$router.push({path:"/admin/setting/pages/diy",query:{id:a.formItem.id,type:1}})}))},changeMenu:function(t,a,i){switch(i){case"1":this.setDefault(t);break;case"2":this.recovery(t);break;case"3":this.del(t,"删除此模板",a);break;default:}},setDefault:function(t){var a=this;Object(c["u"])(t.id).then((function(t){a.$Message.success(t.msg),a.getList()})).catch((function(t){a.$Message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,Object(c["d"])(this.diyFrom).then((function(a){t.loading=!1;var i=a.data;t.list=i.list,t.total=i.count}))},pageChange:function(t){this.diyFrom.page=t,this.getList()},edit:function(t){this.formItem.id=t.id,t.is_diy||(t.status?this.$router.push({path:"/admin/setting/pages/diy",query:{id:t.id,type:0}}):this.$Message.error("请先设为首页在进行编辑"))},add:function(){this.$router.push({path:"/admin/setting/pages/diy_index",query:{id:0,name:"首页",type:1}})},del:function(t){var a=this,i={title:"删除",num:2e3,url:"diy/del/"+t.id,method:"DELETE",data:{type:1}};this.$modalSure(i).then((function(t){a.getList()})).catch((function(t){a.$Message.error(t.msg)}))},setStatus:function(t){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a.$Modal.confirm({title:"提示",content:"<p>是否把该模板设为首页</p>",onOk:function(){Object(c["v"])(t.id,{type:1}).then((function(t){a.$Message.success(t.msg),a.$Modal.remove(),a.getList()})).catch((function(t){a.$Modal.remove(),a.$Message.error(t.msg)}))}});case 1:case"end":return i.stop()}}),i)})))()},recovery:function(t){var a=this;Object(c["s"])(t.id).then((function(t){a.$Message.success(t.msg),a.getList()}))}}},R=P,E=(i("574c"),Object(f["a"])(R,e,s,!1,null,"6c6331de",null));a["default"]=E.exports},b3a2:function(t,a,i){"use strict";var e=i("757d"),s=i.n(e);s.a},bf67:function(t,a){t.exports="data:image/png;base64,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"},cdfe:function(t,a,i){t.exports=i.p+"img/f.5aa43cd3.png"},db87:function(t,a,i){"use strict";var e=i("8752"),s=i.n(e);s.a},e4dc:function(t,a,i){t.exports=i.p+"img/sort02.feab1b79.jpg"},ef80:function(t,a,i){"use strict";var e=i("2d61"),s=i.n(e);s.a}}]);