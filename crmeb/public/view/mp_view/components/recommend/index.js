(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/recommend/index"],{"0d55":function(t,n,e){"use strict";var u=e("6ff0"),a=e.n(u);a.a},"5b18":function(t,n,e){"use strict";e.r(n);var u=e("7e8a"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=a.a},"6d6d":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"6ff0":function(t,n,e){},"7e8a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),a=e("d175"),r=o(e("5a44"));function o(t){return t&&t.__esModule?t:{default:t}}var i={computed:(0,u.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[r.default],data:function(){return{}},methods:{goDetail:function(n){(0,a.goShopDetail)(n,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}}};n.default=i}).call(this,e("543d")["default"])},"81f7":function(t,n,e){"use strict";e.r(n);var u=e("6d6d"),a=e("5b18");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("0d55");var o,i=e("f0c5"),c=Object(i["a"])(a["default"],u["b"],u["c"],!1,null,"628ebb5a",null,!1,u["a"],o);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/recommend/index-create-component',
    {
        'components/recommend/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("81f7"))
        })
    },
    [['components/recommend/index-create-component']]
]);
