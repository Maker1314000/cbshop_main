(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/jyf-parser/libs/trees"],{"375a":function(t,e,r){"use strict";var i;r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"3fc7":function(t,e,r){"use strict";r.r(e);var i=r("375a"),n=r("90cd");for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);r("ab56");var s,a=r("f0c5"),c=r("6e9c"),u=Object(a["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);"function"===typeof c["a"]&&Object(c["a"])(u),e["default"]=u.exports},"6e9c":function(t,e,r){"use strict";var i=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])};e["a"]=i},"90cd":function(t,e,r){"use strict";r.r(e);var i=r("d8d5"),n=r.n(i);for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},ab56:function(t,e,r){"use strict";var i=r("c67f"),n=r.n(i);n.a},c67f:function(t,e,r){},d8d5:function(t,e,r){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t.Parser={};var n=function(){Promise.resolve().then(function(){return resolve(r("3fc7"))}.bind(null,r)).catch(r.oe)},o={components:{trees:n},name:"trees",data:function(){return{controls:{},imgLoad:!1,loadVideo:!0}},props:{nodes:Array,lazyLoad:Boolean},mounted:function(){this.top=this.$parent;while("parser"!=this.top.$options.name){if(this.top.top){this.top=this.top.top;break}this.top=this.top.$parent}},beforeDestroy:function(){this.observer&&this.observer.disconnect()},methods:{play:function(t){if(this.top.videoContexts.length>1&&this.top.autopause)for(var e=this.top.videoContexts.length;e--;)this.top.videoContexts[e].id!=t.currentTarget.dataset.id&&this.top.videoContexts[e].pause()},imgtap:function(e){var r=e.currentTarget.dataset.attrs;if(!r.ignore){var n=!0,o={id:e.target.id,src:r.src,ignore:function(){return n=!1}};if(t.Parser.onImgtap&&t.Parser.onImgtap(o),this.top.$emit("imgtap",o),n){var s=this.top.imgList,a=s[r.i]?parseInt(r.i):(s=[r.src],0);i.previewImage({current:a,urls:s})}}},imglongtap:function(t){var e=t.item.dataset.attrs;e.ignore||this.top.$emit("imglongtap",{id:t.target.id,src:e.src})},linkpress:function(e){var r=!0,n=e.currentTarget.dataset.attrs;if(n.ignore=function(){return r=!1},t.Parser.onLinkpress&&t.Parser.onLinkpress(n),this.top.$emit("linkpress",n),r){if(n["app-id"])return i.navigateToMiniProgram({appId:n["app-id"],path:n.path});n.href&&("#"==n.href[0]?this.top.useAnchor&&this.top.navigateTo({id:n.href.substring(1)}):0==n.href.indexOf("http")||0==n.href.indexOf("//")?i.setClipboardData({data:n.href,success:function(){return i.showToast({title:"链接已复制"})}}):i.navigateTo({url:n.href}))}},error:function(t){var e,r=t.currentTarget,n=r.dataset.from;if("video"==n||"audio"==n){var o=this.controls[r.id]?this.controls[r.id].index+1:1;o<r.dataset.source.length&&this.$set(this.controls,r.id+".index",o),"video"==n&&(e=i.createVideoContext(r.id,this))}this.top&&this.top.$emit("error",{source:n,target:r,errMsg:t.detail.errMsg,errCode:t.detail.errCode,context:e})},_loadVideo:function(t){this.$set(this.controls,t.currentTarget.id,{play:!0,index:0})}}};e.default=o}).call(this,r("c8ba"),r("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/jyf-parser/libs/trees-create-component',
    {
        'components/jyf-parser/libs/trees-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3fc7"))
        })
    },
    [['components/jyf-parser/libs/trees-create-component']]
]);
