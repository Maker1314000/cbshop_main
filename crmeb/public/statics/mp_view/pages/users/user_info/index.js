(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_info/index","components/update/app-update"],{"15fe":function(t,e,n){},2581:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("头像")),i=t.$t("昵称"),a=t.$t("手机号码"),o=t.userInfo.phone?null:t.$t("点击绑定手机号"),u=t.$t("ID号"),s=t.$t("权限设置"),r=t.$t("点击管理"),c=t.userInfo.phone?t.$t("更换手机号码"):null,f=t.userInfo.phone?t.$t("点击更换手机号码"):null,l=t.array.length?t.$t("语言切换"):null,d=t.$t("地址管理"),p=t.$t("点击前往"),h=t.userInfo.invioce_func?t.$t("发票管理"):null,v=t.userInfo.invioce_func?t.$t("点击前往"):null,g=t.$t("账号注销"),m=t.$t("注销后无法恢复"),w=t.$t("保存修改"),$=t.$t("退出登录");t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:a,m3:o,m4:u,m5:s,m6:r,m7:c,m8:f,m9:l,m10:d,m11:p,m12:h,m13:v,m14:g,m15:m,m16:w,m17:$}})},o=[]},"34bf":function(t,e,n){"use strict";var i=n("15fe"),a=n.n(i);a.a},3628:function(t,e,n){"use strict";n.r(e);var i=n("5ca1"),a=n("875d");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("34bf");var u,s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"a5b96cb0",null,!1,i["a"],u);e["default"]=r.exports},"4f51":function(t,e,n){"use strict";(function(t){n("d5c5");i(n("66fd"));var e=i(n("b95e"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"5ca1":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.popup_show?t.$t("发现新版本"):null),i=t.popup_show&&t.downstatus<1?t.$t("立即升级"):null,a=!t.popup_show||t.downstatus<1?null:t.$t("下载进度"),o=!t.popup_show||t.downstatus<1?null:(t.downSize/1024/1024).toFixed(2),u=!t.popup_show||t.downstatus<1?null:(t.fileSize/1024/1024).toFixed(2);t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:a,g0:o,g1:u}})},o=[]},"66bc":function(t,e,n){},"875d":function(t,e,n){"use strict";n.r(e);var i=n("89e1"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"89e1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a=n("d8b4"),o={name:"appUpdate",props:{tabbar:{type:Boolean,default:!1},getVer:{type:Boolean,default:!1}},data:function(){return{popup_show:!1,platform:"",version:"1.0.0",need_update:!1,downing:!1,downstatus:0,update_info:{os:"",version:"",info:""},fileSize:0,downSize:0,viewObj:null}},created:function(){i=this,this.getVer||this.update()},computed:{lengthWidth:function(){var t=this.downSize/this.fileSize*100;return t=t?t.toFixed(2):0,{width:t+"%"}},getHeight:function(){var t=0;return this.tabbar&&(t=50),{bottom:t+"px",height:"auto"}}},methods:{update:function(){},getUpdateInfo:function(){var e=this;(0,a.getUpdateInfo)("ios"===this.platform?2:1).then((function(n){if(Array.isArray(n.data))return e.$emit("isNew");var a=t.getStorageSync("app_update_time")||"",o=(new Date).toLocaleDateString();if(a===o||e.getVer){if(a!==o&&e.getVer){if(!n.data.is_force)return}else if(a==o&&!e.getVer&&!n.data.is_force)return}else t.setStorageSync("app_update_time",(new Date).toLocaleDateString());var u=n.data;i.update_info=u,i.update_info.platform&&i.checkUpdate()})).catch((function(t){i.popup_show=!1}))},checkUpdate:function(){i.need_update=i.compareVersion(i.version,i.update_info.version),i.need_update?(i.popup_show=!0,i.tabbar&&(i.viewObj=new plus.nativeObj.View("viewObj",{bottom:"0px",left:"0px",height:"50px",width:"100%",backgroundColor:"rgba(0,0,0,.6)"}),i.viewObj.show())):this.$emit("isNew")},closeUpdate:function(){i.update_info.is_force?"android"==this.platform?plus.runtime.quit():plus.ios.import("UIApplication").sharedApplication().performSelector("exit"):(i.popup_show=!1,i.viewObj&&i.viewObj.hide())},nowUpdate:function(){if(i.downing)return!1;i.downing=!0,/\.apk$/.test(i.update_info.url)||/\.wgt$/.test(i.update_info.url)?i.download_wgt():plus.runtime.openURL(i.update_info.url,(function(){plus.nativeUI.toast("打开错误")}))},download_wgt:function(){plus.nativeUI.showWaiting("下载更新文件...");var t={method:"get"},e=plus.downloader.createDownload(i.update_info.url,t,(function(t,e){}));e.addEventListener("statechanged",(function(t,e){if(null===e);else if(200==e)switch(i.downstatus=t.state,t.state){case 3:i.downSize=t.downloadedSize,t.totalSize&&(i.fileSize=t.totalSize);break;case 4:i.installWgt(t.filename);break}else plus.nativeUI.closeWaiting(),plus.nativeUI.toast("下载出错"),i.downing=!1,i.downstatus=0})),e.start()},installWgt:function(t){plus.nativeUI.showWaiting("安装更新文件..."),plus.runtime.install(t,{},(function(){plus.nativeUI.closeWaiting(),plus.nativeUI.alert("应用资源下载完成！",(function(){plus.runtime.restart()}))}),(function(t){plus.nativeUI.closeWaiting(),plus.nativeUI.alert("安装更新文件失败["+t.code+"]："+t.message)}))},compareVersion:function(t,e){if(!t||!e||""==t||""==e)return!1;for(var n=t.split(".",4),i=e.split(".",4),a=0;a<n.length&&a<i.length;a++){var o=n[a],u=parseInt(o),s=i[a],r=parseInt(s);if(r>u||s.length>o.length)return!0;if(r<u)return!1}return i.length>n.length&&0==e.indexOf(t)}}};e.default=o}).call(this,n("543d")["default"])},a904:function(t,e,n){"use strict";n.r(e);var i=n("f1e9"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},b95e:function(t,e,n){"use strict";n.r(e);var i=n("2581"),a=n("a904");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("f53d");var u,s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"47afcac6",null,!1,i["a"],u);e["default"]=r.exports},f1e9:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("cff9"),a=n("e5e8"),o=n("1118"),u=n("26cb"),s=(r(n("955f")),r(n("cf74")));r(n("3628"));function r(t){return t&&t.__esModule?t:{default:t}}var c=function(){n.e("components/Authorize").then(function(){return resolve(n("4a3a"))}.bind(null,n)).catch(n.oe)},f={components:{authorize:c},mixins:[s.default],data:function(){return{userInfo:{},loginType:"h5",userIndex:0,switchUserInfo:[],isAuto:!1,isShowAuth:!1,canvasWidth:"",canvasHeight:"",canvasStatus:!1,fileSizeString:"",version:"",array:[],setIndex:0}},computed:(0,u.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getUserInfo()},deep:!0}},onLoad:function(){this.isLogin?(this.getUserInfo(),this.getLangList()):(0,o.toLogin)()},methods:{getLangList:function(){var t=this;(0,i.getLangList)().then((function(e){t.array=e.data,t.setLang()}))},isNew:function(){this.$util.Tips({title:this.$t("当前为最新版本")})},setLang:function(){var t=this;this.array.map((function(e,n){t.$i18n.locale==e.value&&(t.setIndex=n)}))},bindPickerChange:function(e,n){var a=this;this.setIndex=e.detail.value,t.setStorageSync("locale",this.array[this.setIndex].value),(0,i.getLangJson)().then((function(e){t.setStorageSync("localeJson",e.data),a.$i18n.locale=a.array[a.setIndex].value,a.$i18n.setLocaleMessage(a.array[a.setIndex].value,e.data[a.array[a.setIndex].value])}))},updateApp:function(){this.$refs.appUpdate.update()},formatSize:function(){var t=this;plus.cache.calculate((function(e){var n=parseInt(e);t.fileSizeString=0==n?"0B":n<1024?n+"B":n<1048576?(n/1024).toFixed(2)+"KB":n<1073741824?(n/1048576).toFixed(2)+"MB":(n/1073741824).toFixed(2)+"GB"}))},initData:function(){var e=this;t.showModal({title:this.$t("清除缓存"),content:this.$t("确定清楚本地缓存数据吗"),success:function(t){if(t.confirm)e.clearCache(),e.formatSize();else if(t.cancel)return that.$util.Tips({title:that.$t("取消")})}})},clearCache:function(){var e=this,n=plus.os.name;if("Android"==n)for(var i=plus.android.runtimeMainActivity(),a=i.getCacheDir(),o=plus.android.invoke(a,"listFiles"),u=o.length,s=0;s<u;s++){var r=""+o[s];plus.io.resolveLocalFileSystemURL(r,(function(n){n.isDirectory?n.removeRecursively((function(n){t.showToast({title:e.$t("缓存清理完成"),duration:2e3}),e.formatSize()}),(function(t){})):n.remove()}),(function(t){}))}else plus.cache.clear((function(){t.showToast({title:e.$t("缓存清理完成"),duration:2e3}),e.formatSize()}))},onLoadFun:function(){this.getUserInfo()},authColse:function(t){this.isShowAuth=t},Setting:function(){t.openSetting({success:function(t){}})},switchAccounts:function(e){var n=this,i=this.switchUserInfo[e],u=this;return u.userIndex=e,u.switchUserInfo.length<=1||(void 0===i?u.$util.Tips({title:u.$t("切换的账号不存在")}):void("h5"===i.user_type?(t.showLoading({title:u.$t("正在切换中")}),(0,a.switchH5Login)().then((function(e){t.hideLoading(),u.$store.commit("LOGIN",{token:e.data.token,time:n.$Cache.strTotime(e.data.expires_time)-n.$Cache.time()}),u.getUserInfo()})).catch((function(e){return t.hideLoading(),u.$util.Tips({title:e})}))):(u.$store.commit("LOGOUT"),t.showLoading({title:u.$t("正在切换中")}),(0,o.toLogin)())))},outLogin:function(){var e=this;"h5"==e.loginType&&t.showModal({title:e.$t("提示"),content:e.$t("确认退出登录"),success:function(n){n.confirm?(0,i.getLogout)().then((function(n){e.$store.commit("LOGOUT"),t.reLaunch({url:"/pages/index/index"})})).catch((function(t){})):n.cancel}})},getUserInfo:function(){var t=this;(0,i.getUserInfo)().then((function(e){t.$set(t,"userInfo",e.data);for(var n=e.data.switchUserInfo||[],i=0;i<n.length;i++)n[i].uid==t.userInfo.uid&&(t.userIndex=i);t.$set(t,"switchUserInfo",n)}))},uploadpic:function(){var t=this,e=this;this.canvasStatus=!0,e.$util.uploadImageChange("upload/image",(function(n){var i=e.switchUserInfo[e.userIndex];void 0!==i&&(e.userInfo.avatar=n.data.url),e.switchUserInfo[e.userIndex]=i,e.$set(e,"switchUserInfo",e.switchUserInfo),t.canvasStatus=!1}),(function(e){t.canvasStatus=!1}),(function(e){t.canvasWidth=e.w,t.canvasHeight=e.h}))},formSubmit:function(t){var e=this,n=t.detail.value;e.switchUserInfo[e.userIndex];if(!n.nickname)return e.$util.Tips({title:e.$t("请输入姓名")});n.avatar=this.userInfo.avatar,(0,i.userEdit)(n).then((function(t){return e.$util.Tips({title:t.msg,icon:"success"},{tab:3,url:1})})).catch((function(t){return e.$util.Tips({title:t||e.$t("保存失败")},{tab:3,url:1})}))}}};e.default=f}).call(this,n("543d")["default"])},f53d:function(t,e,n){"use strict";var i=n("66bc"),a=n.n(i);a.a}},[["4f51","common/runtime","common/vendor"]]]);