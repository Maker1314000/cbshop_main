(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/login/index"],{"0712":function(t,e,n){},"1b77":function(t,e,n){"use strict";var i=n("0712"),r=n.n(i);r.a},"20b1":function(t,e,n){"use strict";var i=n("bbac"),r=n.n(i);r.a},4405:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=p(n("a34a")),r=(p(n("955f")),p(n("3f5d"))),a=n("cff9"),o=(l(n("93d6")),n("d8b4")),c=n("e979"),u=p(n("cf74"));function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function l(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var a=i?Object.getOwnPropertyDescriptor(t,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=t[r]}return n.default=t,e&&e.set(t,n),n}function p(t){return t&&t.__esModule?t:{default:t}}function f(t,e,n,i,r,a,o){try{var c=t[a](o),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(i,r)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function o(t){f(a,i,r,o,c,"next",t)}function c(t){f(a,i,r,o,c,"throw",t)}o(void 0)}))}}var h="login_back_url",m=function(){n.e("pages/users/components/verify/verify").then(function(){return resolve(n("2f7a"))}.bind(null,n)).catch(n.oe)},$={name:"Login",components:{Verify:m},mixins:[r.default,u.default],data:function(){return{copyRight:"",inAnimation:!1,protocol:!1,navList:[this.$t("快速登录"),this.$t("账号登录")],current:1,account:"",password:"",captcha:"",formItem:1,type:"login",logoUrl:"",keyCode:"",codeUrl:"",codeVal:"",isShowCode:!1,appLoginStatus:!1,appUserInfo:null,appleLoginStatus:!1,appleUserInfo:null,appleShow:!1,keyLock:!0}},watch:{formItem:function(t,e){this.type=1==t?"login":"register"}},onLoad:function(){var e=this,n=this;t.getSystemInfo({success:function(t){"ios"==t.platform.toLowerCase()&&e.getSystem(t.system)&&(n.appleShow=!0)}}),t.getStorageSync("copyRight").copyrightContext&&(this.copyRight=t.getStorageSync("copyRight").copyrightContext)},mounted:function(){this.getLogoImage()},methods:{ChangeIsDefault:function(t){this.$set(this,"protocol",!this.protocol)},privacy:function(e){t.navigateTo({url:"/pages/users/privacy/index?type="+e})},getSystem:function(t){var e;return e=-1===t.toLowerCase().indexOf("ios")?t:t.split(" ")[1],e.indexOf(".")?e.split(".")[0]>=13:e>=13},appleLogin:function(){var e=this;if(this.account="",this.captcha="",!e.protocol)return this.inAnimation=!0,e.$util.Tips({title:"请先阅读并同意协议"});t.showLoading({title:this.$t("登录中")}),t.login({provider:"apple",timeout:1e4,success:function(n){t.getUserInfo({provider:"apple",success:function(t){e.appleUserInfo=t.userInfo,e.appleLoginApi()},fail:function(){t.showToast({title:e.$t("获取用户信息失败"),icon:"none",duration:2e3})},complete:function(){t.hideLoading()}})},fail:function(t){}})},appleLoginApi:function(){var e=this;(0,a.appleLogin)({openId:e.appleUserInfo.openId,email:e.appleUserInfo.email||"",phone:this.account,captcha:this.captcha}).then((function(n){var i=n.data;if(i.isbind)t.showModal({title:e.$t("提示"),content:e.$t("请绑定手机号后，继续操作"),showCancel:!1,success:function(t){t.confirm&&(e.current=1,e.appleLoginStatus=!0)}});else{e.$store.commit("LOGIN",{token:i.token,time:i.expires_time-e.$Cache.time()});var r=e.$Cache.get(h)||"/pages/index/index";e.$Cache.clear(h),e.$store.commit("SETUID",i.userInfo.uid),t.reLaunch({url:r})}})).catch((function(n){t.showModal({title:e.$t("提示"),content:e.$t("错误信息")+"".concat(n),success:function(t){t.confirm||t.cancel}})}))},wxLogin:function(){var e=this;if(this.account="",this.captcha="",!e.protocol)return this.inAnimation=!0,e.$util.Tips({title:"请先阅读并同意协议"});t.showLoading({title:e.$t("登录中")}),t.login({provider:"weixin",success:function(n){t.getUserInfo({provider:"weixin",success:function(t){e.appUserInfo=t.userInfo,e.wxLoginApi()},fail:function(){t.showToast({title:e.$t("获取用户信息失败"),icon:"none",duration:2e3})},complete:function(){t.hideLoading()}})},fail:function(){t.showToast({title:e.$t("登录失败"),icon:"none",duration:2e3})}})},wxLoginApi:function(){var e=this;wechatAppAuth({userInfo:e.appUserInfo,phone:this.account,code:this.captcha}).then((function(n){var i=n.data;if(i.isbind)t.showModal({title:e.$t("提示"),content:e.$t("请绑定手机号后，继续操作"),showCancel:!1,success:function(t){t.confirm&&(e.current=1,e.appLoginStatus=!0)}});else{e.$store.commit("LOGIN",{token:i.token,time:i.expires_time-e.$Cache.time()});var r=e.$Cache.get(h)||"/pages/index/index";e.$Cache.clear(h),e.$store.commit("SETUID",i.userInfo.uid),t.reLaunch({url:r})}})).catch((function(n){t.showModal({title:e.$t("提示"),content:e.$t("错误信息")+"".concat(n),success:function(t){t.confirm||t.cancel}})}))},again:function(){this.codeUrl=c.VUE_APP_API_URL+"/sms_captcha?key="+this.keyCode+Date.parse(new Date)},success:function(t){var e=this;this.$refs.verify.hide(),(0,a.getCodeApi)().then((function(n){e.keyCode=n.data.key,e.getCode(t)})).catch((function(t){e.$util.Tips({title:t})}))},code:function(){var t=this;if(!t.protocol)return this.inAnimation=!0,t.$util.Tips({title:"请先阅读并同意协议"});this.$refs.verify.show()},getLogoImage:function(){var t=this;return d(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t,(0,o.getLogo)(2).then((function(t){n.logoUrl=t.data.logo_url}));case 2:case"end":return e.stop()}}),e)})))()},loginMobile:function(){var e=this;return d(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e,r.protocol){n.next=4;break}return e.inAnimation=!0,n.abrupt("return",r.$util.Tips({title:"请先阅读并同意协议"}));case 4:if(r.account){n.next=6;break}return n.abrupt("return",r.$util.Tips({title:r.$t("请填写手机号码")}));case 6:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(r.account)){n.next=8;break}return n.abrupt("return",r.$util.Tips({title:r.$t("请输入正确的手机号码")}));case 8:if(r.captcha){n.next=10;break}return n.abrupt("return",r.$util.Tips({title:r.$t("请填写验证码")}));case 10:if(/^[\w\d]+$/i.test(r.captcha)){n.next=12;break}return n.abrupt("return",r.$util.Tips({title:r.$t("请输入正确的验证码")}));case 12:if(!r.appLoginStatus){n.next=16;break}r.wxLoginApi(),n.next=26;break;case 16:if(!r.appleLoginStatus){n.next=20;break}r.appleLoginApi(),n.next=26;break;case 20:if(!e.keyLock){n.next=24;break}e.keyLock=!e.keyLock,n.next=25;break;case 24:return n.abrupt("return",r.$util.Tips({title:r.$t("请勿重复点击")}));case 25:(0,a.loginMobile)({phone:r.account,captcha:r.captcha,spread:r.$Cache.get("spread")}).then((function(n){var i=n.data;r.$store.commit("LOGIN",{token:i.token,time:i.expires_time-e.$Cache.time()});var o=r.$Cache.get(h)||"/pages/index/index";r.$Cache.clear(h),(0,a.getUserInfo)().then((function(n){e.keyLock=!0,r.$store.commit("SETUID",n.data.uid),-1!==o.indexOf("/pages/users/login/index")&&(o="/pages/index/index"),t.reLaunch({url:o})}))})).catch((function(t){e.keyLock=!0,r.$util.Tips({title:t})}));case 26:case"end":return n.stop()}}),n)})))()},register:function(){var t=this;return d(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.protocol){e.next=4;break}return t.inAnimation=!0,e.abrupt("return",n.$util.Tips({title:"请先阅读并同意协议"}));case 4:if(n.account){e.next=6;break}return e.abrupt("return",n.$util.Tips({title:n.$t("请填写手机号码")}));case 6:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=8;break}return e.abrupt("return",n.$util.Tips({title:n.$t("请输入正确的手机号码")}));case 8:if(n.captcha){e.next=10;break}return e.abrupt("return",n.$util.Tips({title:n.$t("请填写验证码")}));case 10:if(/^[\w\d]+$/i.test(n.captcha)){e.next=12;break}return e.abrupt("return",n.$util.Tips({title:n.$t("请输入正确的验证码")}));case 12:if(n.password){e.next=14;break}return e.abrupt("return",n.$util.Tips({title:n.$t("请填写密码")}));case 14:if(!/^([0-9]|[a-z]|[A-Z]){0,6}$/i.test(n.password)){e.next=16;break}return e.abrupt("return",n.$util.Tips({title:n.$t("您输入的密码过于简单")}));case 16:(0,a.register)({account:n.account,captcha:n.captcha,password:n.password,spread:n.$Cache.get("spread")}).then((function(t){n.$util.Tips({title:t}),n.formItem=1})).catch((function(t){n.$util.Tips({title:t})}));case 17:case"end":return e.stop()}}),e)})))()},getCode:function(t){var e=this;return d(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e,r.protocol){n.next=4;break}return e.inAnimation=!0,n.abrupt("return",r.$util.Tips({title:"请先阅读并同意协议"}));case 4:if(r.account){n.next=6;break}return n.abrupt("return",r.$util.Tips({title:r.$t("请填写手机号码")}));case 6:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(r.account)){n.next=8;break}return n.abrupt("return",r.$util.Tips({title:r.$t("请输入正确的手机号码")}));case 8:return 2==r.formItem&&(r.type="register"),n.next=11,(0,a.registerVerify)({phone:r.account,type:r.type,key:r.keyCode,captchaType:"blockPuzzle",captchaVerification:t.captchaVerification}).then((function(t){r.$util.Tips({title:t.msg}),r.sendCode()})).catch((function(t){r.$util.Tips({title:t})}));case 11:case"end":return n.stop()}}),n)})))()},navTap:function(t){this.current=t},submit:function(){var e=this;return d(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e,r.protocol){n.next=4;break}return e.inAnimation=!0,n.abrupt("return",r.$util.Tips({title:"请先阅读并同意协议"}));case 4:if(r.account){n.next=6;break}return n.abrupt("return",r.$util.Tips({title:r.$t("请填写账号")}));case 6:if(/^[\w\d]{5,16}$/i.test(r.account)){n.next=8;break}return n.abrupt("return",r.$util.Tips({title:r.$t("请输入正确的账号")}));case 8:if(r.password){n.next=10;break}return n.abrupt("return",r.$util.Tips({title:r.$t("请填写密码")}));case 10:if(!e.keyLock){n.next=14;break}e.keyLock=!e.keyLock,n.next=15;break;case 14:return n.abrupt("return",r.$util.Tips({title:r.$t("请勿重复点击")}));case 15:(0,a.loginH5)({account:r.account,password:r.password,spread:r.$Cache.get("spread")}).then((function(n){var i=n.data;r.$store.commit("LOGIN",{token:i.token,time:i.expires_time-e.$Cache.time()});var o=r.$Cache.get(h)||"/pages/index/index";r.$Cache.clear(h),(0,a.getUserInfo)().then((function(n){e.keyLock=!0,r.$store.commit("SETUID",n.data.uid),t.reLaunch({url:o})})).catch((function(t){e.keyLock=!0}))})).catch((function(t){e.keyLock=!0,r.$util.Tips({title:t})}));case 16:case"end":return n.stop()}}),n)})))()}}};e.default=$}).call(this,n("543d")["default"])},"5d44":function(t,e,n){"use strict";n.r(e);var i=n("f433"),r=n("fc81");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("20b1"),n("1b77");var o,c=n("f0c5"),u=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=u.exports},bbac:function(t,e,n){},f433:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=(t._self._c,1===t.formItem&&1!==t.current?t.$t("输入手机号码"):null),i=1===t.formItem&&1!==t.current?t.$t("填写登录密码"):null,r=1===t.formItem&&(0!==t.current||t.appLoginStatus||t.appleLoginStatus)?t.$t("输入手机号码"):null,a=1===t.formItem&&(0!==t.current||t.appLoginStatus||t.appleLoginStatus)?t.$t("填写验证码"):null,o=1===t.formItem&&0!==t.current?t.$t("登录"):null,c=1===t.formItem&&0===t.current?t.$t("登录"):null,u=1===t.formItem&&0==t.current?t.$t("快速登录"):null,s=1===t.formItem&&1==t.current?t.$t("账号登录"):null,l=1===t.formItem?t.$t("已阅读并同意"):null,p=1===t.formItem?t.$t("《用户协议》"):null,f=1===t.formItem?t.$t("与"):null,d=1===t.formItem?t.$t("《隐私协议》"):null;t._isMounted||(t.e0=function(e){t.current=1},t.e1=function(e){t.current=0},t.e2=function(e){t.inAnimation=!1}),t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:r,m3:a,m4:o,m5:c,m6:u,m7:s,m8:l,m9:p,m10:f,m11:d}})},a=[]},f55e:function(t,e,n){"use strict";(function(t){n("d5c5");i(n("66fd"));var e=i(n("5d44"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},fc81:function(t,e,n){"use strict";n.r(e);var i=n("4405"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a}},[["f55e","common/runtime","common/vendor"]]]);