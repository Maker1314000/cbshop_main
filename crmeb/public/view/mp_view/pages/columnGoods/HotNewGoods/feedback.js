(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/columnGoods/HotNewGoods/feedback"],{"0e4c":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var c=function(){var t=this,e=t.$createElement;t._self._c},a=[]},1973:function(t,e,n){"use strict";(function(t){n("6e38");i(n("66fd"));var e=i(n("2977"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},2977:function(t,e,n){"use strict";n.r(e);var i=n("0e4c"),c=n("af90");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("a619");var o,u=n("f0c5"),s=Object(u["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=s.exports},"5cc2":function(t,e,n){},"8e27":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("da79"),c={name:"feedback",data:function(){return{name:"",phone:"",con:"",feedback:""}},onLoad:function(){this.getInfo()},methods:{getInfo:function(){var t=this;(0,i.serviceFeedBack)().then((function(e){t.feedback=e.data.feedback}))},subMit:function(){var t=this;return this.name?this.phone&&/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.phone)?this.con?void(0,i.feedBackPost)({rela_name:this.name,phone:this.phone,content:this.con}).then((function(e){t.$util.Tips({title:e.msg,icon:"success"},{tab:3})})).catch((function(t){that.$util.Tips({title:t})})):this.$util.Tips({title:"请填写内容"}):this.$util.Tips({title:"请填写正确的手机号码"}):this.$util.Tips({title:"请填写姓名"})}}};e.default=c},a619:function(t,e,n){"use strict";var i=n("5cc2"),c=n.n(i);c.a},af90:function(t,e,n){"use strict";n.r(e);var i=n("8e27"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a}},[["1973","common/runtime","common/vendor"]]]);