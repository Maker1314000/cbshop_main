(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00e423aa"],{"3b2b":function(t,e,n){var r=n("7726"),a=n("5dbc"),c=n("86cc").f,o=n("9093").f,i=n("aae3"),u=n("0bfb"),s=r.RegExp,d=s,l=s.prototype,f=/a/g,p=/a/g,h=new s(f)!==f;if(n("9e1e")&&(!h||n("79e5")((function(){return p[n("2b4c")("match")]=!1,s(f)!=f||s(p)==p||"/a/i"!=s(f,"i")})))){s=function(t,e){var n=this instanceof s,r=i(t),c=void 0===e;return!n&&r&&t.constructor===s&&c?t:a(h?new d(r&&!c?t.source:t,e):d((r=t instanceof s)?t.source:t,r&&c?u.call(t):e),n?this:l,s)};for(var b=function(t){t in s||c(s,t,{configurable:!0,get:function(){return d[t]},set:function(e){d[t]=e}})},g=o(d),v=0;g.length>v;)b(g[v++]);l.constructor=s,s.prototype=l,n("2aba")(r,"RegExp",s)}n("7a56")("RegExp")},"61f7":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("8e6e"),n("ac6a"),n("456d");var r=n("bd86");n("6b54"),n("3b2b"),n("a481");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(e)){var a=n[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?a:i(a))}return e}function i(t){return("00"+t).substr(t.length)}var u={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};var s=function(t,e){t.message=function(t){return e.replace("%s",t||"")}};function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c({required:!0,message:t,type:"string"},e)}function l(t){return f.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}s(d,"请输入%s"),s(l,"%s格式不正确");var f=Object.keys(u).reduce((function(t,e){return t[e]=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="range"===e?{min:t[0],max:t[1]}:Object(r["a"])({},e,t);return c(c({message:n.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},o),a)},s(t[e],u[e]),t}),{})},a694:function(t,e,n){},b562:function(t,e,n){"use strict";n.d(e,"j",(function(){return a})),n.d(e,"t",(function(){return c})),n.d(e,"p",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return d})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return p})),n.d(e,"q",(function(){return h})),n.d(e,"s",(function(){return b})),n.d(e,"r",(function(){return g})),n.d(e,"x",(function(){return v})),n.d(e,"k",(function(){return m})),n.d(e,"c",(function(){return O})),n.d(e,"w",(function(){return w})),n.d(e,"u",(function(){return j})),n.d(e,"v",(function(){return y})),n.d(e,"o",(function(){return E})),n.d(e,"m",(function(){return _})),n.d(e,"n",(function(){return C})),n.d(e,"l",(function(){return x})),n.d(e,"b",(function(){return P}));var r=n("6b6c");function a(){return Object(r["a"])({url:"app/routine/syncSubscribe",method:"GET"})}function c(){return Object(r["a"])({url:"app/wechat/syncSubscribe",method:"GET"})}function o(t){return Object(r["a"])({url:"app/wechat/menu",method:"get"})}function i(t){return Object(r["a"])({url:"app/wechat/menu",method:"post",data:t})}function u(t){return Object(r["a"])({url:t.url,method:"post",data:t.key})}function s(t){return Object(r["a"])({url:"app/routine/download",method:"post",data:t})}function d(){return Object(r["a"])({url:"app/routine/info",method:"get"})}function l(t){return Object(r["a"])({url:"app/wechat/keyword",method:"get",params:t})}function f(t){return Object(r["a"])({url:"app/wechat/keyword/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function p(t,e){return Object(r["a"])({url:t,method:"get",params:e.key})}function h(t){return Object(r["a"])({url:"/app/wechat/news",method:"POST",data:t})}function b(t){return Object(r["a"])({url:"app/wechat/news",method:"GET",params:t})}function g(t){return Object(r["a"])({url:"app/wechat/news/".concat(t),method:"GET"})}function v(t){return Object(r["a"])({url:"app/wechat/user",method:"GET",params:t})}function m(){return Object(r["a"])({url:"app/wechat/user/tag_group",method:"GET"})}function O(t){return Object(r["a"])({url:t,method:"GET"})}function w(){return Object(r["a"])({url:"app/wechat/tag",method:"GET"})}function j(){return Object(r["a"])({url:"app/wechat/tag/create",method:"GET"})}function y(t){return Object(r["a"])({url:"app/wechat/tag/".concat(t,"/edit"),method:"GET"})}function E(){return Object(r["a"])({url:"app/wechat/group",method:"GET"})}function _(){return Object(r["a"])({url:"app/wechat/group/create",method:"GET"})}function C(t){return Object(r["a"])({url:"app/wechat/group/".concat(t,"/edit"),method:"GET"})}function x(t){return Object(r["a"])({url:"app/wechat/action",method:"GET",params:t})}function P(t){return Object(r["a"])({url:"app/wechat/code_reply/".concat(t),method:"GET"})}},c959:function(t,e,n){"use strict";var r=n("a694"),a=n.n(r);a.a},ddee:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("div",{staticClass:"flex-wrapper"},[n("div",[n("iframe",{ref:"iframe",staticClass:"iframe-box",attrs:{src:t.iframeUrl,frameborder:"0"}}),n("div",{staticClass:"mask"})]),n("div",{staticClass:"right"},[n("div",{staticClass:"content"},[n("div",{staticClass:"content-box title"},[n("div",{staticClass:"line"}),n("div",{staticClass:"right title"},[t._v("小程序设置")])]),n("div",{staticClass:"content-box"},[n("div",{staticClass:"left"},[t._v("小程序名称：")]),n("div",{staticClass:"right"},[t._v(t._s(t.pageData.routine_name||"未命名"))])]),n("div",{staticClass:"content-box"},[n("div",{staticClass:"left"},[t._v("小程序码：")]),n("div",{staticClass:"right"},[n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.downLoadCode(t.pageData.code)}}},[t._v("下载小程序码")])],1)]),n("div",{staticClass:"content-box"},[n("div",{staticClass:"left"},[t._v("小程序包：")]),n("div",{staticClass:"right"},[n("span",[t._v("是否已开通小程序直播")]),n("RadioGroup",{staticClass:"rad",attrs:{size:"large"},model:{value:t.is_live,callback:function(e){t.is_live=e},expression:"is_live"}},[n("Radio",{attrs:{label:0}},[t._v("未开通")]),n("Radio",{attrs:{label:1}},[t._v("已开通")])],1)],1)]),n("div",{staticClass:"content-box last"},[n("div",{staticClass:"left"}),n("div",{staticClass:"right"},[n("div",[t._v("\n                请谨慎选择是否有开通小程序直播功能，否则将影响小程序的发布\n                可前往\n                "),n("a",{attrs:{href:t.pageData.help,target:"_blank"}},[t._v("帮助文档")]),t._v("\n                查看如何开通直播功能\n              ")]),n("Button",{staticClass:"mt10",attrs:{type:"primary"},on:{click:function(e){return t.downLoad()}}},[t._v("下载小程序包")])],1)])])])])])],1)},a=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),o=n("b562"),i=n("2f62"),u=n("61f7");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={name:"routineTemplate",filters:{formatDate:function(t){if(0!==t){var e=new Date(1e3*t);return Object(u["a"])(e,"yyyy-MM-dd hh:mm")}}},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},iframeUrl:"".concat(location.origin,"?type=iframeWindow"),is_live:1,pageData:{code:"",routine_name:"",help:""}}},created:function(){var t=this;Object(o["i"])().then((function(e){console.log(e),t.pageData=e.data}))},watch:{$route:function(t,e){}},computed:d(d({},Object(i["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"left"}}),methods:{downLoad:function(){var t=this;Object(o["h"])({is_live:this.is_live}).then((function(t){console.log(t),window.open(t.data.url,"_blank")})).catch((function(e){t.$Message.warning(e.msg)}))},downLoadCode:function(t){if(!t)return this.$Message.warning("暂无下载链接");console.log("11111");var e=new Image;e.src=t,e.setAttribute("crossOrigin","anonymous"),e.onload=function(){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);var r=t.toDataURL(),a=document.createElement("a"),c=new MouseEvent("click");a.download=name||"photo",a.href=r,a.dispatchEvent(c)}}}},f=l,p=(n("c959"),n("2877")),h=Object(p["a"])(f,r,a,!1,null,"6cfc009a",null);e["default"]=h.exports}}]);