(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"000a":function(e,t,o){"use strict";var a=o("13c7"),r=o.n(a);r.a},"13c7":function(e,t,o){},"1dda":function(e,t,o){"use strict";o.r(t);var a=o("3794");for(var r in a)"default"!==r&&function(e){o.d(t,e,(function(){return a[e]}))}(r);o("000a");var n,i,c,u,l=o("f0c5"),s=Object(l["a"])(a["default"],n,i,!1,null,null,null,!1,c,u);t["default"]=s.exports},3794:function(e,t,o){"use strict";o.r(t);var a=o("b2f6"),r=o.n(a);for(var n in a)"default"!==n&&function(e){o.d(t,e,(function(){return a[e]}))}(n);t["default"]=r.a},"39cf":function(e,t,o){"use strict";(function(e){o("6e38");var t=l(o("66fd")),a=l(o("1dda")),r=l(o("6b37")),n=l(o("0c53")),i=l(o("b2c5")),c=l(o("514d")),u=l(o("a762"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){f(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function f(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}wx.__webpack_require_UNI_MP_PLUGIN__=o,t.default.prototype.$util=i.default,t.default.prototype.$config=c.default,t.default.prototype.$Cache=n.default,t.default.prototype.$eventHub=new t.default,t.default.prototype.$socket=new u.default,t.default.config.productionTip=!1;var p=function(){o.e("components/pageLoading").then(function(){return resolve(o("bd4a"))}.bind(null,o)).catch(o.oe)},b=function(){o.e("components/skeleton/index").then(function(){return resolve(o("a7b5"))}.bind(null,o)).catch(o.oe)};t.default.component("skeleton",b),t.default.component("pageLoading",p),a.default.mpType="app";var v=new t.default(d(d({},a.default),{},{store:r.default,Cache:n.default}));e(v).$mount()}).call(this,o("543d")["createApp"])},b2f6:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o("c6cd");var a=o("514d"),r=o("1346"),n=(l(o("50b4")),l(o("2f12"))),i=(o("e0d6"),o("7fe6")),c=o("26cb"),u=l(o("c83f"));function l(e){return e&&e.__esModule?e:{default:e}}var s="--view-theme: rgba(66,202,77,1);--view-theme-16: #42CA4D;--view-priceColor:#FF7600;--view-minorColor:rgba(108, 198, 94, 0.5);--view-minorColorT:rgba(66, 202, 77, 0.1);--view-bntColor:#FE960F;--view-op-ten: rgba(66,202,77, 0.1);--view-main-start:#70E038; --view-main-over:#42CA4D;--view-op-point-four: rgba(66,202,77, 0.04);",d="--view-theme: rgba(233,51,35,1);--view-theme-16: #e93323;--view-priceColor:#e93323;--view-minorColor:rgba(233, 51, 35, 0.5);--view-minorColorT:rgba(233, 51, 35, 0.1);--view-bntColor:#FE960F;--view-op-ten: rgba(233,51,35, 0.1);--view-main-start:#FF6151; --view-main-over:#e93323;--view-op-point-four: rgba(233,51,35, 0.04);",f="--view-theme: rgba(29,176,252,1);--view-theme-16:#1db0fc;--view-priceColor:#FD502F;--view-minorColor:rgba(58, 139, 236, 0.5);--view-minorColorT:rgba(9, 139, 243, 0.1);--view-bntColor:#22CAFD;--view-op-ten: rgba(29,176,252, 0.1);--view-main-start:#40D1F4; --view-main-over:#1DB0FC;--view-op-point-four: rgba(29,176,252, 0.04);",p="--view-theme: rgba(255,68,143,1);--view-theme-16:#ff448f;--view-priceColor:#FF448F;--view-minorColor:rgba(255, 68, 143, 0.5);--view-minorColorT:rgba(255, 68, 143, 0.1);--view-bntColor:#282828;--view-op-ten: rgba(255,68,143, 0.1);--view-main-start:#FF67AD; --view-main-over:#FF448F;--view-op-point-four: rgba(255,68,143, 0.04);",b="--view-theme: rgba(254,92,45,1); --view-theme-16:#FE5C2D;--view-priceColor:#FE5C2D;--view-minorColor:rgba(254, 92, 45, 0.5);--view-minorColorT:rgba(254, 92, 45, 0.1);--view-bntColor:#FDB000;--view-op-ten: rgba(254,92,45, 0.1);--view-main-start:#FF9445; --view-main-over:#FE5C2D;--view-op-point-four: rgba(254,92,45, 0.04);",v={globalData:{spid:0,code:0,isLogin:!1,userInfo:{},MyMenus:[],globalData:!1,isIframe:!1,tabbarShow:!0,windowHeight:0},mixins:[u.default],computed:(0,c.mapGetters)(["isLogin","cartNum"]),watch:{isLogin:{deep:!0,handler:function(e,t){e||this.$store.commit("indexData/setCartNum","")}},cartNum:function(t,o){this.$store.commit("indexData/setCartNum",t+""),t>0?e.setTabBarBadge({index:Number(e.getStorageSync("FOOTER_ADDCART"))||2,text:t+""}):e.hideTabBarRedDot({index:Number(e.getStorageSync("FOOTER_ADDCART"))||2})}},onLaunch:function(t){var o=this,r=this;if((0,i.colorChange)("color_change").then((function(t){switch(t.data.status){case 1:e.setStorageSync("viewColor",f),e.$emit("ok",f);break;case 2:e.setStorageSync("viewColor",s),e.$emit("ok",s);break;case 3:e.setStorageSync("viewColor",d),e.$emit("ok",d);break;case 4:e.setStorageSync("viewColor",p),e.$emit("ok",p);break;case 5:e.setStorageSync("viewColor",b),e.$emit("ok",b);break;default:e.setStorageSync("viewColor",d),e.$emit("ok",d);break}})),t.query.spread&&(r.$Cache.set("spread",t.query.spread),r.globalData.spid=t.query.spread,r.globalData.pid=t.query.spread),""==a.HTTP_REQUEST_URL)return!1;if(t.query.hasOwnProperty("scene"))switch(t.scene){case 1047:var c=r.$util.getUrlParams(decodeURIComponent(t.query.scene));r.globalData.code=void 0===c.pid?c:c.pid;break;case 1048:r.globalData.code=t.query.scene;break;case 1049:r.globalData.code=t.query.scene;break;case 1001:r.globalData.spid=t.query.scene;break}var u=wx.getUpdateManager();u.onCheckForUpdate((function(e){})),u.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&u.applyUpdate()}})})),u.onUpdateFailed((function(){return r.Tips({title:"新版本下载失败"})})),e.getSystemInfo({success:function(e){r.globalData.navHeight=e.statusBarHeight*(750/e.windowWidth)+91}});var l=e.getMenuButtonBoundingClientRect();r.globalData.navH=2*l.top+l.height/2,this.$store.getters.isLogin||n.default.getCode().then((function(e){o.silenceAuth(e)})).catch((function(t){e.hideLoading()}))},mounted:function(){},methods:{silenceAuth:function(t){var o=this,a=this,n=a.globalData.spid?a.globalData.spid:"";(0,r.silenceAuth)({code:t,spread_spid:n,spread_code:a.globalData.code}).then((function(t){if(void 0!==t.data.token&&t.data.token){e.hideLoading();var r=t.data.expires_time-o.$Cache.time();a.$store.commit("LOGIN",{token:t.data.token,time:r}),a.$store.commit("SETUID",t.data.userInfo.uid),a.$store.commit("UPDATE_USERINFO",t.data.userInfo)}})).catch((function(e){}))}},onHide:function(){}};t.default=v}).call(this,o("543d")["default"])}},[["39cf","common/runtime","common/vendor"]]]);