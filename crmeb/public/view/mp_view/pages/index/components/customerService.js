(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/customerService"],{"0a20":function(t,n,e){},"5b51":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=getApp(),i={name:"customerService",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.logoConfig=t.imgUrl.url,this.isShow=t.isShow.val,this.routineContact=t.routine_contact_type)}}},data:function(){return{logoConfig:"",topConfig:"200px",name:this.$options.name,isIframe:!1,isShow:!0,routineContact:"0"}},created:function(){this.isIframe=o.globalData.isIframe},methods:{setTouchMove:function(t){var n=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(n.topConfig=t.touches[0].clientY+"px")}}};n.default=i},"6e6f":function(t,n,e){"use strict";e.r(n);var o=e("9a28"),i=e("94de");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("9b49");var u,c=e("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=r.exports},"94de":function(t,n,e){"use strict";e.r(n);var o=e("5b51"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"9a28":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"9b49":function(t,n,e){"use strict";var o=e("0a20"),i=e.n(o);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/customerService-create-component',
    {
        'pages/index/components/customerService-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6e6f"))
        })
    },
    [['pages/index/components/customerService-create-component']]
]);
