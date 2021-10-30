(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/adsRecommend"],{3602:function(n,t,e){},9098:function(n,t,e){"use strict";e.r(t);var a=e("a2c1"),i=e("d8a2");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("c8ac");var c,u=e("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);t["default"]=r.exports},a2c1:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement;n._self._c},o=[]},c8ac:function(n,t,e){"use strict";var a=e("3602"),i=e.n(a);i.a},d8a2:function(n,t,e){"use strict";e.r(t);var a=e("e875"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},e875:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("2344"),i=getApp(),o={name:"adsRecommend",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(n,t){n&&(this.recommendList=n.imgList.list,this.isShow=n.isShow.val)}}},data:function(){return{recommendList:[],name:this.$options.name,isIframe:i.globalData.isIframe,isShow:!0}},created:function(){},mounted:function(){},methods:{goDetail:function(t){(0,a.goPage)(t).then((function(e){n.navigateTo({url:t.info[0].value})}))}}};t.default=o}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/adsRecommend-create-component',
    {
        'pages/index/components/adsRecommend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9098"))
        })
    },
    [['pages/index/components/adsRecommend-create-component']]
]);
