(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/alive"],{4197:function(t,n,i){},"4c5c":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return f})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement;t._self._c},f=[]},"4f30":function(t,n,i){"use strict";i.r(n);var e=i("4c5c"),a=i("a1f4");for(var f in a)"default"!==f&&function(t){i.d(n,t,(function(){return a[t]}))}(f);i("ddf5");var o,u=i("f0c5"),c=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"20f9a88e",null,!1,e["a"],o);n["default"]=c.exports},"50f2":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i("7fe6"),a=getApp().globalData,f={name:"alive",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.numConfig=t.numConfig.val,this.titleInfo=t.titleInfo.list,this.isShow=t.isShow.val,this.getLiveList())}}},data:function(){return{isIframe:!1,liveList:[],numConfig:0,limit:this.$config.LIMIT,name:this.$options.name,titleInfo:[],isShow:!0}},created:function(){this.isIframe=a.isIframe},mounted:function(){},methods:{getLiveList:function(){var t=this;(0,e.getLiveList)(1,this.numConfig<=this.limit?this.numConfig:this.limit).then((function(n){t.liveList=n.data})).catch((function(t){}))}}};n.default=f},a1f4:function(t,n,i){"use strict";i.r(n);var e=i("50f2"),a=i.n(e);for(var f in e)"default"!==f&&function(t){i.d(n,t,(function(){return e[t]}))}(f);n["default"]=a.a},ddf5:function(t,n,i){"use strict";var e=i("4197"),a=i.n(e);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/alive-create-component',
    {
        'pages/index/components/alive-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4f30"))
        })
    },
    [['pages/index/components/alive-create-component']]
]);
