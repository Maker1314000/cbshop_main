(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index"],{"493e":function(e,t,n){"use strict";n.r(t);var s=n("e43c"),u=n.n(s);for(var i in s)"default"!==i&&function(e){n.d(t,e,(function(){return s[e]}))}(i);t["default"]=u.a},bc08:function(e,t,n){"use strict";n.r(t);var s=n("eb36"),u=n("493e");for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);n("fb27");var o,r=n("f0c5"),a=Object(r["a"])(u["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],o);t["default"]=a.exports},e43c:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("cff9"),u=n("d8b4"),i=n("1118"),o=n("26cb"),r=c(n("955f")),a=(c(n("49ab")),c(n("cf74"))),f=n("e979");function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=e.getSystemInfoSync().statusBarHeight+"px",m=(getApp(),function(){Promise.all([n.e("common/vendor"),n.e("pages/index/visualization/components/tabBar")]).then(function(){return resolve(n("dcfe"))}.bind(null,n)).catch(n.oe)}),h={components:{tabBar:m},computed:p({},(0,o.mapGetters)({cartNum:"cartNum",isLogin:"isLogin"})),filters:{coundTime:function(e){var t=1e3*e,n=new Date,s=t-n.getTime(),u=parseInt(s/864e5);return u+this.$t("day")},dateFormat:function(e){return(0,r.default)(1e3*e).format("YYYY-MM-DD")}},mixins:[a.default],data:function(){return{storeMenu:[],orderMenu:[{img:"icon-daifukuan",title:"待付款",url:"/pages/goods/order_list/index?status=0"},{img:"icon-daifahuo",title:"待发货",url:"/pages/goods/order_list/index?status=1"},{img:"icon-daishouhuo",title:"待收货",url:"/pages/goods/order_list/index?status=2"},{img:"icon-daipingjia",title:"待评价",url:"/pages/goods/order_list/index?status=3"},{img:"icon-a-shouhoutuikuan",title:"售后/退款",url:"/pages/users/user_return_list/index"}],imgUrls:[],autoplay:!0,circular:!0,interval:3e3,duration:500,isAuto:!1,isShowAuth:!1,orderStatusNum:{},userInfo:{},MyMenus:[],sysHeight:_,mpHeight:0,showStatus:1,newData:{},activeRouter:"",pageHeight:"100%",routineContact:0,footerSee:!1,member_style:1,my_banner_status:1,is_diy:e.getStorageSync("is_diy"),copyRightPic:"/static/images/support.png"}},onLoad:function(t){var n=this;this.is_diy&&(e.getStorageSync("FOOTER_BAR")&&e.hideTabBar(),(0,u.getNavigation)().then((function(t){n.newData=t.data,n.newData.status&&n.newData.status.status?e.hideTabBar():e.showTabBar()}))),this.$store.getters.isLogin;var s=getCurrentPages(),i=s[s.length-1].route;this.activeRouter="/"+i,this.getCopyRight()},onReady:function(){var t=this,n=e.createSelectorQuery().select(".sys-head");n.boundingClientRect((function(e){t.mpHeight=e.height})).exec()},onShow:function(){var e=this;e.isLogin&&(this.getUserInfo(),this.getMyMenus(),this.setVisit()),this.getCopyRight()},onPullDownRefresh:function(){this.onLoadFun()},methods:{getWechatuserinfo:function(){},getRoutineUserInfo:function(e){var t=this;(0,s.updateUserInfo)({userInfo:e.detail.userInfo}).then((function(e){return t.getUserInfo(),t.$util.Tips(t.$t("更新用户信息成功"))})).catch((function(e){}))},setVisit:function(){(0,s.setVisit)({url:"/pages/user/index"}).then((function(e){}))},openAuto:function(){(0,i.toLogin)()},onLoadFun:function(){this.getUserInfo(),this.getMyMenus(),this.setVisit()},Setting:function(){e.openSetting({success:function(e){}})},authColse:function(e){this.isShowAuth=e},bindPhone:function(){e.navigateTo({url:"/pages/users/user_phone/index"})},getUserInfo:function(){var t=this;(0,s.getUserInfo)().then((function(n){t.userInfo=n.data,t.$store.commit("SETUID",n.data.uid),t.orderMenu.forEach((function(e,t){switch(e.title){case"待付款":e.num=n.data.orderStatusNum.unpaid_count;break;case"待发货":e.num=n.data.orderStatusNum.unshipped_count;break;case"待收货":e.num=n.data.orderStatusNum.received_count;break;case"待评价":e.num=n.data.orderStatusNum.evaluated_count;break;case"售后/退款":e.num=n.data.orderStatusNum.refunding_count;break}})),e.stopPullDownRefresh()}))},getUserProfile:function(){(0,i.toLogin)()},switchTab:function(e){this.orderMenu.forEach((function(t,n){switch(t.title){case"待付款":t.img=e.dfk;break;case"待发货":t.img=e.dfh;break;case"待收货":t.img=e.dsh;break;case"待评价":t.img=e.dpj;break;case"售后/退款":t.img=e.sh;break}}))},getMyMenus:function(){var e=this,t=this;(0,s.getMenuList)().then((function(n){var s=[],u=[];n.data.routine_my_menus.forEach((function(t,n,i){"/pages/admin/order/index"==t.url||"/pages/admin/order_cancellation/index"==t.url||t.name==e.$t("客服接待")?s.push(t):u.push(t)})),e.member_style=Number(n.data.diy_data.value),e.my_banner_status=n.data.diy_data.my_banner_status;var i={dfk:"icon-daifukuan",dfh:"icon-daifahuo",dsh:"icon-daishouhuo",dpj:"icon-daipingjia",sh:"icon-a-shouhoutuikuan"},o={dfk:"icon-daifukuan-lan",dfh:"icon-daifahuo-lan",dsh:"icon-daishouhuo-lan",dpj:"icon-daipingjia-lan",sh:"icon-shouhou-tuikuan-lan"},r={dfk:"icon-daifukuan-ju",dfh:"icon-daifahuo-ju",dsh:"icon-daishouhuo-ju",dpj:"icon-daipingjia-ju",sh:"icon-shouhou-tuikuan-ju"},a={dfk:"icon-daifukuan-fen",dfh:"icon-daifahuo-fen",dsh:"icon-daishouhuo-fen",dpj:"icon-daipingjia-fen",sh:"icon-a-shouhoutuikuan-fen"},f={dfk:"icon-daifukuan-lv",dfh:"icon-daifahuo-lv",dsh:"icon-daishouhuo-lv",dpj:"icon-daipingjia-lv",sh:"icon-shouhou-tuikuan-lv"};switch(n.data.diy_data.order_status){case 1:e.switchTab(i);break;case 2:e.switchTab(o);break;case 3:e.switchTab(r);break;case 4:e.switchTab(a);break;case 5:e.switchTab(f);break}t.$set(t,"MyMenus",u),t.$set(t,"storeMenu",s),e.imgUrls=n.data.routine_my_banner,e.routineContact=Number(n.data.routine_contact_type)}))},goEdit:function(){0==this.isLogin?(0,i.toLogin)():e.navigateTo({url:"/pages/users/user_info/index"})},goSignIn:function(){e.navigateTo({url:"/pages/users/user_sgin/index"})},goMenuPage:function(t,n){if(this.isLogin)if(-1===t.indexOf("http")){if(n&&n===this.$t("contact_customer"))return(0,f.getCustomer)(t);"#"!=t&&"/pages/users/user_info/index"==t&&e.openSetting({success:function(e){}}),e.navigateTo({url:t,fail:function(n){e.switchTab({url:t})}})}else e.navigateTo({url:"/pages/annex/web_view/index?url=".concat(t)});else this.openAuto()},goRouter:function(t){var n=getCurrentPages(),s=n[n.length-1].$page.fullPath;t.link!=s&&e.switchTab({url:t.link,fail:function(n){e.redirectTo({url:t.link})}})},getCopyRight:function(){var t=e.getStorageSync("copyRight");t.copyrightImage&&(this.copyRightPic=t.copyrightImage)}}};t.default=h}).call(this,n("543d")["default"])},e6df:function(e,t,n){},eb36:function(e,t,n){"use strict";var s;n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s}));var u=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$t("个人中心")),s=0==e.userInfo.is_complete?e.$t("获取头像"):null,u=e.userInfo.uid?null:e.$t("请点击授权"),i=!e.userInfo.phone&&e.isLogin?e.$t("绑定手机号"):null,o=e.userInfo.balance_func_status?e.$t("余额"):null,r=e.userInfo.balance_func_status?null:e.$t("收藏"),a=e.$t("优惠券"),f=e.$t("积分"),c=e.userInfo.svip_open&&1==e.member_style&&1==e.userInfo.vip_status?e.$t("永久"):null,l=e.userInfo.svip_open&&1==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e.$t("会员到期"):null,p=e.userInfo.svip_open&&1==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e._f("dateFormat")(e.userInfo.overdue_time):null,d=e.userInfo.svip_open&&1==e.member_style&&1!=e.userInfo.vip_status&&3!=e.userInfo.vip_status&&-1==e.userInfo.vip_status?e.$t("已过期"):null,_=e.userInfo.svip_open&&1==e.member_style&&1!=e.userInfo.vip_status&&3!=e.userInfo.vip_status&&-1!=e.userInfo.vip_status&&2==e.userInfo.vip_status?e.$t("未开通会员"):null,m=e.userInfo.svip_open&&1==e.member_style&&1==e.userInfo.vip_status?e.$t("查看会员权益"):null,h=e.userInfo.svip_open&&1==e.member_style&&1!=e.userInfo.vip_status&&e.userInfo.overdue_time?e.$t("立即续费"):null,g=e.userInfo.svip_open&&1==e.member_style&&1!=e.userInfo.vip_status&&!e.userInfo.overdue_time?e.$t("立即激活"):null,v=e.userInfo.svip_open&&3==e.member_style&&1==e.userInfo.vip_status?e.$t("永久"):null,b=e.userInfo.svip_open&&3==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e.$t("会员到期"):null,I=e.userInfo.svip_open&&3==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e._f("dateFormat")(e.userInfo.overdue_time):null,y=e.userInfo.svip_open&&3==e.member_style&&1!=e.userInfo.vip_status&&3!=e.userInfo.vip_status&&-1==e.userInfo.vip_status?e.$t("已过期"):null,$=e.userInfo.svip_open&&3==e.member_style&&1!=e.userInfo.vip_status&&3!=e.userInfo.vip_status&&-1!=e.userInfo.vip_status&&2==e.userInfo.vip_status?e.$t("未开通会员"):null,k=e.userInfo.svip_open&&3==e.member_style&&1==e.userInfo.vip_status?e.$t("会员可享多项权益"):null,w=e.userInfo.svip_open&&3==e.member_style&&1!=e.userInfo.vip_status&&e.userInfo.overdue_time?e.$t("立即续费"):null,j=e.userInfo.svip_open&&3==e.member_style&&1!=e.userInfo.vip_status&&!e.userInfo.overdue_time?e.$t("立即激活"):null,M=e.userInfo.svip_open&&2==e.member_style?e.$t("会员可享多项权益"):null,S=e.userInfo.svip_open&&2==e.member_style&&1==e.userInfo.vip_status?e.$t("永久"):null,x=e.userInfo.svip_open&&2==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e.$t("会员到期"):null,O=e.userInfo.svip_open&&2==e.member_style&&1!=e.userInfo.vip_status&&3==e.userInfo.vip_status?e._f("dateFormat")(e.userInfo.overdue_time):null,P=e.userInfo.svip_open&&2==e.member_style&&1!=e.userInfo.vip_status&&3!=e.userInfo.vip_status&&-1==e.userInfo.vip_status?e.$t("已过期"):null,T=e.userInfo.svip_open&&2==e.member_style&&1!=e.userInfo.vip_status&&3!=e.userInfo.vip_status&&-1!=e.userInfo.vip_status&&2==e.userInfo.vip_status?e.$t("未开通会员"):null,R=e.userInfo.svip_open&&2==e.member_style&&1==e.userInfo.vip_status?e.$t("查看会员权益"):null,L=e.userInfo.svip_open&&2==e.member_style&&1!=e.userInfo.vip_status&&e.userInfo.overdue_time?e.$t("立即续费"):null,D=e.userInfo.svip_open&&2==e.member_style&&1!=e.userInfo.vip_status&&!e.userInfo.overdue_time?e.$t("立即激活"):null,N=e.$t("订单中心"),U=e.$t("查看全部"),C=e.__map(e.orderMenu,(function(t,n){var s=e.__get_orig(t),u=e.$t(t.title);return{$orig:s,m32:u}})),E=e.$t("我的服务"),A=e.__map(e.MyMenus,(function(t,n){var s=e.__get_orig(t),u="#"!=t.url&&"/pages/service/index"!=t.url&&"/pages/extension/customer_list/chat"!=t.url||"/pages/extension/customer_list/chat"==t.url&&0==e.routineContact?e.$t(t.name):null;return{$orig:s,m34:u}})),B=1==e.routineContact?e.$t("联系客服"):null,F=e.storeMenu.length?e.$t("商家管理"):null,H=e.storeMenu.length?e.__map(e.storeMenu,(function(t,n){var s=e.__get_orig(t),u="#"!=t.url&&"/pages/service/index"!=t.url?e.$t(t.name):null;return{$orig:s,m37:u}})):null;e.$mp.data=Object.assign({},{$root:{m0:n,m1:s,m2:u,m3:i,m4:o,m5:r,m6:a,m7:f,m8:c,m9:l,f0:p,m10:d,m11:_,m12:m,m13:h,m14:g,m15:v,m16:b,f1:I,m17:y,m18:$,m19:k,m20:w,m21:j,m22:M,m23:S,m24:x,f2:O,m25:P,m26:T,m27:R,m28:L,m29:D,m30:N,m31:U,l0:C,m33:E,l1:A,m35:B,m36:F,l2:H}})},i=[]},fb27:function(e,t,n){"use strict";var s=n("e6df"),u=n.n(s);u.a},fc35:function(e,t,n){"use strict";(function(e){n("d5c5");s(n("66fd"));var t=s(n("bc08"));function s(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["fc35","common/runtime","common/vendor"]]]);