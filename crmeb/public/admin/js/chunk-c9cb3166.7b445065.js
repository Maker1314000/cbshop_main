(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c9cb3166"],{"8f86":function(t,e,a){"use strict";a.r(e);var s=a("f3f3"),i=(a("a434"),a("2f62")),n=a("47c5"),o={name:"live_detail",data:function(){return{option:{form:{labelWidth:"150px"}},FormData:{},loading:!1}},methods:{getData:function(t){var e=this;this.loading=!0,Object(n.h)(t).then((function(t){e.FormData=t.data,e.loading=!1})).catch((function(t){e.$Message.error(t.msg),e.loading=!1}))}}},l=(a("98c0"),a("2877"));o={name:"live",components:{goodsFrom:Object(l.a)(o,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",{staticClass:"divBox"},[e("div",[e("div",{staticClass:"box-container"},[e("div",{staticClass:"list sp"},[e("label",{staticClass:"name"},[t._v("商品名称：")]),e("span",{staticClass:"info"},[t._v(t._s(t.FormData.name))])]),e("div",{staticClass:"list sp"},[e("label",{staticClass:"name"},[t._v("直播价：")]),e("span",{staticClass:"info"},[t._v(t._s(t.FormData.price))])]),t.FormData.product?e("div",{staticClass:"list sp100",staticStyle:{display:"flex"}},[e("label",{staticClass:"name"},[t._v("商品图：")]),e("div",{directives:[{name:"viewer",rawName:"v-viewer"}]},[e("img",{attrs:{src:t.FormData.product.image,alt:""}})])]):t._e(),e("div",{staticClass:"list sp100"},[e("label",{staticClass:"name"},[t._v("审核结果：")]),e("span",{staticClass:"info"},[t._v(t._s(t._f("liveStatusFilter")(t.FormData.audit_status)))])])])])])}),[],!1,null,"1018c970",null).exports},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},formValidate:{status:"",kerword:"",page:1,limit:20},treeData:{withdrawal:[{title:"全部",value:""},{title:"待审核",value:0},{title:"已通过",value:1},{title:"未通过",value:-1}]},columns1:[{key:"product_id",title:"商品ID",minWidth:35},{slot:"name",minWidth:35,title:"商品名称"},{key:"price",minWidth:35,title:"直播价"},{slot:"cost_price",minWidth:35,title:"原价"},{slot:"stock",minWidth:35,title:"库存"},{slot:"status",minWidth:35,title:"审核状态"},{slot:"is_mer_show",title:"是否显示",minWidth:80},{slot:"action",fixed:"right",title:"操作",minWidth:120}],tabList:[],loading:!1,modals:!1,total:0}},computed:Object(s.a)(Object(s.a)({},Object(i.e)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"left"}}),mounted:function(){this.getList()},methods:{pageChange:function(t){this.formValidate.page=t,this.getList()},onchangeIsShow:function(t){var e=this,a=t.id;t=t.is_show;Object(n.i)(a,t).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,Object(n.e)(this.formValidate).then((function(e){t.total=e.data.count,t.tabList=e.data.list,t.loading=!1})).catch((function(e){t.$Message.error(e.msg),t.loading=!1}))},selChange:function(){this.formValidate.page=1,this.getList()},menusAdd:function(){this.$router.push({path:"/admin/marketing/live/add_live_goods"})},syncGoods:function(){var t=this;Object(n.m)().then((function(e){t.$Message.success(e.msg),t.getList()})).catch((function(e){t.$Message.error(res.msg)}))},edit:function(t){this.modals=!0,this.$refs.goodsDetail.getData(t.id)},del:function(t,e,a){var s=this;e={title:e,num:a,url:"live/goods/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){s.$Message.success(t.msg),s.tabList.splice(a,1),s.getList()})).catch((function(t){s.$Message.error(t.msg)}))}}},a("f779"),s=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",staticClass:"tabform",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{gutter:24,type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"审核状态："}},[a("RadioGroup",{staticClass:"mr15",attrs:{type:"button"},on:{"on-change":t.selChange},model:{value:t.formValidate.status,callback:function(e){t.$set(t.formValidate,"status",e)},expression:"formValidate.status"}},t._l(t.treeData.withdrawal,(function(e,s){return a("Radio",{key:s,attrs:{label:e.value}},[t._v("\n                "+t._s(e.title)+"\n              ")])})),1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"搜索："}},[a("Input",{staticStyle:{width:"30%"},attrs:{search:"","enter-button":"",placeholder:"请输入商品名称/ID","element-id":"name"},on:{"on-search":t.selChange},model:{value:t.formValidate.kerword,callback:function(e){t.$set(t.formValidate,"kerword",e)},expression:"formValidate.kerword"}})],1)],1)],1),a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-system_menus-add"],expression:"['setting-system_menus-add']"}],attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.menusAdd("添加直播间")}}},[t._v("添加商品\n          ")]),a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-system_menus-add"],expression:"['setting-system_menus-add']"}],staticStyle:{"margin-left":"20px"},attrs:{icon:"md-list",type:"success"},on:{click:t.syncGoods}},[t._v("同步商品\n          ")])],1)],1)],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.tabList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"name",fn:function(e){var s=e.row;return e.index,[a("div",{staticClass:"product_box"},[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}]},[a("img",{attrs:{src:s.product.image,alt:""}})]),a("div",{staticClass:"txt"},[t._v(t._s(s.name))])])]}},{key:"cost_price",fn:function(e){var s=e.row;return e.index,[a("div",[t._v(t._s(s.cost_price))])]}},{key:"stock",fn:function(e){var s=e.row;return e.index,[a("div",[t._v(t._s(s.product.stock))])]}},{key:"status",fn:function(e){var s=e.row;return e.index,[a("div",[t._v(t._s(t._f("liveStatusFilter")(s.audit_status)))])]}},{key:"is_mer_show",fn:function(e){var s=e.row;return e.index,[a("i-switch",{attrs:{value:s.is_show,"true-value":1,"false-value":0,size:"large",disabled:2!=s.audit_status},on:{"on-change":function(e){return t.onchangeIsShow(s)}},model:{value:s.is_show,callback:function(e){t.$set(s,"is_show",e)},expression:"row.is_show"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var s=e.row,i=e.index;return[a("a",{on:{click:function(e){return t.edit(s,"编辑")}}},[t._v("详情")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.del(s,"删除这条信息",i)}}},[t._v("删除")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"商品详情",scrollable:"",width:"700","footer-hide":!0},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[a("goodsFrom",{ref:"goodsDetail"})],1)],1)}),[],!1,null,"4b8b0c08",null);e.default=s.exports},"98c0":function(t,e,a){"use strict";var s=a("9c7a");a.n(s).a},"9c7a":function(t,e,a){},f2a7:function(t,e,a){},f779:function(t,e,a){"use strict";var s=a("f2a7");a.n(s).a}}]);