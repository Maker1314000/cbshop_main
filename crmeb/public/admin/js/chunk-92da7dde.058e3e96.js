(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-92da7dde"],{2491:function(t,e,a){},"6b91":function(t,e,a){"use strict";a.r(e);var s=a("c964"),i=a("f3f3"),o=(a("96cf"),a("a9e3"),a("a434"),a("2f62")),n=(a("99af"),a("6b6c"));i={name:"systemOut",data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},total:0,loading:!1,roleData:{status1:""},formValidate:{roles:"",status:"",name:"",page:1,limit:20},status:"",list:[],columns1:[{title:"账号",key:"appid",minWidth:150},{title:"描述",key:"title",minWidth:250},{title:"添加时间",key:"add_time",minWidth:180},{title:"最后登录时间",key:"last_time",minWidth:180},{title:"最后登录ip",key:"ip",minWidth:180},{title:"状态",slot:"status",minWidth:90},{title:"操作",key:"action",slot:"action",fixed:"right",minWidth:120}],FromData:null,modalTitleSs:"",ids:Number,modals:!1,modalsid:"",type:0,modalsdate:{appid:"",appsecret:"",title:""},ruleValidate:{appid:[{required:!0,message:"请输入正确的账号 (4到30位之间)",trigger:"blur",min:4,max:30}],appsecret:[{required:!0,message:"请输入正确的密码 (6到32位之间)",trigger:"blur",min:6,max:32}],title:[{message:"请输入正确的描述 (不能多于200位数)",trigger:"blur",max:200}]},editValidate:{appsecret:[{required:!1,message:"请输入正确的密码 (6到32位之间)",trigger:"blur",min:6,max:32}]}}},computed:Object(i.a)(Object(i.a)({},Object(o.e)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:50},labelPosition:function(){return this.isMobile?"top":"left"}}),created:function(){this.getList()},methods:{onchangeIsShow:function(t){var e=this;t={id:t.id,status:t.status};t=t,Object(n.a)({url:"setting/system_out_account/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"}).then(function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$Message.success(a.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},submitFail:function(){this.getList()},getList:function(){var t,e=this;this.loading=!0,this.formValidate.roles=this.formValidate.roles||"",t=this.formValidate,Object(n.a)({url:"/setting/system_out_account/index",method:"get",params:t}).then(function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.total=a.data.count,e.list=a.data.list,e.loading=!1;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},add:function(){this.modals=!0,this.type=0},edit:function(t){this.modals=!0,this.modalsdate.appid=t.appid,this.modalsdate.title=t.title,this.modalsid=t.id,this.type=1},del:function(t,e,a){var s=this;e={title:e,num:a,url:"setting/system_out_account/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){s.$Message.success(t.msg),s.list.splice(a,1)})).catch((function(t){s.$Message.error(t.msg)}))},userSearchs:function(){this.formValidate.status="all"===this.status?"":this.status,this.formValidate.page=1,this.list=[],this.getList()},ok:function(t){var e=this;this.$refs[t].validate((function(t){t?(t=e.modalsdate,Object(n.a)({url:"setting/system_out_account/save",method:"post",params:t}).then((function(t){e.modalsdate={appid:"",appsecret:"",title:""},e.modals=!1,e.$Message.success(t.msg),e.modalsid="",e.getList()})).catch((function(t){e.$Message.error(t.msg)}))):e.$Message.warning("请完善数据")}))},oks:function(t){var e=this;this.$refs[t].validate((function(t){var a;t?(delete e.modalsdate.appid,t=e.modalsid,a=e.modalsdate,Object(n.a)({url:"setting/system_out_account/update/".concat(t),method:"post",params:a}).then((function(t){e.modalsdate={appid:"",appsecret:"",title:""},e.modals=!1,e.$Message.success(t.msg),e.modalsid="",e.getList()})).catch((function(t){e.$Message.error(t.msg)}))):e.$Message.warning("请完善数据")}))},cancel:function(){this.modalsid="",this.modalsdate={appid:"",appsecret:"",title:""},this.modals=!1},reset:function(){for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",e=t.length,a="",s=0;s<16;s++)a+=t.charAt(Math.floor(Math.random()*e));this.modalsdate.appsecret=a}}},a("c353"),o=a("2877"),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[0==t.total?a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-system_admin-add"],expression:"['setting-system_admin-add']"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加账号")])],1)],1):t._e()],1),a("Table",{staticClass:"mt25",attrs:{columns:t.columns1,data:t.list,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果",loading:t.loading,"highlight-row":""},scopedSlots:t._u([{key:"roles",fn:function(e){var s=e.row;return e.index,[0!==s.roles.length?a("div",t._l(s.roles.split(","),(function(e,s){return a("Tag",{key:s,attrs:{color:"blue"},domProps:{textContent:t._s(e)}})})),1):t._e()]}},{key:"status",fn:function(e){var s=e.row;return e.index,[a("i-switch",{attrs:{value:s.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(s)}},model:{value:s.status,callback:function(e){t.$set(s,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])]}},{key:"action",fn:function(e){var s=e.row,i=e.index;return[a("a",{on:{click:function(e){return t.edit(s)}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.del(s,"删除账号",i)}}},[t._v("删除")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),a("Modal",{attrs:{scrollable:"",title:0==t.type?"添加账号":"编辑账号","mask-closable":!1,closable:!1},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[a("Form",{ref:"modalsdate",attrs:{model:t.modalsdate,rules:0==t.type?t.ruleValidate:t.editValidate,"label-width":50,"label-position":"right"}},[a("FormItem",{attrs:{label:"账号",prop:"appid"}},[a("div",{staticStyle:{display:"flex"}},[a("Input",{attrs:{type:"text",disabled:0!=t.type},model:{value:t.modalsdate.appid,callback:function(e){t.$set(t.modalsdate,"appid",e)},expression:"modalsdate.appid"}})],1)]),a("FormItem",{attrs:{label:"密码",prop:"appsecret"}},[a("div",{staticStyle:{display:"flex"}},[a("Input",{staticClass:"input",attrs:{type:"text"},model:{value:t.modalsdate.appsecret,callback:function(e){t.$set(t.modalsdate,"appsecret",e)},expression:"modalsdate.appsecret"}}),a("Button",{staticClass:"reset",attrs:{type:"primary"},on:{click:t.reset}},[t._v("重置")])],1)]),a("FormItem",{attrs:{label:"描述",prop:"title"}},[a("div",{staticStyle:{display:"flex"}},[a("Input",{attrs:{type:"textarea"},model:{value:t.modalsdate.title,callback:function(e){t.$set(t.modalsdate,"title",e)},expression:"modalsdate.title"}})],1)])],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[""==t.modalsid?a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.ok("modalsdate")}}},[t._v("确定")]):a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.oks("modalsdate")}}},[t._v("确定")]),a("Button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)}),[],!1,null,"46d60082",null),e.default=a.exports},c353:function(t,e,a){"use strict";var s=a("2491");a.n(s).a}}]);