(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-242e692c"],{"4c0c":function(t,a,e){},"4c42":function(t,a,e){"use strict";var s=e("50fa"),i=e.n(s);i.a},"50fa":function(t,a,e){},"7f2a":function(t,a,e){"use strict";var s=e("4c0c"),i=e.n(s);i.a},a584:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Row",{staticClass:"ivu-mt",attrs:{type:"flex",align:"middle",gutter:10}},t._l(t.cardLists,(function(a,s){return e("Col",{key:s,staticClass:"ivu-mb",attrs:{xl:a.col,lg:6,md:12,sm:24,xs:24}},[e("Card",{staticClass:"card_cent",attrs:{shadow:"",padding:0}},[e("div",{staticClass:"card_box"},[e("div",{staticClass:"card_box_cir",class:{one:s%5==0,two:s%5==1,three:s%5==2,four:s%5==3,five:s%5==4}},[e("div",{staticClass:"card_box_cir1",class:{one1:s%5==0,two1:s%5==1,three1:s%5==2,four1:s%5==3,five1:s%5==4}},[e("Icon",{attrs:{type:a.className}})],1)]),e("div",{staticClass:"card_box_txt"},[e("span",{staticClass:"sp1",domProps:{textContent:t._s(a.count||0)}}),e("span",{staticClass:"sp2",domProps:{textContent:t._s(a.name)}})])])])],1)})),1)],1)},i=[],n={name:"cards",data:function(){return{}},props:{cardLists:Array},methods:{},created:function(){}},o=n,r=(e("7f2a"),e("2877")),l=Object(r["a"])(o,s,i,!1,null,"f9f647ba",null);a["a"]=l.exports},fea0:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"i-layout-page-header"},[e("div",{staticClass:"i-layout-page-header"},[e("span",[e("Button",{staticClass:"return",attrs:{icon:"ios-arrow-back",size:"small",type:"text"},on:{click:function(a){return t.$router.go(-1)}}},[t._v("返回")])],1),e("Divider",{staticClass:"return",attrs:{type:"vertical"}}),e("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])],1)]),t.cardLists.length>=0?e("cards-data",{attrs:{cardLists:t.cardLists}}):t._e(),e("div",[e("Tabs",{on:{"on-click":t.onClickTab},model:{value:t.currentTab,callback:function(a){t.currentTab=a},expression:"currentTab"}},t._l(t.tabs,(function(t,a){return e("TabPane",{key:a,attrs:{label:t.label,name:t.type}})})),1)],1),e("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("Form",{ref:"pagination",attrs:{model:t.pagination,"label-width":t.labelWidth,"label-position":"right"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("Row",{attrs:{type:"flex",gutter:24}},[1==t.type?e("Col",{attrs:{span:"6"}},[e("FormItem",{attrs:{label:"订单状态：","label-for":"status"}},[e("Select",{attrs:{placeholder:"请选择订单状态"},model:{value:t.pagination.status,callback:function(a){t.$set(t.pagination,"status",a)},expression:"pagination.status"}},[e("Option",{attrs:{value:""}},[t._v("全部")]),e("Option",{attrs:{value:"0"}},[t._v("未支付")]),e("Option",{attrs:{value:"1"}},[t._v("待发货")]),e("Option",{attrs:{value:"2"}},[t._v("待收货")]),e("Option",{attrs:{value:"3"}},[t._v("待评价")]),e("Option",{attrs:{value:"4"}},[t._v("交易完成")])],1)],1)],1):t._e(),e("Col",{attrs:{span:"6"}},[e("FormItem",{attrs:{label:"搜索：","label-for":"title"}},[e("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入用户姓名|手机号|UID"},on:{"on-search":t.searchList},model:{value:t.pagination.real_name,callback:function(a){t.$set(t.pagination,"real_name",a)},expression:"pagination.real_name"}})],1)],1)],1)],1),e("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.type?t.thead2:t.thead,data:t.tbody,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"avatar",fn:function(t){var a=t.row;return[e("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.avatar,expression:"row.avatar"}]})])]}},{key:"num",fn:function(a){var s=a.row;return[e("span",[t._v(" "+t._s(s.already_num+" / "+s.people_num))])]}},{key:"status",fn:function(a){var s=a.row;return[e("Tag",{directives:[{name:"show",rawName:"v-show",value:1===s.status,expression:"row.status === 1"}],attrs:{color:"blue"}},[t._v("进行中")]),e("Tag",{directives:[{name:"show",rawName:"v-show",value:2===s.status,expression:"row.status === 2"}],attrs:{color:"volcano"}},[t._v("已失败")]),e("Tag",{directives:[{name:"show",rawName:"v-show",value:3===s.status,expression:"row.status === 3"}],attrs:{color:"cyan"}},[t._v("已成功")])]}},{key:"action",fn:function(a){var s=a.row;return[e("a",{on:{click:function(a){return t.Info(s)}}},[t._v("查看详情")])]}}])}),e("div",{staticClass:"acea-row row-right page"},[e("Page",{attrs:{total:t.total,current:t.pagination.page,"show-elevator":"","show-total":"","page-size":t.pagination.limit},on:{"on-change":t.pageChange}})],1)],1),e("Modal",{staticClass:"tableBox",attrs:{scrollable:"","footer-hide":"",closable:"",title:"查看详情","mask-closable":!1,width:"750"},model:{value:t.modals,callback:function(a){t.modals=a},expression:"modals"}},[e("Table",{ref:"selection",attrs:{columns:t.columns2,data:t.tabList3,loading:t.loading2,"no-data-text":"暂无数据","highlight-row":"","max-height":"600",size:"small","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"nickname",fn:function(a){var s=a.row;return[e("span",[t._v(" "+t._s(s.nickname+" / "+s.uid))])]}},{key:"avatar",fn:function(t){var a=t.row;return[e("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.avatar,expression:"row.avatar"}]})])]}},{key:"action",fn:function(a){var s=a.row;return[e("Tag",{directives:[{name:"show",rawName:"v-show",value:1===s.is_refund,expression:"row.is_refund === 1"}],attrs:{color:"cyan"}},[t._v("已退款")]),e("Tag",{directives:[{name:"show",rawName:"v-show",value:0===s.is_refund,expression:"row.is_refund === 0"}],attrs:{color:"volcano"}},[t._v("未退款")])]}}])})],1)],1)},i=[],n=e("c964"),o=(e("96cf"),e("d81d"),e("a584")),r=e("b7be"),l={name:"index",components:{cardsData:o["a"]},data:function(){return{modals:!1,tabList3:[],loading2:!1,grid:{xl:7,lg:7,md:12,sm:24,xs:24},id:0,tbody:[],labelWidth:75,total:0,tabs:[{type:"",label:"活动参与人"},{type:"",label:"活动订单"}],currentTab:0,loading:!1,thead:[{title:"头像",slot:"avatar"},{title:"发起用户",key:"nickname"},{title:"发起时间",key:"add_time"},{title:"帮砍人数",slot:"num"},{title:"结束时间",key:"datatime"},{title:"砍价状态",slot:"status"},{title:"操作",slot:"action"}],thead2:[{title:"订单号",key:"order_id"},{title:"用户",key:"real_name"},{title:"订单状态",key:"status"},{title:"订单支付金额",key:"pay_price"},{title:"订单商品数",key:"total_num"},{title:"下单时间",key:"add_time"},{title:"支付时间",key:"pay_time"}],cardLists:[{col:6,count:0,name:"活动参与人数（人）",className:"ios-speedometer-outline"},{col:6,count:0,name:"推广人数（人）",className:"ios-speedometer-outline"},{col:6,count:0,name:"发起砍价数",className:"ios-speedometer-outline"},{col:6,count:0,name:"砍价成功数",className:"ios-speedometer-outline"},{col:6,count:0,name:"支付订单额（元）",className:"ios-speedometer-outline"},{col:6,count:0,name:"支付人数（人）",className:"ios-speedometer-outline"}],pagination:{page:1,limit:15,real_name:"",status:""},type:0,columns2:[{title:"用户ID",key:"uid",width:80},{title:"用户头像",slot:"avatar"},{title:"用户名称",slot:"nickname",minWidth:100},{title:"砍价金额",key:"price"},{title:"砍价时间",key:"add_time",minWidth:100}]}},created:function(){this.id=this.$route.params.id,this.getStatistics(this.id),this.getList(this.id)},methods:{getStatistics:function(t){var a=this;console.log(t),Object(r["D"])(t).then((function(t){var e=["people_count","spread_count","start_count","success_count","pay_price","pay_count","pay_rate"];a.cardLists.map((function(a,s){a.count=t.data[e[s]]}))}))},getList:function(t){var a=this;this.loading=!0,0==this.type?Object(r["F"])(this.id,this.pagination).then((function(t){a.loading=!1;var e=t.data,s=e.count,i=e.list;a.total=s,a.tbody=i})):Object(r["E"])(this.id,this.pagination).then((function(t){a.loading=!1;var e=t.data,s=e.count,i=e.list;a.total=s,a.tbody=i}))},onClickTab:function(){this.type=this.currentTab,this.getList(this.id)},searchList:function(){this.pagination.page=1,this.getList(this.id)},pageChange:function(t){this.pagination.page=t,this.getList(this.id)},Info:function(t){var a=this;this.modals=!0,this.rows=t,Object(r["f"])(t.id).then(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=e.data,a.tabList3=s.list,a.loading=!1;case 3:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}()).catch((function(t){a.loading=!1,a.$Message.error(t.msg)}))}}},c=l,u=(e("4c42"),e("2877")),d=Object(u["a"])(c,s,i,!1,null,"2a958970",null);a["default"]=d.exports}}]);