(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-361e6053"],{1698:function(t,e,a){"use strict";a.d(e,"g",(function(){return i})),a.d(e,"f",(function(){return n})),a.d(e,"e",(function(){return r})),a.d(e,"h",(function(){return o})),a.d(e,"d",(function(){return c})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return d}));var s=a("6b6c");function i(t){return Object(s["a"])({url:"agent/level",method:"get",params:t})}function n(t,e){return Object(s["a"])({url:e,method:"get",params:t})}function r(t,e){return Object(s["a"])({url:e,method:"get",params:t})}function o(t){return Object(s["a"])({url:t,method:"PUT"})}function c(t){return Object(s["a"])({url:t,method:"PUT"})}function l(t){return Object(s["a"])({url:"agent/level_task",method:"get",params:t})}function u(t,e){return Object(s["a"])({url:e,method:"get",params:t})}function d(t,e){return Object(s["a"])({url:e,method:"get",params:t})}},"228f":function(t,e,a){},"30cc":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header mb20"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),a("Card",{attrs:{bordered:!1,"dis-hover":""}},[a("div",{staticClass:"headers"},[a("div",{staticClass:"search"},[a("div",[a("span",[t._v("是否显示：")]),a("Select",{staticStyle:{width:"200px"},attrs:{clearable:""},model:{value:t.formValidate.status,callback:function(e){t.$set(t.formValidate,"status",e)},expression:"formValidate.status"}},[a("Option",{attrs:{value:1}},[t._v("显示")]),a("Option",{attrs:{value:0}},[t._v("不显示")])],1)],1),a("div",[a("span",[t._v("等级名称：")]),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入等级名称"},model:{value:t.formValidate.keyword,callback:function(e){t.$set(t.formValidate,"keyword",e)},expression:"formValidate.keyword"}})],1),a("Button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")]),a("Button",{staticClass:"ml20",attrs:{type:"success",icon:"md-add"},on:{click:function(e){return t.groupAdd()}}},[t._v("添加数据")])],1)]),a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1))],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.tabList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"image",fn:function(t){var e=t.row;return[a("viewer",[a("div",{staticClass:"tabBox-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"row.image"}]})])])]}},{key:"status",fn:function(e){var s=e.row;return[a("i-switch",{attrs:{value:s.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(s)}},model:{value:s.status,callback:function(e){t.$set(s,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var s=e.row,i=e.index;return[a("a",{on:{click:function(e){return t.addTask(s)}}},[t._v("等级任务")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.edit(s,"编辑")}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.del(s,"删除这条信息",i)}}},[t._v("删除")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),a("div",{staticClass:"task-modal"},[a("Modal",{attrs:{title:"添加任务","footer-hide":"",width:"1000"},model:{value:t.modal2,callback:function(e){t.modal2=e},expression:"modal2"}},[a("div",{staticClass:"header"},[a("h4",[t._v("搜索条件")]),a("div",{staticClass:"search"},[a("div",[a("span",[t._v("是否显示：")]),a("Select",{staticStyle:{width:"200px"},model:{value:t.taskData.status,callback:function(e){t.$set(t.taskData,"status",e)},expression:"taskData.status"}},[a("Option",{attrs:{value:""}},[t._v("全部")]),a("Option",{attrs:{value:1}},[t._v("显示")]),a("Option",{attrs:{value:0}},[t._v("不显示")])],1)],1),a("div",[a("span",[t._v("任务名称：")]),a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入任务名称"},model:{value:t.taskData.keyword,callback:function(e){t.$set(t.taskData,"keyword",e)},expression:"taskData.keyword"}})],1),a("Button",{attrs:{type:"primary"},on:{click:t.searchTask}},[t._v("搜索")])],1)]),a("div",[a("div",{staticClass:"add-task"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.taskAdd()}}},[t._v("添加等级任务")])],1),a("div",[a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns2,data:t.taskTabList,loading:t.taskLoading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"status",fn:function(e){var s=e.row;return[a("i-switch",{attrs:{value:s.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeTaskIsShow(s)}},model:{value:s.status,callback:function(e){t.$set(s,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])]}},{key:"action",fn:function(e){var s=e.row,i=e.index;return[a("a",{on:{click:function(e){return t.editTask(s,"编辑")}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.delTask(s,"删除这条信息",i)}}},[t._v("删除")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.taskTotal,current:t.taskData.page,"show-elevator":"","show-total":"","page-size":t.taskData.limit},on:{"on-change":t.pageTaskChange}})],1)],1)])])],1)],1)},i=[],n=a("c964"),r=a("f3f3"),o=(a("99af"),a("a434"),a("96cf"),a("2f62")),c=a("1698"),l={name:"list",data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},modal1:!1,modal2:!1,formValidate:{status:"",page:1,limit:20,gid:0},taskData:{keyword:"",page:1,limit:20,status:""},total:0,taskTotal:0,tabList:[],taskTabList:[],columns1:[{key:"id",minWidth:35,title:"ID"},{slot:"image",minWidth:35,title:"图标"},{key:"name",minWidth:35,title:"名称"},{key:"grade",minWidth:35,title:"等级"},{key:"one_brokerage",minWidth:35,title:"一级返佣上浮比例(%)"},{key:"two_brokerage",minWidth:35,title:"二级返佣上浮比例(%)"},{slot:"status",minWidth:35,title:"是否显示"},{fixed:"right",minWidth:120,slot:"action",title:"操作"}],columns2:[{key:"id",minWidth:35,title:"ID"},{key:"name",minWidth:35,title:"名称"},{key:"type_name",minWidth:35,title:"任务类型"},{key:"number",minWidth:35,title:"限定数量"},{slot:"status",minWidth:35,title:"是否显示"},{key:"sort",minWidth:35,title:"排序"},{fixed:"right",minWidth:120,slot:"action",title:"操作"}],FromData:null,loading:!1,taskLoading:!1,titleType:"group",groupAll:[],theme3:"light",labelSort:[],sortName:null,current:0,model1:"",value1:""}},computed:Object(r["a"])(Object(r["a"])({},Object(o["e"])("admin/layout",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),watch:{$route:function(t,e){this.$route.params.id}},mounted:function(){this.getList()},methods:{bindMenuItem:function(t,e){this.current=e,this.formValidate.gid=t.id,this.getListHeader(),this.getList()},getList:function(){var t=this;this.loading=!0,Object(c["g"])(this.formValidate).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=a.data,t.tabList=s.list,t.total=s.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},getTaskList:function(){var t=this;this.taskLoading=!0,Object(c["c"])(this.taskData).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=a.data,t.taskTabList=s.list,t.taskTotal=s.count,t.taskLoading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.taskLoading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},pageTaskChange:function(t){this.taskData.page=t,this.getList()},search:function(){this.formValidate.page=1,this.getList()},searchTask:function(){this.taskData.page=1,this.getTaskList()},groupAdd:function(){var t=this;this.$modalForm(Object(c["e"])({},"/agent/level/create")).then((function(){return t.getList()}))},taskAdd:function(){var t=this;this.$modalForm(Object(c["a"])({},"/agent/level_task/create?level_id="+this.taskData.id)).then((function(){return t.getTaskList()}))},onchangeIsShow:function(t){var e=this;Object(c["h"])("agent/level/set_status/".concat(t.id,"/").concat(t.status)).then(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(a.msg),e.getList();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},onchangeTaskIsShow:function(t){var e=this;Object(c["d"])("agent/level_task/set_status/".concat(t.id,"/").concat(t.status)).then(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(a.msg),e.getTaskList();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},addTask:function(t){this.id=t.id,this.modal2=!0,this.taskData.id=t.id,this.getTaskList()},edit:function(t){var e=this,a={gid:t.gid};this.$modalForm(Object(c["f"])(a,"agent/level/".concat(t.id,"/edit"))).then((function(){return e.getList()}))},editTask:function(t){var e=this,a={gid:t.gid};this.$modalForm(Object(c["b"])(a,"agent/level_task/".concat(t.id,"/edit"))).then((function(){return e.getTaskList()}))},del:function(t,e,a){var s=this,i={title:e,num:a,url:"agent/level/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(i).then((function(t){s.$Message.success(t.msg),s.tabList.splice(a,1)})).catch((function(t){s.$Message.error(t.msg)}))},delTask:function(t,e,a){var s=this,i={title:e,num:a,url:"agent/level_task/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(i).then((function(t){s.$Message.success(t.msg),s.taskTabList.splice(a,1)})).catch((function(t){s.$Message.error(t.msg)}))}}},u=l,d=(a("8f73"),a("2877")),h=Object(d["a"])(u,s,i,!1,null,"3c0e9aa6",null);e["default"]=h.exports},"8f73":function(t,e,a){"use strict";var s=a("228f"),i=a.n(s);i.a}}]);