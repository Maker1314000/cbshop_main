(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36d93e4d"],{"31b4":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.FromData?a("div",[a("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[["/marketing/coupon/save.html"===t.FromData.action?a("div",{staticClass:"radio acea-row row-middle"},[a("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),a("Radio-group",{on:{"on-change":t.couponsType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[a("Radio",{attrs:{label:0}},[t._v("通用券")]),a("Radio",{attrs:{label:1}},[t._v("品类券")]),a("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],a("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(t.FromData.rules),handleIcon:"false"},on:{"on-submit":t.onSubmit}})],2)],1):t._e()},n=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),o=a("9860"),i=a.n(o),c=a("6b6c"),l=a("2f62");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m={name:"edit",components:{formCreate:i.a.$form()},computed:d({},Object(l["e"])("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(t,e){200===t.status?e.url=t.data.src:this.Message.error(t.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(t){var e=this,a={};a=t,Object(c["a"])({url:this.FromData.action,method:this.FromData.method,data:a}).then((function(t){e.$parent.getList(),e.$Message.success(t.msg),e.modals=!1,setTimeout((function(){e.$emit("submitFail")}),1e3)})).catch((function(t){e.$Message.error(t.msg)}))},cancel:function(){this.type=0}}},f=m,p=(a("7577"),a("2877")),h=Object(p["a"])(f,r,n,!1,null,"345ab15a",null);e["a"]=h.exports},"4c74":function(t,e,a){},7577:function(t,e,a){"use strict";var r=a("4c74"),n=a.n(r);n.a},e7d9:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{type:"flex",gutter:24}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"状态：","label-for":"status1"}},[a("Select",{attrs:{placeholder:"请选择",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[a("Option",{attrs:{value:"all"}},[t._v("全部")]),a("Option",{attrs:{value:"1"}},[t._v("开启")]),a("Option",{attrs:{value:"0"}},[t._v("关闭")])],1)],1)],1),a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"搜索：","label-for":"status2"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入姓名或者账号"},on:{"on-search":t.userSearchs},model:{value:t.formValidate.name,callback:function(e){t.$set(t.formValidate,"name",e)},expression:"formValidate.name"}})],1)],1)],1),a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-system_admin-add"],expression:"['setting-system_admin-add']"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加管理员")])],1)],1)],1),a("Table",{staticClass:"mt25",attrs:{columns:t.columns1,data:t.list,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果",loading:t.loading,"highlight-row":""},scopedSlots:t._u([{key:"roles",fn:function(e){var r=e.row;e.index;return[0!==r.roles.length?a("div",t._l(r.roles.split(","),(function(e,r){return a("Tag",{key:r,attrs:{color:"blue"},domProps:{textContent:t._s(e)}})})),1):t._e()]}},{key:"status",fn:function(e){var r=e.row;e.index;return[a("i-switch",{attrs:{value:r.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(r)}},model:{value:r.status,callback:function(e){t.$set(r,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])]}},{key:"action",fn:function(e){var r=e.row,n=e.index;return[a("a",{on:{click:function(e){return t.edit(r)}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.del(r,"删除管理员",n)}}},[t._v("删除")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),a("admin-from",{ref:"adminfrom",attrs:{FromData:t.FromData},on:{submitFail:t.submitFail}})],1)},n=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("96cf"),a("3b8d")),o=a("bd86"),i=(a("c5f6"),a("2f62")),c=a("6b6c");function l(t){return Object(c["a"])({url:"/setting/admin",method:"get",params:t})}function u(){return Object(c["a"])({url:"/setting/admin/create",method:"get"})}function d(t){return Object(c["a"])({url:"/setting/admin/".concat(t,"/edit"),method:"get"})}function m(t){return Object(c["a"])({url:"setting/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}var f=a("31b4");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={name:"systemAdmin",components:{adminFrom:f["a"]},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},total:0,loading:!1,roleData:{status1:""},formValidate:{roles:"",status:"",name:"",page:1,limit:20},status:"",list:[],columns1:[{title:"姓名",key:"real_name",minWidth:120},{title:"账号",key:"account",minWidth:150},{title:"身份",slot:"roles",minWidth:250},{title:"最后一次登录时间",key:"_last_time",minWidth:180},{title:"最后一次登录ip",key:"last_ip",minWidth:180},{title:"开启",slot:"status",minWidth:90},{title:"操作",key:"action",slot:"action",fixed:"right",minWidth:120}],FromData:null,modalTitleSs:"",ids:Number}},computed:h(h({},Object(i["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:50},labelPosition:function(){return this.isMobile?"top":"left"}}),created:function(){this.getList()},methods:{onchangeIsShow:function(t){var e=this,a={id:t.id,status:t.status};m(a).then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(a.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},submitFail:function(){this.getList()},getList:function(){var t=this;this.loading=!0,this.formValidate.roles=this.formValidate.roles||"",l(this.formValidate).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.total=a.data.count,t.list=a.data.list,t.loading=!1;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},add:function(){var t=this;u().then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.FromData=a.data,t.$refs.adminfrom.modals=!0;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},edit:function(t){var e=this;d(t.id).then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==a.data.status){t.next=2;break}return t.abrupt("return",e.$authLapse(a.data));case 2:e.FromData=a.data,e.$refs.adminfrom.modals=!0;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},del:function(t,e,a){var r=this,n={title:e,num:a,url:"setting/admin/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(n).then((function(t){r.$Message.success(t.msg),r.list.splice(a,1)})).catch((function(t){r.$Message.error(t.msg)}))},userSearchs:function(){this.formValidate.status="all"===this.status?"":this.status,this.formValidate.page=1,this.list=[],this.getList()}}},b=g,v=a("2877"),y=Object(v["a"])(b,r,n,!1,null,"30b7f800",null);e["default"]=y.exports}}]);