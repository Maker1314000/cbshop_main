(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/titles"],{"1fbc":function(t,n,e){"use strict";e.r(n);var a=e("5994"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"36aa":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},o=[]},4056:function(t,n,e){"use strict";e.r(n);var a=e("36aa"),i=e("1fbc");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("4e61");var u,f=e("f0c5"),r=Object(f["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=r.exports},"4e61":function(t,n,e){"use strict";var a=e("8c69"),i=e.n(a);i.a},5994:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=getApp(),i={name:"titles",props:{dataConfig:{type:Object,default:function(){}},sty:{type:String,default:"on"}},watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.titleConfig=t.titleInfo.list,this.isShow=t.isShow.val)}}},data:function(){return{titleConfig:{},name:this.$options.name,isIframe:!1,isShow:!0}},created:function(){this.isIframe=a.globalData.isIframe},mounted:function(){},methods:{}};n.default=i},"8c69":function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/titles-create-component',
    {
        'pages/index/components/titles-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4056"))
        })
    },
    [['pages/index/components/titles-create-component']]
]);
