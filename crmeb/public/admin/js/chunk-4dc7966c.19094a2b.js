(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dc7966c"],{3078:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header header_top"},[a("div",{staticClass:"i-layout-page-header fl_header"},[a("router-link",{attrs:{to:{path:"/admin/setting/pages/devise"}}},[a("Button",{attrs:{icon:"ios-arrow-back",size:"small",type:"text"}},[t._v("返回")])],1),a("Divider",{attrs:{type:"vertical"}}),a("span",{staticClass:"ivu-page-header-title mr20",staticStyle:{padding:"0"}},[t._v("页面设计")])],1)]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("div",{staticClass:"flex-wrapper"},[a("iframe",{ref:"iframe",staticClass:"iframe-box",attrs:{src:t.iframeUrl,frameborder:"0"}}),a("div",[a("div",{staticClass:"content"},[a("rightConfig",{attrs:{name:t.configName,pageId:t.pageId,configNum:t.configNum}})],1)])])])],1)},n=[],s=(a("a9e3"),a("b0c0"),a("f478")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.rCom.length?a("div",{staticClass:"right-box"},[a("div",{staticClass:"title-bar"},[t._v("模块配置")]),t.rCom.length?a("div",{staticClass:"mobile-config"},[t._l(t.rCom,(function(e,i){return a("div",{key:i},[a(e.components.name,{tag:"component",attrs:{moduleName:t.name.name,name:e.configNme,configData:t.configData,configNum:t.configNum}})],1)})),t.rCom.length?a("div",{staticStyle:{"text-align":"center"}},[a("Button",{staticStyle:{width:"100%",margin:"0 auto",height:"40px"},attrs:{type:"primary"},on:{click:t.saveConfig}},[t._v("保存")])],1):t._e()],2):t._e()]):t._e()},o=[],c=a("f3f3"),u=(a("e9c4"),a("d81d"),a("d3b7"),a("25f0"),a("9911"),a("2542")),d={name:"rightConfig",components:Object(c["a"])({},u["a"]),props:{name:{type:Object,default:{}},pageId:{type:Number,default:0},configNum:{type:Number|String,default:"default"}},computed:{defultArr:function(){return this.$store.state.moren.component}},watch:{name:{handler:function(t,e){if(this.rCom=[],this.configData=this.$store.state.moren.defaultConfig[t.name],!this.configData.hasOwnProperty(this.configNum)){var a=JSON.parse(JSON.stringify(this.configData.defaultVal));this.configData[t.num]=a,this.$store.commit("moren/upDataName",this.configData)}var i=this;if(setTimeout((function(){i.rCom=i.$store.state.moren.component[t.name].list}),30),this.configData[t.num].selectConfig){var n=this.configData[t.num].selectConfig.type?this.configData[t.num].selectConfig.type:0;n?this.getByCategory():this.getCategory()}},deep:!0},defultArr:{handler:function(t,e){this.rCom=[];this.objToArray(t);this.rCom=t[this.name.name].list},deep:!0}},data:function(){return{rCom:[],configData:{},isShow:!0,categoryList:[],status:0}},mounted:function(){this.storeStatus()},methods:{storeStatus:function(){var t=this;Object(s["w"])().then((function(e){t.status=parseInt(e.data.store_status)}))},getCategory:function(){var t=this;Object(s["g"])().then((function(e){var a=[];e.data.map((function(t){a.push({title:t.title,pid:t.pid,activeValue:t.id.toString()})})),t.configData[t.name.num].selectConfig.list=a,t.bus.$emit("upData",a)}))},getByCategory:function(){var t=this;Object(s["f"])().then((function(e){var a=[];e.data.map((function(t){a.push({title:t.cate_name,pid:t.pid,activeValue:t.id.toString()})})),t.configData[t.name.num].selectConfig.list=a,t.bus.$emit("upData",a)}))},saveConfig:function(){var t=this,e=this.$store.state.moren.defaultConfig;if("tabBar"==this.name.name){if(!this.status)for(var a=e.tabBar.default.tabBarList.list,i=0;i<a.length;i++)if("/pages/storeList/index"==a[i].link||"pages/storeList/index"==a[i].link)return this.$Message.error("请先开启您的周边功能(/pages/storeList/index)");if(e.tabBar.default.tabBarList.list.length<2)return this.$Message.error("您最少应添加2个导航")}Object(s["e"])(this.pageId,{value:e}).then((function(e){t.$Message.success("保存成功")}))},objToArray:function(t){var e=[];for(var a in t)e.push(t[a]);return e}}},f=d,l=(a("6d49"),a("2877")),m=Object(l["a"])(f,r,o,!1,null,"d33c835e",null),g=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right-box"},t._l(t.list,(function(e,i){return a("div",{key:i,staticClass:"link-item"},[a("div",{staticClass:"title"},[t._v(t._s(e.name))]),a("div",{staticClass:"txt"},[a("span",[t._v("地址：")]),t._v(t._s(e.url))]),e.parameter?a("div",{staticClass:"txt"},[t._m(0,!0),a("span",[t._v(t._s(e.parameter))])]):t._e(),a("div",{staticClass:"tips"},[t._v("\n      例如："+t._s(e.example)+"\n      "),a("span",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":e.example}},[t._v("复制")])])])})),0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",[t._v("参数：")])])}],v=a("b311"),b=a.n(v),C={name:"links",data:function(){return{list:[{name:"商城首页",url:"/pages/goods/order_list/index",parameter:[{}],example:"/pages/activity/bargain/index"},{name:"商城首页",url:"/pages/goods/order_list/index",parameter:[{}],example:"/pages/activity/bargain/index"}],clipboard:void 0}},created:function(){var t=this;Object(s["o"])().then((function(e){t.list=e.data.url}))},mounted:function(){this.$nextTick((function(){var t=this;this.clipboard=new b.a(".copy-data"),this.clipboard.on("success",(function(){t.$Message.success("复制成功")}))}))},destroyed:function(){this.clipboard.destroy()},methods:{}},y=C,_=(a("d06f"),Object(l["a"])(y,p,h,!1,null,"a40ab540",null)),x=_.exports,N=a("c276"),$={name:"index",components:{rightConfig:g,links:x},data:function(){return{configName:{},configNum:"default",iframeUrl:"",setConfig:"",updataConfig:"",pageId:0}},created:function(){var t=this;this.show=!0;var e=this.$route.query.id,a=this.$store.state.moren.defaultConfig;this.pageId=parseInt(e);var i=Object(N["d"])("moveLink");1===Number(this.$route.query.type)?this.iframeUrl="".concat(i,"/pages/index/index?type=iframeWindow"):this.iframeUrl="".concat(location.origin,"/pages/index/index?type=iframeWindow"),Object(s["c"])(parseInt(e)).then((function(i){var n=i.data.info.value;n?t.upData(n):Object(s["e"])(parseInt(e),{value:a}).then((function(t){}))}))},mounted:function(){window.addEventListener("message",this.handleMessage,!1)},methods:{handleMessage:function(t){if(t.data.name){var e={name:t.data.name,num:t.data.dataName};this.configName=e,this.configNum=t.data.dataName,this.add(t.data.name)}},add:function(t){this.$store.commit("moren/setConfig",t)},upData:function(t){this.$store.commit("moren/updataConfig",t)}}},w=$,D=(a("697eb"),Object(l["a"])(w,i,n,!1,null,"7b395002",null));e["default"]=D.exports},"3bdd":function(t,e,a){},"5e3c":function(t,e,a){},"697eb":function(t,e,a){"use strict";var i=a("5e3c"),n=a.n(i);n.a},"6d49":function(t,e,a){"use strict";var i=a("ee71"),n=a.n(i);n.a},"857a":function(t,e,a){var i=a("e330"),n=a("1d80"),s=a("577e"),r=/"/g,o=i("".replace);t.exports=function(t,e,a,i){var c=s(n(t)),u="<"+e;return""!==a&&(u+=" "+a+'="'+o(s(i),r,"&quot;")+'"'),u+">"+c+"</"+e+">"}},9911:function(t,e,a){"use strict";var i=a("23e7"),n=a("857a"),s=a("af03");i({target:"String",proto:!0,forced:s("link")},{link:function(t){return n(this,"a","href",t)}})},af03:function(t,e,a){var i=a("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},d06f:function(t,e,a){"use strict";var i=a("3bdd"),n=a.n(i);n.a},ee71:function(t,e,a){}}]);