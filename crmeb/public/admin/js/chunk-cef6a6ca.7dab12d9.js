(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cef6a6ca"],{"31b4":function(e,t,s){"use strict";var a=s("f3f3"),i=s("9860"),o=(i=s.n(i),s("6b6c")),n=s("2f62");i={name:"edit",components:{formCreate:i.a.$form()},computed:Object(a.a)({},Object(n.e)("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},update:{type:Boolean,default:!0}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(e,t){200===e.status?t.url=e.data.src:this.Message.error(e.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(e){var t=this;Object(o.a)({url:this.FromData.action,method:this.FromData.method,data:e}).then((function(e){t.update&&t.$parent.getList(),t.$Message.success(e.msg),t.modals=!1,setTimeout((function(){t.$emit("submitFail")}),1e3)})).catch((function(e){t.$Message.error(e.msg)}))},cancel:function(){this.type=0}}},s("3c71"),a=s("2877"),n=Object(a.a)(i,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return e.FromData?t("div",[t("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:e.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":e.cancel},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[["/marketing/coupon/save.html"===e.FromData.action?t("div",{staticClass:"radio acea-row row-middle"},[t("div",{staticClass:"name ivu-form-item-content"},[e._v("优惠券类型")]),t("Radio-group",{on:{"on-change":e.couponsType},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[t("Radio",{attrs:{label:0}},[e._v("通用券")]),t("Radio",{attrs:{label:1}},[e._v("品类券")]),t("Radio",{attrs:{label:2}},[e._v("商品券")])],1)],1):e._e()],t("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:e.config,rule:Array.from(e.FromData.rules),handleIcon:"false"},on:{"on-submit":e.onSubmit}})],2)],1):e._e()}),[],!1,null,"671a3e20",null);t.a=n.exports},"3c71":function(e,t,s){"use strict";var a=s("be2f");s.n(a).a},"5cbd":function(e,t,s){"use strict";s.r(t);var a=s("c964"),i=s("f3f3"),o=(s("96cf"),s("a434"),s("2f62")),n=s("c24f"),l=s("31b4"),r={name:"task",components:{editFrom:l.a},data:function(){return{grid:{xl:10,lg:10,md:12,sm:24,xs:24},modals:!1,levelFrom:{is_show:"",name:"",page:1,limit:20},total:0,levelLists:[],loading:!1,columns1:[{title:"ID",key:"id",sortable:!0,width:80},{title:"等级名称",key:"level_name",minWidth:100},{title:"任务名称",key:"name",minWidth:120},{title:"排序",sort:"grade",sortable:!0,minWidth:100},{title:"是否显示",slot:"is_shows",minWidth:110},{title:"务必达成",slot:"is_musts",minWidth:135},{title:"任务说明",key:"illustrate",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:120}],FromData:null,ids:0,modalTitleSs:"",titleType:"task"}},computed:Object(i.a)(Object(i.a)(Object(i.a)({},Object(o.e)("media",["isMobile"])),Object(o.e)("userLevel",["levelId"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:Object(i.a)(Object(i.a)({},Object(o.d)("userLevel",["getTaskId","getlevelId"])),{},{add:function(){this.ids="",this.getFrom()},getFrom:function(){var e=this,t={id:this.ids,level_id:this.levelId};this.$modalForm(Object(n.e)(t)).then((function(){return e.getList()}))},edit:function(e){this.ids=e.id,this.getFrom()},handleReset:function(){this.modals=!1},userSearchs:function(){this.getList()},getList:function(){var e=this;this.loading=!0,this.levelFrom.is_show=this.levelFrom.is_show||"",Object(n.I)(this.levelId,this.levelFrom).then(function(){var t=Object(a.a)(regeneratorRuntime.mark((function t(s){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=s.data,e.levelLists=a.list,e.total=s.data.count,e.loading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},pageChange:function(e){this.levelFrom.page=e,this.getList()},onchangeIsShow:function(e){var t=this;e={id:e.id,is_show:e.is_show};Object(n.G)(e).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(s){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$Message.success(s.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},onchangeIsMust:function(e){var t=this;e={id:e.id,is_must:e.is_must};Object(n.F)(e).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(s){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$Message.success(s.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},submitFail:function(){this.getList()},del:function(e,t,s){var a=this;t={title:t,num:s,url:"user/user_level/delete_task/".concat(e.id),method:"DELETE",ids:""};this.$modalSure(t).then((function(e){a.$Message.success(e.msg),a.levelLists.splice(s,1)})).catch((function(e){a.$Message.error(e.msg)}))}})},c=s("2877");r=Object(c.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Modal",{attrs:{"z-index":1,scrollable:"","footer-hide":"",closable:"",title:"等级任务","mask-closable":!1,width:"950"},on:{"on-cancel":e.handleReset},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[s("Form",{ref:"levelFrom",attrs:{model:e.levelFrom,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{submit:function(e){e.preventDefault()}}},[s("Row",{attrs:{type:"flex",gutter:24}},[s("Col",e._b({},"Col",e.grid,!1),[s("FormItem",{attrs:{label:"状态："}},[s("Select",{attrs:{placeholder:"是否显示",clearable:""},on:{"on-change":e.userSearchs},model:{value:e.levelFrom.is_show,callback:function(t){e.$set(e.levelFrom,"is_show",t)},expression:"levelFrom.is_show"}},[s("Option",{attrs:{value:"1"}},[e._v("显示")]),s("Option",{attrs:{value:"0"}},[e._v("不显示")])],1)],1)],1),s("Col",e._b({},"Col",e.grid,!1),[s("FormItem",{attrs:{label:"等级名称：",prop:"status2","label-for":"status2"}},[s("Input",{staticStyle:{width:"100%"},attrs:{search:"","enter-button":"",placeholder:"请输入等级名称"},on:{"on-search":e.userSearchs},model:{value:e.levelFrom.name,callback:function(t){e.$set(e.levelFrom,"name",t)},expression:"levelFrom.name"}})],1)],1)],1)],1),s("Divider",{attrs:{dashed:""}}),s("Row",{attrs:{type:"flex"}},[s("Col",e._b({staticClass:"mb15"},"Col",e.grid,!1),[s("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:e.add}},[e._v("添加等级任务")])],1),s("Col",{staticClass:"userAlert",attrs:{span:"24"}},[s("Alert",{attrs:{"show-icon":"",closable:""}},[e._v("添加等级任务,任务类型中的{$num}会自动替换成限定数量+系统预设的单位生成任务名")])],1)],1),s("Divider",{attrs:{dashed:""}}),s("Table",{ref:"table",attrs:{columns:e.columns1,data:e.levelLists,loading:e.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:e._u([{key:"is_shows",fn:function(t){var a=t.row;return t.index,[s("i-switch",{attrs:{value:a.is_show,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(t){return e.onchangeIsShow(a)}},model:{value:a.is_show,callback:function(t){e.$set(a,"is_show",t)},expression:"row.is_show"}},[s("span",{attrs:{slot:"open"},slot:"open"},[e._v("显示")]),s("span",{attrs:{slot:"close"},slot:"close"},[e._v("隐藏")])])]}},{key:"is_musts",fn:function(t){var a=t.row;return t.index,[s("i-switch",{attrs:{value:a.is_must,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(t){return e.onchangeIsMust(a)}},model:{value:a.is_must,callback:function(t){e.$set(a,"is_must",t)},expression:"row.is_must"}},[s("span",{attrs:{slot:"open"},slot:"open"},[e._v("全部完成")]),s("span",{attrs:{slot:"close"},slot:"close"},[e._v("达成其一")])])]}},{key:"action",fn:function(t){var a=t.row,i=t.index;return[s("a",{on:{click:function(t){return e.edit(a)}}},[e._v("编辑 | ")]),s("a",{on:{click:function(t){return e.del(a,"删除等级任务",i)}}},[e._v(" 删除")])]}}])}),s("div",{staticClass:"acea-row row-right page"},[s("Page",{attrs:{total:e.total,"show-elevator":"","show-total":"","page-size":e.levelFrom.limit},on:{"on-change":e.pageChange}})],1),s("edit-from",{ref:"edits",attrs:{FromData:e.FromData,titleType:e.titleType},on:{submitFail:e.submitFail}})],1)}),[],!1,null,"4b10d2b2",null).exports,l={name:"user_level",components:{editFrom:l.a,taskList:r},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,columns1:[{title:"ID",key:"id",width:80},{title:"等级图标",slot:"level_icons",minWidth:100},{title:"等级背景图",slot:"icons",minWidth:100},{title:"等级名称",key:"name",minWidth:120},{title:"等级",key:"grade",minWidth:100},{title:"享受折扣",key:"discount",minWidth:100},{title:"是否显示",slot:"is_shows",minWidth:120},{title:"等级说明",key:"explain",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:120}],levelFrom:{is_show:"",title:"",page:1,limit:15},levelLists:[],total:0,FromData:null,imgName:"",visible:!1,levelId:0,modalTitleSs:"",titleType:"level",modelTask:!1,num:0}},created:function(){this.getList()},computed:Object(i.a)(Object(i.a)({},Object(o.e)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:Object(i.a)(Object(i.a)({},Object(o.d)("userLevel",["getlevelId"])),{},{changeMenu:function(e,t,s){this.levelId=e.id,"1"===t?(this.getlevelId(this.levelId),this.$refs.tasks.modals=!0,this.$refs.tasks.getList()):this.del(e,"删除等级",s)},del:function(e,t,s){var a=this;t={title:t,num:s,url:"user/user_level/delete/".concat(e.id),method:"put",ids:""};this.$modalSure(t).then((function(e){a.$Message.success(e.msg),a.levelLists.splice(s,1)})).catch((function(e){a.$Message.error(e.msg)}))},onchangeIsShow:function(e){var t=this;e={id:e.id,is_show:e.is_show};Object(n.E)(e).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(s){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$Message.success(s.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},getList:function(){var e=this;this.loading=!0,this.levelFrom.is_show=this.levelFrom.is_show||"",Object(n.q)(this.levelFrom).then(function(){var t=Object(a.a)(regeneratorRuntime.mark((function t(s){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=s.data,e.levelLists=a.list,e.total=s.data.count,e.loading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},pageChange:function(e){this.levelFrom.page=e,this.getList()},add:function(){var e=this;this.levelId=0,this.$modalForm(Object(n.d)({id:this.levelId})).then((function(){return e.getList()}))},edit:function(e){var t=this;this.levelId=e.id,this.$modalForm(Object(n.d)({id:this.levelId})).then((function(){return t.getList()})),this.getlevelId(this.levelId)},userSearchs:function(){this.levelFrom.page=1,this.getList()},submitFail:function(){this.getList()}})},s("ca4a"),r=Object(c.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[s("Form",{ref:"levelFrom",attrs:{model:e.levelFrom,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{submit:function(e){e.preventDefault()}}},[s("Row",{attrs:{type:"flex",gutter:24}},[s("Col",e._b({},"Col",e.grid,!1),[s("FormItem",{attrs:{label:"状态：","label-for":"status1"}},[s("Select",{attrs:{placeholder:"请选择",clearable:"","element-id":"status1"},on:{"on-change":e.userSearchs},model:{value:e.levelFrom.is_show,callback:function(t){e.$set(e.levelFrom,"is_show",t)},expression:"levelFrom.is_show"}},[s("Option",{attrs:{value:"1"}},[e._v("显示")]),s("Option",{attrs:{value:"0"}},[e._v("不显示")])],1)],1)],1),s("Col",e._b({},"Col",e.grid,!1),[s("FormItem",{attrs:{label:"等级名称：","label-for":"title"}},[s("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入等级名称"},on:{"on-search":e.userSearchs},model:{value:e.levelFrom.title,callback:function(t){e.$set(e.levelFrom,"title",t)},expression:"levelFrom.title"}})],1)],1)],1),s("Row",{attrs:{type:"flex"}},[s("Col",e._b({},"Col",e.grid,!1),[s("Button",{directives:[{name:"auth",rawName:"v-auth",value:["admin-user-level_add"],expression:"['admin-user-level_add']"}],attrs:{type:"primary",icon:"md-add"},on:{click:e.add}},[e._v("添加用户等级")])],1)],1)],1),s("Table",{ref:"table",staticClass:"mt25",attrs:{columns:e.columns1,data:e.levelLists,loading:e.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:e._u([{key:"level_icons",fn:function(e){var t=e.row;return e.index,[s("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.icon,expression:"row.icon"}]})])]}},{key:"icons",fn:function(e){var t=e.row;return e.index,[s("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"row.image"}]})])]}},{key:"is_forevers",fn:function(t){var a=t.row;return t.index,[s("i-switch",{attrs:{value:a.is_forever,"true-value":1,"false-value":0,disabled:!0,size:"large"},model:{value:a.is_forever,callback:function(t){e.$set(a,"is_forever",t)},expression:"row.is_forever"}},[s("span",{attrs:{slot:"open"},slot:"open"},[e._v("永久")]),s("span",{attrs:{slot:"close"},slot:"close"},[e._v("非永久")])])]}},{key:"is_pays",fn:function(t){var a=t.row;return t.index,[s("i-switch",{attrs:{value:a.is_pay,"true-value":1,"false-value":0,disabled:!0,size:"large"},model:{value:a.is_pay,callback:function(t){e.$set(a,"is_pay",t)},expression:"row.is_pay"}},[s("span",{attrs:{slot:"open"},slot:"open"},[e._v("付费")]),s("span",{attrs:{slot:"close"},slot:"close"},[e._v("免费")])])]}},{key:"is_shows",fn:function(t){var a=t.row;return t.index,[s("i-switch",{attrs:{value:a.is_show,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(t){return e.onchangeIsShow(a)}},model:{value:a.is_show,callback:function(t){e.$set(a,"is_show",t)},expression:"row.is_show"}},[s("span",{attrs:{slot:"open"},slot:"open"},[e._v("显示")]),s("span",{attrs:{slot:"close"},slot:"close"},[e._v("隐藏")])])]}},{key:"action",fn:function(t){var a=t.row,i=t.index;return[s("a",{on:{click:function(t){return e.edit(a)}}},[e._v("编辑")]),s("Divider",{attrs:{type:"vertical"}}),[s("Dropdown",{attrs:{transfer:!0},on:{"on-click":function(t){return e.changeMenu(a,t,i)}}},[s("a",{attrs:{href:"javascript:void(0)"}},[e._v("\n              更多\n              "),s("Icon",{attrs:{type:"ios-arrow-down"}})],1),s("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[s("DropdownItem",{attrs:{name:"2"}},[e._v("删除等级")])],1)],1)]]}}])}),s("div",{staticClass:"acea-row row-right page"},[s("Page",{attrs:{total:e.total,current:e.levelFrom.page,"show-elevator":"","show-total":"","page-size":e.levelFrom.limit},on:{"on-change":e.pageChange}})],1)],1),s("task-list",{ref:"tasks"})],1)}),[],!1,null,"d0ef48ce",null);t.default=r.exports},b071:function(e,t,s){},be2f:function(e,t,s){},ca4a:function(e,t,s){"use strict";var a=s("b071");s.n(a).a}}]);