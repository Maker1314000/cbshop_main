(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/points_mall/integral_order_details"],{"0074":function(t,e,n){"use strict";n.r(e);var o=n("9b43"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=i.a},"0618":function(t,e,n){"use strict";(function(t){n("62f9");o(n("66fd"));var e=o(n("2401"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"0cd1":function(t,e,n){},2401:function(t,e,n){"use strict";n.r(e);var o=n("322c"),i=n("0074");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("a52d");var r,a=n("f0c5"),u=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"53b36b9c",null,!1,o["a"],r);e["default"]=u.exports},"322c":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},s=[]},"9b43":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("f4f0"),i=n("08aa"),s=n("56ec"),r=(c(n("5fba")),n("858e")),a=n("26cb"),u=c(n("2d3a"));function c(t){return t&&t.__esModule?t:{default:t}}var d=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("c872"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/orderGoods/index").then(function(){return resolve(n("126d"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/Authorize").then(function(){return resolve(n("0cda"))}.bind(null,n)).catch(n.oe)},h={components:{home:d,orderGoods:l,authorize:f},mixins:[u.default],data:function(){return{order_id:"",evaluate:0,cartInfo:[],orderInfo:{system_store:{},_status:{}},system_store:{},isGoodsReturn:!1,status:{},isClose:!1,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"使用微信快捷支付",payStatus:!0},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"当前可用余额：",number:0,payStatus:!0}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1,routineContact:"0"}},computed:(0,a.mapGetters)(["isLogin"]),onLoad:function(t){t.order_id&&this.$set(this,"order_id",t.order_id)},onShow:function(){this.isLogin?this.getOrderInfo():(0,r.toLogin)()},onHide:function(){this.isClose=!0},onReady:function(){},methods:{goGoodCall:function(){var e=this;t.navigateTo({url:"/pages/customer_list/chat?orderId=".concat(e.order_id)})},openSubcribe:function(e){var n=e;t.showLoading({title:"正在加载"}),(0,i.openOrderRefundSubscribe)().then((function(e){t.hideLoading(),t.navigateTo({url:n})})).catch((function(){t.hideLoading()}))},onChangeFun:function(t){var e=t,n=e.action||null,o=void 0!=e.value?e.value:null;n&&this[n]&&this[n](o)},makePhone:function(){t.makePhoneCall({phoneNumber:this.system_store.phone})},showMaoLocation:function(){if(!this.system_store.latitude||!this.system_store.longitude)return this.$util.Tips({title:"缺少经纬度信息无法查看地图！"});t.openLocation({latitude:parseFloat(this.system_store.latitude),longitude:parseFloat(this.system_store.longitude),scale:8,name:this.system_store.name,address:this.system_store.address+this.system_store.detailed_address,success:function(){}})},payClose:function(){this.pay_close=!1},pay_open:function(){this.pay_close=!0,this.pay_order_id=this.orderInfo.order_id,this.totalPrice=this.orderInfo.pay_price},pay_complete:function(){this.pay_close=!1,this.pay_order_id="",this.getOrderInfo()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},onLoadFun:function(){this.getOrderInfo(),this.getUserInfo()},getUserInfo:function(){var t=this;(0,s.getUserInfo)().then((function(e){t.payMode[1].number=e.data.now_money,t.$set(t,"payMode",t.payMode)}))},getOrderInfo:function(){var e=this;t.showLoading({title:"正在加载中"}),(0,o.integralOrderDetails)(this.order_id).then((function(n){t.hideLoading(),e.$set(e,"cartInfo",n.data)})).catch((function(n){t.hideLoading(),e.$util.Tips({title:n},"/pages/points_mall/exchange_record")}))},copy:function(){t.setClipboardData({data:this.cartInfo.order_id})},goTel:function(){t.makePhoneCall({phoneNumber:this.orderInfo.delivery_id})},getOrderStatus:function(){var t=this.orderInfo||{},e=t._status||{_type:0},n={},o=parseInt(e._type),i=t.delivery_type,s=t.seckill_id?parseInt(t.seckill_id):0,r=t.bargain_id?parseInt(t.bargain_id):0,a=t.combination_id?parseInt(t.combination_id):0;n={type:9==o?-9:o,class_status:0},1==o&&a>0&&(n.class_status=1),2==o&&"express"==i&&(n.class_status=2),2==o&&(n.class_status=3),4!=o&&0!=o||(n.class_status=4),s||r||a||3!=o&&4!=o||(n.class_status=5),this.$set(this,"status",n)},goJoinPink:function(){t.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+this.orderInfo.pink_id})},confirmOrder:function(){var e=this;t.showModal({title:"确认收货",content:"为保障权益，请收到货确认无误后，再确认收货",success:function(t){t.confirm&&(0,o.orderTake)({order_id:e.order_id}).then((function(t){return e.$util.Tips({title:"操作成功",icon:"success"},(function(){e.getOrderInfo()}))})).catch((function(t){return e.$util.Tips({title:t})}))}})},delOrder:function(){var t=this;(0,o.orderDel)({order_id:t.order_id}).then((function(e){return t.$util.Tips({title:"删除成功",icon:"success"},{tab:5,url:"/pages/points_mall/exchange_record"})})).catch((function(e){return t.$util.Tips({title:e})}))}}};e.default=h}).call(this,n("543d")["default"])},a52d:function(t,e,n){"use strict";var o=n("0cd1"),i=n.n(o);i.a}},[["0618","common/runtime","common/vendor"]]]);