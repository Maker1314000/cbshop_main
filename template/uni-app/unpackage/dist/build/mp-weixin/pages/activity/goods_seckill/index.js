(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_seckill/index"],{"2fae":function(t,e,i){},"5799e":function(t,e,i){"use strict";(function(t){i("62f9");n(i("66fd"));var e=n(i("e166"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},8429:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},aa06:function(t,e,i){"use strict";i.r(e);var n=i("c575"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},c575:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("f4f0"),a=o(i("2d3a"));function o(t){return t&&t.__esModule?t:{default:t}}var c=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("c872"))}.bind(null,i)).catch(i.oe)},l={components:{home:c},mixins:[a.default],data:function(){return{topImage:"",seckillList:[],timeList:[],active:5,scrollLeft:0,interval:0,status:1,countDownHour:"00",countDownMinute:"00",countDownSecond:"00",page:1,limit:8,loading:!1,loadend:!1,pageloading:!1,intoindex:""}},onLoad:function(){this.getSeckillConfig()},methods:{getSeckillConfig:function(){var t=this;(0,n.getSeckillIndexTime)().then((function(e){t.topImage=e.data.lovely,t.timeList=e.data.seckillTime,t.active=e.data.seckillTimeIndex,t.$nextTick((function(){t.intoindex="sort"+e.data.seckillTimeIndex})),t.timeList.length&&(t.scrollLeft=100*(t.active-1.37),setTimeout((function(){t.loading=!0}),2e3),t.seckillList=[],t.page=1,t.status=t.timeList[t.active].status,t.getSeckillList())}))},getSeckillList:function(){var t=this,e={page:t.page,limit:t.limit};t.loadend||t.pageloading||(this.pageloading=!0,(0,n.getSeckillList)(t.timeList[t.active].id,e).then((function(e){var i=e.data,n=i.length<t.limit;t.page++,t.seckillList=t.seckillList.concat(i),t.page=t.page,t.pageloading=!1,t.loadend=n})).catch((function(e){t.pageloading=!1})))},settimeList:function(t,e){var i=this;this.active=e,i.interval&&(clearInterval(i.interval),i.interval=null),i.interval=0,i.countDownHour="00",i.countDownMinute="00",i.countDownSecond="00",i.status=i.timeList[i.active].status,i.loadend=!1,i.page=1,i.seckillList=[],i.getSeckillList()},goDetails:function(e){t.navigateTo({url:"/pages/activity/goods_seckill_details/index?id="+e.id})}},onReachBottom:function(){this.getSeckillList()}};e.default=l}).call(this,i("543d")["default"])},cc59:function(t,e,i){"use strict";var n=i("2fae"),a=i.n(n);a.a},e166:function(t,e,i){"use strict";i.r(e);var n=i("8429"),a=i("aa06");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("cc59");var c,l=i("f0c5"),u=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=u.exports}},[["5799e","common/runtime","common/vendor"]]]);