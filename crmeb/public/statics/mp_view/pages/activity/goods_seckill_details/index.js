(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_seckill_details/index"],{"0291":function(t,e,i){"use strict";i.r(e);var o=i("534c"),r=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);e["default"]=r.a},"0e6f":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$t("￥")),o=t.attribute.productAttr.length&&(t.attribute.productAttr.length?t.attribute.productAttr[0].attr_values.length:0)>1?t.$t("onwards"):null,r=t.$t("￥"),s=1==t.status?t.$t("距秒杀结束仅剩"):null,u=t.$t("累计销售"),n=t.$t("限量"),a=t.attribute.productAttr.length&&t.skuArr.length>1?t.skuArr.slice(0,4):null,c=t.attribute.productAttr.length&&t.skuArr.length>1?t.$t("共"):null,l=t.attribute.productAttr.length&&t.skuArr.length>1?t.$t("种规格可选"):null,h=t.replyCount?t.$t("用户评价"):null,d=t.replyCount?t.$t("好评率"):null,p=t.$t("产品介绍"),f=t.$t("首页"),m=t.$t("收藏"),g=1==t.status&&t.attribute.productSelect.quota>0&&t.attribute.productSelect.product_stock>0?t.$t("单独购买"):null,b=1==t.status&&t.attribute.productSelect.quota>0&&t.attribute.productSelect.product_stock>0?t.$t("立即购买"):null,$=1==t.status&&t.attribute.productSelect.quota<=0||3==t.status&&t.attribute.productSelect.quota<=0||1==t.status&&t.attribute.productSelect.product_stock<=0||3==t.status&&t.attribute.productSelect.product_stock<=0?t.$t("单独购买"):null,S=1==t.status&&t.attribute.productSelect.quota<=0||3==t.status&&t.attribute.productSelect.quota<=0||1==t.status&&t.attribute.productSelect.product_stock<=0||3==t.status&&t.attribute.productSelect.product_stock<=0?t.$t("已售罄"):null,v=t.dataShow||1!=t.status?null:t.$t("单独购买"),_=t.dataShow||1!=t.status?null:t.$t("立即购买"),I=2==t.status?t.$t("单独购买"):null,A=2==t.status?t.$t("未开始"):null,k=0==t.status?t.$t("单独购买"):null,w=0==t.status?t.$t("已结束"):null,x=t.$t("发送给朋友"),C=t.$t("生成海报"),P=t.posterImageStatus?t.$t("保存到手机"):null;t._isMounted||(t.e0=function(e){t.H5ShareBox=!1}),t.$mp.data=Object.assign({},{$root:{m0:i,m1:o,m2:r,m3:s,m4:u,m5:n,l0:a,m6:c,m7:l,m8:h,m9:d,m10:p,m11:f,m12:m,m13:g,m14:b,m15:$,m16:S,m17:v,m18:_,m19:I,m20:A,m21:k,m22:w,m23:x,m24:C,m25:P}})},s=[]},"534c":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,r=i("26cb"),s=i("f7cb"),u=i("dbf8"),n=(i("d8b4"),i("1118")),a=i("e979"),c=i("cff9"),l=p(i("cf74")),h=i("bc8a"),d=i("d5d8");function p(t){return t&&t.__esModule?t:{default:t}}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var m=getApp(),g=function(){i.e("components/productConSwiper/index").then(function(){return resolve(i("6753"))}.bind(null,i)).catch(i.oe)},b=function(){i.e("components/productWindow/index").then(function(){return resolve(i("b791"))}.bind(null,i)).catch(i.oe)},$=function(){i.e("components/userEvaluation/index").then(function(){return resolve(i("f8a9"))}.bind(null,i)).catch(i.oe)},S=function(){Promise.all([i.e("common/vendor"),i.e("components/kefuIcon/index")]).then(function(){return resolve(i("efce"))}.bind(null,i)).catch(i.oe)},v=function(){i.e("components/Authorize").then(function(){return resolve(i("4a3a"))}.bind(null,i)).catch(i.oe)},_=function(){i.e("components/countDown/index").then(function(){return resolve(i("044b"))}.bind(null,i)).catch(i.oe)},I=function(){i.e("components/menuIcon").then(function(){return resolve(i("6328"))}.bind(null,i)).catch(i.oe)},A=function(){Promise.all([i.e("common/vendor"),i.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(i("ac2d"))}.bind(null,i)).catch(i.oe)},k=function(){i.e("components/cusPreviewImg/index").then(function(){return resolve(i("a8b7"))}.bind(null,i)).catch(i.oe)},w=function(){i.e("components/homeList/index").then(function(){return resolve(i("6231"))}.bind(null,i)).catch(i.oe)},x=t.getSystemInfoSync().statusBarHeight+"px",C=(o={computed:(0,r.mapGetters)(["isLogin"]),mixins:[l.default,h.sharePoster],components:{productConSwiper:g,productWindow:b,userEvaluation:$,kefuIcon:S,menuIcon:I,countDown:_,cusPreviewImg:k,parser:A,homeList:w,authorize:v},data:function(){return{imgHost:d.HTTP_REQUEST_URL,showMenuIcon:!1,dataShow:0,id:0,time:0,countDownHour:"00",countDownMinute:"00",countDownSecond:"00",storeInfo:[],imgUrls:[],parameter:{navbar:"1",return:"1",title:this.$t("抢购详情页"),color:!1},attribute:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],isOpen:!1,attr:this.$t("请选择"),attrValue:"",status:1,isAuto:!1,isShowAuth:!1,iShidden:!1,limitNum:1,iSplus:!1,replyCount:0,reply:[],replyChance:0,navH:"",navList:[this.$t("商品"),this.$t("评价"),this.$t("详情")],opacity:0,scrollY:0,topArr:[],toView:"",height:0,heightArr:[],lock:!1,scrollTop:0,tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"},datatime:0,navActive:0,meunHeight:0,backH:"",posters:!1,weixinStatus:!1,posterImageStatus:!1,canvasStatus:!1,storeImage:"",PromotionCode:"",posterImage:"",posterbackgd:"/static/images/posterbackgd.png",actionSheetHidden:!1,cart_num:"",homeTop:20,returnShow:!0,H5ShareBox:!1,routineContact:0,skuArr:[],selectSku:{},currentPage:!1,sysHeight:x}}},f(o,"computed",(0,r.mapGetters)(["isLogin"])),f(o,"watch",{isLogin:{handler:function(t,e){t&&this.getSeckillDetail()},deep:!0}}),f(o,"onLoad",(function(e){var i=this,o=this,r=getCurrentPages();e.id&&(this.id=e.id,e.pid&&(m.globalData.spid=e.pid)),o.returnShow=1!==r.length,t.getSystemInfo({success:function(t){o.height=t.windowHeight,t.statusBarHeight}}),this.isLogin&&(0,a.silenceBindingSpread)(),this.navH=m.globalData.navHeight;var s=t.getMenuButtonBoundingClientRect();if(this.meunHeight=s.height,this.backH=o.navH/2+this.meunHeight/2,e.scene){var u=this.$util.getUrlParams(decodeURIComponent(e.scene));if(!u.id)return this.$util.Tips({title:this.$t("缺少参数无法查看商品")},{tab:3,url:1});this.id=u.id,u.pid&&(m.globalData.spid=u.pid)}this.isLogin?this.getSeckillDetail():(0,n.toLogin)(),this.$nextTick((function(){var e=t.getMenuButtonBoundingClientRect(),o=t.createSelectorQuery().in(i);o.select("#home").boundingClientRect((function(t){i.homeTop=2*e.top+e.height-t.height})).exec()}))})),f(o,"onNavigationBarButtonTap",(function(t){this.currentPage=!this.currentPage})),f(o,"methods",{moreNav:function(){this.currentPage=!this.currentPage},iptCartNum:function(t){this.$set(this.attribute.productSelect,"cart_num",t),this.$set(this,"cart_num",t)},returns:function(){return t.navigateBack({delta:1})},onLoadFun:function(t){this.isAuto&&(this.isAuto=!1,this.isShowAuth=!1,this.getSeckillDetail())},getSeckillDetail:function(){var e=this,i=this;(0,s.getSeckillDetail)(i.id,{}).then((function(o){e.dataShow=1,e.status=o.data.storeInfo.status;var r=o.data.storeInfo.title;for(var s in e.storeInfo=o.data.storeInfo,e.datatime=Number(o.data.storeInfo.last_time),e.imgUrls=o.data.storeInfo.images,e.storeInfo.description=e.storeInfo.description.replace(/<img/gi,'<img style="max-width:100%;height:auto;float:left;display:block" '),e.storeInfo.description=e.storeInfo.description.replace(/<video/gi,'<video style="width:100%;height:300px;display:block" '),i.$set(i.attribute,"productAttr",o.data.productAttr),e.productValue=o.data.productValue,e.attribute.productSelect.num=o.data.storeInfo.num,e.attribute.productSelect.once_num=o.data.storeInfo.once_num,e.replyCount=o.data.replyCount,e.reply=o.data.reply?[o.data.reply]:[],e.replyChance=o.data.replyChance,i.routineContact=Number(o.data.routine_contact_type),t.setNavigationBarTitle({title:r.substring(0,7)+"..."}),o.data.productValue){var u=o.data.productValue[s];i.skuArr.push(u)}e.$set(e,"selectSku",i.skuArr[0]);var n=[i.$t("商品"),i.$t("详情")];o.data.replyCount&&n.splice(1,0,i.$t("评价")),i.$set(i,"navList",n),i.downloadFilestoreImage(),i.downloadFilePromotionCode(),i.DefaultSelect(),setTimeout((function(){i.infoScroll()}),500),m.globalData.openPages="/pages/activity/goods_seckill_details/index?id="+i.id+"&spid="+i.storeInfo.uid})).catch((function(t){i.$util.Tips({title:t})}))},downloadFilePromotionCode:function(e){var i=this;(0,s.seckillCode)(i.id).then((function(o){t.downloadFile({url:i.setDomain(o.data.code),success:function(t){i.$set(i,"isDown",!1),i.$set(i,"PromotionCode",t.tempFilePath),"function"==typeof e&&e&&e(t.tempFilePath)},fail:function(){i.$set(i,"isDown",!1),i.$set(i,"PromotionCode","")}})})).catch((function(t){i.$set(i,"isDown",!1),i.$set(i,"PromotionCode","")}))},setShare:function(){this.$wechat.isWeixin()&&this.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"],{desc:this.storeInfo.info,title:this.storeInfo.title,link:location.href,imgUrl:this.storeInfo.image}).then((function(t){})).catch((function(t){}))},DefaultSelect:function(){var t=this,e=t.attribute.productAttr,i=[];for(var o in this.productValue)if(this.productValue[o].quota>0){i=this.attribute.productAttr.length?o.split(","):[];break}for(var r=0;r<e.length;r++)this.$set(e[r],"index",i[r]);var s=this.productValue[i.join(",")];s&&e.length?(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",s.image),t.$set(t.attribute.productSelect,"price",s.price),t.$set(t.attribute.productSelect,"stock",s.stock),t.$set(t.attribute.productSelect,"unique",s.unique),t.$set(t.attribute.productSelect,"quota",s.quota),t.$set(t.attribute.productSelect,"quota_show",s.quota_show),t.$set(t.attribute.productSelect,"product_stock",s.product_stock),t.$set(t.attribute.productSelect,"cart_num",1),t.$set(t,"attrValue",i.join(",")),t.attrValue=i.join(",")):!s&&e.length?(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",t.storeInfo.image),t.$set(t.attribute.productSelect,"price",t.storeInfo.price),t.$set(t.attribute.productSelect,"quota",0),t.$set(t.attribute.productSelect,"quota_show",0),t.$set(t.attribute.productSelect,"product_stock",0),t.$set(t.attribute.productSelect,"stock",0),t.$set(t.attribute.productSelect,"unique",""),t.$set(t.attribute.productSelect,"cart_num",0),t.$set(t,"attrValue",""),t.$set(t,"attrTxt",this.$t("请选择"))):s||e.length||(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",t.storeInfo.image),t.$set(t.attribute.productSelect,"price",t.storeInfo.price),t.$set(t.attribute.productSelect,"stock",t.storeInfo.stock),t.$set(t.attribute.productSelect,"quota",t.storeInfo.quota),t.$set(t.attribute.productSelect,"product_stock",t.storeInfo.product_stock),t.$set(t.attribute.productSelect,"unique",t.storeInfo.unique||""),t.$set(t.attribute.productSelect,"cart_num",1),t.$set(t.attribute.productSelect,"quota",s.quota),t.$set(t.attribute.productSelect,"product_stock",s.product_stock),t.$set(t,"attrValue",""),t.$set(t,"attrTxt",this.$t("请选择")))},selecAttr:function(){this.attribute.cartAttr=!0},onMyEvent:function(){this.$set(this.attribute,"cartAttr",!1),this.$set(this,"isOpen",!1)},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(this.cart_num&&(e.cart_num=this.cart_num,this.attribute.productSelect.cart_num=this.cart_num),void 0!==e||this.attribute.productAttr.length||(e=this.attribute.productSelect),void 0!==e){e.stock,e.quota_show;var i=e.quota||0,o=e.product_stock||0,r=this.attribute.productSelect,s=this.storeInfo.num||0,u=this.storeInfo.once_num||0;if(void 0==e.cart_num&&(e.cart_num=1),t){r.cart_num++;var n=[];n.push(s),n.push(u),n.push(i),n.push(o);var a=Math.min.apply(null,n);r.cart_num>=a&&(this.$set(this.attribute.productSelect,"cart_num",a||1),this.$set(this,"cart_num",a||1)),this.$set(this,"cart_num",r.cart_num),this.$set(this.attribute.productSelect,"cart_num",r.cart_num)}else r.cart_num--,r.cart_num<1&&(this.$set(this.attribute.productSelect,"cart_num",1),this.$set(this,"cart_num",1)),this.$set(this,"cart_num",r.cart_num),this.$set(this.attribute.productSelect,"cart_num",r.cart_num)}},attrVal:function(t){this.attribute.productAttr[t.indexw].index=this.attribute.productAttr[t.indexw].attr_values[t.indexn]},ChangeAttr:function(t){this.$set(this,"cart_num",1);var e=this.productValue[t];this.$set(this,"selectSku",e),e?(this.$set(this.attribute.productSelect,"image",e.image),this.$set(this.attribute.productSelect,"price",e.price),this.$set(this.attribute.productSelect,"stock",e.stock),this.$set(this.attribute.productSelect,"unique",e.unique),this.$set(this.attribute.productSelect,"cart_num",1),this.$set(this.attribute.productSelect,"quota",e.quota),this.$set(this.attribute.productSelect,"quota_show",e.quota_show),this.$set(this,"attrValue",t),this.attrTxt=this.$t("已选择")):(this.$set(this.attribute.productSelect,"image",this.storeInfo.image),this.$set(this.attribute.productSelect,"price",this.storeInfo.price),this.$set(this.attribute.productSelect,"stock",0),this.$set(this.attribute.productSelect,"unique",""),this.$set(this.attribute.productSelect,"cart_num",0),this.$set(this.attribute.productSelect,"quota",0),this.$set(this.attribute.productSelect,"quota_show",0),this.$set(this,"attrValue",""),this.attrTxt=this.$t("已选择"))},scroll:function(t){var e=this,i=t.detail.scrollTop,o=i/200;if(o=o>1?1:o,e.opacity=o,e.scrollY=i,e.currentPage=!1,e.$set(e,"showMenuIcon",!1),e.lock)e.lock=!1;else for(var r=0;r<e.topArr.length;r++)if(i<e.topArr[r]-m.globalData.navHeight/2+e.heightArr[r]){e.navActive=r;break}},open:function(t){this.showMenuIcon=t},tap:function(t,e){var i=t.id,o=(e=e,this);this.replyCount||"past1"!=i||(i="past2"),this.toView=i,this.navActive=e,this.lock=!0,this.scrollTop=e>0?o.topArr[e]-m.globalData.navHeight/2:o.topArr[e]},infoScroll:function(){for(var t=this,e=[],i=[],o=0;o<t.navList.length;o++){var r=wx.createSelectorQuery().in(this),s="#past"+o;this.replyCount||1!=o||(s="#past2"),r.select(s).boundingClientRect(),r.exec((function(o){var r=o[0].top,s=o[0].height;e.push(r),i.push(s),t.topArr=e,t.heightArr=i}))}},setCollect:function(){var t=this;this.storeInfo.userCollect?(0,u.collectDel)([this.storeInfo.product_id]).then((function(e){t.storeInfo.userCollect=!t.storeInfo.userCollect})):(0,u.collectAdd)(this.storeInfo.product_id).then((function(e){t.storeInfo.userCollect=!t.storeInfo.userCollect}))},openAlone:function(){t.navigateTo({url:"/pages/goods_details/index?id=".concat(this.storeInfo.product_id)})},goCat:function(){var e=this,i=this;i.currentPage=!1;var o=this.productValue[this.attrValue];return this.isOpen?this.attribute.cartAttr=!0:this.attribute.cartAttr=!this.attribute.cartAttr,!0===this.attribute.cartAttr&&0==this.isOpen?this.isOpen=!0:this.attribute.productAttr.length&&void 0===o&&1==this.isOpen?m.$util.Tips({title:i.$t("请选择属性")}):void(0,u.postCartAdd)({productId:i.storeInfo.product_id,secKillId:i.id,bargainId:0,combinationId:0,cartNum:i.cart_num,uniqueId:void 0!==o?o.unique:"",new:1}).then((function(i){e.isOpen=!1,t.navigateTo({url:"/pages/goods/order_confirm/index?new=1&cartId="+i.data.cartId})})).catch((function(t){return e.$util.Tips({title:t})}))},listenerActionSheet:function(){!1===this.isLogin?(0,n.toLogin)():this.posters=!0},listenerActionClose:function(){this.posters=!1},posterImageClose:function(){this.posterImageStatus=!1},setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},goFriend:function(){this.posters=!1},savePosterPath:function(){var e=this;t.getSetting({success:function(i){i.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:e.$t("保存成功"),icon:"success"})},fail:function(t){e.$util.Tips({title:e.$t("保存失败")})}}):t.authorize({scope:"scope.writePhotosAlbum",success:function(){t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:e.$t("保存成功"),icon:"success"})},fail:function(t){e.$util.Tips({title:e.$t("保存失败")})}})}})}})},setShareInfoStatus:function(){var t=this,e=this.storeInfo,i=location.href;this.$wechat.isWeixin()&&(this.posters=!0,(0,c.getUserInfo)().then((function(o){i=-1===i.indexOf("?")?i+"?spread="+o.data.uid:i+"&spread="+o.data.uid;var r={desc:e.store_info,title:e.store_name,link:i,imgUrl:e.image};t.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],r)})))},showImg:function(t){this.$refs.cusPreviewImg.open(this.selectSku.suk)},changeSwitch:function(t){var e=this.skuArr[t];this.$set(this,"selectSku",e);var i=e.suk.split(",");this.$set(this.attribute.productAttr[0],"index",i[0]),2==i.length?(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1])):3==i.length?(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1]),this.$set(this.attribute.productAttr[2],"index",i[2])):4==i.length&&(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1]),this.$set(this.attribute.productAttr[2],"index",i[2]),this.$set(this.attribute.productAttr[3],"index",i[3])),e&&(this.$set(this.attribute.productSelect,"image",e.image),this.$set(this.attribute.productSelect,"price",e.price),this.$set(this.attribute.productSelect,"stock",e.stock),this.$set(this.attribute.productSelect,"unique",e.id),this.$set(this.attribute.productSelect,"vipPrice",e.vipPrice),this.$set(this,"attrTxt",this.$t("已选择")),this.$set(this,"attrValue",e.suk))}}),f(o,"onShareAppMessage",(function(){return{title:this.storeInfo.title,path:m.globalData.openPages,imageUrl:this.storeInfo.image}})),o);e.default=C}).call(this,i("543d")["default"])},"618f":function(t,e,i){"use strict";(function(t){i("d5c5");o(i("66fd"));var e=o(i("8eee"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},7656:function(t,e,i){},"8eee":function(t,e,i){"use strict";i.r(e);var o=i("0e6f"),r=i("0291");for(var s in r)"default"!==s&&function(t){i.d(e,t,(function(){return r[t]}))}(s);i("c62c");var u,n=i("f0c5"),a=Object(n["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=a.exports},c62c:function(t,e,i){"use strict";var o=i("7656"),r=i.n(o);r.a}},[["618f","common/runtime","common/vendor"]]]);