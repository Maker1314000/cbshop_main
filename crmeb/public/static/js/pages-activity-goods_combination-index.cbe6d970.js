(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-goods_combination-index"],{"088d":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("eb5d"),r=(i("f61b"),n(i("99d5"))),o=(getApp(),{components:{home:r.default},data:function(){return{pinkPeople:[],bannerList:[],circular:!0,autoplay:!0,interval:3e3,duration:500,combinationList:[],limit:10,page:1,loading:!1,loadend:!1}},onLoad:function(){uni.setNavigationBarTitle({title:"拼团列表"}),this.getCombinationList(),this.getBannerList(),this.getPink()},methods:{getPink:function(){var t=this;(0,a.getPink)().then((function(e){t.pinkPeople=e.data.avatars}))},getBannerList:function(){var t=this;(0,a.getCombinationBannerList)().then((function(e){t.bannerList=e.data}))},goDetail:function(t){uni.navigateTo({url:t.link})},openSubcribe:function(t){uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.id)})},getCombinationList:function(){var t=this;if(!t.loadend&&!t.loading){var e={page:t.page,limit:t.limit};this.loading=!0,(0,a.getCombinationList)(e).then((function(e){var i=t.combinationList,n=t.limit;t.page++,t.loadend=n>e.data.length,t.combinationList=i.concat(e.data),t.page=t.data.page,t.loading=!1})).catch((function(){t.loading=!1}))}}},onReachBottom:function(){this.getCombinationList()}});e.default=o},"1d46":function(t,e,i){var n=i("3202");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b2ba24ae",n,!0,{sourceMap:!1,shadowMode:!1})},"312b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA6CAYAAACj+Dm/AAAFAElEQVRYR7WYe1BVVRTGv2/fCylWaqWUiqaDhWnljGZiyEgIimKZjpSWWDQOWpbZy5mmJmeqf3TGGouSyQqtNE0saUhEwVeQSKZWjiWPpknx0Sihggnss5p7SeTCvfdszrX135m9vvXba52z9tl7E4amy6bmEJxj6B7ILZ8mAWTDDJdENZ4GcYOJfyAfKkkxA5amJgrV9lBgAI4yNi/GCKhLpmSReCoUIIlnGfvNu0ZAqzT1GAR9QwBeoKg+jMs7bwts/C5ltBvq+xBgEOA9V1z+M54YtkC9e+JSUr3kHChCNMZwbNFRI6C1e2IFyOgQgAVqbEHKZX3QDKUkeZho/uwc5i1hKuO35psBdyW/KsAbIQArGV94G+l5jS0WNENrZ9IBAMOdAglrIccVrWirDwiUrfEDJTy82ikMwAV2DevL0VvOmQGLExYJ1HKnQBJZTCha0F4fOMPihD0ijHMEpKcVMIT37/jNCCjb740URNQAohwCC1Xirgn+tH4z1IXxmSRXOoIBsEQedCfvzjMGWtviCyDwO0PbSZBVHL9rcNtWCPrRyLYR3UUi/gIQZhvcjwMFz3PCnrcDaTuUtLlgzGxFtcYJDEA91cW+TNpfZwy0tsTmgmqaEyAhH3BiadD/pk+G8m30NcJeZwB26zxQhFqGMnXvkWDadsBRUwXqq87DAAi2q8l7k+y0PkCdP2o1wXQ7kb9xC5jqnly22U7bCpQd49xS33AaQE87kZ/x3/nDvmgugWWnbQU2bR6Z5FIstBP4b2brBU7Zb7TuXskwb0SWgJ3fmVHq2az78aGDf5tM1gsUASVvxHEQt5iIfFcOyeYDP84z1bUAN90ZKy53qamond9hEJ6VKahR5DSs5ldagF8PXypACDszO9zlcSnzAq1Nd1eBGGQqc+wnqOOljcPuClPqkOMgnRASeIs6d9jrBJd0QufQVXI57ZcZlI1DDwjoeGdmRpcSRlxK5KTKS7S+vOM8wGvNhI68fqXgPqYdPutRU6+PWUHSe9C46kacoEIspx/543LslrZYP2SSpvS2AypgMQQxdn7eceICoccyreJgW3/b01NrB+UOHCDN4ZUA3AbAJopO5SOVHdZmY6BeF72cVIvsYSIUZHBmRY4/XyOgbL79OmnQfwLsbgcUWK+5Zla9GcjPDLh20HMCFXAn1lp2WB+7ZlU/GWxStkBZAiWDB1UBuNUmuy0Mq57CNOiQgM1r+s9QyrXBBlZOqyGB6afq7Upum6H16YASgGMCBiKqGf7PaKadtP1FtXRLEJPPou4RS+0L4nKG0jyGc457LwxMLChQr476guDD/gPJRSo9nrNrOvXjDnw+zO7TX7qoKgg7NjpFW9qa7s6osd0Wtp9sYGBOn2UCvui/eWUBH6/JMimhEVDWRHYT7ToGoIcfwTI+UfOyE1jAj0avilxIpd7xA1uLjBOP0bOxd2gdSupt9H43V4IY6BNTsJP6ZDIz0eSQ5ZV1BH7Ye5qQuW2DEvITdFM8M2sDnvtMJ9EBaK3qtQc+txdyjNCxnHvW805DNt/j2kc3jRTN8itR5RxFxzGzNqT7Nt9qtXmS7Bs/F2DWf8VuJJHCuWeKQ06rTYArh5msrlHi6uq56nKDEIo8ynm1664mzOejkZU9W7f7FCzm/NqlVxvWCpRP0EUu9jgBoodA3nfNr3v6/4D5AhuuP0SFcpw6l25yknU6oX8BVSq7QIQtcUMAAAAASUVORK5CYII="},3202:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-442e0665]{background-color:#e93323!important}.group-list .swiper[data-v-442e0665]{width:100%;position:relative;box-sizing:border-box;padding:0 %?30?%;margin-top:%?30?%}.group-list .swiper uni-swiper[data-v-442e0665]{width:100%;height:%?300?%}.group-list .swiper uni-swiper .slide-image[data-v-442e0665]{width:100%;height:%?300?%;border-radius:%?20?%}.group-list .swiper uni-swiper[data-v-442e0665] .uni-swiper-dot{width:%?8?%!important;height:%?8?%!important;border-radius:50%}.group-list .swiper uni-swiper[data-v-442e0665] .uni-swiper-dot-active{width:%?18?%!important;border-radius:%?4?%;background-color:#e93323!important}.group-list .groupMember[data-v-442e0665]{height:%?100?%}.group-list .groupMember .line[data-v-442e0665]{width:%?102?%;height:%?4?%}.group-list .groupMember .line.right[data-v-442e0665]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.group-list .groupMember .line uni-image[data-v-442e0665]{width:100%;height:100%;display:block}.group-list .groupMember .member[data-v-442e0665]{margin:0 %?30?%}.group-list .groupMember .member .pictrue[data-v-442e0665]{width:%?46?%;height:%?46?%;position:relative}.group-list .groupMember .member .pictrue uni-image[data-v-442e0665]{border:%?2?% solid #fff;width:100%;height:100%;border-radius:50%}.group-list .groupMember .member .pictrue ~ .pictrue[data-v-442e0665]{margin-left:%?-8?%}.group-list .groupMember .member .pictrue .iconfont[data-v-442e0665]{position:absolute;width:%?43?%;height:%?43?%;background:rgba(51,51,51,.6);border-radius:50%;top:%?2?%;left:%?2?%;color:#fff;font-size:%?10?%;text-align:center;line-height:%?43?%}.group-list .list .item[data-v-442e0665]{width:%?690?%;height:%?230?%;background-color:#fff;border-radius:%?14?%;padding:0 %?22?%;margin:0 auto %?18?% auto}.group-list .list .item .pictrue[data-v-442e0665]{width:%?186?%;height:%?186?%}.group-list .list .item .pictrue uni-image[data-v-442e0665]{width:100%;height:100%;border-radius:%?10?%}.group-list .list .item .text[data-v-442e0665]{width:%?440?%}.group-list .list .item .text .name[data-v-442e0665]{color:#333;font-size:%?30?%;height:%?82?%}.group-list .list .item .text .bottom[data-v-442e0665]{margin-top:%?10?%}.group-list .list .item .text .bottom .y_money[data-v-442e0665]{font-size:%?24?%;color:#999}.group-list .list .item .text .bottom .y_money .price[data-v-442e0665]{text-decoration:line-through}.group-list .list .item .text .bottom .y_money .money[data-v-442e0665]{color:#e93323;font-weight:600}.group-list .list .item .text .bottom .y_money .money .num[data-v-442e0665]{font-size:%?34?%}.group-list .list .item .text .bottom .bnt[data-v-442e0665]{height:%?58?%;font-size:%?24?%;text-align:center;position:relative;background-color:#e93323;border-radius:%?28?%}.group-list .list .item .text .bottom .bnt .light[data-v-442e0665]{position:absolute;width:%?28?%;height:%?58?%;top:0;left:50%;margin-left:%?-8?%}.group-list .list .item .text .bottom .bnt .light uni-image[data-v-442e0665]{width:100%;height:100%}.group-list .list .item .text .bottom .bnt .num[data-v-442e0665]{width:%?120?%;background-color:#ffefdb;color:#e93323;height:100%;line-height:%?58?%;border-radius:%?28?% 0 %?14?% %?28?%}.group-list .list .item .text .bottom .bnt .go[data-v-442e0665]{width:%?112?%;background-color:#e93323;height:100%;line-height:%?58?%;border-radius:0 %?28?% %?28?% 0;color:#fff}.group-list .list .item .text .bottom .bnt.gray[data-v-442e0665]{width:%?148?%;background-color:#ccc;color:#fff}body.?%PAGE?%[data-v-442e0665]{background-color:#e93323!important}',""]),t.exports=e},4227:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},r=[]},4364:function(t,e,i){"use strict";i.r(e);var n=i("6892"),a=i("e2af");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("5de3");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"442e0665",null,!1,n["a"],o);e["default"]=u.exports},"479b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62"),a={name:"Home",props:{},data:function(){return{top:"500"}},computed:(0,n.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<500&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){}};e.default=a},"48fd":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAECAYAAAB840ozAAAAWElEQVQ4T2NkYGBg+P//PxMDAwMzAwMDiIZhavNpYQctzET3N7F2MCKFIbFhh64HxH/HwMBQAWKMRgz+BEnviAFF6tvRiCFcUgxExLwajZjBFzGvGBgYagDYLRQWSumlHAAAAABJRU5ErkJggg=="},"5de3":function(t,e,i){"use strict";var n=i("1d46"),a=i.n(n);a.a},6892:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"group-list"},[t.bannerList.length?n("v-uni-view",{staticClass:"swiper"},[n("v-uni-swiper",{attrs:{"indicator-dots":"true",autoplay:!0,circular:t.circular,interval:t.interval,duration:t.duration,"indicator-color":"rgba(0,0,0,0.3)"}},[t._l(t.bannerList,(function(e,i){return[n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"slide-navigator acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[n("v-uni-image",{staticClass:"slide-image",attrs:{src:e.img}})],1)],1)]}))],2)],1):t._e(),n("v-uni-view",{staticClass:"groupMember acea-row row-center-wrapper"},[n("v-uni-view",{staticClass:"line"},[n("v-uni-image",{attrs:{src:i("48fd")}})],1),n("v-uni-view",{staticClass:"member acea-row row-center-wrapper"},[t._l(t.pinkPeople,(function(e,i){return i<6?n("v-uni-view",{key:i,staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:e}})],1):t._e()})),t.pinkPeople.length>5?n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:t.pinkPeople[t.pinkPeople.length-1]}}),n("v-uni-view",{staticClass:"iconfont icon-gengduo1"})],1):t._e()],2),n("v-uni-view",{staticClass:"line right"},[n("v-uni-image",{attrs:{src:i("48fd")}})],1)],1),n("v-uni-view",{staticClass:"list"},t._l(t.combinationList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"item acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openSubcribe(e)}}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:e.image}})],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"name line2"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"bottom acea-row row-between row-bottom"},[n("v-uni-view",{staticClass:"y_money"},[n("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(e.product_price))]),n("v-uni-view",{staticClass:"money"},[t._v("￥"),n("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1)],1),e.stock>0&&e.quota>0?n("v-uni-view",{staticClass:"bnt acea-row row-center-wrapper"},[n("v-uni-view",{staticClass:"light"},[n("v-uni-image",{attrs:{src:i("312b")}})],1),n("v-uni-view",{staticClass:"num"},[t._v(t._s(e.people)+"人团")]),n("v-uni-view",{staticClass:"go"},[t._v("去拼团")])],1):n("v-uni-view",{staticClass:"bnt gray acea-row row-center-wrapper"},[t._v("已售罄")])],1)],1)],1)})),1),n("home")],1)},r=[]},"86b5":function(t,e,i){"use strict";var n=i("f0c6"),a=i.n(n);a.a},"99d5":function(t,e,i){"use strict";i.r(e);var n=i("4227"),a=i("e4d5");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("86b5");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"ca895b4a",null,!1,n["a"],o);e["default"]=u.exports},c8fe:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-ca895b4a]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-ca895b4a]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex}.home .homeCon[data-v-ca895b4a]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-ca895b4a]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#e93323!important}.home .homeCon .iconfont[data-v-ca895b4a]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-ca895b4a]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:#e93323}.home .pictrue .image[data-v-ca895b4a]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},e2af:function(t,e,i){"use strict";i.r(e);var n=i("088d"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},e4d5:function(t,e,i){"use strict";i.r(e);var n=i("479b"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},eb5d:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCombinationList=r,e.getCombinationBannerList=o,e.getPink=s,e.getCombinationDetail=u,e.getCombinationPink=c,e.postCombinationRemove=l,e.getBargainList=d,e.getBargainUserList=g,e.bargainUserCancel=p,e.getBargainDetail=f,e.postBargainStartUser=v,e.postBargainStart=b,e.postBargainHelp=m,e.postBargainHelpPrice=h,e.postBargainHelpList=w,e.postBargainHelpCount=A,e.postBargainShare=C,e.getSeckillIndexTime=x,e.getSeckillList=k,e.getSeckillDetail=y,e.getBargainPoster=B,e.getCombinationPoster=S,e.getBargainUserCancel=_,e.seckillCode=M,e.scombinationCode=E;var a=n(i("0405"));function r(t){return a.default.get("combination/list",t,{noAuth:!0})}function o(t){return a.default.get("combination/banner_list",t,{noAuth:!0})}function s(t){return a.default.get("pink",t,{noAuth:!0})}function u(t){return a.default.get("combination/detail/"+t)}function c(t){return a.default.get("combination/pink/"+t)}function l(t){return a.default.post("combination/remove",t)}function d(t){return a.default.get("bargain/list",t,{noAuth:!0})}function g(t){return a.default.get("bargain/user/list",t)}function p(t){return a.default.post("bargain/user/cancel",{bargainId:t})}function f(t){return a.default.get("bargain/detail/"+t)}function v(t){return a.default.post("bargain/start/user",t)}function b(t){return a.default.post("bargain/start",{bargainId:t})}function m(t){return a.default.post("bargain/help",t)}function h(t){return a.default.post("bargain/help/price",t)}function w(t){return a.default.post("bargain/help/list",t)}function A(t){return a.default.post("bargain/help/count",t)}function C(t){return a.default.post("bargain/share",{bargainId:t})}function x(){return a.default.get("seckill/index",{},{noAuth:!0})}function k(t,e){return a.default.get("seckill/list/"+t,e,{noAuth:!0})}function y(t,e){return a.default.get("seckill/detail/"+t,e)}function B(t){return a.default.post("bargain/poster",t)}function S(t){return a.default.post("combination/poster",t)}function _(t){return a.default.post("/bargain/user/cancel",t)}function M(t,e){return a.default.get("seckill/code/"+t,e)}function E(t){return a.default.get("combination/code/"+t)}},f0c6:function(t,e,i){var n=i("c8fe");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("681a55ca",n,!0,{sourceMap:!1,shadowMode:!1})},f61b:function(t,e,i){"use strict";i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.auth=a,e.openPaySubscribe=r,e.openOrderSubscribe=o,e.openExtrctSubscribe=s,e.openPinkSubscribe=u,e.openBargainSubscribe=c,e.openOrderRefundSubscribe=l,e.openRechargeSubscribe=d,e.openEextractSubscribe=g,e.subscribe=p;var n=i("59e6");function a(){var t={},e=uni.getStorageSync(n.SUBSCRIBE_MESSAGE);return t=e?JSON.parse(e):{},t}function r(){var t=a();return p([t.oreder_takever,t.order_pay_success,t.order_new])}function o(){var t=a();return p([t.order_deliver_success,t.order_postage_success,t.order_clone])}function s(){var t=a();return p([t.user_extract])}function u(){var t=a();return p([t.pink_true])}function c(){var t=a();return p([t.bargain_success])}function l(){var t=a();return p([t.order_refund])}function d(){var t=a();return p([t.recharge_success])}function g(){var t=a();return p([t.user_extract])}function p(t){var e=wx;return new Promise((function(i,n){e.requestSubscribeMessage({tmplIds:t,success:function(t){return i(t)},fail:function(t){return i(t)}})}))}}}]);