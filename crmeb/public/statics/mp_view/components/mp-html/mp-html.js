(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mp-html/mp-html"],{2327:function(t,e,n){"use strict";n.r(e);var o=n("952f"),i=n("d35c");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("278a");var a,c=n("f0c5"),l=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=l.exports},"278a":function(t,e,n){"use strict";var o=n("417d"),i=n.n(o);i.a},"417d":function(t,e,n){},"555f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=[],i=n("1bd1"),r=function(){n.e("components/mp-html/node/node").then(function(){return resolve(n("48d8"))}.bind(null,n)).catch(n.oe)},a={name:"mp-html",data:function(){return{nodes:[]}},props:{content:String,copyLink:{type:Boolean,default:!0},domain:String,errorImg:{type:String,default:""},lazyLoad:{type:Boolean,default:!1},loadingImg:{type:String,default:""},pauseVideo:{type:Boolean,default:!0},previewImg:{type:Boolean,default:!0},scrollTable:Boolean,selectable:Boolean,setTitle:{type:Boolean,default:!0},showImgMenu:{type:Boolean,default:!0},tagStyle:Object,useAnchor:null},components:{node:r},watch:{content:function(t){this.setContent(t)}},created:function(){this.plugins=[];for(var t=o.length;t--;)this.plugins.push(new o[t](this))},mounted:function(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeDestroy:function(){this._hook("onDetached"),clearInterval(this._timer)},methods:{in:function(t,e,n){t&&e&&n&&(this._in={page:t,selector:e,scrollTop:n})},navigateTo:function(e,n){var o=this;return new Promise((function(i,r){if(!o.useAnchor)return r("Anchor is disabled");n=n||parseInt(o.useAnchor)||0;var a=" ";a=">>>";var c=t.createSelectorQuery().in(o._in?o._in.page:o).select((o._in?o._in.selector:"._root")+(e?"".concat(a,"#").concat(e):"")).boundingClientRect();o._in?c.select(o._in.selector).scrollOffset().select(o._in.selector).boundingClientRect():c.selectViewport().scrollOffset(),c.exec((function(e){if(!e[0])return r("Label not found");var a=e[1].scrollTop+e[0].top-(e[2]?e[2].top:0)+n;o._in?o._in.page[o._in.scrollTop]=a:t.pageScrollTo({scrollTop:a,duration:300}),i()}))}))},getText:function(){var t="";return function e(n){for(var o=0;o<n.length;o++){var i=n[o];if("text"==i.type)t+=i.text.replace(/&amp;/g,"&");else if("br"==i.name)t+="\n";else{var r="p"==i.name||"div"==i.name||"tr"==i.name||"li"==i.name||"h"==i.name[0]&&i.name[1]>"0"&&i.name[1]<"7";r&&t&&"\n"!=t[t.length-1]&&(t+="\n"),i.children&&e(i.children),r&&"\n"!=t[t.length-1]?t+="\n":"td"!=i.name&&"th"!=i.name||(t+="\t")}}}(this.nodes),t},getRect:function(){var e=this;return new Promise((function(n,o){t.createSelectorQuery().in(e).select("#_root").boundingClientRect().exec((function(t){return t[0]?n(t[0]):o("Root label not found")}))}))},setContent:function(t,e){var n=this;e&&this.imgList||(this.imgList=[]);var o,r=new i(this).parse(t);this.$set(this,"nodes",e?(this.nodes||[]).concat(r):r),this._videos=[],this.$nextTick((function(){n._hook("onLoad"),n.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){n.getRect().then((function(t){t.height==o&&(n.$emit("ready",t),clearInterval(n._timer)),o=t.height})).catch((function(){}))}),350)},_hook:function(t){for(var e=o.length;e--;)this.plugins[e][t]&&this.plugins[e][t]()}}};e.default=a}).call(this,n("543d")["default"])},"952f":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},d35c:function(t,e,n){"use strict";n.r(e);var o=n("555f"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mp-html/mp-html-create-component',
    {
        'components/mp-html/mp-html-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2327"))
        })
    },
    [['components/mp-html/mp-html-create-component']]
]);
