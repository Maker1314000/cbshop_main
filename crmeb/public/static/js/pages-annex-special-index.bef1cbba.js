(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-annex-special-index"],{"064f":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pageShow?n("v-uni-view",{staticClass:"page",class:2==t.bgTabVal?"fullsize noRepeat":1==t.bgTabVal?"repeat ysize":"noRepeat ysize",style:"background-color:"+t.bgColor+";background-image: url("+t.bgPic+");min-height:"+t.windowHeight+"px;"},[n("v-uni-view",{style:{marginTop:t.sortMpTop+"px"}},[t._l(t.styleConfig,(function(e,a){return n("v-uni-view",{key:a},[n(e.name,{tag:"component",attrs:{index:a,dataConfig:e,tempArr:t.tempArr,iSshowH:t.iSshowH},on:{changeBarg:function(e){arguments[0]=e=t.$handleEvent(e),t.changeBarg.apply(void 0,arguments)},changeTab:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab.apply(void 0,arguments)},detail:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail.apply(void 0,arguments)}}})],1)})),t.tempArr.length&&"promotionList"==t.styleConfig[t.styleConfig.length-1].name?n("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[n("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t._e(),t.newData.menuList&&t.footerStatus?n("v-uni-view",{staticClass:"foot"},[n("v-uni-view",{staticClass:"page-footer",style:{"background-color":t.newData.bgColor.color[0].item},attrs:{id:"target"}},t._l(t.newData.menuList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"foot-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goRouter(e)}}},[e.link==t.activeRouter?[n("v-uni-image",{attrs:{src:e.imgList[0]}}),n("v-uni-view",{staticClass:"txt",style:{color:t.newData.activeTxtColor.color[0].item}},[t._v(t._s(e.name))])]:[n("v-uni-image",{attrs:{src:e.imgList[1]}}),n("v-uni-view",{staticClass:"txt",style:{color:t.newData.txtColor.color[0].item}},[t._v(t._s(e.name))])],"/pages/order_addcart/order_addcart"===e.link&&t.$store.state.indexData.cartNum&&t.$store.state.indexData.cartNum>0?n("div",{staticClass:"count-num"},[t._v(t._s(t.$store.state.indexData.cartNum))]):t._e()],2)})),1)],1):t._e()],2)],1):t._e()},i=[]},"306d":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page[data-v-26f10e6d]{padding-bottom:50px}.ysize[data-v-26f10e6d]{background-size:100%}.fullsize[data-v-26f10e6d]{background-size:100% 100%}.repeat[data-v-26f10e6d]{background-repeat:repeat}.noRepeat[data-v-26f10e6d]{background-repeat:no-repeat}.page-footer[data-v-26f10e6d]{position:fixed;bottom:0;z-index:30;display:flex;align-items:center;justify-content:space-around;width:100%;height:calc(98rpx+ constant(safe-area-inset-bottom));height:calc(%?98?% + env(safe-area-inset-bottom));box-sizing:border-box;border-top:solid %?1?% #f3f3f3;background-color:#fff;box-shadow:0 0 %?17?% %?1?% hsla(0,0%,80.8%,.32);padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.page-footer .foot-item[data-v-26f10e6d]{display:flex;width:-webkit-max-content;width:max-content;align-items:center;justify-content:center;flex-direction:column;position:relative}.page-footer .foot-item .count-num[data-v-26f10e6d]{position:absolute;display:flex;justify-content:center;align-items:center;width:%?40?%;height:%?40?%;top:%?0?%;right:%?-15?%;color:#fff;font-size:%?20?%;background-color:#fd502f;border-radius:50%;padding:%?4?%}.page-footer .foot-item uni-image[data-v-26f10e6d]{height:%?50?%;width:%?50?%;text-align:center;margin:0 auto}.page-footer .foot-item .txt[data-v-26f10e6d]{font-size:%?24?%}',""]),t.exports=e},"3e8b":function(t,e,n){"use strict";n.r(e);var a=n("75da"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},5206:function(t,e,n){"use strict";n.r(e);var a=n("064f"),o=n("3e8b");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("fe0e");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"26f10e6d",null,!1,a["a"],r);e["default"]=c.exports},"75da":function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("99af"),n("4160"),n("d81d"),n("fb6a"),n("4e82"),n("a434"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("841c"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=a(n("ade3")),r=a(n("5530")),s=a(n("c9eb")),c=n("e5e8"),u=n("d8b4"),d=a(n("c47f")),l=n("26cb"),g=n("dbf8"),f=n("c9cb"),p=n("1118"),h=a(n("4544")),v=(getApp(),o={computed:(0,l.mapGetters)(["isLogin","uid"]),components:(0,r.default)({pageFooter:h.default,couponWindow:s.default},d.default)},(0,i.default)(o,"computed",(0,l.mapGetters)(["isLogin"])),(0,i.default)(o,"data",(function(){return{styleConfig:[],tempArr:[],goodType:3,loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:this.$config.LIMIT,iSshowH:!1,numConfig:0,code:"",isCouponShow:!1,couponObj:{},couponObjs:{},shareInfo:{},footConfig:{},pageId:"",sortMpTop:0,newData:{},activeRouter:"",footerStatus:!1,bgColor:"",bgPic:"",bgTabVal:"",pageShow:!0,windowHeight:0}})),(0,i.default)(o,"onLoad",(function(t){var e=this,n=this;this.$nextTick((function(){uni.getSystemInfo({success:function(t){n.windowHeight=t.windowHeight}})}));t.state,t.scope;this.pageId=t.id,uni.setNavigationBarTitle({title:"专题栏"}),uni.getLocation({type:"wgs84",success:function(t){try{uni.setStorageSync("user_latitude",t.latitude),uni.setStorageSync("user_longitude",t.longitude)}catch(e){}}}),this.diyData(),this.getIndexData(),this.setOpenShare(),(0,u.getShare)().then((function(t){e.shareInfo=t.data}));var a=getCurrentPages(),o=a[a.length-1].route;this.activeRouter="/"+o+"?id="+this.pageId})),(0,i.default)(o,"watch",{isLogin:{deep:!0,handler:function(t,e){var n=(new Date).toLocaleDateString();if(t){try{var a=uni.getStorageSync("oldDate")||""}catch(o){}a!=n&&this.getCoupon()}}}}),(0,i.default)(o,"mounted",(function(){var t=(new Date).toLocaleDateString();if(this.isLogin){try{var e=uni.getStorageSync("oldDate")||""}catch(a){}e!=t&&this.getCoupon();var n=uni.getStorageSync("oldUser")||0;n||this.getCouponOnce()}})),(0,i.default)(o,"mounted",(function(){})),(0,i.default)(o,"methods",{goRouter:function(t){var e=getCurrentPages(),n=e[e.length-1].$page.fullPath;t.link!=n&&uni.switchTab({url:t.link,fail:function(e){uni.redirectTo({url:t.link})}})},getCouponOnce:function(){var t=this;(0,c.getCouponNewUser)().then((function(e){t.couponObjs=e.data}))},couponCloses:function(){this.couponObjs.show=!1;try{uni.setStorageSync("oldUser",1)}catch(t){}},getCoupon:function(){var t=this;(0,c.getCouponV2)().then((function(e){t.couponObj=e.data,e.data.list.length>0&&(t.isCouponShow=!0)}))},couponClose:function(){this.isCouponShow=!1;try{uni.setStorageSync("oldDate",(new Date).toLocaleDateString())}catch(t){}},onLoadFun:function(){},getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=new RegExp("(^|/)"+t+"/([^/]*)(/|$)","i"),a=window.location.search.substr(1).match(e),o=window.location.pathname.substr(1).match(n);return null!=a?unescape(a[2]):null!=o?unescape(o[2]):null},objToArr:function(t){if(t){var e=Object.keys(t);e.sort((function(t,e){return t-e}));var n=e.map((function(e){return t[e]}));return n}},diyData:function(){var t=this,e=this;(0,c.getDiy)(this.pageId).then((function(n){var a=n.data;if(0==n.data.length)return t.$util.Tips({title:"暂无数据"},{tab:3});a.is_bg_color&&(t.bgColor=a.color_picker),a.is_bg_pic&&(t.bgPic=a.bg_pic,t.bgTabVal=a.bg_tab_val),t.pageShow=a.is_show,uni.setNavigationBarTitle({title:n.data.title});var o=[];n.data;var i=e.objToArr(n.data.value);i.forEach((function(n,a,i){"pageFoot"==n.name&&(uni.setStorageSync("pageFoot",n),e.$store.commit("FOOT_UPLOAD",n),i.splice(a,1),t.newData=n,t.footerStatus=n.status.status),"promotionList"==n.name&&(e.numConfig=n.numConfig.val,e.getGroomList()),o=i})),e.styleConfig=o}))},getIndexData:function(){},changeBarg:function(t){this.isLogin?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.id,"&bargain=").concat(this.uid)}):(0,p.toLogin)()},changeTab:function(t){this.goodType=t,this.tempArr=[],this.page=1,this.loadend=!1;var e=!0;this.getGroomList(e)},getGroomList:function(t){var e=this,n=this,a=n.goodType;return!n.loadend&&(!n.loading&&(t&&n.$set(n,"iSshowH",!0),void(0,g.getGroomList)(a,{page:n.page,limit:n.limit}).then((function(t){var a=t.data;n.$set(n,"iSshowH",!1);var o=Math.ceil(e.numConfig/e.limit),i=a.list,r=i.length<n.limit||n.page>=o,s=n.$util.SplitArray(i,n.tempArr);n.$set(n,"tempArr",s.slice(0,e.numConfig)),n.loadend=r,n.loadTitle=r?"没有更多内容啦~":"加载更多",n.page=n.page+1,n.loading=!1})).catch((function(t){n.loading=!1,n.loadTitle="加载更多"}))))},goDetail:function(t){(0,f.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))},setOpenShare:function(){var t=this;t.$wechat.isWeixin()&&(0,u.getShare)().then((function(e){var n=e.data.data,a={desc:n.synopsis,title:n.title,link:location.href,imgUrl:n.img};t.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],a)}))}}),(0,i.default)(o,"onReachBottom",(function(){this.getGroomList()})),o);e.default=v}).call(this,n("5a52")["default"])},"94fe":function(t,e,n){var a=n("306d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("421a38ad",a,!0,{sourceMap:!1,shadowMode:!1})},fe0e:function(t,e,n){"use strict";var a=n("94fe"),o=n.n(a);o.a}}]);