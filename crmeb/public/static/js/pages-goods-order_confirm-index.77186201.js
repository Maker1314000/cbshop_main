(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-order_confirm-index"],{"098b":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-520a22d9] uni-checkbox[disabled] .uni-checkbox-input{background-color:#eee}.alipaysubmit[data-v-520a22d9]{display:none}.order-submission .line[data-v-520a22d9]{width:100%;height:%?3?%}.order-submission .line uni-image[data-v-520a22d9]{width:100%;height:100%;display:block}.order-submission .address[data-v-520a22d9]{padding:%?28?% %?30?%;background-color:#fff;box-sizing:border-box}.order-submission .address .addressCon[data-v-520a22d9]{width:%?610?%;font-size:%?26?%;color:#666}.order-submission .address .addressCon .name[data-v-520a22d9]{font-size:%?30?%;color:#282828;font-weight:700;margin-bottom:%?10?%}.order-submission .address .addressCon .name .phone[data-v-520a22d9]{margin-left:%?50?%}.order-submission .address .addressCon .default[data-v-520a22d9]{margin-right:%?12?%}.order-submission .address .addressCon .setaddress[data-v-520a22d9]{color:#333;font-size:%?28?%}.order-submission .address .iconfont[data-v-520a22d9]{font-size:%?35?%;color:#707070}.order-submission .allAddress[data-v-520a22d9]{width:100%;background:linear-gradient(180deg,var(--view-theme) 0,#f5f5f5);padding-top:%?100?%;margin-bottom:%?12?%}.order-submission .allAddress .nav[data-v-520a22d9]{width:%?710?%;margin:0 auto}.order-submission .allAddress .nav .item[data-v-520a22d9]{width:%?355?%}.order-submission .allAddress .nav .item.on[data-v-520a22d9]{position:relative;width:%?250?%}.order-submission .allAddress .nav .item.on[data-v-520a22d9]::before{position:absolute;bottom:0;content:"快递配送";font-size:%?28?%;display:block;height:0;width:%?336?%;border-width:0 %?20?% %?80?% 0;border-style:none solid solid;border-color:transparent transparent #fff;z-index:2;border-radius:%?7?% %?30?% 0 0;text-align:center;line-height:%?80?%}.order-submission .allAddress .nav .item:nth-of-type(2).on[data-v-520a22d9]::before{content:"到店自提";border-width:0 0 %?80?% %?20?%;border-radius:%?30?% %?7?% 0 0}.order-submission .allAddress .nav .item.on2[data-v-520a22d9]{position:relative}.order-submission .allAddress .nav .item.on2[data-v-520a22d9]::before{position:absolute;bottom:0;content:"到店自提";font-size:%?28?%;display:block;height:0;width:%?400?%;border-width:0 0 %?60?% %?60?%;border-style:none solid solid;border-color:transparent transparent hsla(0,0%,100%,.6);border-radius:%?40?% %?6?% 0 0;text-align:center;line-height:%?60?%}.order-submission .allAddress .nav .item:nth-of-type(1).on2[data-v-520a22d9]::before{content:"快递配送";border-width:0 %?60?% %?60?% 0;border-radius:%?6?% %?40?% 0 0}.order-submission .allAddress .address[data-v-520a22d9]{width:%?710?%;height:%?150?%;margin:0 auto}.order-submission .allAddress .line[data-v-520a22d9]{width:%?710?%;margin:0 auto}.order-submission .wrapper .item .discount .placeholder[data-v-520a22d9]{color:#ccc}.placeholder-textarea[data-v-520a22d9]{position:relative}.placeholder-textarea .placeholder[data-v-520a22d9]{position:absolute;color:#ccc;top:%?26?%;left:%?30?%}.order-submission .wrapper[data-v-520a22d9]{background-color:#fff;margin-top:%?13?%}.order-submission .wrapper .item[data-v-520a22d9]{padding:%?27?% %?30?%;font-size:%?30?%;color:#282828;border-bottom:1px solid #f0f0f0}.order-submission .wrapper .item .discount[data-v-520a22d9]{font-size:%?30?%;color:#999}.order-submission .wrapper .item .discount uni-input[data-v-520a22d9]{text-align:end}.order-submission .wrapper .item .discount .iconfont[data-v-520a22d9]{color:#515151;font-size:%?30?%;margin-left:%?15?%}.order-submission .wrapper .item .discount .num[data-v-520a22d9]{font-size:%?32?%;margin-right:%?20?%}.order-submission .wrapper .item .shipping[data-v-520a22d9]{font-size:%?30?%;color:#999;position:relative;padding-right:%?58?%}.order-submission .wrapper .item .shipping .iconfont[data-v-520a22d9]{font-size:%?35?%;color:#707070;position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin-left:%?30?%}.order-submission .wrapper .item uni-textarea[data-v-520a22d9]{background-color:#f9f9f9;width:%?690?%;height:%?140?%;border-radius:%?3?%;margin-top:%?30?%;padding:%?25?% %?28?%;box-sizing:border-box}.order-submission .wrapper .item .placeholder[data-v-520a22d9]{color:#ccc}.order-submission .wrapper .item .list[data-v-520a22d9]{margin-top:%?35?%}.order-submission .wrapper .item .list .payItem[data-v-520a22d9]{border:1px solid #eee;border-radius:%?6?%;height:%?86?%;width:100%;box-sizing:border-box;margin-top:%?20?%;font-size:%?28?%;color:#282828}.order-submission .wrapper .item .list .payItem.on[data-v-520a22d9]{border-color:#fc5445;color:#e93323}.order-submission .wrapper .item .list .payItem .name[data-v-520a22d9]{width:50%;text-align:center;border-right:1px solid #eee;padding-left:%?80?%}.order-submission .wrapper .item .list .payItem .name .iconfont[data-v-520a22d9]{width:%?44?%;height:%?44?%;border-radius:50%;text-align:center;line-height:%?44?%;background-color:#fe960f;color:#fff;font-size:%?30?%;margin-right:%?15?%}.order-submission .wrapper .item .list .payItem .name .iconfont.icon-weixin2[data-v-520a22d9]{background-color:#41b035}.order-submission .wrapper .item .list .payItem .name .iconfont.icon-zhifubao[data-v-520a22d9]{background-color:#1677ff}.order-submission .wrapper .item .list .payItem .tip[data-v-520a22d9]{width:49%;text-align:center;font-size:%?26?%;color:#aaa}.order-submission .moneyList[data-v-520a22d9]{margin-top:%?12?%;background-color:#fff;padding:%?30?%}.order-submission .moneyList .item[data-v-520a22d9]{font-size:%?28?%;color:#282828}.order-submission .moneyList .item ~ .item[data-v-520a22d9]{margin-top:%?20?%}.order-submission .moneyList .item .money[data-v-520a22d9]{color:#868686}.order-submission .footer[data-v-520a22d9]{width:100%;height:%?100?%;background-color:#fff;padding:0 %?30?%;font-size:%?28?%;color:#333;box-sizing:border-box;position:fixed;bottom:0;left:0;z-index:9}.order-submission .footer .settlement[data-v-520a22d9]{font-size:%?30?%;color:#fff;width:%?240?%;height:%?70?%;background-color:var(--view-theme);border-radius:%?50?%;text-align:center;line-height:%?70?%}.footer .transparent[data-v-520a22d9]{opacity:0}.confirm[data-v-520a22d9]{text-align:right;font-size:%?22?%}.confirmImg[data-v-520a22d9]{width:100%}.confirmImg .img[data-v-520a22d9]{width:%?136?%;height:%?136?%}.confirmImg .pictrue[data-v-520a22d9]{width:%?136?%;height:%?136?%;box-sizing:border-box;margin:%?18?%;margin-bottom:%?35?%;position:relative;font-size:%?22?%;color:#bbb}.confirmImg .pictrue .del[data-v-520a22d9]{position:absolute;top:0;right:0}.confirmImg .bor[data-v-520a22d9]{border:%?1?% solid #ddd}.fontC[data-v-520a22d9]{color:grey}',""]),t.exports=e},1255:function(t,e,i){"use strict";var a=i("b675"),n=i.n(a);n.a},2108:function(t,e,i){"use strict";i.r(e);var a=i("e2d8"),n=i("2477");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("1255");var o,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"520a22d9",null,!1,a["a"],o);e["default"]=d.exports},2477:function(t,e,i){"use strict";i.r(e);var a=i("b0b1"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},b0b1:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("7db0"),i("4160"),i("d81d"),i("a434"),i("d3b7"),i("acd8"),i("e25e"),i("25f0"),i("498a"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("a398"),s=i("cff9"),o=(i("910a"),i("dbf8")),r=(i("555e"),a(i("87f4"))),d=a(i("e755")),c=a(i("6497")),l=a(i("4f25")),u=a(i("d98e")),p=i("1118"),v=i("26cb"),h=a(i("de16")),f=a(i("cf74")),m={components:{payment:h.default,invoicePicker:u.default,couponListWindow:r.default,addressWindow:d.default,orderGoods:c.default,home:l.default},mixins:[f.default],data:function(){this.getDate({format:!0});return{confirm:"",date:this.$t("please_choose"),time:this.$t("please_choose"),canvasWidth:"",canvasHeight:"",canvasStatus:!1,newImg:[],textareaStatus:!0,cartArr:[{name:this.$t("wechat_pay"),icon:"icon-weixin2",value:"weixin",title:this.$t("wechat_quick_pay"),payStatus:1},{name:this.$t("pay_alipay"),icon:"icon-zhifubao",value:"alipay",title:this.$t("online_alipay"),payStatus:1},{name:this.$t("balance_payment"),icon:"icon-yuezhifu",value:"yue",title:this.$t("available_balance"),payStatus:1},{name:this.$t("offline_payments"),icon:"icon-yuezhifu1",value:"offline",title:this.$t("offline_pay"),payStatus:2},{name:this.$t("friend_pays"),icon:"icon-haoyoudaizhifu",value:"friend",title:this.$t("friends_to_pay"),payStatus:1}],virtual_type:0,formContent:"",payType:"weixin",openType:1,active:0,coupon:{coupon:!1,list:[],statusTile:this.$t("use_immediate")},address:{address:!1},addressInfo:{},pinkId:0,addressId:0,couponId:0,cartId:"",BargainId:0,combinationId:0,seckillId:0,discountId:0,userInfo:{},mark:"",couponTitle:this.$t("please_choose"),coupon_price:0,useIntegral:!1,integral_price:0,integral:0,usable_integral:0,ChangePrice:0,formIds:[],status:0,is_address:!1,toPay:!1,shippingType:0,system_store:{},storePostage:0,advanceId:0,contacts:"",contactsTel:"",mydata:{},storeList:[],store_self_mention:0,cartInfo:[],priceGroup:{},animated:!1,totalPrice:0,integralRatio:"0",pagesUrl:"",orderKey:"",offlinePostage:"",isAuto:!1,isShowAuth:!1,from:"",news:1,invTitle:this.$t("no_invoice"),special_invoice:!1,invoice_func:!1,header_type:"",invShow:!1,invList:[],invChecked:"",urlQuery:"",pay_close:!1,noCoupon:0,valid_count:0,discount_id:0,is_shipping:!0}},computed:(0,v.mapGetters)(["isLogin"]),onLoad:function(t){if(this.from=this.$wechat.isWeixin()?"weixin":"weixinh5",!t.cartId)return this.$util.Tips({title:this.$t("select_item")},{tab:3,url:1});switch(this.couponId=t.couponId||0,this.noCoupon=t.noCoupon||0,this.pinkId=t.pinkId?parseInt(t.pinkId):0,this.addressId=t.addressId||0,this.cartId=t.cartId,this.is_address=!!t.is_address,this.news=t.new&&"0"!==t.new?1:0,this.invChecked=t.invoice_id||"",this.header_type=t.header_type||"1",this.couponTitle=t.couponTitle||this.$t("please_choose"),t.invoice_type){case"1":this.invTitle=this.$t("general_invoice");break;case"2":this.invTitle=this.$t("special_invoice");break}this.textareaStatus=!0,this.isLogin&&0==this.toPay?this.checkShipping():(0,p.toLogin)()},onShow:function(){var t=this;uni.$on("handClick",(function(e){e&&(t.system_store=e.address),uni.$off("handClick")}))},methods:{checkShipping:function(){var t=this,e=this;(0,n.checkShipping)(e.cartId,e.news).then((function(i){0==i.data.type?(e.is_shipping=!0,e.shippingType=0,t.getaddressInfo(),t.getConfirm(),t.$nextTick((function(){this.$refs.addressWindow.getAddressList()}))):1==i.data.type?(e.is_shipping=!1,e.shippingType=0,t.getaddressInfo(),t.getConfirm(),t.$nextTick((function(){this.$refs.addressWindow.getAddressList()}))):2==i.data.type&&(e.is_shipping=!1,e.shippingType=1,t.getConfirm())})).catch((function(t){uni.showToast({title:t,icon:"none"})}))},invCancel:function(){this.invChecked="",this.invTitle=this.$t("no_invoice"),this.invShow=!1},invChange:function(t){this.invChecked=t,this.invShow=!1;var e=this.invList.find((function(e){return e.id===t})),i="";i+=1===e.header_type?this.$t("personal"):this.$t("enterprise"),i+=1===e.type?this.$t("ordinary"):this.$t("dedicated"),i+=this.$t("bill"),this.invTitle=i},invClose:function(){this.invShow=!1,this.getInvoiceList()},getInvoiceList:function(){var t=this;uni.showLoading({title:this.$t("Loading")}),(0,s.invoiceList)().then((function(e){uni.hideLoading(),t.invList=e.data.map((function(t){return t.id=t.id.toString(),t}));var i=t.invList.find((function(e){return e.id==t.invChecked}));if(i){var a="";a+=1===i.header_type?t.$t("personal"):t.$t("enterprise"),a+=1===i.type?t.$t("ordinary"):t.$t("dedicated"),a+=t.$t("bill"),t.invTitle=a}})).catch((function(t){uni.showToast({title:t,icon:"none"})}))},goInvoice:function(){this.getInvoiceList(),this.invShow=!0,this.urlQuery="new=".concat(this.news,"&cartId=").concat(this.cartId,"&pinkId=").concat(this.pinkId,"&couponId=").concat(this.couponId,"&addressId=").concat(this.addressId,"&specialInvoice=").concat(this.special_invoice,"&couponTitle=").concat(this.couponTitle)},onLoadFun:function(){this.getaddressInfo(),this.getConfirm()},onChangeFun:function(t){var e=t,i=e.action||null,a=void 0!=e.value?e.value:null;i&&this[i]&&this[i](a)},payClose:function(){this.pay_close=!1},goPay:function(){this.pay_close=!0},payCheck:function(t){this.payType=t,this.SubOrder()},getList:function(){var t=this,e=uni.getStorageSync("user_longitude"),i=uni.getStorageSync("user_latitude"),a={latitude:i,longitude:e,page:1,limit:10};(0,o.storeListApi)(a).then((function(e){var i=e.data.list.list||[];t.$set(t,"storeList",i),t.$set(t,"system_store",i[0])})).catch((function(t){}))},changeClose:function(){this.$set(this.address,"address",!1)},showStoreList:function(){this.storeList.length>0&&uni.navigateTo({url:"/pages/goods/goods_details_store/index"})},changePayType:function(t){this.payType=t,this.computedPrice()},computedPrice:function(){var t=this,e=this.shippingType;(0,n.postOrderComputed)(this.orderKey,{addressId:this.addressId,useIntegral:this.useIntegral?1:0,couponId:this.couponId,shipping_type:parseInt(e)+1,payType:this.payType}).then((function(i){var a=i.data.result;a&&(t.totalPrice=a.pay_price,t.integral_price=a.deduction_price,t.coupon_price=a.coupon_price,t.integral=t.useIntegral?a.SurplusIntegral:t.usable_integral,t.$set(t.priceGroup,"storePostage",1==e?0:a.pay_postage),t.$set(t.priceGroup,"storePostageDiscount",a.storePostageDiscount))}))},addressType:function(t){var e=this,i=t,a=this;this.shippingType!=parseInt(i)&&(this.shippingType=parseInt(i),1==i&&(a.$wechat.isWeixin()?a.$wechat.location().then((function(t){uni.setStorageSync("user_latitude",t.latitude),uni.setStorageSync("user_longitude",t.longitude),e.getList()})).catch((function(t){e.getList()})):uni.getLocation({type:"wgs84",success:function(t){uni.setStorageSync("user_latitude",t.latitude),uni.setStorageSync("user_longitude",t.longitude)},complete:function(){e.getList()}})),this.$nextTick((function(t){e.getConfirm(),e.computedPrice()})))},bindPickerChange:function(t){var e=t.detail.value;this.shippingType=e,this.computedPrice()},ChangCouponsClone:function(){this.$set(this.coupon,"coupon",!1)},changeTextareaStatus:function(){for(var t=0,e=this.coupon.list.length;t<e;t++)this.coupon.list[t].use_title="",this.coupon.list[t].is_use=0;this.textareaStatus=!0,this.status=0,this.$set(this.coupon,"list",this.coupon.list)},ChangCoupons:function(t){for(var e=t,i=this.coupon.list,a=this.$t("please_choose"),n=0,s=0,o=i.length;s<o;s++)s!=e&&(i[s].use_title="",i[s].is_use=0);i[e].is_use?(i[e].use_title="",i[e].is_use=0):(i[e].use_title=this.$t("do_not_use"),i[e].is_use=1,a=i[e].coupon_title,n=i[e].id),this.couponTitle=a,this.couponId=n,this.$set(this.coupon,"coupon",!1),this.$set(this.coupon,"list",i),this.computedPrice()},ChangeIntegral:function(){this.useIntegral=!this.useIntegral,this.computedPrice()},OnChangeAddress:function(t){this.textareaStatus=!0,this.addressId=t,this.address.address=!1,this.getConfirm(),this.getaddressInfo(),this.computedPrice()},bindHideKeyboard:function(t){this.mark=t.detail.value},getConfirm:function(){var t=this,e=this;uni.showLoading({title:e.$t("Loading"),mask:!0}),(0,n.orderConfirm)(e.cartId,e.news,e.addressId,e.shippingType+1).then((function(i){e.$set(e,"userInfo",i.data.userInfo),e.$set(e,"confirm",i.data.custom_form||[]),t.confirm.map((function(t){"img"===t.label&&(t.value=[])})),e.$set(e,"integral",i.data.usable_integral),e.$set(e,"usable_integral",i.data.usable_integral),e.$set(e,"contacts",i.data.userInfo.real_name),e.$set(e,"contactsTel","0"===i.data.userInfo.record_phone?"":i.data.userInfo.record_phone),e.$set(e,"cartInfo",i.data.cartInfo),e.$set(e,"integralRatio",i.data.integralRatio),e.$set(e,"offlinePostage",i.data.offlinePostage),e.$set(e,"orderKey",i.data.orderKey),e.$set(e,"valid_count",i.data.valid_count),e.$set(e,"discount_id",i.data.discount_id),e.$set(e,"priceGroup",i.data.priceGroup),e.$set(e,"totalPrice",e.$util.$h.Add(parseFloat(i.data.priceGroup.totalPrice),parseFloat(i.data.priceGroup.storePostage))),e.$set(e,"seckillId",parseInt(i.data.seckill_id)),e.$set(e,"invoice_func",i.data.invoice_func),e.$set(e,"special_invoice",i.data.special_invoice),e.$set(e,"store_self_mention",i.data.store_self_mention),e.$set(e,"virtual_type",i.data.virtual_type||0),e.cartArr[0].payStatus=i.data.pay_weixin_open||0,e.cartArr[1].payStatus=i.data.ali_pay_status||0,e.cartArr[2].number=i.data.userInfo.now_money,e.cartArr[2].payStatus=1==i.data.yue_pay_status?i.data.yue_pay_status:0,2==i.data.offline_pay_status||i.data.deduction?e.cartArr[3].payStatus=0:e.cartArr[3].payStatus=1,e.cartArr[4].payStatus=i.data.friend_pay_status||0,e.$set(e,"ChangePrice",e.totalPrice),e.getBargainId(),e.getCouponList(),t.addressId&&t.computedPrice(),uni.hideLoading()})).catch((function(e){return uni.hideLoading(),t.$util.Tips({title:e})}))},getBargainId:function(){var t=this,e=t.cartInfo,i=0,a=0,n=0,s=0;e.forEach((function(t,e,o){i=o[e].bargain_id,a=o[e].combination_id,n=o[e].discount_id,s=o[e].advance_id})),t.$set(t,"BargainId",parseInt(i)),t.$set(t,"combinationId",parseInt(a)),t.$set(t,"discountId",parseInt(n)),t.$set(t,"advanceId",parseInt(s)),3==t.cartArr.length&&(i||a||t.seckillId||n)&&(t.cartArr[2].payStatus=0,t.$set(t,"cartArr",t.cartArr))},getCouponList:function(){var t=this,e={cartId:this.cartId,new:this.news};(0,n.getCouponsOrderPrice)(this.totalPrice,e).then((function(e){t.$set(t.coupon,"list",e.data),t.openType=1}))},getaddressInfo:function(){var t=this;t.addressId?(0,s.getAddressDetail)(t.addressId).then((function(e){e.data.is_default=parseInt(e.data.is_default),t.addressInfo=e.data||{},t.addressId=e.data.id||0,t.address.addressId=e.data.id||0})):(0,s.getAddressDefault)().then((function(e){e.data.is_default=parseInt(e.data.is_default),t.addressInfo=e.data||{},t.addressId=e.data.id||0,t.address.addressId=e.data.id||0}))},payItem:function(t){var e=this,i=t;e.active=i,e.animated=!0,e.payType=e.cartArr[i].value,e.computedPrice(),setTimeout((function(){e.car()}),500)},couponTap:function(){var t=this;this.coupon.coupon=!0,this.coupon.list.forEach((function(e,i){e.id==t.couponId?e.is_use=1:e.is_use=0})),this.$set(this.coupon,"list",this.coupon.list)},car:function(){var t=this;t.animated=!1},onAddress:function(){var t=this;t.textareaStatus=!1,t.address.address=!0,t.pagesUrl="/pages/users/user_address_list/index?news="+this.news+"&cartId="+this.cartId+"&pinkId="+this.pinkId+"&couponId="+this.couponId},payment:function(t){var e=this,i=this;(0,n.orderCreate)(i.orderKey,t).then((function(a){var n=a.data.status,s=a.data.result.orderId,o=(a.data.result.jsConfig,"/pages/goods/order_pay_status/index?order_id="+s+"&msg="+a.msg+"&type=3&totalPrice="+e.totalPrice),r="/pages/users/payment_on_behalf/index?order_id="+s+"&spread="+e.$store.state.app.uid;switch(n){case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":return uni.hideLoading(),i.$util.Tips({title:a.msg},{tab:5,url:o});case"SUCCESS":return uni.hideLoading(),(i.BargainId||i.combinationId||i.pinkId||i.seckillId||i.discountId)&&"friend"!=t.payType?i.$util.Tips({title:a.msg,icon:"success"},{tab:4,url:o}):i.$util.Tips({title:a.msg,icon:"success"},{tab:4,url:"friend"==t.payType?r:o});case"WECHAT_PAY":i.toPay=!0,e.$wechat.pay(a.data.result.jsConfig).then((function(t){return i.$util.Tips({title:i.$t("pay_success"),icon:"success"},{tab:5,url:o})})).catch((function(t){if(e.$wechat.isWeixin()||uni.redirectTo({url:o+"&msg="+i.$t("payment_failed")+"&status=2"}),"chooseWXPay:cancel"==t.errMsg)return i.$util.Tips({title:i.$t("cancel_payment")},{tab:5,url:o+"&status=2"})}));break;case"PAY_DEFICIENCY":return uni.hideLoading(),i.$util.Tips({title:a.msg},{tab:5,url:o+"&status=1"});case"WECHAT_H5_PAY":uni.hideLoading(),i.$util.Tips({title:i.$t("order_created")},{tab:4,url:o+"&status=0"}),setTimeout((function(){location.href=a.data.result.jsConfig.mweb_url}),2e3);break;case"ALIPAY_PAY":"weixin"===e.from?uni.redirectTo({url:"/pages/users/alipay_invoke/index?id=".concat(s,"&pay_key=").concat(a.data.result.pay_key)}):(uni.hideLoading(),i.formContent=a.data.result.jsConfig,i.$nextTick((function(){document.getElementById("alipaysubmit").submit()})));break}})).catch((function(t){return uni.hideLoading(),i.$util.Tips({title:t})}))},clickTextArea:function(){this.$refs.textarea.focus()},SubOrder:function(t){var e=this,i={};if(!e.payType)return e.$util.Tips({title:e.$t("choose_payment_method")});if(!e.addressId&&!e.shippingType&&!e.virtual_type)return e.$util.Tips({title:e.$t("select_address")});if(1==e.shippingType){if(""==e.contacts||""==e.contactsTel)return e.$util.Tips({title:e.$t("fill_contact")});if(!/^1(3|4|5|7|8|9|6)\d{9}$/.test(e.contactsTel))return e.$util.Tips({title:e.$t("input_correct_phone")});if(!e.contacts)return e.$util.Tips({title:e.$t("fill_your_name")});if(0==e.storeList.length)return e.$util.Tips({title:e.$t("choose_another_method")})}for(var a=0;a<e.confirm.length;a++){var n=e.confirm[a];if(n.status){if(("text"===n.label||"data"===n.label||"time"===n.label||"id"===n.label)&&!n.value.trim())return uni.showToast({title:e.$t("enter_first")+"".concat(n.title),icon:"none"});if("number"===n.label&&n.value<=0)return uni.showToast({title:e.$t("enter_first")+"".concat(n.title),icon:"none"});if("email"===n.label&&!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(n.value))return uni.showToast({title:e.$t("input_correct")+"".concat(n.title),icon:"none"});if("phone"===n.label&&!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.value))return uni.showToast({title:e.$t("input_correct")+"".concat(n.title),icon:"none"});if("img"===n.label&&!n.value.length)return uni.showToast({title:e.$t("upload_first")+"".concat(n.title),icon:"none"})}}if(i={custom_form:e.confirm,real_name:e.contacts,phone:e.contactsTel,addressId:e.addressId,formId:"",couponId:e.couponId,payType:e.payType,useIntegral:e.useIntegral,bargainId:e.BargainId,combinationId:e.combinationId,discountId:e.discountId,pinkId:e.pinkId,advanceId:e.advanceId,seckill_id:e.seckillId,mark:e.mark,store_id:e.system_store?e.system_store.id:0,from:e.from,shipping_type:e.$util.$h.Add(e.shippingType,1),new:e.news,invoice_id:e.invChecked,quitUrl:location.protocol+"//"+location.hostname+"/pages/goods/order_pay_status/index?&type=3&totalPrice="+this.totalPrice},"yue"==i.payType&&parseFloat(e.userInfo.now_money)<parseFloat(e.totalPrice))return e.$util.Tips({title:e.$t("insufficient_balance")});uni.showLoading({title:e.$t("Paying_for_order")}),e.payment(i)},bindDateChange:function(t,e){this.confirm[e].value=t.target.value},bindTimeChange:function(t,e){this.confirm[e].value=t.target.value},getDate:function(t){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"start"===t?i-=60:"end"===t&&(i+=2),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(i,"-").concat(a,"-").concat(n)},uploadpic:function(t,e){var i=this,a=this;this.canvasStatus=!0,a.$util.uploadImageChange("upload/image",(function(t){e.value.push(t.data.url)}),(function(t){i.canvasStatus=!1}),(function(t){i.canvasWidth=t.w,i.canvasHeight=t.h}))},DelPic:function(t,e){var i=this;this.confirm[t].value;i.confirm[t].value.splice(e,1)}}};e.default=m},b675:function(t,e,i){var a=i("098b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7e92b5b4",a,!0,{sourceMap:!1,shadowMode:!1})},e2d8:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticClass:"order-submission"},[t.virtual_type?t._e():i("v-uni-view",{staticClass:"allAddress",style:t.store_self_mention&&t.is_shipping?"":"padding-top:10rpx"},[i("v-uni-view",{staticClass:"nav acea-row"},[t.store_self_mention&&t.is_shipping?i("v-uni-view",{staticClass:"item font-num",class:0==t.shippingType?"on":"on2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addressType(0)}}}):t._e(),t.store_self_mention&&t.is_shipping?i("v-uni-view",{staticClass:"item font-num",class:1==t.shippingType?"on":"on2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addressType(1)}}}):t._e()],1),0==t.shippingType?i("v-uni-view",{staticClass:"address acea-row row-between-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAddress.apply(void 0,arguments)}}},[t.addressInfo.real_name?i("v-uni-view",{staticClass:"addressCon"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.addressInfo.real_name)),i("v-uni-text",{staticClass:"phone"},[t._v(t._s(t.addressInfo.phone))])],1),i("v-uni-view",{staticClass:"line1"},[t.addressInfo.is_default?i("v-uni-text",{staticClass:"default font-num"},[t._v("["+t._s(t.$t("default"))+"]")]):t._e(),t._v(t._s(t.addressInfo.province)+t._s(t.addressInfo.city)+t._s(t.addressInfo.district)+t._s(t.addressInfo.detail))],1)],1):i("v-uni-view",{staticClass:"addressCon"},[i("v-uni-view",{staticClass:"setaddress"},[t._v(t._s(t.$t("set_address")))])],1),i("v-uni-view",{staticClass:"iconfont icon-jiantou"})],1):i("v-uni-view",{staticClass:"address acea-row row-between-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showStoreList.apply(void 0,arguments)}}},[t.storeList.length>0?[i("v-uni-view",{staticClass:"addressCon"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.system_store.name)),i("v-uni-text",{staticClass:"phone"},[t._v(t._s(t.system_store.phone))])],1),i("v-uni-view",{staticClass:"line1"},[t._v(t._s(t.system_store.address)+t._s(", "+t.system_store.detailed_address))])],1),i("v-uni-view",{staticClass:"iconfont icon-jiantou"})]:[i("v-uni-view",[t._v(t._s(t.$t("no_store_msg")))])]],2),i("v-uni-view",{staticClass:"line"},[i("v-uni-image",{attrs:{src:"/static/images/line.jpg"}})],1)],1),i("orderGoods",{attrs:{cartInfo:t.cartInfo,is_confirm:!0,shipping_type:t.shippingType}}),i("v-uni-view",{staticClass:"wrapper"},[t.pinkId||t.BargainId||t.combinationId||t.seckillId||t.noCoupon||t.discountId||t.advanceId?t._e():i("v-uni-view",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.couponTap.apply(void 0,arguments)}}},[i("v-uni-view",[t._v(t._s(t.$t("coupon")))]),i("v-uni-view",{staticClass:"discount"},[t._v(t._s(t.couponTitle)),i("v-uni-text",{staticClass:"iconfont icon-jiantou"})],1)],1),t.pinkId||t.BargainId||t.combinationId||t.seckillId||t.advanceId?t._e():i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(t.$t("points_deduction")))]),i("v-uni-view",{staticClass:"discount acea-row row-middle"},[i("v-uni-view",[t._v(t._s(t.useIntegral?t.$t("remaining_points"):t.$t("cur_points"))),i("v-uni-text",{staticClass:"num font-color"},[t._v(t._s(t.integral||0))])],1),i("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.ChangeIntegral.apply(void 0,arguments)}}},[i("v-uni-checkbox",{attrs:{disabled:t.integral<=0&&!t.useIntegral,checked:!!t.useIntegral}})],1)],1)],1),t.invoice_func||t.special_invoice?i("v-uni-view",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goInvoice.apply(void 0,arguments)}}},[i("v-uni-view",[t._v(t._s(t.$t("invoice")))]),i("v-uni-view",{staticClass:"discount"},[t._v(t._s(t.invTitle)),i("v-uni-text",{staticClass:"iconfont icon-jiantou"})],1)],1):t._e(),1==t.shippingType?i("v-uni-view",[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(t.$t("contact_name")))]),i("v-uni-view",{staticClass:"discount"},[i("v-uni-input",{staticStyle:{"text-align":"right"},attrs:{type:"text",placeholder:t.$t("fill_name"),"placeholder-class":"placeholder"},model:{value:t.contacts,callback:function(e){t.contacts=e},expression:"contacts"}})],1)],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(t.$t("contact_no")))]),i("v-uni-view",{staticClass:"discount"},[i("v-uni-input",{staticStyle:{"text-align":"right"},attrs:{type:"text",placeholder:t.$t("fill_phone"),"placeholder-class":"placeholder"},model:{value:t.contactsTel,callback:function(e){t.contactsTel=e},expression:"contactsTel"}})],1)],1)],1):t._e(),t.textareaStatus?i("v-uni-view",{staticClass:"item"},[i("v-uni-view",[t._v(t._s(t.$t("remarks")))]),t.coupon.coupon?t._e():i("v-uni-textarea",{attrs:{"placeholder-class":"placeholder",placeholder:t.$t("fill_remarks"),value:t.mark,maxlength:150,name:"mark"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindHideKeyboard.apply(void 0,arguments)}}})],1):t._e()],1),t.confirm.length?i("v-uni-view",{staticClass:"wrapper"},t._l(t.confirm,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e.status?i("span",{staticStyle:{color:"red"}},[t._v("*")]):i("span",{staticStyle:{marginLeft:"8px"}}),t._v(t._s(e.title))]),"text"==e.label?i("v-uni-view",{staticClass:"confirm"},[i("v-uni-input",{attrs:{type:"text",placeholder:t.$t("fill_out")+" "+e.title},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})],1):t._e(),"number"==e.label?i("v-uni-view",{staticClass:"confirm"},[i("v-uni-input",{attrs:{type:"number",placeholder:t.$t("fill_out")+e.title},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})],1):t._e(),"email"==e.label?i("v-uni-view",{staticClass:"confirm"},[i("v-uni-input",{attrs:{type:"text",placeholder:t.$t("fill_out")+e.title},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})],1):t._e(),"data"==e.label?i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{mode:"date",value:e.value},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange(e,a)}}},[""==e.value?i("v-uni-view",{staticClass:"fontC"},[t._v(t._s(t.date+e.title)),i("v-uni-text",{staticClass:"iconfont icon-jiantou"})],1):i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(e.value))])],1)],1)],1)],1):t._e(),"time"==e.label?i("v-uni-view",[i("v-uni-view",[i("v-uni-view",[i("v-uni-picker",{attrs:{mode:"time",value:e.value,start:"09:01",end:"21:01"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTimeChange(e,a)}}},[""==e.value?i("v-uni-view",{staticClass:"fontC"},[t._v(t._s(t.time+e.title)),i("v-uni-text",{staticClass:"iconfont icon-jiantou"})],1):t._e(),i("v-uni-view",[t._v(t._s(e.value))])],1)],1)],1)],1):t._e(),"id"==e.label?i("v-uni-view",{staticClass:"confirm"},[i("v-uni-input",{attrs:{type:"idcard",placeholder:t.$t("fill_out")+e.title},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})],1):t._e(),"phone"==e.label?i("v-uni-view",{staticClass:"confirm"},[i("v-uni-input",{attrs:{type:"tel",placeholder:t.$t("fill_out")+e.title},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})],1):t._e(),"img"==e.label?i("v-uni-view",{staticClass:"confirmImg"},[i("v-uni-view",{staticClass:"list acea-row row-middle"},[t._l(e.value,(function(e,n){return i("v-uni-view",{key:n,staticClass:"pictrue"},[i("v-uni-image",{staticClass:"img",attrs:{src:e}}),i("v-uni-text",{staticClass:"iconfont icon-guanbi1 font-num del",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.DelPic(a,n)}}})],1)})),e.value.length<8?i("v-uni-view",{staticClass:"pictrue acea-row row-center-wrapper row-column bor",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.uploadpic(a,e)}}},[i("v-uni-text",{staticClass:"iconfont icon-icon25201"}),i("v-uni-view",[t._v(t._s(t.$t("upload")))])],1):t._e()],2)],1):t._e()],1)})),1):t._e(),i("v-uni-view",{staticClass:"moneyList"},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(t.$t("total_price"))+"：")]),i("v-uni-view",{staticClass:"money"},[t._v(t._s(t.$t("money"))+t._s((parseFloat(t.priceGroup.totalPrice)+parseFloat(t.priceGroup.vipPrice)).toFixed(2)))])],1),t.priceGroup.storePostage>0?i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(t.$t("shipping_fee"))+"：")]),i("v-uni-view",{staticClass:"money"},[t._v(t._s(t.$t("money"))+t._s((parseFloat(t.priceGroup.storePostage)+parseFloat(t.priceGroup.storePostageDiscount)).toFixed(2)))])],1):t._e(),!(t.priceGroup.vipPrice>0&&t.userInfo.vip)||t.pinkId||t.BargainId||t.combinationId||t.seckillId||t.discountId?t._e():i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(t.$t("vip_dis1"))+"：")]),i("v-uni-view",{staticClass:"money"},[t._v("-"+t._s(t.$t("money"))+t._s(parseFloat(t.priceGroup.vipPrice).toFixed(2)))])],1),t.priceGroup.storePostageDiscount>0?i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(t.$t("vip_dis2"))+"：")]),i("v-uni-view",{staticClass:"money"},[t._v("-"+t._s(t.$t("money"))+t._s(parseFloat(t.priceGroup.storePostageDiscount).toFixed(2)))])],1):t._e(),t.coupon_price>0?i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(t.$t("coupon_deduction"))+"：")]),i("v-uni-view",{staticClass:"money"},[t._v("-"+t._s(t.$t("money"))+t._s(parseFloat(t.coupon_price).toFixed(2)))])],1):t._e(),t.integral_price>0?i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(t.$t("points_deduction"))+"：")]),i("v-uni-view",{staticClass:"money"},[t._v("-"+t._s(t.$t("money"))+t._s(parseFloat(t.integral_price).toFixed(2)))])],1):t._e()],1),i("v-uni-view",{staticStyle:{height:"120rpx"}}),i("v-uni-view",{staticClass:"footer acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(t.$t("total"))+":"),i("v-uni-text",{staticClass:"font-color"},[t._v(t._s(t.$t("money"))+t._s(t.totalPrice||0))])],1),t.valid_count>0&&!t.discount_id||t.valid_count==t.cartInfo.length&&t.discount_id?i("v-uni-view",{staticClass:"settlement",staticStyle:{"z-index":"100"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.goPay.apply(void 0,arguments)}}},[t._v(t._s(t.$t("settle_now")))]):i("v-uni-view",{staticClass:"settlement bg-color-hui",staticStyle:{"z-index":"100"}},[t._v(t._s(t.$t("settle_now")))])],1)],1),i("v-uni-view",{staticClass:"alipaysubmit",domProps:{innerHTML:t._s(t.formContent)}}),i("couponListWindow",{attrs:{coupon:t.coupon,openType:t.openType,cartId:t.cartId},on:{ChangCouponsClone:function(e){arguments[0]=e=t.$handleEvent(e),t.ChangCouponsClone.apply(void 0,arguments)},ChangCoupons:function(e){arguments[0]=e=t.$handleEvent(e),t.ChangCoupons.apply(void 0,arguments)}}}),i("addressWindow",{ref:"addressWindow",attrs:{news:t.news,address:t.address,pagesUrl:t.pagesUrl},on:{changeTextareaStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTextareaStatus.apply(void 0,arguments)},OnChangeAddress:function(e){arguments[0]=e=t.$handleEvent(e),t.OnChangeAddress.apply(void 0,arguments)},changeClose:function(e){arguments[0]=e=t.$handleEvent(e),t.changeClose.apply(void 0,arguments)}}}),i("home",{directives:[{name:"show",rawName:"v-show",value:!t.invShow,expression:"!invShow"}]}),i("invoice-picker",{attrs:{"inv-show":t.invShow,"inv-list":t.invList,"inv-checked":t.invChecked,"is-special":t.special_invoice,"url-query":t.urlQuery},on:{"inv-close":function(e){arguments[0]=e=t.$handleEvent(e),t.invClose.apply(void 0,arguments)},"inv-change":function(e){arguments[0]=e=t.$handleEvent(e),t.invChange.apply(void 0,arguments)},"inv-cancel":function(e){arguments[0]=e=t.$handleEvent(e),t.invCancel.apply(void 0,arguments)}}}),i("payment",{attrs:{payMode:t.cartArr,pay_close:t.pay_close,isCall:!0,totalPrice:t.totalPrice.toString()},on:{changePayType:function(e){arguments[0]=e=t.$handleEvent(e),t.changePayType.apply(void 0,arguments)},onChangeFun:function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeFun.apply(void 0,arguments)}}}),t.canvasStatus?i("v-uni-canvas",{style:{width:t.canvasWidth+"px",height:t.canvasHeight+"px",position:"absolute",left:"-100000px",top:"-100000px"},attrs:{"canvas-id":"canvas"}}):t._e()],1)},s=[]}}]);