(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-scan_login-index"],{"0b73":function(n,t,e){"use strict";e.r(t);var i=e("c496"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=a.a},"311d":function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,"uni-page-body[data-v-43e1fc68]{height:100%;background:#fff}.scan_login .head[data-v-43e1fc68]{display:flex;flex-direction:column;align-items:center;padding-top:%?96?%}.scan_login .head uni-image[data-v-43e1fc68]{width:%?178?%;height:%?178?%;border-radius:50%}.scan_login .head .big[data-v-43e1fc68]{margin:%?20?% 0 %?10?%;font-size:%?32?%;color:#282828}.scan_login .head .small[data-v-43e1fc68]{color:#9f9f9f;font-size:%?28?%}.scan_login .head .btn[data-v-43e1fc68]{display:flex;align-items:center;justify-content:center;width:%?594?%;height:%?86?%;margin:%?28?% auto 0;font-size:%?30?%;color:#fff;border-radius:%?43?%;background:linear-gradient(90deg,#3875ea,#1890fc)}.scan_login .head .btn.out[data-v-43e1fc68]{border:1px solid #3875ea;background:none;color:#3875ea}.scan_login .head .btn.sub_btn[data-v-43e1fc68]{margin-top:%?96?%}body.?%PAGE?%[data-v-43e1fc68]{background:#fff}",""]),n.exports=t},"579d":function(n,t,e){"use strict";e.r(t);var i=e("9301"),a=e("0b73");for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);e("bf20");var c,s=e("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"43e1fc68",null,!1,i["a"],c);t["default"]=d.exports},9301:function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"scan_login"},[e("v-uni-view",{staticClass:"head"},[e("v-uni-image",{attrs:{src:n.userInfo.avatar,mode:""}}),e("v-uni-view",{staticClass:"big"},[n._v(n._s(n.userInfo.nickname))]),e("v-uni-view",{staticClass:"small"},[n._v(n._s(n.$t("service_desk")))]),e("v-uni-view",{staticClass:"sub_btn btn",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.scanLogin.apply(void 0,arguments)}}},[n._v(n._s(n.$t("auth_login")))]),e("v-uni-view",{staticClass:"out btn",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.closePage.apply(void 0,arguments)}}},[n._v(n._s(n.$t("cancel")))])],1)],1)},o=[]},bf20:function(n,t,e){"use strict";var i=e("d2a1"),a=e.n(i);a.a},c496:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e("cff9"),a=e("bdf2"),o={name:"scan_login",data:function(){return{code:"",userInfo:{}}},onLoad:function(n){this.code=n.key,this.codeStauts(),this.getUserInfo()},methods:{codeStauts:function(){var n=this;(0,a.codeStauts)({code:this.code}).then((function(n){})).catch((function(t){n.openModel(t)}))},scanLogin:function(){var n=this;this.code?(0,a.kefuScanLogin)({code:this.code}).then((function(n){uni.showToast({title:n.msg,icon:"success"}),setTimeout((function(n){WeixinJSBridge.call("closeWindow")}),2e3)})).catch((function(t){n.openModel(t)})):this.openModel(this.$t("no_login_code"))},openModel:function(n){uni.showModal({title:this.$t("hint"),content:n,success:function(n){n.confirm?WeixinJSBridge.call("closeWindow"):n.cancel&&this.$t("user_clicks_cancel")}})},closePage:function(){WeixinJSBridge.call("closeWindow")},getUserInfo:function(){var n=this;(0,i.getUserInfo)().then((function(t){n.userInfo=t.data}))}}};t.default=o}).call(this,e("5a52")["default"])},d2a1:function(n,t,e){var i=e("311d");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("fd6fc91e",i,!0,{sourceMap:!1,shadowMode:!1})}}]);