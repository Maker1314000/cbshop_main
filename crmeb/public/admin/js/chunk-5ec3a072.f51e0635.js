(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ec3a072"],{"2b67":function(t,e,n){"use strict";var a=n("c30e"),i=n.n(a);i.a},"2c3e":function(t,e,n){var a=n("da84"),i=n("83ab"),r=n("9f7f").MISSED_STICKY,o=n("c6b6"),s=n("edd0"),c=n("69f3").get,u=RegExp.prototype,l=a.TypeError;i&&r&&s(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!c(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},"4d63":function(t,e,n){var a=n("83ab"),i=n("da84"),r=n("e330"),o=n("94ca"),s=n("7156"),c=n("9112"),u=n("241c").f,l=n("3a9b"),d=n("44e7"),f=n("577e"),g=n("90d8"),m=n("9f7f"),h=n("aeb0"),v=n("cb2d"),p=n("d039"),b=n("1a2d"),w=n("69f3").enforce,x=n("2626"),_=n("b622"),k=n("fce3"),y=n("107c"),C=_("match"),j=i.RegExp,O=j.prototype,R=i.SyntaxError,E=r(O.exec),D=r("".charAt),M=r("".replace),I=r("".indexOf),$=r("".slice),S=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,L=/a/g,V=/a/g,W=new j(L)!==L,P=m.MISSED_STICKY,z=m.UNSUPPORTED_Y,q=a&&(!W||P||k||y||p((function(){return V[C]=!1,j(L)!=L||j(V)==V||"/a/i"!=j(L,"i")}))),N=function(t){for(var e,n=t.length,a=0,i="",r=!1;a<=n;a++)e=D(t,a),"\\"!==e?r||"."!==e?("["===e?r=!0:"]"===e&&(r=!1),i+=e):i+="[\\s\\S]":i+=e+D(t,++a);return i},T=function(t){for(var e,n=t.length,a=0,i="",r=[],o={},s=!1,c=!1,u=0,l="";a<=n;a++){if(e=D(t,a),"\\"===e)e+=D(t,++a);else if("]"===e)s=!1;else if(!s)switch(!0){case"["===e:s=!0;break;case"("===e:E(S,$(t,a+1))&&(a+=2,c=!0),i+=e,u++;continue;case">"===e&&c:if(""===l||b(o,l))throw new R("Invalid capture group name");o[l]=!0,r[r.length]=[l,u],c=!1,l="";continue}c?l+=e:i+=e}return[i,r]};if(o("RegExp",q)){for(var A=function(t,e){var n,a,i,r,o,u,m=l(O,this),h=d(t),v=void 0===e,p=[],b=t;if(!m&&h&&v&&t.constructor===A)return t;if((h||l(O,t))&&(t=t.source,v&&(e=g(b))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),b=t,k&&"dotAll"in L&&(a=!!e&&I(e,"s")>-1,a&&(e=M(e,/s/g,""))),n=e,P&&"sticky"in L&&(i=!!e&&I(e,"y")>-1,i&&z&&(e=M(e,/y/g,""))),y&&(r=T(t),t=r[0],p=r[1]),o=s(j(t,e),m?this:O,A),(a||i||p.length)&&(u=w(o),a&&(u.dotAll=!0,u.raw=A(N(t),n)),i&&(u.sticky=!0),p.length&&(u.groups=p)),t!==b)try{c(o,"source",""===b?"(?:)":b)}catch(x){}return o},U=u(j),F=0;U.length>F;)h(A,j,U[F++]);O.constructor=A,A.prototype=O,v(i,"RegExp",A,{constructor:!0})}x("RegExp")},"61f7":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return l}));var a=n("fc11"),i=n("f3f3");n("ac1f"),n("00b4"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("498a"),n("d3b7"),n("b64b"),n("99af");function r(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in n)if(new RegExp("(".concat(a,")")).test(e)){var i=n[a]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?i:o(i))}return e}function o(t){return("00"+t).substr(t.length)}var s={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};var c=function(t,e){t.message=function(t){return e.replace("%s",t||"")}};function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])({required:!0,message:t,type:"string"},e)}function l(t){return d.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}c(u,"请输入%s"),c(l,"%s格式不正确");var d=Object.keys(s).reduce((function(t,e){return t[e]=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="range"===e?{min:t[0],max:t[1]}:Object(a["a"])({},e,t);return Object(i["a"])(Object(i["a"])({message:n.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},o),r)},c(t[e],s[e]),t}),{})},aa0e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title mr20",domProps:{textContent:t._s(t.$route.meta.title)}})])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[n("Row",{attrs:{type:"flex",gutter:24,align:"middle"}},[n("Col",t._b({},"Col",t.grid,!1),[n("FormItem",{attrs:{label:"搜索：","label-for":"status"}},[n("Input",{staticStyle:{width:"300px"},attrs:{search:"","enter-button":"",placeholder:"请输入姓名、UID"},on:{"on-search":t.userSearchs},model:{value:t.formValidate.keyword,callback:function(e){t.$set(t.formValidate,"keyword",e)},expression:"formValidate.keyword"}})],1)],1)],1)],1)],1),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Row",{staticClass:"ivu-mt box-wrapper"},[n("Col",{ref:"rightBox",attrs:{xs:24,sm:24}},[n("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns,data:t.userLists,loading:t.loading,"highlight-row":"","no-formValidate-text":"暂无数据","no-filtered-formValidate-text":"暂无筛选结果"},scopedSlots:t._u([{key:"avatars",fn:function(t){var e=t.row;t.index;return[n("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"row.avatar"}]})])]}},{key:"nickname",fn:function(e){var a=e.row;e.index;return[n("div",{staticClass:"acea-row"},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:"男"===a.sex,expression:"row.sex === '男'"}],staticClass:"mr5",attrs:{type:"md-male",color:"#2db7f5",size:"15"}}),n("Icon",{directives:[{name:"show",rawName:"v-show",value:"女"===a.sex,expression:"row.sex === '女'"}],staticClass:"mr5",attrs:{type:"md-female",color:"#ed4014",size:"15"}}),n("div",{domProps:{textContent:t._s(a.nickname)}})],1)]}},{key:"status",fn:function(e){var a=e.row;e.index;return[n("i-switch",{attrs:{value:a.division_status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(a)}},model:{value:a.division_status,callback:function(e){t.$set(a,"division_status",e)},expression:"row.division_status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"division_end_time",fn:function(e){var a=e.row;e.index;return[n("span",[t._v(" "+t._s(a.division_end_time))])]}},{key:"division_percent",fn:function(e){var a=e.row;e.index;return[n("span",[t._v(" "+t._s(a.division_percent)+"%")])]}},{key:"action",fn:function(e){var a=e.row,i=e.index;return[n("a",{on:{click:function(e){return t.jump(a.uid)}}},[t._v("查看员工")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.groupAdd(a.uid)}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.del(a,"删除代理商",i)}}},[t._v("删除")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1)],1)],1),n("Modal",{staticClass:"order_box",attrs:{scrollable:"",title:"员工列表",width:"800","footer-hide":""},model:{value:t.staffModal,callback:function(e){t.staffModal=e},expression:"staffModal"}},[n("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns2,data:t.clerkLists,loading:t.loading,"highlight-row":"","no-formValidate-text":"暂无数据","no-filtered-formValidate-text":"暂无筛选结果"},scopedSlots:t._u([{key:"avatars",fn:function(t){var e=t.row;t.index;return[n("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"row.avatar"}]})])]}},{key:"nickname",fn:function(e){var a=e.row;e.index;return[n("div",{staticClass:"acea-row"},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:"男"===a.sex,expression:"row.sex === '男'"}],staticClass:"mr5",attrs:{type:"md-male",color:"#2db7f5",size:"15"}}),n("Icon",{directives:[{name:"show",rawName:"v-show",value:"女"===a.sex,expression:"row.sex === '女'"}],staticClass:"mr5",attrs:{type:"md-female",color:"#ed4014",size:"15"}}),n("div",{domProps:{textContent:t._s(a.nickname)}})],1)]}},{key:"agent_end_time",fn:function(e){var a=e.row;e.index;return[n("span",[t._v(" "+t._s(t._f("formatDate")(a.agent_end_time)))])]}},{key:"division_percent",fn:function(e){var a=e.row;e.index;return[n("span",[t._v(" "+t._s(a.division_percent)+"%")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total2,current:t.clerkReqData.page,"show-elevator":"","show-total":"","page-size":t.clerkReqData.limit},on:{"on-change":t.clerkPageChange}})],1)],1)],1)},i=[],r=n("c964"),o=n("f3f3"),s=(n("a434"),n("96cf"),n("2f62")),c=n("bbbc"),u=n("61f7"),l={name:"agent_extra",data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},total:0,total2:0,userLists:[],formInline:{uid:0,proportion:0,image:""},columns2:[{title:"用户UID",key:"uid",width:80},{title:"头像",slot:"avatars",minWidth:60},{title:"姓名",slot:"nickname",minWidth:150},{title:"分销比例",slot:"division_percent",minWidth:100},{title:"订单数量",key:"order_count",minWidth:100}],columns:[{title:"用户UID",key:"uid",width:80},{title:"头像",slot:"avatars",minWidth:60},{title:"姓名",slot:"nickname",minWidth:150},{title:"分销比例",slot:"division_percent",minWidth:100},{title:"员工数量",key:"agent_count",minWidth:100},{title:"订单数量",key:"order_count",minWidth:100},{title:"截止时间",slot:"division_end_time",minWidth:100},{title:"状态",slot:"status",minWidth:100},{title:"操作",slot:"action",fixed:"right",minWidth:120}],FromData:null,loading:!1,current:0,formValidate:{page:1,limit:15,keyword:""},staffModal:!1,clerkReqData:{uid:0,page:1,limit:15},clerkLists:[]}},filters:{formatDate:function(t){if(0!==t){var e=new Date(1e3*t);return Object(u["a"])(e,"yyyy-MM-dd hh:mm")}}},computed:Object(o["a"])(Object(o["a"])({},Object(s["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.getList()},methods:{userSearchs:function(){this.formValidate.page=1,this.getList()},jump:function(t){this.clerkReqData.uid=t,this.getClerkList()},getClerkList:function(){var t=this;this.clerkReqData.division_type=3,Object(c["d"])(this.clerkReqData).then((function(e){t.clerkLists=e.data.list,t.total2=e.data.count,t.staffModal=!0}))},getList:function(){var t=this;this.loading=!0,this.formValidate.division_type=2,Object(c["l"])(this.formValidate).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=n.data,t.userLists=a.list,t.total=a.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},clerkPageChange:function(){this.clerkReqData.page=index,this.getClerkList()},groupAdd:function(t){var e=this;this.$modalForm(Object(c["a"])(t)).then((function(t){e.getList()})).catch((function(t){}))},onchangeIsShow:function(t){var e=this,n={id:t.uid,status:t.division_status};Object(c["g"])(n).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(n.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},edit:function(t){},del:function(t,e,n){var a=this,i={title:e,method:"DELETE",uid:t.uid,url:"agent/division/del/2/".concat(t.uid)};this.$modalSure(i).then((function(t){a.$Message.success(t.msg),a.userLists.splice(n,1)})).catch((function(t){a.$Message.error(t.msg)}))}}},d=l,f=(n("2b67"),n("2877")),g=Object(f["a"])(d,a,i,!1,null,"b7f05c5a",null);e["default"]=g.exports},bbbc:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"n",(function(){return o})),n.d(e,"m",(function(){return s})),n.d(e,"h",(function(){return c})),n.d(e,"j",(function(){return u})),n.d(e,"i",(function(){return l})),n.d(e,"o",(function(){return d})),n.d(e,"l",(function(){return f})),n.d(e,"f",(function(){return g})),n.d(e,"a",(function(){return m})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return v})),n.d(e,"d",(function(){return p})),n.d(e,"g",(function(){return b}));n("99af");var a=n("6b6c");function i(t){return Object(a["a"])({url:"agent/index",method:"get",params:t})}function r(t){return Object(a["a"])({url:"agent/spread",method:"PUT",data:t})}function o(t){return Object(a["a"])({url:"agent/statistics",method:"get",params:t})}function s(t,e){return Object(a["a"])({url:t,method:"get",params:e})}function c(t){return Object(a["a"])({url:"agent/look_code",method:"get",params:t})}function u(t){return Object(a["a"])({url:"agent/look_xcx_code",method:"get",params:t})}function l(t){return Object(a["a"])({url:"agent/look_h5_code",method:"get",params:t})}function d(t){return Object(a["a"])({url:"export/userAgent",method:"get",params:t})}function f(t){return Object(a["a"])({url:"agent/division/list",method:"get",params:t})}function g(t){return Object(a["a"])({url:"agent/division/agent_apply/list",method:"get",params:t})}function m(t){return Object(a["a"])({url:"agent/division/agent/create/".concat(t),method:"get"})}function h(t,e){return Object(a["a"])({url:"agent/division/examine_apply/".concat(t,"/").concat(e),method:"get"})}function v(t){return Object(a["a"])({url:"agent/division/create/".concat(t),method:"get"})}function p(t){return Object(a["a"])({url:"agent/division/down_list",method:"get",params:t})}function b(t){return Object(a["a"])({url:"agent/division/set_status/".concat(t.status,"/").concat(t.id),method:"put"})}},c30e:function(t,e,n){},c607:function(t,e,n){var a=n("da84"),i=n("83ab"),r=n("fce3"),o=n("c6b6"),s=n("edd0"),c=n("69f3").get,u=RegExp.prototype,l=a.TypeError;i&&r&&s(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!c(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})},edd0:function(t,e,n){var a=n("13d2"),i=n("9bf2");t.exports=function(t,e,n){return n.get&&a(n.get,e,{getter:!0}),n.set&&a(n.set,e,{setter:!0}),i.f(t,e,n)}}}]);