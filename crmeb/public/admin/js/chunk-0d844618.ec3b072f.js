(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d844618"],{"08f2":function(t,e,n){},"2f21":function(t,e,n){"use strict";var r=n("79e5");t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"37c8d":function(t,e,n){"use strict";var r=n("08f2"),a=n.n(r);a.a},"39f9":function(t,e,n){},"39ff":function(t,e,n){},"55dd":function(t,e,n){"use strict";var r=n("5ca1"),a=n("d8e8"),s=n("4bf8"),i=n("79e5"),o=[].sort,u=[1,2,3];r(r.P+r.F*(i((function(){u.sort(void 0)}))||!i((function(){u.sort(null)}))||!n("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(s(this)):o.call(s(this),a(t))}})},"5b56":function(t,e,n){"use strict";var r=n("a6e5"),a=n.n(r);a.a},6148:function(t,e,n){},8593:function(t,e,n){"use strict";n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return i})),n.d(e,"P",(function(){return o})),n.d(e,"n",(function(){return u})),n.d(e,"l",(function(){return c})),n.d(e,"m",(function(){return d})),n.d(e,"k",(function(){return l})),n.d(e,"D",(function(){return h})),n.d(e,"v",(function(){return f})),n.d(e,"C",(function(){return m})),n.d(e,"A",(function(){return g})),n.d(e,"x",(function(){return p})),n.d(e,"y",(function(){return b})),n.d(e,"z",(function(){return y})),n.d(e,"B",(function(){return v})),n.d(e,"M",(function(){return x})),n.d(e,"Q",(function(){return C})),n.d(e,"o",(function(){return w})),n.d(e,"d",(function(){return _})),n.d(e,"f",(function(){return k})),n.d(e,"c",(function(){return O})),n.d(e,"e",(function(){return j})),n.d(e,"g",(function(){return S})),n.d(e,"r",(function(){return L})),n.d(e,"p",(function(){return T})),n.d(e,"q",(function(){return D})),n.d(e,"G",(function(){return R})),n.d(e,"H",(function(){return z})),n.d(e,"L",(function(){return A})),n.d(e,"K",(function(){return F})),n.d(e,"a",(function(){return E})),n.d(e,"b",(function(){return $})),n.d(e,"t",(function(){return I})),n.d(e,"O",(function(){return N})),n.d(e,"w",(function(){return P})),n.d(e,"S",(function(){return G})),n.d(e,"R",(function(){return U})),n.d(e,"E",(function(){return B})),n.d(e,"F",(function(){return M})),n.d(e,"u",(function(){return K})),n.d(e,"I",(function(){return V})),n.d(e,"J",(function(){return W})),n.d(e,"s",(function(){return J})),n.d(e,"N",(function(){return q}));var r=n("6b6c");function a(t){return Object(r["a"])({url:"setting/config_class",method:"get",params:t})}function s(t){return Object(r["a"])({url:"setting/config_class/create",method:"get"})}function i(t){return Object(r["a"])({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function o(t){return Object(r["a"])({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function u(t){return Object(r["a"])({url:"setting/config",method:"get",params:t})}function c(t){return Object(r["a"])({url:"setting/config/create",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function l(t,e){return Object(r["a"])({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function h(t){return Object(r["a"])({url:"setting/group",method:"get",params:t})}function f(t){return Object(r["a"])({url:t.url,method:t.method,data:t.datas})}function m(t){return Object(r["a"])({url:"setting/group/".concat(t),method:"get"})}function g(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function p(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function b(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function y(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function v(t){return Object(r["a"])({url:t,method:"PUT"})}function x(t){return Object(r["a"])({url:"system/log/search_admin",method:"GET"})}function C(t){return Object(r["a"])({url:"system/log",method:"GET",params:t})}function w(){return Object(r["a"])({url:"system/file",method:"GET"})}function _(){return Object(r["a"])({url:"system/backup",method:"GET"})}function k(t){return Object(r["a"])({url:"system/backup/read",method:"GET",params:t})}function O(t){return Object(r["a"])({url:"system/backup/backup",method:"put",data:t})}function j(t){return Object(r["a"])({url:"system/backup/optimize",method:"put",data:t})}function S(t){return Object(r["a"])({url:"system/backup/repair",method:"put",data:t})}function L(t){return Object(r["a"])({url:"system/backup/file_list",method:"GET"})}function T(t){return Object(r["a"])({url:"backup/download",method:"get",params:t})}function D(t){return Object(r["a"])({url:"system/backup/import",method:"POST",data:t})}function R(t){return Object(r["a"])({url:"system/file/opendir",method:"GET",params:t})}function z(t){return Object(r["a"])({url:"system/file/openfile?filepath=".concat(t),method:"GET"})}function A(t){return Object(r["a"])({url:"system/file/savefile",method:"post",data:t})}function F(t){return Object(r["a"])({url:"system/replace_site_url",method:"post",data:t})}function E(){return Object(r["a"])({url:"auth",method:"get"})}function $(t){return Object(r["a"])({url:"auth_apply",method:"post",data:t})}function I(){return Object(r["a"])({url:"setting/get_kf_adv",method:"get"})}function N(t){return Object(r["a"])({url:"setting/set_kf_adv",method:"post",data:t})}function P(){return Object(r["a"])({url:"setting/group_all",method:"get"})}function G(t){return Object(r["a"])({url:"system/version_list",method:"get",params:t})}function U(t){return Object(r["a"])({url:"system/version_crate/".concat(t),method:"get"})}function B(t){return Object(r["a"])({url:"setting/group_data/save_all",method:"POST",data:t})}function M(t){return Object(r["a"])({url:"diy/open_adv/add",method:"POST",data:t})}function K(){return Object(r["a"])({url:"diy/open_adv/info",method:"get"})}function V(t){return Object(r["a"])({url:"setting/config/get_system/".concat(t),method:"get"})}function W(t){return Object(r["a"])({url:"setting/config/save_basics",method:"POST",data:t})}function J(){return Object(r["a"])({url:"setting/get_user_agreement",method:"get"})}function q(t){return Object(r["a"])({url:"setting/set_user_agreement",method:"post",data:t})}},9901:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{height:"300px"},attrs:{id:t.echarts}})])},a=[],s=n("313e"),i=n.n(s),o={name:"index",props:{infoList:{type:Object,default:null},series:Array,echartsTitle:{type:String,default:""},yAxisData:{type:Array,default:function(){return[]}},bingXdata:Array},data:function(){return{infoLists:this.infoList,seriesArray:this.series}},watch:{infoList:{handler:function(t,e){this.infoLists=t,this.handleSetVisitChart()},deep:!0},series:{handler:function(t,e){this.seriesArray=t,this.handleSetVisitChart()},deep:!0}},computed:{echarts:function(){return"echarts"+Math.ceil(100*Math.random())}},mounted:function(){var t=this,e=this;e.$nextTick((function(){e.handleSetVisitChart(),window.addEventListener("resize",t.wsFunc)}))},methods:{wsFunc:function(){this.myChart.resize()},handleSetVisitChart:function(){this.myChart=i.a.init(document.getElementById(this.echarts));var t=null;t="circle"===this.echartsTitle?{tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"right",data:this.infoLists.bing_xdata||[]},series:[{name:"访问来源",type:"pie",radius:"70%",center:["50%","60%"],data:this.infoLists.bing_data||[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}:{tooltip:{trigger:"axis"},toolbox:{},legend:{data:this.infoLists.legend||[]},color:["#1495EB","#00CC66","#F9D249","#ff9900","#9860DF"],grid:{left:16,right:25,bottom:10,top:40,containLabel:!0},xAxis:[{type:"category",axisLine:{lineStyle:{color:"#D7DDE4"}},axisTick:{alignWithLabel:!0,lineStyle:{color:"#D7DDE4"}},splitLine:{show:!1,lineStyle:{color:"#F5F7F9"}},axisLabel:{interval:0,rotate:40,textStyle:{color:"#7F8B9C"}},data:this.infoLists.xAxis}],yAxis:this.yAxisData.length?this.yAxisData:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}},type:"value"},series:this.seriesArray},this.myChart.setOption(t,!0)},handleResize:function(){this.myChart.resize()}},beforeDestroy:function(){window.removeEventListener("resize",this.wsFunc),this.myChart&&(this.myChart.dispose(),this.myChart=null)}},u=o,c=n("2877"),d=Object(c["a"])(u,r,a,!1,null,"7db55952",null);e["a"]=d.exports},a6e5:function(t,e,n){},a7aa:function(t,e,n){"use strict";var r=n("b387"),a=n.n(r);a.a},b071:function(t,e,n){},b387:function(t,e,n){},bbe41:function(t,e,n){"use strict";var r=n("b071"),a=n.n(r);a.a},c49a:function(t,e,n){"use strict";var r=n("6148"),a=n.n(r);a.a},e217:function(t,e,n){"use strict";var r=n("39ff"),a=n.n(r);a.a},f75a:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-info",{ref:"baseInfo"}),n("grid-menu"),n("visit-chart",{ref:"visitChart"}),n("user-chart",{ref:"userChart"})],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{attrs:{gutter:24}},t._l(t.infoList,(function(e,r){return n("Col",t._b({key:r,staticClass:"ivu-mb"},"Col",t.grid,!1),[n("Card",{attrs:{bordered:!1,"dis-hover":"",padding:12}},[n("p",{attrs:{slot:"title"},slot:"title"},[n("span",{domProps:{textContent:t._s(e.title)}})]),n("Tag",{attrs:{slot:"extra",color:"green"},slot:"extra"},[t._v(t._s(e.date))]),n("div",[n("div",{staticClass:"number"},[t._v(t._s(e.yesterday))]),n("div",{staticClass:"ivu-pt-8",staticStyle:{height:"42px"}},[n("span",{staticClass:"ivu-mr",staticStyle:{display:"inline-block"}},[t._v("\n            日环比 "+t._s(Number(e.today_ratio))+"%\n            "),n("Icon",{staticClass:"iconColor",class:Number(e.today_ratio)>=0?" ":"on",attrs:{type:Number(e.today_ratio)>=0?"md-arrow-dropup":"md-arrow-dropdown"}})],1),n("span",{staticStyle:{display:"inline-block"}},[t._v("\n            周环比 "+t._s(Number(e.week_ratio))+"%\n            "),n("Icon",{staticClass:"iconColor",class:Number(e.week_ratio)>=0?" ":"on",attrs:{type:Number(e.week_ratio)>=0?"md-arrow-dropup":"md-arrow-dropdown"}})],1)]),n("Divider",{staticStyle:{margin:"8px 0"}}),n("div",[n("Row",[n("Col",{attrs:{span:"12"},domProps:{textContent:t._s(e.total_name)}}),n("Col",{staticClass:"ivu-text-right",attrs:{span:"12"}},[t._v(t._s(e.total))])],1)],1)],1)],1)],1)})),1)},i=[],o=(n("96cf"),n("1da1")),u=n("313e"),c=n.n(u),d=n("6b6c");function l(){return Object(d["a"])({url:"home/header",method:"get"})}function h(t){return Object(d["a"])({url:"home/order",method:"get",params:t})}function f(){return Object(d["a"])({url:"home/user",method:"get"})}function m(){return Object(d["a"])({url:"home/rank",method:"get"})}function g(){return Object(d["a"])({url:"check_auth",method:"get"})}var p={data:function(){return{infoList:[],grid:{xl:6,lg:12,md:12,sm:12,xs:24},excessStyle:{color:"#f56a00",backgroundColor:"#fde3cf"},avatarList:[]}},methods:{getStatistics:function(){var t=this;l().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.infoList=r.info;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))}},mounted:function(){this.getStatistics()}},b=p,y=(n("c49a"),n("2877")),v=Object(y["a"])(b,s,i,!1,null,null,null),x=v.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{staticClass:"dashboard-console-grid",attrs:{gutter:24}},[n("Col",t._b({directives:[{name:"auth",rawName:"v-auth",value:["admin-user-user-index"],expression:"['admin-user-user-index']"}],staticClass:"ivu-mb"},"Col",t.grid,!1),[n("Card",{attrs:{bordered:!1}},[n("router-link",{attrs:{to:{path:"/admin/user/list"}}},[n("Icon",{attrs:{type:"md-people",color:"#69c0ff"}}),n("p",[t._v("用户管理")])],1)],1)],1),n("Col",t._b({directives:[{name:"auth",rawName:"v-auth",value:["setting-system-config"],expression:"['setting-system-config']"}],staticClass:"ivu-mb"},"Col",t.grid,!1),[n("Card",{attrs:{bordered:!1}},[n("router-link",{attrs:{to:{path:"/admin/setting/system_config"}}},[n("Icon",{attrs:{type:"md-settings",color:"#95de64"}}),n("p",[t._v("系统设置")])],1)],1)],1),n("Col",t._b({directives:[{name:"auth",rawName:"v-auth",value:["admin-store-storeProuduct-index"],expression:"['admin-store-storeProuduct-index']"}],staticClass:"ivu-mb"},"Col",t.grid,!1),[n("Card",{attrs:{bordered:!1}},[n("router-link",{attrs:{to:{path:"/admin/product/product_list"}}},[n("Icon",{attrs:{type:"md-cart",color:"#ff9c6e"}}),n("p",[t._v("商品")])],1)],1)],1),n("Col",t._b({directives:[{name:"auth",rawName:"v-auth",value:["admin-order-storeOrder-index"],expression:"['admin-order-storeOrder-index']"}],staticClass:"ivu-mb"},"Col",t.grid,!1),[n("Card",{attrs:{bordered:!1}},[n("router-link",{attrs:{to:{path:"/admin/order/list"}}},[n("Icon",{attrs:{type:"md-clipboard",color:"#b37feb"}}),n("p",[t._v("订单管理")])],1)],1)],1),n("Col",t._b({directives:[{name:"auth",rawName:"v-auth",value:["setting-sms"],expression:"['setting-sms']"}],staticClass:"ivu-mb"},"Col",t.grid,!1),[n("Card",{attrs:{bordered:!1}},[n("router-link",{attrs:{to:{path:"/admin/setting/sms/sms_config/index"}}},[n("Icon",{attrs:{type:"md-mail",color:"#ffd666"}}),n("p",[t._v("短信配置")])],1)],1)],1),n("Col",t._b({directives:[{name:"auth",rawName:"v-auth",value:["cms-article-index"],expression:"['cms-article-index']"}],staticClass:"ivu-mb"},"Col",t.grid,!1),[n("Card",{attrs:{bordered:!1}},[n("router-link",{attrs:{to:{path:"/admin/cms/article/index"}}},[n("Icon",{attrs:{type:"md-card",color:"#5cdbd3"}}),n("p",[t._v("文章管理")])],1)],1)],1),n("Col",t._b({directives:[{name:"auth",rawName:"v-auth",value:["agent-agent-manage"],expression:"['agent-agent-manage']"}],staticClass:"ivu-mb"},"Col",t.grid,!1),[n("Card",{attrs:{bordered:!1}},[n("router-link",{attrs:{to:{path:"/admin/agent/agent_manage/index"}}},[n("Icon",{attrs:{type:"md-pricetags",color:"#ff85c0"}}),n("p",[t._v("分销管理")])],1)],1)],1),n("Col",t._b({directives:[{name:"auth",rawName:"v-auth",value:["marketing-store_coupon-index"],expression:"['marketing-store_coupon-index']"}],staticClass:"ivu-mb"},"Col",t.grid,!1),[n("Card",{attrs:{bordered:!1}},[n("router-link",{attrs:{to:{path:"/admin/marketing/store_coupon_issue/index"}}},[n("Icon",{attrs:{type:"md-cash",color:"#ffc069"}}),n("p",[t._v("优惠券")])],1)],1)],1)],1)},w=[],_={data:function(){return{grid:{xl:3,lg:6,md:6,sm:8,xs:8}}}},k=_,O=(n("5b56"),Object(y["a"])(k,C,w,!1,null,null,null)),j=O.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{resize:t.handleResize}},[n("Row",{attrs:{gutter:24}},[n("Col",{staticClass:"ivu-mb",attrs:{san:"24"}},[n("Card",{staticClass:"dashboard-console-visit",attrs:{bordered:!1,"dis-hover":""}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("Col",{attrs:{span:"8"}},[n("Avatar",{staticStyle:{color:"#1890ff","background-color":"#e6f7ff"},attrs:{icon:"ios-podium",size:"small"}}),n("span",{staticClass:"ivu-pl-8"},[t._v("订单")])],1),n("Col",{staticClass:"ivu-text-right",attrs:{span:"16"}},[n("RadioGroup",{staticClass:"ivu-mr-8",attrs:{type:"button"},on:{"on-change":t.handleChangeVisitType},model:{value:t.visitDate,callback:function(e){t.visitDate=e},expression:"visitDate"}},[n("Radio",{attrs:{label:"thirtyday"}},[t._v("30天")]),n("Radio",{attrs:{label:"week"}},[t._v("周")]),n("Radio",{attrs:{label:"month"}},[t._v("月")]),n("Radio",{attrs:{label:"year"}},[t._v("年")])],1)],1)],1)],1),n("h4",[t._v("订单量趋势")]),t.infoList?n("echarts-from",{ref:"visitChart",attrs:{series:t.series,infoList:t.infoList,yAxisData:t.yAxisData}}):t._e()],1)],1)],1)],1)},L=[],T=n("9901"),D={components:{echartsFrom:T["a"]},data:function(){return{infoList:null,visitDate:"thirtyday",series:[],yAxisData:[]}},methods:{getStatistics:function(){var t=this,e={cycle:this.visitDate};h(e).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.infoList=n.data||{},t.series=t.infoList.series||[],t.yAxisData=[{type:"value",name:"金额",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}}},{type:"value",name:"数量",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}}}];case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},handleChangeVisitType:function(){this.getStatistics()},handleResize:function(){this.infoList&&this.$refs.visitChart.handleResize()}},created:function(){this.getStatistics()}},R=D,z=(n("ffd3"),Object(y["a"])(R,S,L,!1,null,"557a4ac0",null)),A=z.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{resize:t.handleResize}},[n("Row",{attrs:{gutter:24}},[n("Col",{staticClass:"ivu-mb dashboard-console-visit",attrs:{xl:16,lg:12,md:24,sm:24,xs:24}},[n("Card",{attrs:{bordered:!1,"dis-hover":""}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("Avatar",{staticStyle:{color:"#1890ff","background-color":"#e6f7ff"},attrs:{icon:"ios-pulse",size:"small"}}),n("span",{staticClass:"ivu-pl-8"},[t._v("用户")])],1),t.infoList&&0!==t.series.length?n("echarts-from",{ref:"userChart",attrs:{echartsTitle:t.line,infoList:t.infoList,series:t.series}}):t._e()],1)],1),n("Col",{attrs:{xl:8,lg:12,md:24,sm:24,xs:24}},[n("Card",{staticClass:"dashboard-console-visit",attrs:{bordered:!1,"dis-hover":""}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("Avatar",{staticStyle:{color:"#1890ff","background-color":"#e6f7ff"},attrs:{icon:"ios-analytics",size:"small"}}),n("span",{staticClass:"ivu-pl-8"},[t._v("购买用户统计")])],1),n("echarts-from",{ref:"visitChart",attrs:{infoList:t.infoList,echartsTitle:t.circle}})],1)],1)],1)],1)},E=[],$={name:"user-chart",components:{echartsFrom:T["a"]},data:function(){return{line:"line",circle:"circle",infoList:{},series:[],xData:[],y1Data:[],y2Data:[],lists:[],bing_data:[],bing_xdata:[]}},methods:{getStatistics:function(){var t=this;f().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.infoList=n.data,t.series=[{data:n.data.series,name:"人数（人）",type:"line",tooltip:!0,smooth:!0,symbol:"none",areaStyle:{normal:{opacity:.2}}}],t.bing_data=n.bing_data,t.bing_xdata=n.bing_xdata;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},getRank:function(){var t=this;m().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.lists=r.list;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},handleResize:function(){this.infoList&&0!==this.series.length&&this.$refs.userChart.handleResize(),this.infoList&&this.$refs.visitChart.handleResize()}},mounted:function(){this.getStatistics(),this.getRank()},beforeDestroy:function(){this.visitChart&&(this.visitChart.dispose(),this.visitChart=null)}},I=$,N=(n("a7aa"),Object(y["a"])(I,F,E,!1,null,"a9ec54a8",null)),P=N.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",{attrs:{gutter:24}},[n("Col",{attrs:{span:"12"}},[n("NumberInfo",{attrs:{total:"23,378","sub-total":"16.8",status:"up"}},[n("span",{attrs:{slot:"subTitle"},slot:"subTitle"},[t._v("\n                    搜索用户数\n                    "),n("Tooltip",{attrs:{content:"指标说明",placement:"top"}},[n("Icon",{attrs:{type:"ios-information-circle-outline"}})],1)],1)]),n("div",{ref:"searchUserChart",staticStyle:{height:"50px"}})],1),n("Col",{attrs:{span:"12"}},[n("NumberInfo",{attrs:{total:"3.1","sub-total":"8.5",status:"down"}},[n("span",{attrs:{slot:"subTitle"},slot:"subTitle"},[t._v("\n                    人均搜索次数\n                    "),n("Tooltip",{attrs:{content:"指标说明",placement:"top"}},[n("Icon",{attrs:{type:"ios-information-circle-outline"}})],1)],1)]),n("div",{ref:"searchCountChart",staticStyle:{height:"50px"}})],1)],1),n("div",{staticClass:"ivu-mt"},[n("search-table")],1)],1)},U=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"i-table-no-border"},[n("Table",{attrs:{columns:t.column,data:t.dataWithPage,loading:t.loading,size:"small"},on:{"on-sort-change":t.handleSortChange},scopedSlots:t._u([{key:"keyword",fn:function(e){var r=e.row;return[n("a",{attrs:{href:"/",target:"_blank"}},[t._v(t._s(r.keyword))])]}},{key:"range",fn:function(e){var r=e.row;return[t._v("\n            "+t._s(r.range)+"%\n            "),n("Trend",{attrs:{flag:r.status?"up":"down"}})]}}])}),n("div",{staticClass:"ivu-text-right ivu-mt-8"},[n("Page",{attrs:{size:"small","page-size":5,total:t.limitData.length,current:t.current},on:{"update:current":function(e){t.current=e},"on-change":t.getData}})],1)],1)},M=[],K=(n("55dd"),n("2909")),V={data:function(){return{current:1,size:5,loading:!1,sortType:"normal",sortKey:"",column:[{title:"排名",key:"index",width:80},{title:"搜索关键词",key:"keyword",slot:"keyword",minWidth:120},{title:"用户数",key:"count",sortable:"custom",minWidth:100},{title:"周涨幅",key:"range",slot:"range",width:100,align:"right",sortable:"custom"}],data:[]}},computed:{limitData:function(){var t=this,e=Object(K["a"])(this.data);return"asc"===this.sortType&&(e=e.sort((function(e,n){return e[t.sortKey]>n[t.sortKey]?1:-1}))),"desc"===this.sortType&&(e=e.sort((function(e,n){return e[t.sortKey]<n[t.sortKey]?1:-1}))),e},dataWithPage:function(){var t=this.limitData,e=this.current*this.size-this.size,n=e+this.size;return Object(K["a"])(t).slice(e,n)}},methods:{handleSortChange:function(t){var e=t.key,n=t.order;this.sortKey=e,this.sortType=n,this.current=1},getData:function(){var t=[{index:1,keyword:"搜索关键词-0",count:257,range:69,status:0},{index:2,keyword:"搜索关键词-1",count:711,range:57,status:0},{index:3,keyword:"搜索关键词-2",count:766,range:24,status:1},{index:4,keyword:"搜索关键词-3",count:597,range:31,status:1},{index:5,keyword:"搜索关键词-4",count:133,range:30,status:0},{index:6,keyword:"搜索关键词-5",count:845,range:16,status:0},{index:7,keyword:"搜索关键词-6",count:454,range:35,status:1},{index:8,keyword:"搜索关键词-7",count:884,range:96,status:1},{index:9,keyword:"搜索关键词-8",count:725,range:30,status:1},{index:10,keyword:"搜索关键词-9",count:778,range:46,status:0},{index:11,keyword:"搜索关键词-10",count:414,range:69,status:1},{index:12,keyword:"搜索关键词-11",count:927,range:41,status:0},{index:13,keyword:"搜索关键词-12",count:128,range:54,status:0},{index:14,keyword:"搜索关键词-13",count:169,range:77,status:0},{index:15,keyword:"搜索关键词-14",count:764,range:8,status:0},{index:16,keyword:"搜索关键词-15",count:178,range:23,status:1},{index:17,keyword:"搜索关键词-16",count:32,range:94,status:0},{index:18,keyword:"搜索关键词-17",count:183,range:34,status:1},{index:19,keyword:"搜索关键词-18",count:988,range:5,status:0},{index:20,keyword:"搜索关键词-19",count:324,range:15,status:0},{index:21,keyword:"搜索关键词-20",count:832,range:42,status:0},{index:22,keyword:"搜索关键词-21",count:336,range:99,status:0},{index:23,keyword:"搜索关键词-22",count:23,range:1,status:1},{index:24,keyword:"搜索关键词-23",count:557,range:84,status:0},{index:25,keyword:"搜索关键词-24",count:894,range:62,status:1},{index:26,keyword:"搜索关键词-25",count:610,range:73,status:1},{index:27,keyword:"搜索关键词-26",count:810,range:1,status:1},{index:28,keyword:"搜索关键词-27",count:83,range:13,status:1},{index:29,keyword:"搜索关键词-28",count:734,range:11,status:1},{index:30,keyword:"搜索关键词-29",count:6,range:97,status:0},{index:31,keyword:"搜索关键词-30",count:112,range:88,status:0},{index:32,keyword:"搜索关键词-31",count:978,range:92,status:0},{index:33,keyword:"搜索关键词-32",count:674,range:86,status:0},{index:34,keyword:"搜索关键词-33",count:632,range:42,status:1},{index:35,keyword:"搜索关键词-34",count:0,range:23,status:1},{index:36,keyword:"搜索关键词-35",count:965,range:94,status:0},{index:37,keyword:"搜索关键词-36",count:758,range:86,status:0},{index:38,keyword:"搜索关键词-37",count:857,range:34,status:0},{index:39,keyword:"搜索关键词-38",count:72,range:95,status:0},{index:40,keyword:"搜索关键词-39",count:69,range:74,status:1},{index:41,keyword:"搜索关键词-40",count:553,range:21,status:1},{index:42,keyword:"搜索关键词-41",count:430,range:2,status:1},{index:43,keyword:"搜索关键词-42",count:86,range:23,status:1},{index:44,keyword:"搜索关键词-43",count:626,range:2,status:1},{index:45,keyword:"搜索关键词-44",count:266,range:8,status:1},{index:46,keyword:"搜索关键词-45",count:943,range:61,status:0},{index:47,keyword:"搜索关键词-46",count:417,range:17,status:1},{index:48,keyword:"搜索关键词-47",count:151,range:92,status:1},{index:49,keyword:"搜索关键词-48",count:197,range:63,status:0},{index:50,keyword:"搜索关键词-49",count:578,range:18,status:1}];this.total=t.length,this.data=t}},mounted:function(){this.getData()}},W=V,J=Object(y["a"])(W,B,M,!1,null,null,null),q=J.exports,X={components:{searchTable:q},data:function(){return{}},methods:{handleSetSearchChart:function(){this.searchUserChart=c.a.init(this.$refs.searchUserChart),this.searchCountChart=c.a.init(this.$refs.searchCountChart);var t={xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],type:"category",show:!1},yAxis:{show:!1,type:"value"},series:[{data:[120,300,150,350,70,210,130],type:"line",tooltip:!0,smooth:!0,symbol:"none",areaStyle:{normal:{opacity:.2}}}],color:["#1495EB","#00CC66","#F9D249","#ff9900","#9860DF"],grid:{left:-60,right:-20,bottom:-20,top:0,containLabel:!0},tooltip:{trigger:"axis"}};this.searchUserChart.setOption(t),this.searchCountChart.setOption(t)},handleResize:function(){this.searchUserChart&&this.searchUserChart.resize(),this.searchCountChart&&this.searchCountChart.resize()}},mounted:function(){this.handleSetSearchChart()},beforeDestroy:function(){this.searchUserChart&&(this.searchUserChart.dispose(),this.searchUserChart=null),this.searchCountChart&&(this.searchCountChart.dispose(),this.searchCountChart=null)}},H=X,Q=Object(y["a"])(H,G,U,!1,null,null,null),Y=Q.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{height:"200px"}},[n("user-gender")],1),t._m(0)])},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"200px"}},[n("div",{staticClass:"dashboard-console-user-preference"})])}],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-console-user-gender"},[n("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("Col",{staticClass:"ivu-text-center",staticStyle:{color:"#3399ff"},attrs:{span:"8"}},[n("Avatar",{staticStyle:{"background-color":"#d6f0ff",color:"#3399ff"},attrs:{icon:"ios-man",size:"large"}}),n("div",{staticClass:"ivu-mt-8"},[t._v("男性 65%")])],1),n("Col",{staticClass:"ivu-text-center",staticStyle:{color:"#be6be0"},attrs:{span:"8"}},[n("Avatar",{staticStyle:{color:"#be6be0","background-color":"#fdf0ff"},attrs:{icon:"ios-woman",size:"large"}}),n("div",{staticClass:"ivu-mt-8"},[t._v("女性 25%")])],1),n("Col",{staticClass:"ivu-text-center",staticStyle:{color:"#babdc3"},attrs:{span:"8"}},[n("Avatar",{staticStyle:{color:"#babdc3","background-color":"#e6edf5"},attrs:{icon:"md-man",size:"large"}}),n("div",{staticClass:"ivu-mt-8"},[t._v("未知 10%")])],1)],1),n("div",{staticClass:"dashboard-console-user-gender-grid ivu-mt-8"},[n("Grid",{attrs:{center:"",square:"",col:25,padding:"2px",border:!1}},t._l(100,(function(t){return n("GridItem",{key:t},[n("span",t<=65?{staticStyle:{"background-color":"#3399ff"}}:t<=90?{staticStyle:{"background-color":"#be6be0"}}:{staticStyle:{"background-color":"#babdc3"}})])})),1)],1)],1)},nt=[],rt={data:function(){return{}}},at=rt,st=(n("e217"),Object(y["a"])(at,et,nt,!1,null,null,null)),it=st.exports,ot={components:{userGender:it}},ut=ot,ct=(n("37c8d"),Object(y["a"])(ut,Z,tt,!1,null,null,null)),dt=ct.exports,lt=n("8593"),ht=(n("e069"),n("c276")),ft={name:"index",components:{baseInfo:x,gridMenu:j,visitChart:A,userChart:P,hotSearch:Y,userPreference:dt},data:function(){return{visitType:"day",visitDate:[new Date,new Date]}},mounted:function(){Object(ht["d"])("auth")||g().then((function(t){})).catch((function(t){})),this.getAuth()},methods:{getAuth:function(){var t=this;Object(lt["a"])().then((function(e){var n=e.data||{};n.auth_code&&n.auth&&(t.authCode=n.auth_code,t.auth=!0)})).catch((function(t){}))}}},mt=ft,gt=(n("bbe41"),Object(y["a"])(mt,r,a,!1,null,null,null));e["default"]=gt.exports},ffd3:function(t,e,n){"use strict";var r=n("39f9"),a=n.n(r);a.a}}]);