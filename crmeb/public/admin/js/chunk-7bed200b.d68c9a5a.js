(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bed200b"],{4766:function(t,e,i){},6359:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"i-layout-page-header"},[i("div",{staticClass:"i-layout-page-header"},[i("router-link",{attrs:{to:{path:"/admin/marketing/store_integral/index"}}},[i("Button",{staticClass:"mr20",attrs:{icon:"ios-arrow-back",size:"small"}},[t._v("返回")])],1),i("span",{staticClass:"ivu-page-header-title mr20",domProps:{textContent:t._s(t.$route.params.id?"编辑积分商品":"添加积分商品")}})],1)]),i("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[i("Row",{staticClass:"mt30 acea-row row-middle row-center",attrs:{type:"flex"}},[i("Col",{attrs:{span:"23"}},[i("Form",{ref:"formValidate",staticClass:"form mt30",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[i("FormItem",{attrs:{label:"选择商品：",prop:"image_input"}},[i("div",{staticClass:"picBox",on:{click:t.changeGoods}},[t._l(t.goodsImg,(function(e,a){return i("div",{key:a,staticClass:"pictrue"},[e.image?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"item.image"}]}):t._e(),i("span",{staticClass:"iconfont icondel_1",on:{click:function(e){return e.stopPropagation(),t.bindDelete(a)}}})])})),i("div",{staticClass:"upLoad acea-row row-center-wrapper"},[i("Icon",{staticClass:"iconfonts",attrs:{type:"ios-camera-outline",size:"26"}})],1)],2)]),i("Col",{attrs:{type:"flex"}},[i("Col",{attrs:{span:"24"}},[i("FormItem",{attrs:{label:"规格选择："}},[i("Table",{staticClass:"mt25",attrs:{data:t.specsData,columns:t.columns,border:"","highlight-row":"",loading:t.loading},on:{"on-selection-change":t.changeCheckbox},scopedSlots:t._u([{key:"pic",fn:function(e){var a=e.row,r=e.index;return[i("div",{staticClass:"acea-row row-middle row-center-wrapper",on:{click:function(e){return t.modalPicTap("dan","danTable",r)}}},[a.pic?i("div",{staticClass:"pictrue pictrueTab"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.pic,expression:"row.pic"}]})]):i("div",{staticClass:"upLoad pictrueTab acea-row row-center-wrapper"},[i("Icon",{staticClass:"iconfont",attrs:{type:"ios-camera-outline",size:"21"}})],1)])]}}])})],1)],1),i("Col",{attrs:{span:"24"}},[i("FormItem",{attrs:{label:"上架状态：",props:"is_show","label-for":"is_show"}},[i("RadioGroup",{attrs:{"element-id":"is_show"},model:{value:t.formValidate.is_show,callback:function(e){t.$set(t.formValidate,"is_show",e)},expression:"formValidate.is_show"}},[i("Radio",{attrs:{label:0}},[t._v("关闭")]),i("Radio",{staticClass:"radio",attrs:{label:1}},[t._v("开启")])],1)],1)],1)],1),i("Col",{attrs:{span:"24"}},[i("FormItem",[i("Button",{directives:[{name:"show",rawName:"v-show",value:0!==t.current,expression:"current !== 0"}],staticClass:"submission mr15",attrs:{disabled:t.$route.params.id&&1===t.current},on:{click:t.step}},[t._v("上一步\n              ")]),i("Button",{staticClass:"submission",attrs:{disabled:t.submitOpen&&1===t.current,type:"primary"},domProps:{textContent:t._s("提交")},on:{click:function(e){return t.next("formValidate")}}})],1)],1)],1),t.spinShow?i("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1),i("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",footerHide:"",scrollable:"",width:"900"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[t.modals?i("goods-list",{ref:"goodslist",attrs:{ischeckbox:!0},on:{getProductId:t.getProductId}}):t._e()],1),i("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":1},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?i("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic,getPicD:t.getPicD}}):t._e()],1)],1)},r=[],n=(i("8e6e"),i("456d"),i("2909")),s=(i("c5f6"),i("7f7f"),i("96cf"),i("1da1")),o=(i("ac6a"),i("ade3")),c=i("2f62"),l=i("c4ad"),d=i("ef0d"),u=i("6625"),m=i.n(u),p=i("b0e7"),g=i("b7be");function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){Object(o["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var b={name:"storeIntegralCreate",components:{UeditorWrap:d["a"],goodsList:l["default"],uploadPictures:p["a"],VueUeditorWrap:m.a},data:function(){return{loading:!1,goodsImg:[],productsId:[],submitOpen:!1,spinShow:!1,isChoice:"",current:0,modalPic:!1,grid:{xl:12,lg:20,md:24,sm:24,xs:24},grid2:{xl:8,lg:12,md:12,sm:24,xs:24},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},modals:!1,modal_loading:!1,images:[],formValidate:{is_show:0,attrs:[]},templateList:[],timeList:[],columns:[],specsData:[],picTit:"",tableIndex:0,ruleValidate:{price:[{required:!0,type:"number",message:"请输入兑换积分",trigger:"blur"}],num:[{required:!0,type:"number",message:"请输入购买数量限制",trigger:"blur"}],once_num:[{required:!0,type:"number",message:"请输入单次购买数量限制",trigger:"blur"}]},copy:0}},computed:f(f({},Object(c["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:135},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.$route.params.id&&(this.copy=this.$route.params.copy,this.current=1,this.getInfo())},methods:{productAttrs:function(t){var e=this;return this.loading=!0,new Promise((function(i,a){var r=e;Object(g["W"])(t.product_id,4).then((function(t){var a=t.data.info,n={type:"selection",width:60,align:"center"};r.specsData=r.specsData.concat(a.attrs),r.specsData.forEach((function(t,e){r.$set(r.specsData[e],"id",e)})),r.columns=a.header,r.columns.unshift(n),r.inputChange(a),i(),e.loading=!1})).catch((function(t){e.loading=!1,a(),r.$Message.error(t.msg)}))}))},inputChange:function(t){var e=this,i=[];t.header.forEach((function(t,e){1===t.type&&i.push({index:e,key:t.key,title:t.title})})),i.forEach((function(t,i){var a=t.title,r=t.key,n={title:a,key:r,align:"center",minWidth:120,render:function(t,i){return t("div",[t("InputNumber",{props:{min:0,precision:0,value:"price"===r?i.row.price:i.row.quota},on:{"on-change":function(t){"price"===r?i.row.price=t:i.row.quota=t,e.specsData[i.index]=i.row,e.formValidate.attrs&&e.formValidate.attrs.length&&e.formValidate.attrs.forEach((function(t,a){t.id===i.row.id&&e.formValidate.attrs.splice(a,1,i.row)}))}}})])}};e.columns.splice(t.index,1,n)}))},changeCheckbox:function(t){this.formValidate.attrs=t},getProductId:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var i,a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=0;case 1:if(!(i<this.goodsImg.length)){t.next=9;break}if(a=this.goodsImg[i],a.product_id!==e.product_id){t.next=6;break}return this.$Message.error("该商品已经添加"),t.abrupt("return");case 6:i++,t.next=1;break;case 9:this.modal_loading=!1,this.modals=!1,this.goodsImg=this.goodsImg.concat(e),r=0;case 13:if(!(r<e.length)){t.next=20;break}return n=e[r],t.next=17,this.productAttrs(n);case 17:r++,t.next=13;break;case 20:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),cancel:function(){this.modals=!1},onchangeTime:function(t){this.formValidate.section_time=t},getInfo:function(){var t=this;this.spinShow=!0,Object(g["G"])(this.$route.params.id).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(i){var a,r,n,s,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(c in a=t,r=i.data.info,n={type:"selection",width:60,align:"center"},t.formValidate=r,t.columns=r.attrs.header,t.columns.unshift(n),t.specsData=r.attrs.value,a.specsData.forEach((function(t,e){a.$set(a.specsData[e],"id",e)})),s=r.attrs,o=[],r.attrs.value)r.attrs.value[c]._checked&&o.push(r.attrs.value[c]);a.formValidate.attrs=o,a.inputChange(s),t.spinShow=!1;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg)}))},bindDelete:function(t){this.goodsImg[t].product_id;this.goodsImg.splice(t,1),this.loading=!0},next:function(t){var e=this,i=this;if(!this.formValidate.attrs.length)return i.$Message.error("请先选择商品规格");for(var a in i.formValidate.attrs)if(i.formValidate.attrs[a].quota<=0)return i.$Message.error("商品限量必须大于0");this.$refs[t].validate((function(t){if(!t)return!1;1==e.copy&&(e.formValidate.copy=1),e.formValidate.id=Number(e.$route.params.id)||0,e.submitOpen=!0,Object(g["E"])(e.formValidate).then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.submitOpen=!1,e.$Message.success(i.msg),setTimeout((function(){e.$router.push({path:"/admin/marketing/store_integral/index"})}),500);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.submitOpen=!1,e.$Message.error(t.msg)}))}))},step:function(){this.current--},getContent:function(t){this.formValidate.description=t},modalPicTap:function(t,e,i){this.modalPic=!0,this.isChoice="dan"===t?"单选":"多选",this.picTit=e,this.tableIndex=i},getPic:function(t){switch(this.picTit){case"danFrom":this.formValidate.image=t.att_dir;break;default:this.formValidate.attrs&&this.formValidate.attrs.length&&this.$set(this.specsData[this.tableIndex],"_checked",!0),this.specsData[this.tableIndex].pic=t.att_dir}this.modalPic=!1},getPicD:function(t){var e=this;this.images=t,this.images.map((function(t){e.formValidate.images.push(t.att_dir),e.formValidate.images=e.formValidate.images.splice(0,10)})),this.modalPic=!1},handleRemove:function(t){this.images.splice(t,1),this.formValidate.images.splice(t,1)},changeGoods:function(){this.modals=!0},handleDragStart:function(t,e){this.dragging=e},handleDragEnd:function(t,e){this.dragging=null},handleDragOver:function(t){t.dataTransfer.dropEffect="move"},handleDragEnter:function(t,e){if(t.dataTransfer.effectAllowed="move",e!==this.dragging){var i=Object(n["a"])(this.formValidate.images),a=i.indexOf(this.dragging),r=i.indexOf(e);i.splice.apply(i,[r,0].concat(Object(n["a"])(i.splice(a,1)))),this.formValidate.images=i}},addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var i=new window.UE.ui.Dialog({iframeUrl:"/admin/widget.images/index.html?fodder=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:960px;height:550px;padding:20px;"});this.dialog=i;var a=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){i.render(),i.open()}});return a}),37,t)}}},w=b,v=(i("d96c"),i("2877")),x=Object(v["a"])(w,a,r,!1,null,"9aed028c",null);e["default"]=x.exports},d96c:function(t,e,i){"use strict";var a=i("4766"),r=i.n(a);r.a},ef0d:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("vue-ueditor-wrap",{staticStyle:{width:"90%"},attrs:{config:t.myConfig},on:{beforeInit:t.addCustomDialog},model:{value:t.contents,callback:function(e){t.contents=e},expression:"contents"}})],1)},r=[],n=i("6625"),s=i.n(n),o={name:"index",components:{VueUeditorWrap:s.a},props:{content:""},watch:{content:{handler:function(t){},deep:!0}},data:function(){return{contents:this.content,myConfig:{autoHeightEnabled:!1,initialFrameHeight:200,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""}}},methods:{addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var i=new window.UE.ui.Dialog({iframeUrl:"/admin/widget.images/index.html?fodder=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:960px;height:550px;padding:20px;"});this.dialog=i;var a=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){i.render(),i.open()}});return a}),37,t)}},created:function(){}},c=o,l=i("2877"),d=Object(l["a"])(c,a,r,!1,null,"4633e60a",null);e["a"]=d.exports}}]);