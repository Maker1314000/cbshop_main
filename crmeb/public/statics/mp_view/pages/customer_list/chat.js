(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/customer_list/chat"],{1950:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.isSwiper=!t.isSwiper})},a=[]},"26d8":function(t,n,e){},"2c0a":function(t,n,e){"use strict";var i=e("ac90"),o=e.n(i);o.a},"485d":function(t,n,e){"use strict";e.r(n);var i=e("af63"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},6150:function(t,n,e){"use strict";var i=e("98f0"),o=e.n(i);o.a},6406:function(t,n,e){"use strict";e.r(n);var i=e("1950"),o=e("485d");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("2c0a"),e("6150"),e("a671");var r,s=e("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=c.exports},"98f0":function(t,n,e){},a671:function(t,n,e){"use strict";var i=e("26d8"),o=e.n(i);o.a},ac90:function(t,n,e){},af63:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("b284"),o=e("83b5"),a=e("331f"),r=(d(e("dd7f")),d(e("42f9"))),s=d(e("882e")),c=e("1a4b");function d(t){return t&&t.__esModule?t:{default:t}}function u(t){return p(t)||h(t)||f(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,n){if(t){if("string"===typeof t)return g(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?g(t,n):void 0}}function h(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function p(t){if(Array.isArray(t))return g(t)}function g(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}var m=getApp(),_=t.getSystemInfoSync().statusBarHeight+"px",v=function(t,n){n=1*n||1;var e=[];return t.forEach((function(t,i){i%n===0&&e.push([]),e[e.length-1].push(t)})),e},I=function(){e.e("components/Loading/index").then(function(){return resolve(e("1734"))}.bind(null,e)).catch(e.oe)},y={name:"adminChat_index",data:function(){return{status:!1,loading:!1,sysHead:_,isTool:!1,isSwiper:!1,isWords:!1,autoplay:!1,circular:!0,interval:3e3,duration:500,emojiGroup:v(r.default,21),wordsList:[],con:"",toUid:0,limit:15,upperId:0,chatList:[],kefuInfo:{},scrollTop:0,active:!0,isScroll:!0,oldHeight:0,myUid:0,productId:0,productInfo:{},orderId:0,page:1,orderInfo:{},uidTo:0,titleName:"",chatStatus:!1,userType:0,canvasWidth:"",canvasHeight:"",canvasStatus:!1,httpUrl:""}},mixins:[s.default],components:{Loading:I},computed:{isSend:function(){return 0!=this.con.length},records:function(){var t=this;return this.chatList.map((function(n,e){return e?n.add_time-t.chatList[e-1].add_time>=300?n.show=!0:n.show=!1:n.show=!0,n}))}},onLoad:function(n){t.showLoading({title:"客服连接中..."}),this.myUid=this.$store.state.app.uid,this.toUid=n.to_uid,this.productId=parseInt(n.productId)||0,this.orderId=n.orderId||0,this.userType=n.type,this.getproductInfo(),this.getOrderInfo()},onUnload:function(){this.$socket.onClose(),t.$off()},onReady:function(){var n,e=this;(this.httpUrl="".concat(c.HTTP_REQUEST_URL,"/statics/images/look.png"),m.globalData.isWsOpen)?(this.$socket.send({data:{token:this.$store.state.app.token,form_type:2},type:"login"}),this.getChatList()):(n=2,this.$socket.onStart(this.$store.state.app.token,n));t.$once("socketOpen",(function(){e.$socket.send({data:e.$store.state.app.token,form_type:2,type:"login"}),e.$nextTick((function(t){e.getChatList()}))})),t.$on("to_transfer",(function(t){e.toUid=t.toUid,e.$socket.send({data:{id:e.toUid},type:"to_chat"}),e.chatList.forEach((function(n){n.uid!=e.myUid&&(n.avatar=t.avatar)}))})),t.$once("success",(function(){e.$socket.init()})),t.$on(["reply","chat"],(function(t){1==t.msn_type&&(t.msn=e.replace_em(t.msn)),t._add_time=t._add_time.substring(0,t._add_time.length-3),e.chatList.push(t),e.$nextTick((function(){e.height()}))})),t.$on("socket_error",(function(){e.$util.Tips({title:"连接失败"})})),t.$on("err_tip",(function(t){e.$util.Tips({title:t.msg})})),t.$on("online",(function(n){0==n.online&&t.showModal({title:"提示",content:"客服已下线，是否需要反馈？",success:function(n){n.confirm?t.redirectTo({url:"/pages/columnGoods/HotNewGoods/feedback"}):n.cancel}})})),this.$nextTick((function(){e.height()}))},methods:{previewImage:function(n){t.previewImage({urls:[n]})},goBack:function(){t.navigateBack()},getproductInfo:function(){var t=this;this.productId&&(0,o.getProductDetail)(this.productId).then((function(n){t.productInfo=n.data.storeInfo}))},goProduct:function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.msn)})},goOrder:function(n){this.userType?t.navigateTo({url:"/pages/admin/orderDetail/index?id=".concat(n.msn)}):t.navigateTo({url:"/pages/users/order_details/index?order_id=".concat(n.msn)})},getOrderInfo:function(){var t=this;this.orderId&&(0,a.getOrderDetail)(this.orderId).then((function(n){t.orderInfo=n.data,t.orderInfo.add_time_h&&(t.orderInfo.add_time_h=t.orderInfo.add_time_h.substring(0,t.orderInfo.add_time_h.lastIndexOf(":"))),t.orderInfo.cartInfo.length&&(t.cartInfo=t.orderInfo.cartInfo[0])}))},addEmoji:function(t){var n="[".concat(t,"]");this.con+=n},replace_em:function(t){return t=t.replace(/\[em-([a-z_]*)\]/g,"<span class='em em-$1' style='background-image:url("+this.httpUrl+")'></span>"),t},getChatList:function(){var n=this;(0,i.getChatRecord)({limit:this.limit,uidTo:this.uidTo,toUid:this.toUid}).then((function(e){var i="";e.data.serviceList.length&&(i=0==n.uidTo?"#msg-".concat(e.data.serviceList[e.data.serviceList.length-1].id):"#msg-".concat(n.chatList[0].id));t.hideLoading(),t.setNavigationBarTitle({title:e.data.nickname}),n.titleName=e.data.nickname,n.toUid=e.data.uid,e.data.serviceList.forEach((function(t){t._add_time=t._add_time.substring(0,t._add_time.length-3),1!=t.msn_type&&2!=t.msn_type||(t.msn=n.replace_em(t.msn))})),n.loading=!1,n.chatList=[].concat(u(e.data.serviceList),u(n.chatList)),n.$nextTick((function(){n.setPageScrollTo(i),n.isScroll=e.data.serviceList.length>=n.limit})),n.$socket.send({data:{id:n.toUid},type:"to_chat"})})).catch((function(e){t.hideLoading(),n.$util.Tips({title:e}),n.loading=!1,n.isScroll=!1,t.redirectTo({url:"/pages/columnGoods/HotNewGoods/feedback"})}))},setPageScrollTo:function(n){var e=this,i=t.createSelectorQuery().in(this).select(n);i.boundingClientRect((function(t){e.scrollTop=t?parseFloat(t.top)-60:0})).exec()},sendText:function(){if(!this.isSend)return this.$util.Tips({title:"请输入内容"});this.sendMsg(this.con,1),this.con=""},sendMsg:function(t,n){this.$socket.send({data:{msn:t,type:n,to_uid:this.toUid},form_type:2,type:"chat"})},uploadImg:function(){var t=this,n=this;n.canvasStatus=!0,n.$util.uploadImageChange("upload/image",(function(t){200==t.status&&n.sendMsg(t.data.url,3)}),(function(n){t.canvasStatus=!1}),(function(n){t.canvasWidth=n.w,t.canvasHeight=n.h}))},sendProduct:function(){this.sendMsg(this.productId,5),this.productId=0,this.productInfo={}},sendOrder:function(){this.sendMsg(this.orderId,6),this.orderId=0,this.orderInfo={}},height:function(){var n=this,e=0,i=t.createSelectorQuery().select(".chat");setTimeout((function(t){i.boundingClientRect((function(t){e=t.height,n.active?n.scrollTop=parseInt(e)+500:n.scrollTop=parseInt(e)+100})).exec()}),200)},scrollToTop:function(){var t=this;this.isScroll&&(this.loading=!0,this.uidTo=this.chatList[0].id,this.isScroll=!1,setTimeout((function(n){t.getChatList()}),800))}}};n.default=y}).call(this,e("543d")["default"])},c943:function(t,n,e){"use strict";(function(t){e("8d15");i(e("66fd"));var n=i(e("6406"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])}},[["c943","common/runtime","common/vendor"]]]);