(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/annex/vip_paid/index"],{"00e3":function(e,t,i){"use strict";i.r(t);var n=i("9192"),o=i("f81b");for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("18bc");var r,c=i("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"71288ef7",null,!1,n["a"],r);t["default"]=s.exports},"18bc":function(e,t,i){"use strict";var n=i("6a66"),o=i.n(n);o.a},"4e99":function(e,t,i){"use strict";(function(e){i("62f9");n(i("66fd"));var t=n(i("00e3"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(t.default)}).call(this,i("543d")["createPage"])},"4f7c":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("26cb"),o=i("56ec"),a=i("3f7d"),r=i("858e"),c=i("08aa"),s=m(i("fede"));function m(e){return e&&e.__esModule?e:{default:e}}var u=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("c872"))}.bind(null,i)).catch(i.oe)},p=function(){Promise.all([i.e("common/vendor"),i.e("components/payment/index")]).then(function(){return resolve(i("1aa0"))}.bind(null,i)).catch(i.oe)},d={components:{home:u,payment:p},filters:{dateFormat:function(e){return(0,s.default)(1e3*e).format("YYYY-MM-DD")},moneyFormat:function(e){return parseFloat(e)}},data:function(){return{memberType:[],userInfo:{},memberRights:[],memberExplain:[],memberCoupons:[],isGetFree:null,popupShow:!1,account:"",password:"",goodsList:[],pay_order_id:"",payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"微信快捷支付",payStatus:!0}],pay_close:!1,totalPrice:"0",formContent:"",page:1,limit:15,finished:!1,memberEndTime:"",type:"",svip:null,mc_id:0}},watch:{popupShow:{immediate:!0,handler:function(){this.account="",this.password=""}}},computed:(0,n.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?(this.memberCard(),this.groomList(),this.getOrderPayType()):(0,r.toLogin)()},onReachBottom:function(){this.groomList()},methods:{pay:function(){"free"===this.type?this.createMemberCard("weixin"):this.pay_close=!0},scrollToCard:function(){var t=e.createSelectorQuery().in(this);t.select("#card").boundingClientRect((function(t){e.pageScrollTo({scrollTop:t.top})})).exec()},goDetail:function(t){e.navigateTo({url:"/pages/goods_details/index?id=".concat(t)})},memberCard:function(){var t=this;e.showLoading({title:"正在加载…"}),(0,o.memberCard)().then((function(i){e.hideLoading();var n=i.data,a=n.is_get_free,r=n.member_coupons,c=n.member_explain,s=n.member_rights,m=n.member_type;t.isGetFree=a,t.userInfo=a.user_info,t.memberRights=s,t.memberType=m,t.memberCoupons=r,t.memberExplain=c,a.is_record&&(t.memberType=t.memberType.filter((function(e){return"free"!==e.type}))),t.totalPrice=t.memberType[0].pre_price,t.type=t.memberType[0].type,t.svip=t.memberType[0],t.mc_id=t.memberType[0].mc_id,(0,o.memberOverdueTime)({member_type:t.svip.type,vip_day:t.svip.vip_day}).then((function(e){t.memberEndTime=e.data.data}))})).catch((function(t){e.showToast({title:t,icon:"none"})}))},groomList:function(){var t=this;this.finished||(e.showLoading({title:"加载中"}),(0,o.groomList)(5,{page:this.page,limit:this.limit}).then((function(i){e.hideLoading(),t.goodsList=t.goodsList.concat(i.data.list),t.finished=i.data.list.length<t.limit,t.page+=1})).catch((function(t){e.hideLoading()})))},checkType:function(e){var t=this;this.type=e.type,this.svip=e,this.totalPrice=e.pre_price,this.mc_id=e.mc_id,(0,o.memberOverdueTime)({member_type:e.type,vip_day:e.vip_day,mc_id:e.mc_id}).then((function(e){t.memberEndTime=e.data.data}))},closePopup:function(){this.popupShow=!1},getMemberCard:function(){var e=this;(0,o.memberCard)().then((function(t){var i=t.data;e.memberType=i.member_type,e.memberRights=i.member_rights,e.isGetFree=i.is_get_free})).catch((function(e){}))},getOrderPayType:function(){var t=this;(0,a.orderOfflinePayType)().then((function(e){var i=e.data,n=(i.ali_pay_status,i.pay_weixin_open);t.payMode[0].payStatus=1===n,t.payMode[1].payStatus=!1})).catch((function(t){e.showToast({title:t,icon:"none"})}))},memberSelect:function(e){this.memberSelected=e},drawMemberCard:function(){var t={member_card_code:"",member_card_pwd:"",from:"weixinh5"};return this.popupShow?this.account?this.password?(t.from="routine",e.showLoading({title:"激活中"}),void(0,o.memberCardDraw)(t).then((function(t){e.showToast({title:t.msg,success:function(){this.popupShow=!1,this.getMemberCard()}})})).catch((function(t){e.showToast({title:t,icon:"none"})}))):e.showToast({title:"请输入卡密",icon:"none"}):e.showToast({title:"请输入卡号",icon:"none"}):this.popupShow=!0},createMemberCard:function(t){var i=this;e.showLoading({title:"正在加载…"});var n={pay_type:t,type:"1",from:"routine",member_type:this.svip.type,mc_id:this.mc_id,price:this.svip.pre_price,money:this.svip.price};(0,c.openPaySubscribe)().then((function(){(0,o.memberCardCreate)(n).then((function(t){parseFloat(i.svip.pre_price)>0?i.callPay(t):(i.memberCard(),i.groomList(),e.hideLoading(),e.showToast({title:"成功开启0元试用"}))})).catch((function(t){e.showToast({title:t,icon:"none"})}))}))},callPay:function(t){var i=t.data,n=i.status,o=i.result,a=(o.orderId,o.jsConfig);switch(n){case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":e.hideLoading(),this.$util.Tips({title:t.msg},{tab:5,url:"/pages/annex/vip_paid/index"});break;case"SUCCESS":e.hideLoading(),this.$util.Tips({title:t.msg,icon:"success"},{tab:5,url:"/pages/annex/vip_paid/index"});break;case"WECHAT_PAY":e.requestPayment({timeStamp:a.timestamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign,success:function(e){this.$util.Tips({title:"支付成功",icon:"success"},{tab:5,url:"/pages/annex/vip_paid/index"})},fail:function(){e.showToast({title:"取消支付",icon:"none"})},complete:function(){e.hideLoading()}});break;case"WECHAT_H5_PAY":e.showToast({title:t.msg,success:function(){location.href=a.mweb_url}});break;case"ALIPAY_PAY":e.hideLoading(),e.navigateTo({url:"/pages/users/alipay_invoke/index?id=".concat(t.data.result.order_id,"&link=").concat(a.qrCode,"&from=member")});break}},onChangeFun:function(e){var t=e,i=t.action||null,n=void 0!=t.value?t.value:null;this.pay_close=!1,i&&this[i]&&this[i](n)},payClose:function(){this.pay_close=!1},payCheck:function(e){this.createMemberCard(e)},checkForm:function(t){var i=this,n=t.detail.value,a={member_card_code:"",member_card_pwd:"",from:"H5 "};return n.account?n.password?(a.member_card_code=n.account,a.member_card_pwd=n.password,a.from="routine",e.showLoading({title:"激活中"}),void(0,o.memberCardDraw)(a).then((function(t){var n=i;e.showToast({title:t.msg,success:function(){n.popupShow=!1}})})).catch((function(t){e.showToast({title:t,icon:"none"})}))):e.showToast({title:"请输入卡密",icon:"none"}):e.showToast({title:"请输入卡号",icon:"none"})}}};t.default=d}).call(this,i("543d")["default"])},"6a66":function(e,t,i){},9192:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,i=(e._self._c,!e.userInfo.is_ever_level&&e.userInfo.is_money_level?e._f("dateFormat")(e.userInfo.overdue_time):null),n=e.__map(e.memberType,(function(t,i){var n=e.__get_orig(t),o=e._f("moneyFormat")(t.pre_price),a="free"!==t.type?e._f("moneyFormat")(t.price):null;return{$orig:n,f1:o,f2:a}})),o=e.memberCoupons.length?e.__map(e.memberCoupons,(function(t,i){var n=e.__get_orig(t),o=e._f("moneyFormat")(t.coupon_price),a="0.00"!==t.use_min_price?e._f("moneyFormat")(t.use_min_price):null;return{$orig:n,f3:o,f4:a}})):null;e.$mp.data=Object.assign({},{$root:{f0:i,l0:n,l1:o}})},a=[]},f81b:function(e,t,i){"use strict";i.r(t);var n=i("4f7c"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a}},[["4e99","common/runtime","common/vendor"]]]);