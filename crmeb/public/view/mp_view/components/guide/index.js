(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/guide/index"],{"3f16":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return u}));var i=function(){var t=this,n=t.$createElement;t._self._c},a=[]},6171:function(t,n,e){"use strict";var u=e("ed26"),i=e.n(u);i.a},"6bc3":function(t,n,e){"use strict";e.r(n);var u=e("3f16"),i=e("fe89");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("6171");var c,r=e("f0c5"),o=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);n["default"]=o.exports},d56c:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{autoplay:!1,duration:500,jumpover:"跳过",experience:"立即体验",time:5,timecount:void 0}},props:{advList:{type:Array,default:function(){}}},mounted:function(){this.timer()},methods:{timer:function(){var t=this,n=5;this.timecount=setInterval((function(){n--,t.time=n,n<=0&&(clearInterval(t.timecount),t.launchFlag())}),1e3)},launchFlag:function(){clearInterval(this.timecount),t.switchTab({url:"/pages/index/index"})}}};n.default=e}).call(this,e("543d")["default"])},ed26:function(t,n,e){},fe89:function(t,n,e){"use strict";e.r(n);var u=e("d56c"),i=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);n["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/guide/index-create-component',
    {
        'components/guide/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6bc3"))
        })
    },
    [['components/guide/index-create-component']]
]);
