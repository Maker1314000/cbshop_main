(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-admin_order_detail-index"],{"5b3f":function(e,t,r){"use strict";var n=r("65aa"),a=r.n(n);a.a},"65aa":function(e,t,r){var n=r("dd88");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("4f06").default;a("13c17ca9",n,!0,{sourceMap:!1,shadowMode:!1})},7061:function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"order-details pos-order-details"},[r("v-uni-view",{staticClass:"header acea-row row-middle"},[r("v-uni-view",{staticClass:"state"},[e._v(e._s(e.title))]),r("v-uni-view",{staticClass:"data"},[r("v-uni-view",{staticClass:"order-num"},[e._v(e._s(e.$t("order"))+"："+e._s(e.orderInfo.order_id))]),r("v-uni-view",[r("span",{staticClass:"time"},[e._v(e._s(e.orderInfo._add_time))])])],1)],1),r("v-uni-view",{staticClass:"orderingUser acea-row row-middle"},[r("span",{staticClass:"iconfont icon-yonghu2"}),e._v(e._s(e.orderInfo.nickname))]),r("v-uni-view",{staticClass:"address"},[r("v-uni-view",{staticClass:"name"},[e._v(e._s(e.orderInfo.real_name)),r("span",{staticClass:"phone"},[e._v(e._s(e.orderInfo.user_phone))])]),r("v-uni-view",[e._v(e._s(e.orderInfo.user_address))])],1),r("v-uni-view",{staticClass:"line"},[r("v-uni-image",{attrs:{src:"/static/images/line.jpg"}})],1),r("v-uni-view",{staticClass:"pos-order-goods"},e._l(e.orderInfo.cartInfo,(function(t,n){return r("v-uni-navigator",{key:n,staticClass:"goods acea-row row-between-wrapper",attrs:{url:"/pages/goods_details/index?id="+t.productInfo.id,"hover-class":"none"}},[r("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[r("v-uni-view",{staticClass:"pictrue"},[r("v-uni-image",{attrs:{src:t.productInfo.image}})],1),r("v-uni-view",{staticClass:"text acea-row row-between row-column"},[r("v-uni-view",{staticClass:"info line2"},[e._v(e._s(t.productInfo.store_name))]),r("v-uni-view",{staticClass:"attr"},[e._v(e._s(t.productInfo.suk))])],1)],1),r("v-uni-view",{staticClass:"money"},[r("v-uni-view",{staticClass:"x-money"},[e._v(e._s(e.$t("money"))+e._s(t.productInfo.attrInfo.price))]),r("v-uni-view",{staticClass:"num"},[e._v("x"+e._s(t.cart_num))]),r("v-uni-view",{staticClass:"y-money"},[e._v(e._s(e.$t("money"))+e._s(t.productInfo.attrInfo.ot_price))])],1)],1)})),1),r("v-uni-view",{staticClass:"public-total"},[e._v(e._s(e.$t("total_of"))+e._s(e.orderInfo.total_num)+e._s(e.$t("items_payable"))),r("span",{staticClass:"money"},[e._v(e._s(e.$t("money"))+e._s(e.orderInfo.pay_price))]),e._v("( "+e._s(e.$t("postage"))+" "+e._s(e.$t("money"))+e._s(e.orderInfo.pay_postage)+"\n\t\t\t)")]),r("v-uni-view",{staticClass:"wrapper"},[r("v-uni-view",{staticClass:"item acea-row row-between"},[r("v-uni-view",[e._v(e._s(e.$t("order_number"))+"：")]),r("v-uni-view",{staticClass:"conter acea-row row-middle row-right"},[e._v(e._s(e.orderInfo.order_id))])],1),r("v-uni-view",{staticClass:"item acea-row row-between"},[r("v-uni-view",[e._v(e._s(e.$t("order_time"))+"：")]),r("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo._add_time))])],1),r("v-uni-view",{staticClass:"item acea-row row-between"},[r("v-uni-view",[e._v(e._s(e.$t("payment_status"))+"：")]),r("v-uni-view",{staticClass:"conter"},[e._v(e._s(1==e.orderInfo.paid?e.$t("paid"):e.$t("unpaid")))])],1),r("v-uni-view",{staticClass:"item acea-row row-between"},[r("v-uni-view",[e._v(e._s(e.$t("payment_method"))+"：")]),r("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.payType))])],1),r("v-uni-view",{staticClass:"item acea-row row-between"},[r("v-uni-view",[e._v(e._s(e.$t("buyer_message"))+"：")]),r("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.mark))])],1)],1),e.customForm&&e.customForm.length?r("v-uni-view",{staticClass:"wrapper"},e._l(e.customForm,(function(t,n){return r("v-uni-view",{key:n,staticClass:"item acea-row row-between"},["img"==t.label?r("v-uni-view",{staticClass:"upload"},[r("v-uni-view",[e._v(e._s(t.title)+"：")]),e._l(t.value,(function(e,t){return r("v-uni-view",{key:t,staticClass:"pictrue"},[r("v-uni-image",{attrs:{src:e}})],1)}))],2):e._e(),"img"!==t.label?r("v-uni-view",[e._v(e._s(t.title)+"：")]):e._e(),"img"!==t.label?r("v-uni-view",{staticClass:"conter"},[e._v(e._s(t.value))]):e._e()],1)})),1):e._e(),r("v-uni-view",{staticClass:"wrapper"},[r("v-uni-view",{staticClass:"item acea-row row-between"},[r("v-uni-view",[e._v(e._s(e.$t("payment_amount"))+"：")]),r("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.$t("money"))+e._s(e.orderInfo.total_price))])],1),e.orderInfo.coupon_id?r("v-uni-view",{staticClass:"item acea-row row-between"},[r("v-uni-view",[e._v(e._s(e.$t("coupon_deduction"))+"：")]),r("v-uni-view",{staticClass:"conter"},[e._v("-"+e._s(e.$t("money"))+e._s(e.orderInfo.coupon_price))])],1):e._e(),e.orderInfo.use_integral>0?r("v-uni-view",{staticClass:"item acea-row row-between"},[r("v-uni-view",[e._v(e._s(e.$t("points_deduction"))+"：")]),r("v-uni-view",{staticClass:"conter"},[e._v("-"+e._s(e.$t("money"))+e._s(e.orderInfo.deduction_price))])],1):e._e(),e.orderInfo.pay_postage>0?r("v-uni-view",{staticClass:"item acea-row row-between"},[r("v-uni-view",[e._v(e._s(e.$t("freight"))+"：")]),r("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.$t("money"))+e._s(e.orderInfo.pay_postage))])],1):e._e(),r("v-uni-view",{staticClass:"actualPay acea-row row-right"},[e._v(e._s(e.$t("real_payment"))+"："),r("span",{staticClass:"money"},[e._v(e._s(e.$t("money"))+e._s(e.orderInfo.pay_price))])])],1),"fictitious"!=e.orderInfo.delivery_type&&2===e.orderInfo._status._type?r("v-uni-view",{staticClass:"wrapper"},[r("v-uni-view",{staticClass:"item acea-row row-between"},[r("v-uni-view",[e._v(e._s(e.$t("delivery_method"))+"：")]),"express"===e.orderInfo.delivery_type?r("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.$t("express_delivery")))]):e._e(),"send"===e.orderInfo.delivery_type?r("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.$t("deliver_goods")))]):e._e()],1),r("v-uni-view",{staticClass:"item acea-row row-between"},["express"===e.orderInfo.delivery_type?r("v-uni-view",[e._v(e._s(e.$t("courier_company"))+"：")]):e._e(),"send"===e.orderInfo.delivery_type?r("v-uni-view",[e._v(e._s(e.$t("delivery_man"))+"：")]):e._e(),r("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.delivery_name))])],1),r("v-uni-view",{staticClass:"item acea-row row-between"},["express"===e.orderInfo.delivery_type?r("v-uni-view",[e._v(e._s(e.$t("tracking_number"))+"：")]):e._e(),"send"===e.orderInfo.delivery_type?r("v-uni-view",[e._v(e._s(e.$t("delivery_man_phone"))+"：")]):e._e(),r("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.delivery_id))])],1)],1):e._e()],1)},o=[]},aeba:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getStatisticsInfo=o,t.getStatisticsMonth=i,t.getAdminOrderList=d,t.setAdminOrderPrice=s,t.setAdminOrderRemark=l,t.getAdminOrderDetail=f,t.getAdminRefundOrderDetail=c,t.getAdminOrderDelivery=v,t.setAdminOrderDelivery=u,t.getStatisticsTime=p,t.setOfflinePay=g,t.setOrderRefund=_,t.getLogistics=m,t.orderVerific=w,t.orderExportTemp=h,t.orderDeliveryInfo=b,t.orderOrderDelivery=y,t.orderRefund_order=C,t.setAdminRefundRemark=I;var a=n(r("4e91"));function o(){return a.default.get("admin/order/statistics",{},{login:!0})}function i(e){return a.default.get("admin/order/data",e,{login:!0})}function d(e){return a.default.get("admin/order/list",e,{login:!0})}function s(e){return a.default.post("admin/order/price",e,{login:!0})}function l(e){return a.default.post("admin/order/remark",e,{login:!0})}function f(e){return a.default.get("admin/order/detail/"+e,{},{login:!0})}function c(e){return a.default.get("admin/refund_order/detail/"+e,{},{login:!0})}function v(e){return a.default.get("admin/order/delivery/gain/"+e,{},{login:!0})}function u(e,t){return a.default.post("admin/order/delivery/keep/"+e,t,{login:!0})}function p(e){return a.default.get("admin/order/time",e,{login:!0})}function g(e){return a.default.post("admin/order/offline",e,{login:!0})}function _(e){return a.default.post("admin/order/refund",e,{login:!0})}function m(e){return a.default.get("logistics",e,{login:!1})}function w(e,t){return a.default.post("order/order_verific",{verify_code:e,is_confirm:t})}function h(e){return a.default.get("admin/order/export_temp",e)}function b(){return a.default.get("admin/order/delivery_info")}function y(){return a.default.get("admin/order/delivery")}function C(e){return a.default.get("admin/refund_order/list",e,{login:!0})}function I(e){return a.default.post("admin/refund_order/remark",e,{login:!0})}},d2d0:function(e,t,r){"use strict";r.r(t);var n=r("e04e"),a=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},d8ba:function(e,t,r){"use strict";r.r(t);var n=r("7061"),a=r("d2d0");for(var o in a)"default"!==o&&function(e){r.d(t,e,(function(){return a[e]}))}(o);r("5b3f");var i,d=r("f0c5"),s=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"2d7efae2",null,!1,n["a"],i);t["default"]=s.exports},dd88:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*商户管理订单详情*/.pos-order-details .header[data-v-2d7efae2]{background:linear-gradient(90deg,#2291f8 0,#1cd1dc);background:-webkit-linear-gradient(90deg,#2291f8 0,#1cd1dc);background:-moz-linear-gradient(to right,#2291f8 0,#1cd1dc 100%)}.pos-order-details .header .state[data-v-2d7efae2]{font-size:%?36?%;color:#fff}.pos-order-details .header .data[data-v-2d7efae2]{margin-left:%?35?%;font-size:%?28?%}.pos-order-details .header .data .order-num[data-v-2d7efae2]{font-size:%?30?%;margin-bottom:%?8?%}.pos-order-details .remarks[data-v-2d7efae2]{width:100%;height:%?86?%;background-color:#fff;padding:0 %?30?%}.pos-order-details .remarks .iconfont[data-v-2d7efae2]{font-size:%?40?%;color:#2a7efb}.pos-order-details .remarks uni-input[data-v-2d7efae2]{width:%?630?%;height:100%;font-size:%?30?%}.pos-order-details .remarks uni-input[data-v-2d7efae2]::-webkit-input-placeholder{color:#666}.pos-order-details .remarks uni-input[data-v-2d7efae2]::placeholder{color:#666}.pos-order-details .orderingUser[data-v-2d7efae2]{font-size:%?26?%;color:#282828;padding:0 %?30?%;height:%?67?%;background-color:#fff;margin-top:%?16?%;border-bottom:1px solid #f5f5f5}.pos-order-details .orderingUser .iconfont[data-v-2d7efae2]{font-size:%?40?%;color:#2a7efb;margin-right:%?15?%}.pos-order-details .address[data-v-2d7efae2]{margin-top:0}.pos-order-details .pos-order-goods[data-v-2d7efae2]{margin-top:%?17?%}.pos-order-details .footer .more[data-v-2d7efae2]{font-size:%?27?%;color:#aaa;width:%?100?%;height:%?64?%;text-align:center;line-height:%?64?%;margin-right:%?25?%;position:relative}.pos-order-details .footer .delivery[data-v-2d7efae2]{background:linear-gradient(90deg,#2291f8 0,#1cd1dc);background:-webkit-linear-gradient(90deg,#2291f8 0,#1cd1dc);background:-moz-linear-gradient(to right,#2291f8 0,#1cd1dc 100%)}.pos-order-details .footer .more .order .arrow[data-v-2d7efae2]{width:0;height:0;border-left:%?11?% solid transparent;border-right:%?11?% solid transparent;border-top:%?20?% solid #e5e5e5;position:absolute;left:%?15?%;bottom:%?-18?%}.pos-order-details .footer .more .order .arrow[data-v-2d7efae2]:before{content:"";width:0;height:0;border-left:%?9?% solid transparent;border-right:%?9?% solid transparent;border-top:%?19?% solid #fff;position:absolute;left:%?-10?%;bottom:0}.pos-order-details .footer .more .order[data-v-2d7efae2]{width:%?200?%;background-color:#fff;border:1px solid #eee;border-radius:%?10?%;position:absolute;top:%?-200?%;z-index:9}.pos-order-details .footer .more .order .item[data-v-2d7efae2]{height:%?77?%;line-height:%?77?%}.pos-order-details .footer .more .order .item~.item[data-v-2d7efae2]{border-top:1px solid #f5f5f5}.pos-order-details .footer .more .moreName[data-v-2d7efae2]{width:100%;height:100%}\n/*订单详情*/.order-details .header[data-v-2d7efae2]{padding:0 %?30?%;height:%?150?%}.order-details .header.on[data-v-2d7efae2]{background-color:#666!important}.order-details .header .pictrue[data-v-2d7efae2]{width:%?110?%;height:%?110?%}.order-details .header .pictrue uni-image[data-v-2d7efae2]{width:100%;height:100%}.order-details .header .data[data-v-2d7efae2]{color:hsla(0,0%,100%,.8);font-size:%?24?%;margin-left:%?27?%}.order-details .header.on .data[data-v-2d7efae2]{margin-left:0}.order-details .header .data .state[data-v-2d7efae2]{font-size:%?30?%;font-weight:700;color:#fff;margin-bottom:%?7?%}\n/* .order-details .header .data .time{margin-left:20upx;} */.order-details .nav[data-v-2d7efae2]{background-color:#fff;font-size:%?26?%;color:#282828;padding:%?25?% 0}.order-details .nav .navCon[data-v-2d7efae2]{padding:0 %?40?%}.order-details .nav .navCon .on[data-v-2d7efae2]{font-weight:700;color:#e93323}.order-details .nav .progress[data-v-2d7efae2]{padding:0 %?65?%;margin-top:%?10?%}.order-details .nav .progress .line[data-v-2d7efae2]{width:%?100?%;height:%?2?%;background-color:#939390}.order-details .nav .progress .iconfont[data-v-2d7efae2]{font-size:%?25?%;color:#939390;margin-top:%?-2?%;width:%?30?%;height:%?30?%;line-height:%?33?%;text-align:center;margin-right:0!important}.order-details .address[data-v-2d7efae2]{font-size:%?26?%;color:#868686;background-color:#fff;padding:%?25?% %?30?% %?30?% %?30?%}.order-details .address .name[data-v-2d7efae2]{font-size:%?30?%;color:#282828;margin-bottom:.1rem}.order-details .address .name .phone[data-v-2d7efae2]{margin-left:%?40?%}.order-details .line[data-v-2d7efae2]{width:100%;height:%?3?%}.order-details .line uni-image[data-v-2d7efae2]{width:100%;height:100%;display:block}.order-details .wrapper[data-v-2d7efae2]{background-color:#fff;margin-top:%?12?%;padding:%?30?%}.order-details .wrapper .item[data-v-2d7efae2]{font-size:%?28?%;color:#282828}.order-details .wrapper .item~.item[data-v-2d7efae2]{margin-top:%?20?%}.order-details .wrapper .item .conter[data-v-2d7efae2]{color:#868686;width:%?500?%;text-align:right}.order-details .wrapper .item .conter .copy[data-v-2d7efae2]{font-size:%?20?%;color:#333;border-radius:%?3?%;border:1px solid #666;padding:%?0?% %?15?%;margin-left:%?24?%;height:%?40?%}.order-details .wrapper .actualPay[data-v-2d7efae2]{border-top:%?1?% solid #eee;margin-top:%?30?%;padding-top:%?30?%}.order-details .wrapper .actualPay .money[data-v-2d7efae2]{font-weight:700;font-size:%?30?%;color:#e93323}.order-details .footer[data-v-2d7efae2]{width:100%;height:%?100?%;position:fixed;bottom:0;left:0;background-color:#fff;padding:0 %?30?%;border-top:1px solid #eee}.order-details .footer .bnt[data-v-2d7efae2]{width:auto;height:%?60?%;line-height:%?60?%;text-align:center;line-height:upx;border-radius:%?50?%;color:#fff;font-size:%?27?%;padding:0 3%}.order-details .footer .bnt.cancel[data-v-2d7efae2]{color:#aaa;border:1px solid #ddd}.order-details .footer .bnt.default[data-v-2d7efae2]{color:#444;border:1px solid #444}.order-details .footer .bnt~.bnt[data-v-2d7efae2]{margin-left:%?18?%}.pos-order-goods[data-v-2d7efae2]{padding:0 %?30?%;background-color:#fff}.pos-order-goods .goods[data-v-2d7efae2]{height:%?185?%}.pos-order-goods .goods~.goods[data-v-2d7efae2]{border-top:1px dashed #e5e5e5}.pos-order-goods .goods .picTxt[data-v-2d7efae2]{width:%?515?%}.pos-order-goods .goods .picTxt .pictrue[data-v-2d7efae2]{width:%?130?%;height:%?130?%}.pos-order-goods .goods .picTxt .pictrue uni-image[data-v-2d7efae2]{width:100%;height:100%;border-radius:%?6?%}.pos-order-goods .goods .picTxt .text[data-v-2d7efae2]{width:%?365?%;height:%?130?%}.pos-order-goods .goods .picTxt .text .info[data-v-2d7efae2]{font-size:%?28?%;color:#282828}.pos-order-goods .goods .picTxt .text .attr[data-v-2d7efae2]{font-size:%?24?%;color:#999}.pos-order-goods .goods .money[data-v-2d7efae2]{width:%?164?%;text-align:right;font-size:%?28?%}.pos-order-goods .goods .money .x-money[data-v-2d7efae2]{color:#282828}.pos-order-goods .goods .money .num[data-v-2d7efae2]{color:#ff9600;margin:%?5?% 0}.pos-order-goods .goods .money .y-money[data-v-2d7efae2]{color:#999;text-decoration:line-through}.public-total[data-v-2d7efae2]{font-size:%?28?%;color:#282828;border-top:1px solid #eee;height:%?92?%;line-height:%?92?%;text-align:right;padding:0 %?30?%;background-color:#fff}.public-total .money[data-v-2d7efae2]{color:#ff4c3c}.upload .pictrue[data-v-2d7efae2]{display:inline-block;margin:%?22?% %?17?% %?20?% 0;width:%?156?%;height:%?156?%;color:#bbb}.upload .pictrue uni-image[data-v-2d7efae2]{width:100%;height:100%}',""]),e.exports=t},e04e:function(e,t,r){"use strict";r("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("aeba"),a={name:"AdminOrder",data:function(){return{order:!1,change:!1,order_id:"",orderInfo:{_status:{}},status:"",title:"",payType:"",types:"",clickNum:1,goname:"",customForm:[]}},watch:{"$route.params.oid":function(e){var t=this;void 0!=e&&(t.order_id=e,t.getIndex())}},onLoad:function(e){this.order_id=e.id,this.goname=e.goname,this.getIndex()},methods:{getIndex:function(){var e=this;(0,n.getAdminOrderDetail)(e.order_id).then((function(t){if(e.orderInfo=t.data,e.types=t.data._status._type,e.title=t.data._status._title,e.payType=t.data._status._payType,e.orderInfo.custom_form&&e.orderInfo.custom_form.length){var r=[];e.orderInfo.custom_form.map((function(e){""!=e.value&&r.push(e)})),e.$set(e,"customForm",r)}}),(function(t){e.$util.Tips({title:t},{tab:3,url:1})}))}}};t.default=a}}]);