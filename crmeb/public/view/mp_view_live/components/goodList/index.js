(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/goodList/index"],{5093:function(t,n,e){},"772f":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),a=e("2344"),o={computed:(0,u.mapGetters)(["uid"]),props:{status:{type:Number,default:0},bastList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(n){var e=this;(0,a.goPage)().then((function(u){(0,a.goShopDetail)(n,e.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}))}}};n.default=o}).call(this,e("543d")["default"])},ce53:function(t,n,e){"use strict";e.r(n);var u=e("e465"),a=e("d32a");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("de4f");var i,r=e("f0c5"),c=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,"48f8e84b",null,!1,u["a"],i);n["default"]=c.exports},d32a:function(t,n,e){"use strict";e.r(n);var u=e("772f"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=a.a},de4f:function(t,n,e){"use strict";var u=e("5093"),a=e.n(u);a.a},e465:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/goodList/index-create-component',
    {
        'components/goodList/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ce53"))
        })
    },
    [['components/goodList/index-create-component']]
]);
