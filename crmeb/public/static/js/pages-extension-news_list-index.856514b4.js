(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extension-news_list-index"],{"0268":function(t,i,e){"use strict";var a=e("4ea4");e("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("e5e8"),s=a(e("4f25")),o=a(e("cf74")),r=e("d5d8"),c={components:{home:s.default},mixins:[o.default],data:function(){return{imgHost:r.HTTP_REQUEST_URL,coutList:[],imgUrls:[],articleList:[],indicatorDots:!1,circular:!0,autoplay:!0,interval:3e3,duration:500,navList:[],active:0,page:1,limit:8,status:!1,scrollLeft:0,activeCou:0}},onShow:function(){this.getArticleHot(),this.getArticleBanner(),this.getArticleCate(),this.status=!1,this.page=1,this.articleList=[]},onReachBottom:function(){this.getCidArticle(this.activeCou)},methods:{getArticleHot:function(){var t=this;(0,n.getArticleHotList)().then((function(i){t.$set(t,"articleList",i.data)}))},getArticleBanner:function(){var t=this;(0,n.getArticleBannerList)().then((function(i){t.imgUrls=i.data}))},getCidArticle:function(t,i){var e=this;i&&(e.status=!1,this.activeCou=t,this.$set(this,"articleList",[]),e.page=1);var a=e.limit,s=e.page,o=e.articleList;e.status||(0,n.getArticleList)(e.activeCou,{page:s,limit:a}).then((function(t){var i=[],n=t.length;i=o.concat(t.data),e.page++,e.$set(e,"articleList",i),e.status=a>n,e.page=e.page}))},getArticleCate:function(){var t=this;(0,n.getArticleCategoryList)().then((function(i){t.$set(t,"navList",i.data)}))},tabSelect:function(t,i,e){this.active=t,this.scrollLeft=60*i,0==this.active?(this.$set(this,"coutList",[]),this.$set(this,"articleList",[]),this.getArticleHot()):(this.$set(this,"articleList",[]),this.$set(this,"coutList",[]),e.children.length&&(this.page=1,this.status=!1,this.activeCou=e.children[0].id||0,this.coutList=e.children||[],this.$set(this,"articleList",[]),this.getCidArticle(this.activeCou)))}}};i.default=c},"481e":function(t,i,e){"use strict";e.r(i);var a=e("0268"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"4f25":function(t,i,e){"use strict";e.r(i);var a=e("a85d"),n=e("73c2");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("d8db");var o,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"7df30af6",null,!1,a["a"],o);i["default"]=c.exports},5495:function(t,i,e){"use strict";var a=e("98dc"),n=e.n(a);n.a},"5acb":function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("26cb"),s=a(e("cf74")),o=e("d5d8"),r={name:"Home",props:{},mixins:[s.default],data:function(){return{top:"545",imgHost:o.HTTP_REQUEST_URL}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var i=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(i.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};i.default=r},"6be7":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.noCommodity[data-v-674684d5]{border-top-width:0;padding-bottom:%?30?%}.noCommodity .emptyBox[data-v-674684d5]{text-align:center}.noCommodity .emptyBox .tips[data-v-674684d5]{color:#aaa;font-size:%?26?%}.noCommodity .emptyBox uni-image[data-v-674684d5]{width:%?414?%;height:%?304?%}uni-page-body[data-v-674684d5]{background-color:#fff!important}.newsList .swiper[data-v-674684d5]{width:100%;position:relative;box-sizing:border-box;padding:%?30?% %?30?% 0 %?30?%}.newsList .swiper uni-swiper[data-v-674684d5]{width:100%;height:%?365?%;position:relative}.newsList .swiper .slide-image[data-v-674684d5]{width:100%;height:%?335?%;border-radius:%?6?%}.newsList[data-v-674684d5] uni-swiper .uni-swiper-dots-horizontal{bottom:0}.newsList .swiper[data-v-674684d5] .uni-swiper-dot{width:%?12?%!important;height:%?12?%!important;border-radius:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.newsList .swiper[data-v-674684d5] .uni-swiper-dot ~ .uni-swiper-dot{margin-left:%?5?%}.newsList .nav[data-v-674684d5]{padding:0 %?30?%;width:100%;white-space:nowrap;box-sizing:border-box;margin-top:%?43?%}.newsList .nav .item[data-v-674684d5]{display:inline-block;font-size:%?32?%;color:#999}.newsList .nav .item.on[data-v-674684d5]{color:#000;font-size:%?36?%;font-weight:700}.newsList .nav .item ~ .item[data-v-674684d5]{margin-left:%?46?%}.newsList .nav .item .line[data-v-674684d5]{width:%?24?%;height:%?4?%;border-radius:%?2?%;margin:%?10?% auto 0 auto}.newsList .list[data-v-674684d5]{margin-top:%?20?%}.newsList .list .item[data-v-674684d5]{margin:0 %?30?%;border-bottom:%?1?% solid #f0f0f0;padding:%?35?% 0}.newsList .list .item .pictrue[data-v-674684d5]{width:%?250?%;height:%?156?%}.newsList .list .item .pictrue uni-image[data-v-674684d5]{width:100%;height:100%;border-radius:%?6?%}.newsList .list .item .text[data-v-674684d5]{width:%?420?%;height:%?156?%;font-size:%?24?%;color:#999}.newsList .list .item .text .name[data-v-674684d5]{font-size:%?30?%;color:#282828}.newsList .list .item .picList .pictrue[data-v-674684d5]{width:%?335?%;height:%?210?%;margin-top:%?30?%}.newsList .list .item .picList.on .pictrue[data-v-674684d5]{width:%?217?%;height:%?136?%}.newsList .list .item .picList .pictrue uni-image[data-v-674684d5]{width:100%;height:100%;border-radius:%?6?%}.newsList .list .item .time[data-v-674684d5]{text-align:right;font-size:%?24?%;color:#999;margin-top:%?22?%}.coutry-list[data-v-674684d5]{display:flex;align-items:center;margin-top:%?10?%;padding-top:%?20?%;border-top:1px solid #f2f2f2}.coutry-list .coutry[data-v-674684d5]{background-color:#f5f5f5;border-radius:%?26?%;padding:%?4?% %?20?%;color:#666;font-size:%?26?%;margin-right:%?20?%}.coutry-list .coutry.on[data-v-674684d5]{background-color:#dcd9ec;color:#e93323}body.?%PAGE?%[data-v-674684d5]{background-color:#fff!important}',""]),t.exports=i},"73c2":function(t,i,e){"use strict";e.r(i);var a=e("5acb"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"79ce":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{style:t.colorStyle},[e("v-uni-view",{staticClass:"newsList"},[t.imgUrls.length>0?e("v-uni-view",{staticClass:"swiper"},[e("v-uni-swiper",{attrs:{"indicator-dots":"true",autoplay:t.autoplay,circular:t.circular,interval:t.interval,duration:t.duration,"indicator-color":"rgba(102,102,102,0.3)","indicator-active-color":"#666"}},[t._l(t.imgUrls,(function(t,i){return[e("v-uni-swiper-item",[e("v-uni-navigator",{attrs:{url:"/pages/extension/news_details/index?id="+t.id}},[e("v-uni-image",{staticClass:"slide-image",attrs:{src:t.image_input[0]}})],1)],1)]}))],2)],1):t._e(),t.navList.length>0?e("v-uni-view",{staticClass:"nav"},[e("v-uni-scroll-view",{staticClass:"scroll-view_x",staticStyle:{width:"auto",overflow:"hidden"},attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},[t._l(t.navList,(function(i,a){return[e("v-uni-view",{key:a+"_0",staticClass:"item",class:t.active==i.id?"on":"",attrs:{id:"news_"+i.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect(i.id,a,i)}}},[e("v-uni-view",[t._v(t._s(i.title))]),t.active==i.id?e("v-uni-view",{staticClass:"line bg-color"}):t._e()],1)]}))],2),e("v-uni-scroll-view",{staticClass:"scroll-view_x",staticStyle:{width:"auto",overflow:"hidden"},attrs:{"scroll-x":!0,"scroll-with-animation":!0}},[e("v-uni-view",{staticClass:"coutry-list"},t._l(t.coutList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"coutry",class:t.activeCou==i.id?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCidArticle(i.id,1)}}},[t._v(t._s(i.title))])})),1)],1)],1):t._e(),e("v-uni-view",{staticClass:"list"},[t._l(t.articleList,(function(i,a){return[1==i.image_input.length?e("v-uni-navigator",{key:a+"_0",staticClass:"item acea-row row-between-wrapper",attrs:{url:"/pages/extension/news_details/index?id="+i.id,"hover-class":"none"}},[e("v-uni-view",{staticClass:"text acea-row row-column-between"},[e("v-uni-view",{staticClass:"name line2"},[t._v(t._s(i.title))]),e("v-uni-view",[t._v(t._s(i.add_time))])],1),e("v-uni-view",{staticClass:"pictrue"},[e("v-uni-image",{attrs:{src:i.image_input[0]}})],1)],1):2==i.image_input.length?e("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/extension/news_details/index?id="+i.id,"hover-class":"none"}},[e("v-uni-view",{staticClass:"title line1"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"picList acea-row row-between-wrapper"},[t._l(i.image_input,(function(t,i){return[e("v-uni-view",{key:i+"_0",staticClass:"pictrue"},[e("v-uni-image",{attrs:{src:t}})],1)]}))],2),e("v-uni-view",{staticClass:"time"},[t._v(t._s(i.add_time))])],1):i.image_input.length>2?e("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/extension/news_details/index?id="+i.id,"hover-class":"none"}},[e("v-uni-view",{staticClass:"title line1"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"picList on acea-row row-between-wrapper"},[t._l(i.image_input,(function(t,i){return[e("v-uni-view",{key:i+"_0",staticClass:"pictrue"},[e("v-uni-image",{attrs:{src:t}})],1)]}))],2),e("v-uni-view",{staticClass:"time"},[t._v(t._s(i.add_time))])],1):t._e()]}))],2)],1),0!=t.articleList.length||1==t.page&&0!=t.active?t._e():e("v-uni-view",{staticClass:"noCommodity"},[e("v-uni-view",{staticClass:"emptyBox"},[e("v-uni-image",{attrs:{src:t.imgHost+"/statics/images/empty-box.png"}}),e("v-uni-view",{staticClass:"tips"},[t._v(t._s(t.$t("no_news_info")))])],1)],1),e("home")],1)},s=[]},"98dc":function(t,i,e){var a=e("6be7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("0c5cb38b",a,!0,{sourceMap:!1,shadowMode:!1})},a85d:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{style:t.colorStyle},[e("v-uni-view",{staticStyle:{"touch-action":"none"}},[e("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?e("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[e("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),e("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),e("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),e("v-uni-view",{staticClass:"pictrueBox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.open.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"pictrue"},[e("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},s=[]},aede:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".pictrueBox[data-v-7df30af6]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-7df30af6]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-7df30af6]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-7df30af6]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-7df30af6]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-7df30af6]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-7df30af6]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=i},c53f:function(t,i,e){"use strict";e.r(i);var a=e("79ce"),n=e("481e");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("5495");var o,r=e("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"674684d5",null,!1,a["a"],o);i["default"]=c.exports},d8db:function(t,i,e){"use strict";var a=e("ed1f"),n=e.n(a);n.a},ed1f:function(t,i,e){var a=e("aede");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("2c7ba22e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);