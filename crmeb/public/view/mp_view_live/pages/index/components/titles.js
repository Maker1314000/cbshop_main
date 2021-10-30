(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/titles"],{"170d":function(t,n,e){"use strict";var i=e("da98"),a=e.n(i);a.a},"4d42":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"78c2":function(t,n,e){"use strict";e.r(n);var i=e("4d42"),a=e("8957");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("170d");var u,f=e("f0c5"),r=Object(f["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=r.exports},8957:function(t,n,e){"use strict";e.r(n);var i=e("f1d2"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},da98:function(t,n,e){},f1d2:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=getApp(),a={name:"titles",props:{dataConfig:{type:Object,default:function(){}},sty:{type:String,default:"on"}},watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.titleConfig=t.titleInfo.list,this.isShow=t.isShow.val)}}},data:function(){return{titleConfig:{},name:this.$options.name,isIframe:!1,isShow:!0}},created:function(){this.isIframe=i.globalData.isIframe},mounted:function(){},methods:{}};n.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/titles-create-component',
    {
        'pages/index/components/titles-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("78c2"))
        })
    },
    [['pages/index/components/titles-create-component']]
]);
