(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_invoice_order-index"],{"077d":function(e,t,i){var a=i("12de");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("4f06").default;r("1e8a022a",a,!0,{sourceMap:!1,shadowMode:!1})},"12de":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".qs-btn[data-v-79261a80]{width:auto;height:%?60?%;text-align:center;line-height:%?60?%;border-radius:%?50?%;color:#fff;font-size:%?27?%;padding:0 3%;color:#aaa;border:1px solid #ddd;margin-right:%?20?%}",""]),e.exports=t},"1af5":function(e,t,i){"use strict";i("4160"),i("a9e3"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{evaluate:{type:Number,default:0},cartInfo:{type:Array,default:function(){return[]}},orderId:{type:String,default:""},jump:{type:Boolean,default:!1}},data:function(){return{totalNmu:""}},watch:{cartInfo:function(e,t){var i=0;e.forEach((function(e,t){i+=e.cart_num})),this.totalNmu=i}},methods:{evaluateTap:function(e,t){uni.navigateTo({url:"/pages/users/goods_comment_con/index?unique="+e+"&uni="+t})},jumpCon:function(e){this.jump&&uni.navigateTo({url:"/pages/goods_details/index?id=".concat(e)})}}};t.default=a},"2ed0":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"order-details"},[e.orderInfo&&e.orderInfo.invoice?i("v-uni-view",{staticClass:"header bg-color acea-row row-middle"},[i("v-uni-view",{staticClass:"iconfont icon-fapiao1"}),i("v-uni-view",{staticClass:"data"},[i("v-uni-view",{staticClass:"state"},[e._v(e._s(e.orderInfo.invoice.is_invoice?"已开票":"未开票"))]),i("v-uni-view",[e._v(e._s(e.orderInfo.invoice.add_time))])],1)],1):e._e(),e.orderInfo&&e.orderInfo.invoice?i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("发票类型")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(1===e.orderInfo.invoice.type?"增值税电子普通发票":"增值税电子专用发票"))])],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("发票抬头")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.invoice.name))])],1),e.orderInfo.invoice.duty_number?i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("税号")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.invoice.duty_number))])],1):e._e(),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("手机号")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.invoice.drawer_phone))])],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("邮箱")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.invoice.email))])],1),2===e.orderInfo.invoice.type?[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("开户银行")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.invoice.bank))])],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("银行账号")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.invoice.card_number))])],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("企业地址")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.invoice.address))])],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("企业电话")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.invoice.tell))])],1)]:e._e(),e.orderInfo.invoice.invoice_number?i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("发票编号")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.invoice.invoice_number))])],1):e._e(),e.orderInfo.invoice.remark?i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("发票备注")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.invoice.remark))])],1):e._e()],2):e._e(),i("orderGoods",{attrs:{evaluate:e.evaluate,orderId:e.order_id,cartInfo:e.cartInfo,jump:!0}}),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("订单编号：")]),i("v-uni-view",{staticClass:"conter acea-row row-middle row-right"},[e._v(e._s(e.orderInfo.order_id)),i("v-uni-text",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":e.orderInfo.order_id}},[e._v("复制")])],1)],1),i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("下单时间：")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s((e.orderInfo.add_time_y||"")+" "+(e.orderInfo.add_time_h||0)))])],1),i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("支付状态：")]),e.orderInfo.paid?i("v-uni-view",{staticClass:"conter"},[e._v("已支付")]):i("v-uni-view",{staticClass:"conter"},[e._v("未支付")])],1),i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("支付方式：")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo._status._payType))])],1),e.orderInfo.mark?i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("买家留言：")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.mark))])],1):e._e(),e.orderInfo.fictitious_content?i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("备注：")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.fictitious_content))])],1):e._e()],1),e.isGoodsReturn?i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("收货人：")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.real_name))])],1),i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("联系电话：")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.user_phone))])],1),i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("收货地址：")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.user_address))])],1)],1):e._e(),0!=e.orderInfo.status?i("v-uni-view",["express"==e.orderInfo.delivery_type?i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("配送方式：")]),i("v-uni-view",{staticClass:"conter"},[e._v("发货")])],1),i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("快递公司：")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.delivery_name||""))])],1),i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("快递号：")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.delivery_id||""))])],1)],1):"send"==e.orderInfo.delivery_type?i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("配送方式：")]),i("v-uni-view",{staticClass:"conter"},[e._v("送货")])],1),i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("配送人姓名：")]),i("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.delivery_name||""))])],1),i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("联系电话：")]),i("v-uni-view",{staticClass:"conter acea-row row-middle row-right"},[e._v(e._s(e.orderInfo.delivery_id||"")),i("v-uni-text",{staticClass:"copy",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goTel.apply(void 0,arguments)}}},[e._v("拨打")])],1)],1)],1):"fictitious"==e.orderInfo.delivery_type?i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("虚拟发货：")]),i("v-uni-view",{staticClass:"conter"},[e._v("已发货，请注意查收")])],1)],1):e._e()],1):e._e(),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("支付金额：")]),i("v-uni-view",{staticClass:"conter"},[e._v("￥"+e._s(e.orderInfo.total_price))])],1),e.orderInfo.coupon_id?i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("优惠券抵扣：")]),i("v-uni-view",{staticClass:"conter"},[e._v("-￥"+e._s(e.orderInfo.coupon_price))])],1):e._e(),e.orderInfo.use_integral>0?i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("积分抵扣：")]),i("v-uni-view",{staticClass:"conter"},[e._v("-￥"+e._s(e.orderInfo.deduction_price))])],1):e._e(),e.orderInfo.pay_postage>0?i("v-uni-view",{staticClass:"item acea-row row-between"},[i("v-uni-view",[e._v("运费：")]),i("v-uni-view",{staticClass:"conter"},[e._v("￥"+e._s(e.orderInfo.pay_postage))])],1):e._e()],1)],1),i("home")],1)},o=[]},"40c8":function(e,t,i){"use strict";var a=i("540f"),r=i.n(a);r.a},"4ba5":function(e,t,i){"use strict";i.r(t);var a=i("2ed0"),r=i("aff2");for(var o in r)"default"!==o&&function(e){i.d(t,e,(function(){return r[e]}))}(o);i("40c8"),i("f55d");var n,s=i("f0c5"),d=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"79261a80",null,!1,a["a"],n);t["default"]=d.exports},"540f":function(e,t,i){var a=i("d864");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("4f06").default;r("88df8e5a",a,!0,{sourceMap:!1,shadowMode:!1})},"6e20":function(e,t,i){var a=i("c371");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("4f06").default;r("430e6b30",a,!0,{sourceMap:!1,shadowMode:!1})},"7cc9":function(e,t,i){"use strict";(function(e){var a=i("4ea4");i("acd8"),i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i("d790"),o=i("df33"),n=i("3023"),s=a(i("1f5f")),d=a(i("c3d5")),c=a(i("c414")),v=a(i("af4e")),u=i("12f4"),l=i("2f62"),f={components:{payment:d.default,home:s.default,orderGoods:c.default},data:function(){return{order_id:"",evaluate:0,cartInfo:[],orderInfo:{system_store:{},_status:{}},system_store:{},isGoodsReturn:!1,status:{},isClose:!1,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"微信快捷支付"},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"可用余额:",number:0}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1}},computed:(0,l.mapGetters)(["isLogin"]),onLoad:function(e){e.order_id&&this.$set(this,"order_id",e.order_id)},onShow:function(){this.isLogin?(this.getOrderInfo(),this.getUserInfo()):(0,u.toLogin)()},onHide:function(){this.isClose=!0},onReady:function(){this.$nextTick((function(){var e=this,t=new v.default(".copy-data");t.on("success",(function(){e.$util.Tips({title:"复制成功"})}))}))},methods:{goGoodCall:function(){var e=this;uni.navigateTo({url:"/pages/customer_list/chat?orderId=".concat(e.order_id)})},openSubcribe:function(e){var t=e;uni.showLoading({title:"正在加载"}),(0,o.openOrderRefundSubscribe)().then((function(e){uni.hideLoading(),uni.navigateTo({url:t})})).catch((function(){uni.hideLoading()}))},onChangeFun:function(e){var t=e,i=t.action||null,a=void 0!=t.value?t.value:null;i&&this[i]&&this[i](a)},makePhone:function(){uni.makePhoneCall({phoneNumber:this.system_store.phone})},showMaoLocation:function(){if(!this.system_store.latitude||!this.system_store.longitude)return this.$util.Tips({title:"缺少经纬度信息无法查看地图！"});uni.openLocation({latitude:parseFloat(this.system_store.latitude),longitude:parseFloat(this.system_store.longitude),scale:8,name:this.system_store.name,address:this.system_store.address+this.system_store.detailed_address,success:function(){}})},payClose:function(){this.pay_close=!1},pay_open:function(){this.pay_close=!0,this.pay_order_id=this.orderInfo.order_id,this.totalPrice=this.orderInfo.pay_price},pay_complete:function(){this.pay_close=!1,this.pay_order_id="",this.getOrderInfo()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},onLoadFun:function(){this.getOrderInfo(),this.getUserInfo()},getUserInfo:function(){var e=this;(0,n.getUserInfo)().then((function(t){e.payMode[1].number=t.data.now_money,e.$set(e,"payMode",e.payMode)}))},getOrderInfo:function(){var e=this,t=this;uni.showLoading({title:"正在加载中"}),(0,r.orderInvoiceDetail)(this.order_id).then((function(i){var a=i.data._status._type;uni.hideLoading(),t.$set(t,"orderInfo",i.data),t.$set(t,"cartInfo",i.data.cartInfo),t.$set(t,"evaluate",3==a?3:0),t.$set(t,"system_store",i.data.system_store),0!=e.orderInfo.refund_status&&(e.isGoodsReturn=!0),t.getOrderStatus()})).catch((function(e){uni.hideLoading(),t.$util.Tips({title:e})}))},goTel:function(){uni.makePhoneCall({phoneNumber:this.orderInfo.delivery_id})},getOrderStatus:function(){var e=this.orderInfo||{},t=e._status||{_type:0},i={},a=parseInt(t._type),r=e.delivery_type,o=e.seckill_id?parseInt(e.seckill_id):0,n=e.bargain_id?parseInt(e.bargain_id):0,s=e.combination_id?parseInt(e.combination_id):0;i={type:9==a?-9:a,class_status:0},1==a&&s>0&&(i.class_status=1),2==a&&"express"==r&&(i.class_status=2),2==a&&(i.class_status=3),4!=a&&0!=a||(i.class_status=4),o||n||s||3!=a&&4!=a||(i.class_status=5),this.$set(this,"status",i)},goJoinPink:function(){uni.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+this.orderInfo.pink_id})},goOrderConfirm:function(){var e=this;(0,r.orderAgain)(e.orderInfo.order_id).then((function(e){return uni.navigateTo({url:"/pages/users/order_confirm/index?new=1&cartId="+e.data.cateId})}))},confirmOrder:function(){var e=this;uni.showModal({title:"确认收货",content:"为保障权益，请收到货确认无误后，再确认收货",success:function(t){t.confirm&&(0,r.orderTake)(e.order_id).then((function(t){return e.$util.Tips({title:"操作成功",icon:"success"},(function(){e.getOrderInfo()}))})).catch((function(t){return e.$util.Tips({title:t})}))}})},delOrder:function(){var e=this;(0,r.orderDel)(this.order_id).then((function(t){return e.$util.Tips({title:"删除成功",icon:"success"},{tab:3,url:1})})).catch((function(t){return e.$util.Tips({title:t})}))},cancelOrder:function(){var e=this;uni.showModal({title:"提示",content:"确认取消该订单?",success:function(t){t.confirm?(0,r.orderCancel)(e.orderInfo.order_id).then((function(t){e.$util.Tips({title:t.msg},{tab:3})})).catch((function(){e.getDetail()})):t.cancel}})}}};t.default=f}).call(this,i("5a52")["default"])},aff2:function(e,t,i){"use strict";i.r(t);var a=i("7cc9"),r=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},c371:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.orderGoods[data-v-bad0b002]{background-color:#fff;margin-top:%?12?%}.orderGoods .total[data-v-bad0b002]{width:100%;height:%?86?%;padding:0 %?30?%;border-bottom:%?2?% solid #f0f0f0;font-size:%?30?%;color:#282828;line-height:%?86?%;box-sizing:border-box}',""]),e.exports=t},c414:function(e,t,i){"use strict";i.r(t);var a=i("ca44"),r=i("cb65");for(var o in r)"default"!==o&&function(e){i.d(t,e,(function(){return r[e]}))}(o);i("ca28");var n,s=i("f0c5"),d=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"bad0b002",null,!1,a["a"],n);t["default"]=d.exports},ca28:function(e,t,i){"use strict";var a=i("6e20"),r=i.n(a);r.a},ca44:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"orderGoods"},[i("v-uni-view",{staticClass:"total"},[e._v("共"+e._s(e.totalNmu)+"件商品")]),i("v-uni-view",{staticClass:"goodWrapper"},e._l(e.cartInfo,(function(t,a){return i("v-uni-view",{key:a,staticClass:"item acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.jumpCon(t.product_id)}}},[i("v-uni-view",{staticClass:"pictrue"},[t.productInfo.attrInfo?i("v-uni-image",{attrs:{src:t.productInfo.attrInfo.image}}):i("v-uni-image",{attrs:{src:t.productInfo.image}})],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"name line1"},[e._v(e._s(t.productInfo.store_name))]),i("v-uni-view",{staticClass:"num"},[e._v("x "+e._s(t.cart_num))])],1),t.productInfo.attrInfo?i("v-uni-view",{staticClass:"attr line1"},[e._v(e._s(t.productInfo.attrInfo.suk))]):e._e(),t.productInfo.attrInfo?i("v-uni-view",{staticClass:"money font-color"},[e._v("￥"+e._s(t.productInfo.attrInfo.price))]):i("v-uni-view",{staticClass:"money font-color"},[e._v("￥"+e._s(t.productInfo.price))]),0==t.is_reply&&3==e.evaluate?i("v-uni-view",{staticClass:"evaluate",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.evaluateTap(t.unique,e.orderId)}}},[e._v("评价")]):1==t.is_reply&&3==e.evaluate?i("v-uni-view",{staticClass:"evaluate"},[e._v("已评价")]):e._e()],1)],1)})),1)],1)},o=[]},cb65:function(e,t,i){"use strict";i.r(t);var a=i("1af5"),r=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},d864:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.goodCall[data-v-79261a80]{color:#e93323;text-align:center;width:100%;height:%?86?%;padding:0 %?30?%;border-bottom:%?1?% solid #eee;font-size:%?30?%;line-height:%?86?%;background:#fff}.goodCall .icon-kefu[data-v-79261a80]{font-size:%?36?%;margin-right:%?15?%}.order-details .header[data-v-79261a80]{padding:0 %?30?%;height:%?150?%}.order-details .header.on[data-v-79261a80]{background-color:#666!important}.order-details .header .iconfont[data-v-79261a80]{font-size:%?70?%;color:#fff}.order-details .header .data[data-v-79261a80]{color:hsla(0,0%,100%,.8);font-size:%?24?%;margin-left:%?27?%}.order-details .header .data.on[data-v-79261a80]{margin-left:0}.order-details .header .data .state[data-v-79261a80]{font-size:%?30?%;font-weight:700;color:#fff;margin-bottom:%?7?%}.order-details .header .data .time[data-v-79261a80]{margin-left:%?20?%}.order-details .nav[data-v-79261a80]{background-color:#fff;font-size:%?26?%;color:#282828;padding:%?25?% 0}.order-details .nav .navCon[data-v-79261a80]{padding:0 %?40?%}.order-details .nav .on[data-v-79261a80]{color:#e93323}.order-details .nav .progress[data-v-79261a80]{padding:0 %?65?%;margin-top:%?10?%}.order-details .nav .progress .line[data-v-79261a80]{width:%?100?%;height:%?2?%;background-color:#939390}.order-details .nav .progress .iconfont[data-v-79261a80]{font-size:%?25?%;color:#939390;margin-top:%?-2?%}.order-details .address[data-v-79261a80]{font-size:%?26?%;color:#868686;background-color:#fff;margin-top:%?13?%;padding:%?35?% %?30?%}.order-details .address .name[data-v-79261a80]{font-size:%?30?%;color:#282828;margin-bottom:%?15?%}.order-details .address .name .phone[data-v-79261a80]{margin-left:%?40?%}.order-details .line[data-v-79261a80]{width:100%;height:%?3?%}.order-details .line uni-image[data-v-79261a80]{width:100%;height:100%;display:block}.order-details .wrapper[data-v-79261a80]{background-color:#fff;margin-top:%?12?%;padding:%?30?%}.order-details .wrapper .item[data-v-79261a80]{font-size:%?28?%;color:#282828}.order-details .wrapper .item ~ .item[data-v-79261a80]{margin-top:%?20?%}.order-details .wrapper .item .conter[data-v-79261a80]{color:#868686;width:%?460?%;text-align:right}.order-details .wrapper .item .conter .copy[data-v-79261a80]{font-size:%?20?%;color:#333;border-radius:%?3?%;border:%?1?% solid #666;padding:%?3?% %?15?%;margin-left:%?24?%}.order-details .wrapper .actualPay[data-v-79261a80]{border-top:%?1?% solid #eee;margin-top:%?30?%;padding-top:%?30?%}.order-details .wrapper .actualPay .money[data-v-79261a80]{font-weight:700;font-size:%?30?%}.order-details .footer[data-v-79261a80]{width:100%;height:%?100?%;position:fixed;bottom:0;left:0;background-color:#fff;padding:0 %?30?%;box-sizing:border-box}.order-details .footer .bnt[data-v-79261a80]{width:%?176?%;height:%?60?%;text-align:center;line-height:%?60?%;border-radius:%?50?%;color:#fff;font-size:%?27?%}.order-details .footer .bnt.cancel[data-v-79261a80]{color:#aaa;border:%?1?% solid #ddd}.order-details .footer .bnt ~ .bnt[data-v-79261a80]{margin-left:%?18?%}.order-details .writeOff[data-v-79261a80]{background-color:#fff;margin-top:%?13?%;padding-bottom:%?30?%}.order-details .writeOff .title[data-v-79261a80]{font-size:%?30?%;color:#282828;height:%?87?%;border-bottom:1px solid #f0f0f0;padding:0 %?30?%;line-height:%?87?%}.order-details .writeOff .grayBg[data-v-79261a80]{background-color:#f2f5f7;width:%?590?%;height:%?384?%;border-radius:%?20?% %?20?% 0 0;margin:%?50?% auto 0 auto;padding-top:%?55?%;position:relative}.order-details .writeOff .grayBg .written[data-v-79261a80]{position:absolute;top:0;right:0;width:%?60?%;height:%?60?%}.order-details .writeOff .grayBg .written uni-image[data-v-79261a80]{width:100%;height:100%}.order-details .writeOff .grayBg .pictrue[data-v-79261a80]{width:%?290?%;height:%?290?%;margin:0 auto}.order-details .writeOff .grayBg .pictrue uni-image[data-v-79261a80]{width:100%;height:100%;display:block}.order-details .writeOff .gear[data-v-79261a80]{width:%?590?%;height:%?30?%;margin:0 auto}.order-details .writeOff .gear uni-image[data-v-79261a80]{width:100%;height:100%;display:block}.order-details .writeOff .num[data-v-79261a80]{background-color:#f0c34c;width:%?590?%;height:%?84?%;color:#282828;font-size:%?48?%;margin:0 auto;border-radius:0 0 %?20?% %?20?%;text-align:center;padding-top:%?4?%}.order-details .writeOff .rules[data-v-79261a80]{margin:%?46?% %?30?% 0 %?30?%;border-top:1px solid #f0f0f0;padding-top:%?10?%}.order-details .writeOff .rules .item[data-v-79261a80]{margin-top:%?20?%}.order-details .writeOff .rules .item .rulesTitle[data-v-79261a80]{font-size:%?28?%;color:#282828}.order-details .writeOff .rules .item .rulesTitle .iconfont[data-v-79261a80]{font-size:%?30?%;color:#333;margin-right:%?8?%;margin-top:%?5?%}.order-details .writeOff .rules .item .info[data-v-79261a80]{font-size:%?28?%;color:#999;margin-top:%?7?%}.order-details .writeOff .rules .item .info .time[data-v-79261a80]{margin-left:%?20?%}.order-details .map[data-v-79261a80]{height:%?86?%;font-size:%?30?%;color:#282828;line-height:%?86?%;border-bottom:1px solid #f0f0f0;margin-top:%?13?%;background-color:#fff;padding:0 %?30?%}.order-details .map .place[data-v-79261a80]{font-size:%?26?%;width:%?176?%;height:%?50?%;border-radius:%?25?%;line-height:%?50?%;text-align:center}.order-details .map .place .iconfont[data-v-79261a80]{font-size:%?27?%;height:%?27?%;line-height:%?27?%;margin:%?2?% %?3?% 0 0}.order-details .address .name .iconfont[data-v-79261a80]{font-size:%?34?%;margin-left:%?10?%}.refund[data-v-79261a80]{padding:0 %?30?% %?30?%;margin-top:%?24?%;background-color:#fff}.refund .title[data-v-79261a80]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;color:#333;height:%?86?%;border-bottom:1px solid #f5f5f5}.refund .title uni-image[data-v-79261a80]{width:%?32?%;height:%?32?%;margin-right:%?10?%}.refund .con[data-v-79261a80]{padding-top:%?25?%;font-size:%?28?%;color:#868686}',""]),e.exports=t},f55d:function(e,t,i){"use strict";var a=i("077d"),r=i.n(a);r.a}}]);