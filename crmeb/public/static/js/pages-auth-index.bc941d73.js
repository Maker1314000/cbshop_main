(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auth-index"],{"0d1c":function(t,e,n){"use strict";n.r(e);var i=n("1044"),a=n("d402");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d4df");var s,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"37751114",null,!1,i["a"],s);e["default"]=r.exports},1044:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.bindPhone?n("v-uni-view",[n("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.editPwd.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"ChangePassword"},[n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"number",placeholder:t.$t("input_phone"),"placeholder-class":"placeholder"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-input",{staticClass:"codeIput",attrs:{type:"number",placeholder:t.$t("enter_code"),"placeholder-class":"placeholder"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-button",{staticClass:"code font-color",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),n("v-uni-button",{staticClass:"confirmBnt bg-color",attrs:{"form-type":"submit"}},[t._v(t._s(t.$t("confirm_bind")))])],1)],1)],1):n("v-uni-view",{staticClass:"lottie-bg"},[n("v-uni-view",{attrs:{id:"lottie"}})],1)},o=[]},"3f5d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{disabled:!1,text:this.$t("get_code")}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text=this.$t("remaining")+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text=t.$t("remaining")+e+"s",t.text<t.$t("remaining")+0+"s"&&(t.disabled=!1,t.text=t.$t("reacquire"))}),1e3)}}}};e.default=i},"62fc":function(t,e,n){var i=n("7677");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3bba2b35",i,!0,{sourceMap:!1,shadowMode:!1})},7677:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-37751114]{background-color:#fff!important}.ChangePassword .phone[data-v-37751114]{font-size:%?32?%;font-weight:700;text-align:center;margin-top:%?55?%}.ChangePassword .list[data-v-37751114]{width:%?580?%;margin:%?53?% auto 0 auto}.ChangePassword .list .item[data-v-37751114]{width:100%;height:%?110?%;border-bottom:%?2?% solid #f0f0f0}.ChangePassword .list .item uni-input[data-v-37751114]{width:100%;height:100%;font-size:%?32?%}.ChangePassword .list .item .placeholder[data-v-37751114]{color:#b9b9bc}.ChangePassword .list .item uni-input.codeIput[data-v-37751114]{width:%?340?%}.ChangePassword .list .item .code[data-v-37751114]{font-size:%?32?%;background-color:#fff}.ChangePassword .list .item .code.on[data-v-37751114]{color:#b9b9bc!important}.ChangePassword .confirmBnt[data-v-37751114]{font-size:%?32?%;width:%?580?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?92?% auto 0 auto;text-align:center;line-height:%?90?%}.lottie-bg[data-v-37751114]{position:fixed;left:0;top:0;background-color:#fff;width:100%;height:100%;z-index:999;display:flex;align-items:center;justify-content:center}#lottie[data-v-37751114]{display:block;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);margin:auto}#lottie uni-image[data-v-37751114]{width:%?200?%;height:%?200?%}body.?%PAGE?%[data-v-37751114]{background-color:#fff!important}',""]),t.exports=e},9483:function(t,e,n){"use strict";var i=n("4ea4");n("c975"),n("e25e"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("95d7")),o=i(n("3f5d")),s=n("cff9"),c=n("555e"),r=n("d8b4"),d=n("e5e8"),u={name:"Auth",mixins:[o.default],data:function(){return{phone:"",captcha:"",key:"",authKey:"",scope:"",bindPhone:!1}},mounted:function(){},onLoad:function(t){var e=this,n=this,i=t.code,o=t.state,d=t.scope;if("snsapi_base"===d){this.url=t.url||t.back_url||"";var u=this.$Cache.get("spread"),l=this.$Cache.get(c.LOGINTYPE);(0,r.silenceAuth)({code:t.code||"",spread:u}).then((function(n){void 0!==n.data.key?(e.bindPhone=!0,e.authKey=n.data.key):(e.$store.commit("LOGIN",{token:n.data.token,time:parseInt(n.data.expires_time)-e.$Cache.time()}),e.$Cache.set(c.WX_AUTH,t.code),e.$Cache.clear(c.STATE_KEY),l&&e.$Cache.clear(c.LOGINTYPE),location.href=decodeURIComponent(decodeURIComponent(t.back_url)))}))}else a.default.auth(i,o).then((function(){location.href=decodeURIComponent(decodeURIComponent(t.back_url)),(0,s.getUserInfo)().then((function(t){n.$store.commit("SETUID",t.data.uid)}))})).catch((function(){location.replace("/")}))},methods:{editPwd:function(){var t=this,e=this;return e.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(e.phone)?e.captcha?void(0,d.bindingPhone)({phone:e.phone,captcha:e.captcha,key:e.authKey}).then((function(n){var i=n.data.expires_time-t.$Cache.time();if(t.$store.commit("LOGIN",{token:n.data.token,time:i}),!t.url||-1===t.url.indexOf("http"))return e.$util.Tips({title:t.$t("bind_success"),icon:"success"},{tab:4,url:"/pages/index/index"});location.href=t.url})).catch((function(t){return e.$util.Tips({title:t})})):e.$util.Tips({title:e.$t("enter_code")}):e.$util.Tips({title:e.$t("input_correct_phone")}):e.$util.Tips({title:e.$t("input_phone")})},code:function(){var t=this;return t.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(t.phone)?void(0,d.verifyCode)().then((function(e){(0,d.registerVerify)(t.phone,"reset",e.data.key,t.captcha).then((function(e){t.$util.Tips({title:e.msg}),t.sendCode()})).catch((function(e){return t.$util.Tips({title:e})}))})):t.$util.Tips({title:t.$t("input_correct_phone")}):t.$util.Tips({title:t.$t("input_phone")})}}};e.default=u},d402:function(t,e,n){"use strict";n.r(e);var i=n("9483"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d4df:function(t,e,n){"use strict";var i=n("62fc"),a=n.n(i);a.a}}]);