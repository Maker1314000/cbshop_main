(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/promotionGood/index"],{"039c":function(t,n,e){"use strict";e.r(n);var u=e("9c48"),o=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);n["default"]=o.a},"2eae":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return u}));var o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"69bc":function(t,n,e){},7526:function(t,n,e){"use strict";e.r(n);var u=e("2eae"),o=e("039c");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("ed3c");var c,i=e("f0c5"),r=Object(i["a"])(o["default"],u["b"],u["c"],!1,null,"2bd95962",null,!1,u["a"],c);n["default"]=r.exports},"9c48":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),o=e("2344"),a=c(e("db1b"));function c(t){return t&&t.__esModule?t:{default:t}}var i={computed:(0,u.mapGetters)(["uid"]),mixins:[a.default],props:{benefit:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(n){var e=this;(0,o.goPage)().then((function(u){(0,o.goShopDetail)(n,e.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}))}}};n.default=i}).call(this,e("543d")["default"])},ed3c:function(t,n,e){"use strict";var u=e("69bc"),o=e.n(u);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/promotionGood/index-create-component',
    {
        'components/promotionGood/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7526"))
        })
    },
    [['components/promotionGood/index-create-component']]
]);
