(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-guide-index"],{"136b":function(t,e,a){"use strict";a.r(e);var i=a("c83d"),n=a("cdfe");for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);a("18c8");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"665551ff",null,!1,i["a"],r);e["default"]=c.exports},"18c8":function(t,e,a){"use strict";var i=a("9abc"),n=a.n(i);n.a},2611:function(t,e,a){var i=a("9dc5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("17d1c850",i,!0,{sourceMap:!1,shadowMode:!1})},"2f70":function(t,e,a){"use strict";(function(t){var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("7382")),u=a("7fe6"),r={components:{guide:n.default},data:function(){return{guidePages:!1,advList:[]}},onLoad:function(){this.loadExecution()},methods:{loadExecution:function(){var t=this,e=uni.getStorageSync("guideDate")||"",a=(new Date).toLocaleDateString();e!==a?(0,u.getOpenAdv)().then((function(e){e.data.length?(t.advList=e.data,uni.setStorageSync("guideDate",(new Date).toLocaleDateString()),t.guidePages=!0):uni.switchTab({url:"/pages/index/index"})})).catch((function(t){})):uni.switchTab({url:"/pages/index/index"})}}};e.default=r}).call(this,a("5a52")["default"])},"307f":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:t.autoplay,duration:t.duration}},t._l(t.advList,(function(t,e){return a("v-uni-swiper-item",{key:e},[a("v-uni-view",{staticClass:"swiper-item"},[a("v-uni-view",{staticClass:"swiper-item-img"},[a("v-uni-image",{attrs:{src:t,mode:"aspectFit"}})],1)],1)],1)})),1),a("v-uni-view",{staticClass:"jump-over",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.launchFlag()}}},[t._v("跳过 "+t._s(t.time))])],1)},u=[]},3746:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-665551ff],\n.main[data-v-665551ff]{width:100%;height:100%}",""]),t.exports=e},"3d13":function(t,e,a){"use strict";var i=a("2611"),n=a.n(i);n.a},7382:function(t,e,a){"use strict";a.r(e);var i=a("307f"),n=a("9e06");for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);a("3d13");var r,o=a("f0c5"),c=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"744a2994",null,!1,i["a"],r);e["default"]=c.exports},"9abc":function(t,e,a){var i=a("3746");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("aeec2aec",i,!0,{sourceMap:!1,shadowMode:!1})},"9dc5":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-744a2994],\n.content[data-v-744a2994]{width:100%;height:100%;background-size:100% auto;padding:0;z-index:999}.swiper[data-v-744a2994]{width:100%;height:100vh;background:#fff}.swiper-item[data-v-744a2994]{width:100%;height:100%;text-align:center;position:relative;display:flex;\n\t/* justify-content: center; */align-items:flex-end;flex-direction:column-reverse}.swiper-item-img[data-v-744a2994]{width:100%;height:100vh;margin:0 auto}.swiper-item-img uni-image[data-v-744a2994]{width:100%;height:100%}.uniapp-img[data-v-744a2994]{height:50%;background:#fff;display:flex;justify-content:center;align-items:center;overflow:hidden}.uniapp-img uni-image[data-v-744a2994]{width:40%}.jump-over[data-v-744a2994],\n.experience[data-v-744a2994]{position:absolute;height:%?45?%;line-height:%?45?%;padding:0 %?15?%;border-radius:%?30?%;font-size:%?24?%;color:#b09e9a;border:1px solid #b09e9a;z-index:999}.jump-over[data-v-744a2994]{right:%?30?%;top:%?80?%}.experience[data-v-744a2994]{right:50%;margin-right:%?-105?%;bottom:%?80?%}body.?%PAGE?%[data-v-744a2994]{background-size:100% auto}",""]),t.exports=e},"9e06":function(t,e,a){"use strict";a.r(e);var i=a("a7f7"),n=a.n(i);for(var u in i)"default"!==u&&function(t){a.d(e,t,(function(){return i[t]}))}(u);e["default"]=n.a},a7f7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{autoplay:!1,duration:500,jumpover:"跳过",experience:"立即体验",time:5,timecount:void 0}},props:{advList:{type:Array,default:function(){}}},mounted:function(){this.timer()},methods:{timer:function(){var t=this,e=5;this.timecount=setInterval((function(){e--,t.time=e,e<=0&&(clearInterval(t.timecount),t.launchFlag())}),1e3)},launchFlag:function(){clearInterval(this.timecount),uni.switchTab({url:"/pages/index/index"})}}};e.default=i},c83d:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"main"},[t.guidePages?a("guide",{attrs:{advList:t.advList}}):t._e()],1)},u=[]},cdfe:function(t,e,a){"use strict";a.r(e);var i=a("2f70"),n=a.n(i);for(var u in i)"default"!==u&&function(t){a.d(e,t,(function(){return i[t]}))}(u);e["default"]=n.a}}]);