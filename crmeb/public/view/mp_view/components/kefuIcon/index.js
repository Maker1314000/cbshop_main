(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kefuIcon/index"],{2477:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return u}));var o=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"330f":function(t,e,n){"use strict";n.r(e);var u=n("68ec"),o=n.n(u);for(var c in u)"default"!==c&&function(t){n.d(e,t,(function(){return u[t]}))}(c);e["default"]=o.a},6561:function(t,e,n){"use strict";var u=n("9665"),o=n.n(u);o.a},"68ec":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n("6be9"),o=(getApp(),{name:"kefuIcon",props:{ids:{type:Number,default:0},routineContact:{type:Number,default:0},storeInfo:{type:Object,default:function(){}},goodsCon:{type:Number,default:0}},data:function(){return{top:"480"}},mounted:function(){},methods:{goCustomer:function(){(0,u.getCustomer)("/pages/customer_list/chat?productId=".concat(this.ids))},setTouchMove:function(t){var e=this;t.touches[0].clientY<480&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)}},created:function(){}});e.default=o},9665:function(t,e,n){},baae:function(t,e,n){"use strict";n.r(e);var u=n("2477"),o=n("330f");for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("6561");var r,a=n("f0c5"),f=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kefuIcon/index-create-component',
    {
        'components/kefuIcon/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("baae"))
        })
    },
    [['components/kefuIcon/index-create-component']]
]);
