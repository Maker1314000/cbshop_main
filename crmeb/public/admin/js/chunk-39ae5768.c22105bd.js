(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39ae5768"],{"8a27":function(e,t,a){},"8bd8":function(e,t,a){"use strict";var i=a("8a27"),n=a.n(i);n.a},a15b:function(e,t,a){"use strict";var i=a("23e7"),n=a("e330"),o=a("44ad"),r=a("fc6a"),s=a("a640"),l=n([].join),c=o!=Object,d=s("join",",");i({target:"Array",proto:!0,forced:c||!d},{join:function(e){return l(r(this),void 0===e?",":e)}})},effd:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[e._v(e._s(e.$route.meta.title))])])]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"pagination",attrs:{model:e.pagination,"label-width":e.labelWidth,"label-position":e.labelPosition},nativeOn:{submit:function(e){e.preventDefault()}}},[a("Row",{attrs:{type:"flex",gutter:24}},[a("Col",e._b({staticClass:"ivu-text-left"},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"创建时间："}},[a("DatePicker",{staticClass:"mr20",staticStyle:{width:"300px"},attrs:{editable:!1,value:e.timeVal,format:"yyyy/MM/dd",type:"datetimerange",placement:"bottom-start",placeholder:"请选择时间",options:e.options},on:{"on-change":e.onchangeTime}})],1)],1),a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"订单号：","label-for":"title"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入订单号"},on:{"on-search":e.orderSearch},model:{value:e.pagination.order_id,callback:function(t){e.$set(e.pagination,"order_id",t)},expression:"pagination.order_id"}})],1)],1),a("Col",e._b({},"Col",e.grid,!1),[a("FormItem",{attrs:{label:"用户名：","label-for":"title"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入用户名"},on:{"on-search":e.nameSearch},model:{value:e.pagination.name,callback:function(t){e.$set(e.pagination,"name",t)},expression:"pagination.name"}})],1)],1)],1),a("Row",{attrs:{type:"flex"}},[a("Col",e._b({},"Col",e.grid,!1),[a("Button",{attrs:{type:"primary"},on:{click:e.qrcodeShow}},[e._v("查看收款二维码")])],1)],1)],1),a("Table",{ref:"table",staticClass:"mt25",attrs:{columns:e.thead,data:e.tbody,loading:e.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:e.total,current:e.pagination.page,"show-elevator":"","show-total":"","page-size":e.pagination.limit},on:{"on-change":e.pageChange}})],1)],1),a("Modal",{attrs:{title:"收款码","footer-hide":""},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[a("div",[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"acea-row row-around code"},[e.spin?a("Spin",{attrs:{fix:""}}):e._e(),a("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[a("div",{staticClass:"QRpic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.qrcode&&e.qrcode.wechat,expression:"qrcode && qrcode.wechat"}]})]),a("span",{staticClass:"mt10"},[e._v(e._s(e.animal?"公众号收款码":"公众号二维码"))])]),a("div",{staticClass:"acea-row row-column-around row-between-wrapper"},[a("div",{staticClass:"QRpic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.qrcode&&e.qrcode.routine,expression:"qrcode && qrcode.routine"}]})]),a("span",{staticClass:"mt10"},[e._v(e._s(e.animal?"小程序收款码":"小程序二维码"))])])],1)])])],1)},n=[],o=a("f3f3"),r=(a("a15b"),a("2f62")),s=a("f8b7"),l={data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},thead:[{title:"订单号",key:"order_id"},{title:"用户信息",key:"nickname"},{title:"实际支付",key:"pay_price"},{title:"优惠价格",key:"true_price"},{title:"支付时间",key:"pay_time"}],tbody:[],loading:!1,total:0,animal:0,pagination:{page:1,limit:30,order_id:"",add_time:""},options:{shortcuts:[{text:"今天",value:function(){var e=new Date,t=new Date;return t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())),[t,e]}},{text:"昨天",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1))),e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1))),[t,e]}},{text:"最近7天",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-6))),[t,e]}},{text:"最近30天",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-29))),[t,e]}},{text:"本月",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),1))),[t,e]}},{text:"本年",value:function(){var e=new Date,t=new Date;return t.setTime(t.setTime(new Date((new Date).getFullYear(),0,1))),[t,e]}}]},timeVal:[],modal:!1,qrcode:null,name:"",spin:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(r["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getOrderList()},methods:{onchangeCode:function(e){this.animal=e,this.qrcodeShow()},onchangeTime:function(e){this.pagination.page=1,this.timeVal=e,this.pagination.add_time=this.timeVal[0]?this.timeVal.join("-"):"",this.getOrderList()},getOrderList:function(){var e=this;this.loading=!0,Object(s["D"])(this.pagination).then((function(t){e.loading=!1;var a=t.data,i=a.count,n=a.list;e.total=i,e.tbody=n})).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},pageChange:function(e){this.pagination.page=e,this.getOrderList()},nameSearch:function(){this.pagination.page=1,this.getOrderList()},orderSearch:function(){this.pagination.page=1,this.getOrderList()},qrcodeShow:function(){var e=this;this.modal=!0,this.spin=!0,Object(s["B"])({type:this.animal}).then((function(t){e.spin=!1,e.qrcode=t.data})).catch((function(t){e.spin=!1,e.$Message.error(t.msg)}))}}},c=l,d=(a("8bd8"),a("2877")),u=Object(d["a"])(c,i,n,!1,null,"3509985e",null);t["default"]=u.exports}}]);