(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_seckill_details/index"],{"0676":function(t,e,i){},2958:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,s=i("26cb"),n=i("4f72"),r=i("f15c"),u=i("1346"),a=i("c6cd"),c=i("00fa"),l=i("3474"),h=d(i("c83f"));function d(t){return t&&t.__esModule?t:{default:t}}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f=getApp(),m=function(){i.e("components/productConSwiper/index").then(function(){return resolve(i("86c2"))}.bind(null,i)).catch(i.oe)},g=function(){i.e("components/productWindow/index").then(function(){return resolve(i("1ae3"))}.bind(null,i)).catch(i.oe)},b=function(){i.e("components/userEvaluation/index").then(function(){return resolve(i("7a68"))}.bind(null,i)).catch(i.oe)},$=function(){Promise.all([i.e("common/vendor"),i.e("components/kefuIcon/index")]).then(function(){return resolve(i("1a3e"))}.bind(null,i)).catch(i.oe)},S=function(){i.e("components/Authorize").then(function(){return resolve(i("420f"))}.bind(null,i)).catch(i.oe)},v=function(){i.e("components/countDown/index").then(function(){return resolve(i("2a88"))}.bind(null,i)).catch(i.oe)},I=function(){i.e("components/menuIcon").then(function(){return resolve(i("92ca"))}.bind(null,i)).catch(i.oe)},_=function(){Promise.all([i.e("common/vendor"),i.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(i("9902"))}.bind(null,i)).catch(i.oe)},w=function(){i.e("components/cus-previewImg/cus-previewImg").then(function(){return resolve(i("3df9"))}.bind(null,i)).catch(i.oe)},A=(o={computed:(0,s.mapGetters)(["isLogin"]),mixins:[h.default],components:{productConSwiper:m,productWindow:g,userEvaluation:b,kefuIcon:$,menuIcon:I,countDown:v,cusPreviewImg:w,parser:_,authorize:S},data:function(){return{showMenuIcon:!1,dataShow:0,id:0,time:0,countDownHour:"00",countDownMinute:"00",countDownSecond:"00",storeInfo:[],imgUrls:[],parameter:{navbar:"1",return:"1",title:"抢购详情页",color:!1},attribute:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],isOpen:!1,attr:"请选择",attrValue:"",status:1,isAuto:!1,isShowAuth:!1,iShidden:!1,limitNum:1,iSplus:!1,replyCount:0,reply:[],replyChance:0,navH:"",navList:["商品","评价","详情"],opacity:0,scrollY:0,topArr:[],toView:"",height:0,heightArr:[],lock:!1,scrollTop:0,tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"},datatime:0,navActive:0,meunHeight:0,backH:"",posters:!1,weixinStatus:!1,posterImageStatus:!1,canvasStatus:!1,storeImage:"",PromotionCode:"",posterImage:"",posterbackgd:"/static/images/posterbackgd.png",actionSheetHidden:!1,cart_num:"",homeTop:20,returnShow:!0,H5ShareBox:!1,routineContact:0,skuArr:[],selectSku:{}}}},p(o,"computed",(0,s.mapGetters)(["isLogin"])),p(o,"watch",{isLogin:{handler:function(t,e){t&&this.getSeckillDetail()},deep:!0}}),p(o,"onLoad",(function(e){var i=this,o=this,s=getCurrentPages();o.returnShow=1!==s.length,t.getSystemInfo({success:function(t){o.height=t.windowHeight,t.statusBarHeight}}),this.isLogin&&(0,c.silenceBindingSpread)(),this.navH=f.globalData.navHeight;var n=t.getMenuButtonBoundingClientRect();if(this.meunHeight=n.height,this.backH=o.navH/2+this.meunHeight/2,e.scene){var r=this.$util.getUrlParams(decodeURIComponent(e.scene));if(!r.id)return this.$util.Tips({title:"缺少参数无法查看商品"},{tab:3,url:1});this.id=r.id,r.pid&&(f.globalData.spid=r.pid)}e.id&&(this.id=e.id,this.status=e.status,e.pid&&(f.globalData.spid=e.pid)),this.isLogin?this.getSeckillDetail():(0,a.toLogin)(),this.$nextTick((function(){var e=t.getMenuButtonBoundingClientRect(),o=t.createSelectorQuery().in(i);o.select("#home").boundingClientRect((function(t){i.homeTop=2*e.top+e.height-t.height})).exec()}))})),p(o,"methods",{iptCartNum:function(t){this.$set(this.attribute.productSelect,"cart_num",t),this.$set(this,"cart_num",t)},returns:function(){t.navigateBack()},onLoadFun:function(t){this.isAuto&&(this.isAuto=!1,this.isShowAuth=!1,this.getSeckillDetail())},getSeckillDetail:function(){var e=this,i=this;(0,n.getSeckillDetail)(i.id,{status:i.status}).then((function(o){e.dataShow=1;var s=o.data.storeInfo.title;for(var n in e.storeInfo=o.data.storeInfo,e.datatime=Number(o.data.storeInfo.last_time),e.imgUrls=o.data.storeInfo.images,e.storeInfo.description=e.storeInfo.description.replace(/<img/gi,'<img style="max-width:100%;height:auto;float:left;display:block" '),i.$set(i.attribute,"productAttr",o.data.productAttr),e.productValue=o.data.productValue,e.attribute.productSelect.num=o.data.storeInfo.num,e.attribute.productSelect.once_num=o.data.storeInfo.once_num,e.replyCount=o.data.replyCount,e.reply=o.data.reply?[o.data.reply]:[],e.replyChance=o.data.replyChance,i.routineContact=Number(o.data.routine_contact_type),t.setNavigationBarTitle({title:s.substring(0,7)+"..."}),o.data.productValue){var r=o.data.productValue[n];i.skuArr.push(r)}e.$set(e,"selectSku",i.skuArr[0]);var u=["商品","详情"];o.data.replyCount&&u.splice(1,0,"评价"),i.$set(i,"navList",u),i.downloadFilestoreImage(),i.downloadFilePromotionCode(),i.DefaultSelect(),setTimeout((function(){i.infoScroll()}),500),f.globalData.openPages="/pages/activity/goods_seckill_details/index?id="+i.id+"&time="+i.time+"&status="+i.status+"&pid="+i.storeInfo.uid})).catch((function(t){i.$util.Tips({title:t},{tab:3})}))},setShare:function(){this.$wechat.isWeixin()&&this.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"],{desc:this.storeInfo.info,title:this.storeInfo.title,link:location.href,imgUrl:this.storeInfo.image}).then((function(t){})).catch((function(t){}))},DefaultSelect:function(){var t=this,e=t.attribute.productAttr,i=[];for(var o in this.productValue)if(this.productValue[o].quota>0){i=this.attribute.productAttr.length?o.split(","):[];break}for(var s=0;s<e.length;s++)this.$set(e[s],"index",i[s]);var n=this.productValue[i.join(",")];n&&e.length?(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",n.image),t.$set(t.attribute.productSelect,"price",n.price),t.$set(t.attribute.productSelect,"stock",n.stock),t.$set(t.attribute.productSelect,"unique",n.unique),t.$set(t.attribute.productSelect,"quota",n.quota),t.$set(t.attribute.productSelect,"quota_show",n.quota_show),t.$set(t.attribute.productSelect,"product_stock",n.product_stock),t.$set(t.attribute.productSelect,"cart_num",1),t.$set(t,"attrValue",i.join(",")),t.attrValue=i.join(",")):!n&&e.length?(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",t.storeInfo.image),t.$set(t.attribute.productSelect,"price",t.storeInfo.price),t.$set(t.attribute.productSelect,"quota",0),t.$set(t.attribute.productSelect,"quota_show",0),t.$set(t.attribute.productSelect,"product_stock",0),t.$set(t.attribute.productSelect,"stock",0),t.$set(t.attribute.productSelect,"unique",""),t.$set(t.attribute.productSelect,"cart_num",0),t.$set(t,"attrValue",""),t.$set(t,"attrTxt","请选择")):n||e.length||(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",t.storeInfo.image),t.$set(t.attribute.productSelect,"price",t.storeInfo.price),t.$set(t.attribute.productSelect,"stock",t.storeInfo.stock),t.$set(t.attribute.productSelect,"quota",t.storeInfo.quota),t.$set(t.attribute.productSelect,"product_stock",t.storeInfo.product_stock),t.$set(t.attribute.productSelect,"unique",t.storeInfo.unique||""),t.$set(t.attribute.productSelect,"cart_num",1),t.$set(t.attribute.productSelect,"quota",n.quota),t.$set(t.attribute.productSelect,"product_stock",n.product_stock),t.$set(t,"attrValue",""),t.$set(t,"attrTxt","请选择"))},selecAttr:function(){this.attribute.cartAttr=!0},onMyEvent:function(){this.$set(this.attribute,"cartAttr",!1),this.$set(this,"isOpen",!1)},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(this.cart_num&&(e.cart_num=this.cart_num,this.attribute.productSelect.cart_num=this.cart_num),void 0!==e||this.attribute.productAttr.length||(e=this.attribute.productSelect),void 0!==e){e.stock,e.quota_show;var i=e.quota||0,o=e.product_stock||0,s=this.attribute.productSelect,n=this.storeInfo.num||0,r=this.storeInfo.once_num||0;if(void 0==e.cart_num&&(e.cart_num=1),t){s.cart_num++;var u=[];u.push(n),u.push(r),u.push(i),u.push(o);var a=Math.min.apply(null,u);s.cart_num>=a&&(this.$set(this.attribute.productSelect,"cart_num",a||1),this.$set(this,"cart_num",a||1)),this.$set(this,"cart_num",s.cart_num),this.$set(this.attribute.productSelect,"cart_num",s.cart_num)}else s.cart_num--,s.cart_num<1&&(this.$set(this.attribute.productSelect,"cart_num",1),this.$set(this,"cart_num",1)),this.$set(this,"cart_num",s.cart_num),this.$set(this.attribute.productSelect,"cart_num",s.cart_num)}},attrVal:function(t){this.attribute.productAttr[t.indexw].index=this.attribute.productAttr[t.indexw].attr_values[t.indexn]},ChangeAttr:function(t){this.$set(this,"cart_num",1);var e=this.productValue[t];this.$set(this,"selectSku",e),e?(this.$set(this.attribute.productSelect,"image",e.image),this.$set(this.attribute.productSelect,"price",e.price),this.$set(this.attribute.productSelect,"stock",e.stock),this.$set(this.attribute.productSelect,"unique",e.unique),this.$set(this.attribute.productSelect,"cart_num",1),this.$set(this.attribute.productSelect,"quota",e.quota),this.$set(this.attribute.productSelect,"quota_show",e.quota_show),this.$set(this,"attrValue",t),this.attrTxt="已选择"):(this.$set(this.attribute.productSelect,"image",this.storeInfo.image),this.$set(this.attribute.productSelect,"price",this.storeInfo.price),this.$set(this.attribute.productSelect,"stock",0),this.$set(this.attribute.productSelect,"unique",""),this.$set(this.attribute.productSelect,"cart_num",0),this.$set(this.attribute.productSelect,"quota",0),this.$set(this.attribute.productSelect,"quota_show",0),this.$set(this,"attrValue",""),this.attrTxt="已选择")},scroll:function(t){var e=this,i=t.detail.scrollTop,o=i/200;if(o=o>1?1:o,e.opacity=o,e.scrollY=i,e.$set(e,"showMenuIcon",!1),e.lock)e.lock=!1;else for(var s=0;s<e.topArr.length;s++)if(i<e.topArr[s]-f.globalData.navHeight/2+e.heightArr[s]){e.navActive=s;break}},open:function(t){this.showMenuIcon=t},tap:function(t,e){var i=t.id,o=(e=e,this);this.replyCount||"past1"!=i||(i="past2"),this.toView=i,this.navActive=e,this.lock=!0,this.scrollTop=e>0?o.topArr[e]-f.globalData.navHeight/2:o.topArr[e]},infoScroll:function(){for(var t=this,e=[],i=[],o=0;o<t.navList.length;o++){var s=wx.createSelectorQuery().in(this),n="#past"+o;this.replyCount||1!=o||(n="#past2"),s.select(n).boundingClientRect(),s.exec((function(o){var s=o[0].top,n=o[0].height;e.push(s),i.push(n),t.topArr=e,t.heightArr=i}))}},setCollect:function(){var t=this;this.storeInfo.userCollect?(0,r.collectDel)(this.storeInfo.product_id).then((function(e){t.storeInfo.userCollect=!t.storeInfo.userCollect})):(0,r.collectAdd)(this.storeInfo.product_id).then((function(e){t.storeInfo.userCollect=!t.storeInfo.userCollect}))},openAlone:function(){t.navigateTo({url:"/pages/goods_details/index?id=".concat(this.storeInfo.product_id)})},goCat:function(){var e=this,i=this,o=this.productValue[this.attrValue];return this.isOpen?this.attribute.cartAttr=!0:this.attribute.cartAttr=!this.attribute.cartAttr,!0===this.attribute.cartAttr&&0==this.isOpen?this.isOpen=!0:this.attribute.productAttr.length&&void 0===o&&1==this.isOpen?f.$util.Tips({title:"请选择属性"}):void(0,r.postCartAdd)({productId:i.storeInfo.product_id,secKillId:i.id,bargainId:0,combinationId:0,cartNum:i.cart_num,uniqueId:void 0!==o?o.unique:"",new:1}).then((function(i){e.isOpen=!1,t.navigateTo({url:"/pages/users/order_confirm/index?new=1&cartId="+i.data.cartId})})).catch((function(t){return e.$util.Tips({title:t})}))},listenerActionSheet:function(){!1===this.isLogin?(0,a.toLogin)():this.posters=!0},listenerActionClose:function(){this.posters=!1},posterImageClose:function(){this.posterImageStatus=!1},setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},downloadFilestoreImage:function(){var e=this;t.downloadFile({url:e.setDomain(e.storeInfo.image),success:function(t){e.storeImage=t.tempFilePath},fail:function(){return e.$util.Tips({title:""})}})},downloadFilePromotionCode:function(e){var i=this;(0,n.seckillCode)(i.id,{stop_time:i.datatime}).then((function(o){t.downloadFile({url:i.setDomain(o.data.code),success:function(t){i.$set(i,"isDown",!1),"function"==typeof e?e&&e(t.tempFilePath):i.$set(i,"PromotionCode",t.tempFilePath)},fail:function(){i.$set(i,"isDown",!1),i.$set(i,"PromotionCode","")}})})).catch((function(t){i.$set(i,"isDown",!1),i.$set(i,"PromotionCode","")}))},getImageBase64:function(){var t=this;(0,u.imageBase64)(t.storeImage,t.PromotionCode).then((function(e){t.storeImage=e.data.image,t.PromotionCode=e.data.code})).catch((function(){}))},goFriend:function(){this.posters=!1},goPoster:function(){var e=this;e.posters=!1,e.$set(e,"canvasStatus",!0);var i=[e.posterbackgd,e.storeImage,e.PromotionCode];if(e.isDown)return e.$util.Tips({title:"正在下载海报,请稍后再试！"});t.getImageInfo({src:e.PromotionCode,fail:function(t){return e.$util.Tips({title:"小程序二维码需要发布正式版后才能获取到"})},success:function(){""==i[2]?e.downloadFilePromotionCode((function(t){if(i[2]=t,""==i[2])return e.$util.Tips({title:"海报二维码生成失败！"});e.$util.PosterCanvas(i,e.storeInfo.title,e.storeInfo.price,e.storeInfo.ot_price,(function(t){e.$set(e,"posterImage",t),e.$set(e,"posterImageStatus",!0),e.$set(e,"canvasStatus",!1),e.$set(e,"actionSheetHidden",!e.actionSheetHidden)}))})):e.$util.PosterCanvas(i,e.storeInfo.title,e.storeInfo.price,e.storeInfo.ot_price,(function(t){e.$set(e,"posterImage",t),e.$set(e,"posterImageStatus",!0),e.$set(e,"canvasStatus",!1),e.$set(e,"actionSheetHidden",!e.actionSheetHidden)}))}})},savePosterPath:function(){var e=this;t.getSetting({success:function(i){i.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}}):t.authorize({scope:"scope.writePhotosAlbum",success:function(){t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}})}})}})},setShareInfoStatus:function(){var t=this,e=this.storeInfo,i=location.href;this.$wechat.isWeixin()&&(this.posters=!0,(0,l.getUserInfo)().then((function(o){i=-1===i.indexOf("?")?i+"?spread="+o.data.uid:i+"&spread="+o.data.uid;var s={desc:e.store_info,title:e.store_name,link:i,imgUrl:e.image};t.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],s)})))},showImg:function(t){this.$refs.cusPreviewImg.open(this.selectSku.suk)},changeSwitch:function(t){var e=this.skuArr[t];this.$set(this,"selectSku",e);var i=e.suk.split(",");this.$set(this.attribute.productAttr[0],"index",i[0]),2==i.length?(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1])):3==i.length?(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1]),this.$set(this.attribute.productAttr[2],"index",i[2])):4==i.length&&(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1]),this.$set(this.attribute.productAttr[2],"index",i[2]),this.$set(this.attribute.productAttr[3],"index",i[3])),e&&(this.$set(this.attribute.productSelect,"image",e.image),this.$set(this.attribute.productSelect,"price",e.price),this.$set(this.attribute.productSelect,"stock",e.stock),this.$set(this.attribute.productSelect,"unique",e.id),this.$set(this.attribute.productSelect,"vipPrice",e.vipPrice),this.$set(this,"attrTxt","已选择"),this.$set(this,"attrValue",e.suk))}}),p(o,"onShareAppMessage",(function(){return{title:this.storeInfo.title,path:f.globalData.openPages,imageUrl:this.storeInfo.image}})),o);e.default=A}).call(this,i("543d")["default"])},"30a4":function(t,e,i){"use strict";i.r(e);var o=i("2958"),s=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=s.a},"6a82":function(t,e,i){"use strict";i.r(e);var o=i("6df9"),s=i("30a4");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("e6ff");var r,u=i("f0c5"),a=Object(u["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=a.exports},"6df9":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var o={cusPreviewImg:function(){return i.e("components/cus-previewImg/cus-previewImg").then(i.bind(null,"3df9"))}},s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.attribute.productAttr.length&&t.skuArr.length>1?t.skuArr.slice(0,4):null);t._isMounted||(t.e0=function(e){t.H5ShareBox=!1}),t.$mp.data=Object.assign({},{$root:{l0:i}})},n=[]},bb9b:function(t,e,i){"use strict";(function(t){i("6e38");o(i("66fd"));var e=o(i("6a82"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},e6ff:function(t,e,i){"use strict";var o=i("0676"),s=i.n(o);s.a}},[["bb9b","common/runtime","common/vendor"]]]);