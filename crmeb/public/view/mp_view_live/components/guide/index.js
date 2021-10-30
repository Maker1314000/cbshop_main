(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/guide/index"],{"0865":function(t,n,e){},"0fe0":function(t,n,e){"use strict";e.r(n);var u=e("2acf"),a=e("2a5a");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("6a63");var r,c=e("f0c5"),o=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=o.exports},"2a5a":function(t,n,e){"use strict";e.r(n);var u=e("37dd"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);n["default"]=a.a},"2acf":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},i=[]},"37dd":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{autoplay:!1,duration:500,jumpover:"跳过",experience:"立即体验",time:5,timecount:void 0}},props:{advList:{type:Array,default:function(){}}},mounted:function(){this.timer()},methods:{timer:function(){var t=this,n=5;this.timecount=setInterval((function(){n--,t.time=n,n<=0&&(clearInterval(t.timecount),t.launchFlag())}),1e3)},launchFlag:function(){clearInterval(this.timecount),t.switchTab({url:"/pages/index/index"})}}};n.default=e}).call(this,e("543d")["default"])},"6a63":function(t,n,e){"use strict";var u=e("0865"),a=e.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/guide/index-create-component',
    {
        'components/guide/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0fe0"))
        })
    },
    [['components/guide/index-create-component']]
]);
