(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-annex-vip_paid-index~pages-users-order_confirm-index~pages-users-order_details-index~pages-use~80ac453d"],{2178:function(t,e,n){"use strict";n.r(e);var a=n("5d8f"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"2a17":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".pictrueBox[data-v-a68dde36]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-a68dde36]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-a68dde36]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-a68dde36]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-a68dde36]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-a68dde36]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-a68dde36]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"5d8f":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("26cb"),o=a(n("c83f")),r={name:"Home",props:{},mixins:[o.default],data:function(){return{top:"545"}},computed:(0,i.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=r},"6f20":function(t,e,n){"use strict";n.r(e);var a=n("c7148"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"85c5":function(t,e,n){"use strict";var a=n("e6f6"),i=n.n(a);i.a},"85f8":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticClass:"payment",class:t.pay_close?"on":""},[n("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[t._v("选择付款方式"),n("v-uni-text",{staticClass:"iconfont icon-guanbi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1),t._l(t.payMode,(function(e,a){return e.payStatus?n("v-uni-view",{key:a,staticClass:"item acea-row row-between-wrapper",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.payType(e.number||0,e.value,a)}}},[n("v-uni-view",{staticClass:"left acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"iconfont",class:e.icon}),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))]),"yue"==e.value?n("v-uni-view",{staticClass:"info"},[t._v(t._s(e.title)),n("span",{staticClass:"money"},[t._v("￥"+t._s(e.number))])]):n("v-uni-view",{staticClass:"info"},[t._v(t._s(e.title))])],1)],1),n("v-uni-view",{staticClass:"iconfont",class:t.active==a?"icon-xuanzhong11 font-num":"icon-weixuan"})],1):t._e()})),n("v-uni-view",{staticClass:"payMoney"},[t._v("支付"),n("span",{staticClass:"font-color"},[t._v("¥"),n("span",{staticClass:"money"},[t._v(t._s(t.totalPrice))])])]),n("v-uni-view",{staticClass:"button bg-color acea-row row-center-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPay(t.number,t.paytype)}}},[t._v("去付款")])],2),t.pay_close?n("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e(),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],domProps:{innerHTML:t._s(t.formContent)}})],1)},o=[]},"8c5c":function(t,e,n){var a=n("2a17");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("15cfcc39",a,!0,{sourceMap:!1,shadowMode:!1})},c7148:function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("4160"),n("acd8"),n("ac1f"),n("5319"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("e0d6"),o=a(n("c83f")),r={props:{payMode:{type:Array,default:function(){return[]}},pay_close:{type:Boolean,default:!1},order_id:{type:String,default:""},totalPrice:{type:String,default:"0"},isCall:{type:Boolean,default:!1},friendPay:{type:Boolean,default:!1}},mixins:[o.default],data:function(){return{formContent:"",active:0,paytype:"",number:0}},watch:{payMode:{handler:function(t,e){var n=[];t.forEach((function(t,e){t.payStatus&&(t.index=e,n.push(t))})),this.active=n[0].index,this.paytype=n[0].value,this.number=n[0].number||0},immediate:!0,deep:!0}},methods:{payType:function(t,e,n){this.active=n,this.paytype=e,this.number=t,this.$emit("changePayType",e)},close:function(){this.$emit("onChangeFun",{action:"payClose"})},goPay:function(t,e){var n=this;if(this.isCall)return this.$emit("onChangeFun",{action:"payCheck",value:e});var a=this;return a.order_id?"yue"==e&&parseFloat(t)<parseFloat(a.totalPrice)?a.$util.Tips({title:"余额不足！"}):(uni.showLoading({title:"支付中"}),"friend"==e&&a.order_id?uni.navigateTo({url:"/pages/users/payment_on_behalf/index?order_id="+a.order_id+"&spread="+this.$store.state.app.uid,success:function(t){},fail:function(){},complete:function(){}}):void(0,i.orderPay)({uni:a.order_id,paytype:e,type:a.friendPay?1:0,from:this.$wechat.isWeixin()?"weixin":"weixinh5",quitUrl:location.port?location.protocol+"//"+location.hostname+":"+location.port+"/pages/users/order_details/index?order_id="+this.order_id:location.protocol+"//"+location.hostname+"/pages/users/order_details/index?order_id="+this.order_id}).then((function(t){t.data.result.jsConfig;switch(e){case"weixin":if(void 0===t.data.result)return a.$util.Tips({title:"缺少支付参数"});var i=t.data;if("WECHAT_H5_PAY"==i.status)return uni.hideLoading(),location.replace(i.result.jsConfig.mweb_url),a.$util.Tips({title:"支付成功",icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}));a.$wechat.pay(i.result.jsConfig).then((function(){return a.$util.Tips({title:"支付成功",icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}))})).catch((function(){return a.$util.Tips({title:"支付失败"},(function(){a.$emit("onChangeFun",{action:"pay_fail"})}))}));break;case"yue":return uni.hideLoading(),a.$util.Tips({title:t.msg,icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}));case"offline":return uni.hideLoading(),a.$util.Tips({title:t.msg,icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}));case"friend":return uni.hideLoading(),a.$util.Tips({title:t.msg,icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}));case"alipay":uni.hideLoading(),n.$wechat.isWeixin()?uni.redirectTo({url:"/pages/users/alipay_invoke/index?id=".concat(t.data.result.order_id,"&pay_key=").concat(t.data.result.pay_key)}):(uni.hideLoading(),a.formContent=t.data.result.jsConfig,a.$nextTick((function(){document.getElementById("alipaysubmit").submit()})));break}})).catch((function(t){return uni.hideLoading(),a.$util.Tips({title:t},(function(){a.$emit("onChangeFun",{action:"pay_fail"})}))}))):a.$util.Tips({title:"请选择要支付的订单"})}}};e.default=r},d82c:function(t,e,n){"use strict";n.r(e);var a=n("85f8"),i=n("6f20");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("85c5");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"5955fabe",null,!1,a["a"],r);e["default"]=c.exports},df77:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.bgcolor[data-v-5955fabe]{background-color:var(--view-theme)}.payment[data-v-5955fabe]{position:fixed;bottom:0;left:0;width:100%;border-radius:%?16?% %?16?% 0 0;background-color:#fff;padding-bottom:%?60?%;z-index:999;transition:all .3s cubic-bezier(.25,.5,.5,.9);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.payment .payMoney[data-v-5955fabe]{font-size:%?28?%;color:#333;text-align:center;margin-top:%?50?%}.payment .payMoney .font-color[data-v-5955fabe]{margin-left:%?10?%}.payment .payMoney .font-color .money[data-v-5955fabe]{font-size:%?40?%}.payment .button[data-v-5955fabe]{width:%?690?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?20?% auto 0 auto}.payment.on[data-v-5955fabe]{-webkit-transform:translateZ(0);transform:translateZ(0)}.payment .title[data-v-5955fabe]{text-align:center;height:%?123?%;font-size:%?32?%;color:#282828;font-weight:700;padding-right:%?30?%;margin-left:%?30?%;position:relative;border-bottom:%?1?% solid #eee}.payment .title .iconfont[data-v-5955fabe]{position:absolute;right:%?30?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:%?38?%;color:#8a8a8a;font-weight:400}.payment .item[data-v-5955fabe]{border-bottom:%?1?% solid #eee;height:%?130?%;margin-left:%?30?%;padding-right:%?30?%}.payment .item .left[data-v-5955fabe]{width:%?610?%}.payment .item .left .text[data-v-5955fabe]{width:%?540?%}.payment .item .left .text .name[data-v-5955fabe]{font-size:%?32?%;color:#282828}.payment .item .left .text .info[data-v-5955fabe]{font-size:%?24?%;color:#999}.payment .item .left .text .info .money[data-v-5955fabe]{color:#f90}.payment .item .left .iconfont[data-v-5955fabe]{font-size:%?45?%;color:#09bb07}.payment .item .left .iconfont.icon-zhifubao[data-v-5955fabe]{color:#00aaea}.payment .item .left .iconfont.icon-yuezhifu[data-v-5955fabe]{color:#f90}.payment .item .left .iconfont.icon-yuezhifu1[data-v-5955fabe]{color:#eb6623}.payment .item .iconfont[data-v-5955fabe]{font-size:%?40?%;color:#ccc}.icon-haoyoudaizhifu[data-v-5955fabe]{color:#f34c3e!important}',""]),t.exports=e},e6f6:function(t,e,n){var a=n("df77");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("0ed656de",a,!0,{sourceMap:!1,shadowMode:!1})},f497:function(t,e,n){"use strict";n.r(e);var a=n("f51e"),i=n("2178");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("f969");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"a68dde36",null,!1,a["a"],r);e["default"]=c.exports},f51e:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticStyle:{"touch-action":"none"}},[n("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?n("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[n("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),n("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),n("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),n("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)],1)},o=[]},f969:function(t,e,n){"use strict";var a=n("8c5c"),i=n.n(a);i.a}}]);