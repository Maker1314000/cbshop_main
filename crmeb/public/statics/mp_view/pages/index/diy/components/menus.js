(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/diy/components/menus"],{"1d54":function(t,n,e){"use strict";e.r(n);var i=e("9a83"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"4b53":function(t,n,e){},9992:function(t,n,e){"use strict";e.r(n);var i=e("bccf"),a=e("1d54");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("e784");var u,r=e("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=s.exports},"9a83":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"menus",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{interval:3e3,duration:500,menus:this.dataConfig.menuConfig.list||[],titleColor:this.dataConfig.titleColor.color[0].item,mbConfig:this.dataConfig.mbConfig.val,rowsNum:this.dataConfig.rowsNum.type,number:this.dataConfig.number.type,isMany:this.dataConfig.tabConfig.tabVal,menuStyle:this.dataConfig.menuStyle.type,docConfig:this.dataConfig.pointerStyle.type,dotColor:this.dataConfig.pointerColor.color[0].item,bgColor:this.dataConfig.bgColor.color[0].item,bgStyle:this.dataConfig.bgStyle.type,prConfig:this.dataConfig.prConfig.val,navHigh:0,menuList:[],active:0}},created:function(){},mounted:function(){var t=this;0===this.rowsNum?0===this.number?this.pageNum(6):1===this.number?this.pageNum(8):this.pageNum(10):1===this.rowsNum?0===this.number?this.pageNum(9):1===this.number?this.pageNum(12):this.pageNum(15):0===this.number?this.pageNum(12):1===this.number?this.pageNum(16):this.pageNum(20),this.$nextTick((function(){if(t.menuList.length&&t.isMany){var n=t;setTimeout((function(){n.menuHeight()}),100)}}))},methods:{bannerfun:function(t){this.active=t.detail.current},menuHeight:function(){var n=this,e=t.createSelectorQuery().in(this);e.select("#nav0").boundingClientRect((function(t){n.navHigh=t.height})).exec()},pageNum:function(t){for(var n=Math.ceil(this.menus.length/t),e=new Array,i=0;i<n;i++){var a=this.menus.slice(i*t,i*t+t);a.length&&e.push({list:a})}this.$set(this,"menuList",e)},menusTap:function(n){-1!=n.indexOf("http")?t.navigateTo({url:"/pages/annex/web_view/index?url=".concat(n)}):-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(n)?t.navigateTo({url:n}):t.reLaunch({url:n})}}};n.default=e}).call(this,e("543d")["default"])},bccf:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.isMany?t.__map(t.menuList,(function(n,e){var i=t.__get_orig(n),a=t.__map(n.list,(function(n,e){var i=t.__get_orig(n),a=t.$t(n.info[0].value);return{$orig:i,m0:a}}));return{$orig:i,l0:a}})):null),i=t.$t(t.itemn.info[0].value);t.$mp.data=Object.assign({},{$root:{l1:e,m1:i}})},o=[]},e784:function(t,n,e){"use strict";var i=e("4b53"),a=e.n(i);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/diy/components/menus-create-component',
    {
        'pages/index/diy/components/menus-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9992"))
        })
    },
    [['pages/index/diy/components/menus-create-component']]
]);
