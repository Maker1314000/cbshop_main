(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5624ef45"],{"0ed3":function(e,t,a){"use strict";var s=a("182e"),i=a.n(s);i.a},"16d4":function(e,t,a){"use strict";var s=a("eade"),i=a.n(s);i.a},"182e":function(e,t,a){},"31b4":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.FromData?a("div",[a("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:e.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":e.cancel},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[["/marketing/coupon/save.html"===e.FromData.action?a("div",{staticClass:"radio acea-row row-middle"},[a("div",{staticClass:"name ivu-form-item-content"},[e._v("优惠券类型")]),a("Radio-group",{on:{"on-change":e.couponsType},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[a("Radio",{attrs:{label:0}},[e._v("通用券")]),a("Radio",{attrs:{label:1}},[e._v("品类券")]),a("Radio",{attrs:{label:2}},[e._v("商品券")])],1)],1):e._e()],a("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:e.config,rule:Array.from(e.FromData.rules),handleIcon:"false"},on:{"on-submit":e.onSubmit}})],2)],1):e._e()},i=[],r=a("f3f3"),o=a("9860"),l=a.n(o),n=a("6b6c"),c=a("2f62"),u={name:"edit",components:{formCreate:l.a.$form()},computed:Object(r["a"])({},Object(c["e"])("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},update:{type:Boolean,default:!0}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(e,t){200===e.status?t.url=e.data.src:this.Message.error(e.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(e){var t=this,a={};a=e,Object(n["a"])({url:this.FromData.action,method:this.FromData.method,data:a}).then((function(e){t.update&&t.$parent.getList(),t.$Message.success(e.msg),t.modals=!1,setTimeout((function(){t.$emit("submitFail")}),1e3)})).catch((function(e){t.$Message.error(e.msg)}))},cancel:function(){this.type=0}}},m=u,d=(a("16d4"),a("2877")),h=Object(d["a"])(m,s,i,!1,null,"1bd28c16",null);t["a"]=h.exports},eade:function(e,t,a){},fe78:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[e._v(e._s(e.$route.meta.title))])])]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"levelFrom",attrs:{model:e.levelFrom,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{submit:function(e){e.preventDefault()}}},[a("Row",{attrs:{type:"flex",gutter:24}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"状态：","label-for":"status1"}},[a("RadioGroup",{attrs:{type:"button"},on:{"on-change":function(t){return e.userSearchs(e.levelFrom.status)}},model:{value:e.levelFrom.status,callback:function(t){e.$set(e.levelFrom,"status",t)},expression:"levelFrom.status"}},[a("Radio",{attrs:{label:""}},[e._v("全部")]),a("Radio",{attrs:{label:"0"}},[e._v("待审核")]),a("Radio",{attrs:{label:"1"}},[e._v("通过")]),a("Radio",{attrs:{label:"2"}},[e._v("拒绝")])],1)],1)],1),a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"用户搜索：","label-for":"title"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入用户昵称/ID/手机号"},on:{"on-search":e.userSearchs},model:{value:e.levelFrom.keywords,callback:function(t){e.$set(e.levelFrom,"keywords",t)},expression:"levelFrom.keywords"}})],1)],1)],1)],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:e.columns1,data:e.levelLists,loading:e.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:e._u([{key:"action",fn:function(t){var s=t.row;t.index;return[a("a",{on:{click:function(t){return e.agree(s)}}},[e._v("同意")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.refuse(s)}}},[e._v("拒绝")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.remark(s)}}},[e._v("备注")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:e.total,current:e.levelFrom.page,"show-elevator":"","show-total":"","page-size":e.levelFrom.limit},on:{"on-change":e.pageChange}})],1)],1),a("remark",{ref:"remark",on:{submitFail:e.submitFail}})],1)},i=[],r=a("c964"),o=a("f3f3"),l=(a("96cf"),a("2f62")),n=a("c24f"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{attrs:{"z-index":1,scrollable:"","footer-hide":"",closable:"",title:"等级任务","mask-closable":!1,width:"950"},on:{"on-cancel":e.handleReset},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[a("Form",{ref:"levelFrom",attrs:{model:e.levelFrom,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{submit:function(e){e.preventDefault()}}},[a("Row",{attrs:{type:"flex",gutter:24}},[a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"状态："}},[a("Select",{attrs:{placeholder:"是否显示",clearable:""},on:{"on-change":e.userSearchs},model:{value:e.levelFrom.is_show,callback:function(t){e.$set(e.levelFrom,"is_show",t)},expression:"levelFrom.is_show"}},[a("Option",{attrs:{value:"1"}},[e._v("显示")]),a("Option",{attrs:{value:"0"}},[e._v("不显示")])],1)],1)],1),a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"等级名称：",prop:"status2","label-for":"status2"}},[a("Input",{staticStyle:{width:"100%"},attrs:{search:"","enter-button":"",placeholder:"请输入等级名称"},on:{"on-search":e.userSearchs},model:{value:e.levelFrom.name,callback:function(t){e.$set(e.levelFrom,"name",t)},expression:"levelFrom.name"}})],1)],1)],1)],1),a("Divider",{attrs:{dashed:""}}),a("Row",{attrs:{type:"flex"}},[a("Col",e._b({staticClass:"mb15"},"Col",e.grid,!1),[a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:e.add}},[e._v("添加等级任务")])],1),a("Col",{staticClass:"userAlert",attrs:{span:"24"}},[a("Alert",{attrs:{"show-icon":"",closable:""}},[e._v("添加等级任务,任务类型中的{$num}会自动替换成限定数量+系统预设的单位生成任务名")])],1)],1),a("Divider",{attrs:{dashed:""}}),a("Table",{ref:"table",attrs:{columns:e.columns1,data:e.levelLists,loading:e.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:e._u([{key:"is_shows",fn:function(t){var s=t.row;t.index;return[a("i-switch",{attrs:{value:s.is_show,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(t){return e.onchangeIsShow(s)}},model:{value:s.is_show,callback:function(t){e.$set(s,"is_show",t)},expression:"row.is_show"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v("显示")]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v("隐藏")])])]}},{key:"is_musts",fn:function(t){var s=t.row;t.index;return[a("i-switch",{attrs:{value:s.is_must,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(t){return e.onchangeIsMust(s)}},model:{value:s.is_must,callback:function(t){e.$set(s,"is_must",t)},expression:"row.is_must"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v("全部完成")]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v("达成其一")])])]}},{key:"action",fn:function(t){var s=t.row,i=t.index;return[a("a",{on:{click:function(t){return e.edit(s)}}},[e._v("编辑 | ")]),a("a",{on:{click:function(t){return e.del(s,"删除等级任务",i)}}},[e._v(" 删除")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:e.total,"show-elevator":"","show-total":"","page-size":e.levelFrom.limit},on:{"on-change":e.pageChange}})],1),a("edit-from",{ref:"edits",attrs:{FromData:e.FromData,titleType:e.titleType},on:{submitFail:e.submitFail}})],1)},u=[],m=(a("a434"),a("31b4")),d={name:"task",components:{editFrom:m["a"]},data:function(){return{grid:{xl:10,lg:10,md:12,sm:24,xs:24},modals:!1,levelFrom:{is_show:"",name:"",page:1,limit:20},total:0,levelLists:[],loading:!1,columns1:[{title:"ID",key:"id",sortable:!0,width:80},{title:"等级名称",key:"level_name",minWidth:100},{title:"任务名称",key:"name",minWidth:120},{title:"排序",sort:"grade",sortable:!0,minWidth:100},{title:"是否显示",slot:"is_shows",minWidth:110},{title:"务必达成",slot:"is_musts",minWidth:135},{title:"任务说明",key:"illustrate",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:120}],FromData:null,ids:0,modalTitleSs:"",titleType:"task"}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(l["e"])("media",["isMobile"])),Object(l["e"])("userLevel",["levelId"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:Object(o["a"])(Object(o["a"])({},Object(l["d"])("userLevel",["getTaskId","getlevelId"])),{},{add:function(){this.ids="",this.getFrom()},getFrom:function(){var e=this,t={id:this.ids,level_id:this.levelId};this.$modalForm(Object(n["e"])(t)).then((function(){return e.getList()}))},edit:function(e){this.ids=e.id,this.getFrom()},handleReset:function(){this.modals=!1},userSearchs:function(){this.getList()},getList:function(){var e=this;this.loading=!0,this.levelFrom.is_show=this.levelFrom.is_show||"",Object(n["H"])(this.levelId,this.levelFrom).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=a.data,e.levelLists=s.list,e.total=a.data.count,e.loading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},pageChange:function(e){this.levelFrom.page=e,this.getList()},onchangeIsShow:function(e){var t=this,a={id:e.id,is_show:e.is_show};Object(n["F"])(a).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(a.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},onchangeIsMust:function(e){var t=this,a={id:e.id,is_must:e.is_must};Object(n["E"])(a).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(a.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},submitFail:function(){this.getList()},del:function(e,t,a){var s=this,i={title:t,num:a,url:"user/user_level/delete_task/".concat(e.id),method:"DELETE",ids:""};this.$modalSure(i).then((function(e){s.$Message.success(e.msg),s.levelLists.splice(a,1)})).catch((function(e){s.$Message.error(e.msg)}))}})},h=d,f=a("2877"),v=Object(f["a"])(h,c,u,!1,null,"126ce422",null),g=(v.exports,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{staticClass:"order_box",attrs:{scrollable:"",title:"备注",closable:!1},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":80},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",{attrs:{label:"备注：",prop:"remark"}},[a("Input",{staticStyle:{width:"100%"},attrs:{maxlength:200,"show-word-limit":"",type:"textarea",placeholder:"请输入备注信息"},model:{value:e.formValidate.remark,callback:function(t){e.$set(e.formValidate,"remark",t)},expression:"formValidate.remark"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.putRemark("formValidate")}}},[e._v("提交")]),a("Button",{on:{click:function(t){return e.cancel("formValidate")}}},[e._v("取消")])],1)],1)}),p=[],b={name:"orderMark",data:function(){return{formValidate:{remark:""},modals:!1,ruleValidate:{remark:[{required:!0,message:"请输入备注信息",trigger:"blur"}]}}},props:{remark:{default:"",type:String}},methods:{cancel:function(e){this.modals=!1,this.$refs[e].resetFields()},putRemark:function(e){var t=this;this.$refs[e].validate((function(e){e?t.$emit("submitFail",t.formValidate.remark):t.$Message.warning("请填写备注信息")}))}}},k=b,w=Object(f["a"])(k,g,p,!1,null,"06535719",null),_=w.exports,F={name:"user_level",components:{remark:_},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},id:"",loading:!1,columns1:[{title:"ID",key:"id",width:80},{title:"昵称",key:"name",minWidth:100},{title:"手机号",key:"phone",minWidth:100},{title:"状态",key:"status",minWidth:120},{title:"申请时间",key:"add_time",minWidth:100},{title:"审核时间",key:"up_time",minWidth:100},{title:"备注",key:"remark",minWidth:100},{title:"操作",slot:"action",fixed:"right",minWidth:120}],levelFrom:{status:"",keywords:"",page:1,limit:15},levelLists:[],total:0}},created:function(){this.getList()},computed:Object(o["a"])(Object(o["a"])({},Object(l["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:Object(o["a"])(Object(o["a"])({},Object(l["d"])("userLevel",["getlevelId"])),{},{remark:function(e){this.id=e.id,this.$refs.remark.formValidate.remark=e.remark,this.$refs.remark.modals=!0},agree:function(e){var t=this;this.delfromData={title:"注销用户",url:"/user/cancel/agree/".concat(e.id),method:"get"},this.$modalSure(this.delfromData).then((function(e){t.$Message.success(e.msg),t.getList()})).catch((function(e){t.$Message.error(e.msg)}))},refuse:function(e){var t=this;this.delfromData={title:"拒绝注销用户",info:"您确认拒绝注销此用户吗?",url:"/user/cancel/refuse/".concat(e.id),method:"get"},this.$modalSure(this.delfromData).then((function(e){t.$Message.success(e.msg),t.getList()})).catch((function(e){t.$Message.error(e.msg)}))},submitFail:function(e){var t=this,a={id:this.id,mark:e};Object(n["K"])(a).then((function(e){t.$refs.remark.modals=!1,t.$Message.success(e.msg),t.getList()})).catch((function(e){t.$refs.remark.modals=!1,t.$Message.error(e.msg)}))},getList:function(){var e=this;this.loading=!0,this.levelFrom.status=this.levelFrom.status||"",Object(n["J"])(this.levelFrom).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=a.data,e.levelLists=s.list,e.total=a.data.count,e.loading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},pageChange:function(e){this.levelFrom.page=e,this.getList()},userSearchs:function(){this.levelFrom.page=1,this.getList()}})},y=F,$=(a("0ed3"),Object(f["a"])(y,s,i,!1,null,"def6502a",null));t["default"]=$.exports}}]);