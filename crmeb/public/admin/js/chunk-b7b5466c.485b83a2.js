(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7b5466c"],{1336:function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"g",(function(){return d}));var r=n("6b6c");function a(t){return Object(r["a"])({url:"cms/cms",method:"get",params:t})}function i(t){return Object(r["a"])({url:"cms/cms",method:"post",data:t})}function o(t){return Object(r["a"])({url:"cms/cms/".concat(t),method:"get"})}function s(){return Object(r["a"])({url:"cms/category/create",method:"GET"})}function c(t){return Object(r["a"])({url:"cms/category",method:"GET",params:t})}function l(t){return Object(r["a"])({url:"cms/category/".concat(t,"/edit"),method:"GET"})}function u(t){return Object(r["a"])({url:"cms/category/set_status/".concat(t.id,"/").concat(t.status),method:"put"})}function d(t,e){return Object(r["a"])({url:"cms/cms/relation/".concat(e),method:"put",data:t})}},"1f92":function(t,e,n){},"3b2b":function(t,e,n){var r=n("7726"),a=n("5dbc"),i=n("86cc").f,o=n("9093").f,s=n("aae3"),c=n("0bfb"),l=r.RegExp,u=l,d=l.prototype,m=/a/g,f=/a/g,h=new l(m)!==m;if(n("9e1e")&&(!h||n("79e5")((function(){return f[n("2b4c")("match")]=!1,l(m)!=m||l(f)==f||"/a/i"!=l(m,"i")})))){l=function(t,e){var n=this instanceof l,r=s(t),i=void 0===e;return!n&&r&&t.constructor===l&&i?t:a(h?new u(r&&!i?t.source:t,e):u((r=t instanceof l)?t.source:t,r&&i?c.call(t):e),n?this:d,l)};for(var g=function(t){t in l||i(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},p=o(u),v=0;p.length>v;)g(p[v++]);d.constructor=l,l.prototype=d,n("2aba")(r,"RegExp",l)}n("7a56")("RegExp")},"61f7":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return d}));n("8e6e"),n("ac6a"),n("456d");var r=n("ade3");n("6b54"),n("3b2b"),n("a481");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(e)){var a=n[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?a:s(a))}return e}function s(t){return("00"+t).substr(t.length)}var c={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};var l=function(t,e){t.message=function(t){return e.replace("%s",t||"")}};function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i({required:!0,message:t,type:"string"},e)}function d(t){return m.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}l(u,"请输入%s"),l(d,"%s格式不正确");var m=Object.keys(c).reduce((function(t,e){return t[e]=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="range"===e?{min:t[0],max:t[1]}:Object(r["a"])({},e,t);return i(i({message:n.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},o),a)},l(t[e],c[e]),t}),{})},"7a0c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Form",{ref:"artFrom",attrs:{model:t.artFrom,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[n("Row",{attrs:{type:"flex",gutter:24}},[n("Col",t._b({},"Col",t.grid,!1),[n("FormItem",{attrs:{label:"文章分类：","label-for":"pid"}},[n("i-select",{staticClass:"treeSel",staticStyle:{width:"80%"},attrs:{value:t.artFrom.pid,placeholder:"请选择"}},[t._l(t.list,(function(e,r){return n("i-option",{key:r,staticStyle:{display:"none"},attrs:{value:e.value}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])})),n("Tree",{attrs:{data:t.treeData},on:{"on-select-change":t.handleCheckChange}})],2)],1)],1),n("Col",t._b({},"Col",t.grid,!1),[n("FormItem",{attrs:{label:"文章搜索：","label-for":"title"}},[n("Input",{staticStyle:{width:"80%"},attrs:{search:"","enter-button":"",placeholder:"请输入"},on:{"on-search":t.userSearchs},model:{value:t.artFrom.title,callback:function(e){t.$set(t.artFrom,"title",e)},expression:"artFrom.title"}})],1)],1)],1),n("Row",{attrs:{type:"flex"}},[n("Col",t._b({},"Col",t.grid,!1),[n("router-link",{directives:[{name:"auth",rawName:"v-auth",value:["cms-article-creat"],expression:"['cms-article-creat']"}],attrs:{to:"/admin/cms/article/add_article"}},[n("Button",{staticClass:"bnt",attrs:{type:"primary",icon:"md-add"}},[t._v("添加文章")])],1)],1)],1)],1),n("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.cmsList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"titles",fn:function(e){var r=e.row;e.index;return[n("span",[t._v(t._s(" [ "+r.catename+" ] "+r.title))])]}},{key:"image_inputs",fn:function(e){var r=e.row;e.index;return[0!==r.image_input.length?n("div",{directives:[{name:"viewer",rawName:"v-viewer"}]},t._l(r.image_input,(function(t,e){return n("div",{key:e,staticClass:"tabBox_img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}]})])})),0):t._e()]}},{key:"action",fn:function(e){var r=e.row,a=e.index;return[n("a",{on:{click:function(e){return t.edit(r)}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.artRelation(r,"取消关联",a)}}},[t._v(t._s(0===r.product_id?"关联":"取消关联"))]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.del(r,"删除文章",a)}}},[t._v("删除")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,current:t.artFrom.page,"show-elevator":"","show-total":"","page-size":t.artFrom.limit},on:{"on-change":t.pageChange}})],1)],1),n("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",footerHide:"",scrollable:"",width:"900"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[t.modals?n("goods-list",{ref:"goodslist",on:{getProductId:t.getProductId}}):t._e()],1)],1)},a=[],i=(n("8e6e"),n("456d"),n("ac6a"),n("96cf"),n("1da1")),o=n("ade3"),s=(n("c5f6"),n("2f62")),c=n("1336"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:"选择商品","mask-closable":!1,width:"950"},on:{"on-cancel":t.handleReset},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[n("Form",{ref:"levelFrom",attrs:{model:t.levelFrom,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[n("Row",{attrs:{type:"flex",gutter:24}},[n("Col",t._b({},"Col",t.grid,!1),[n("FormItem",{attrs:{label:"商品名称：",prop:"status2","label-for":"status2"}},[n("Input",{staticStyle:{width:"100%"},attrs:{search:"","enter-button":"",placeholder:"请输入商品名称"},on:{"on-search":t.userSearchs},model:{value:t.levelFrom.name,callback:function(e){t.$set(t.levelFrom,"name",e)},expression:"levelFrom.name"}})],1)],1)],1)],1),n("Divider",{attrs:{dashed:""}}),n("Table",{ref:"table",attrs:{columns:t.columns1,data:t.levelLists,loading:t.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"is_shows",fn:function(e){var r=e.row;e.index;return[n("i-switch",{attrs:{value:r.is_show,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(r)}},model:{value:r.is_show,callback:function(e){t.$set(r,"is_show",e)},expression:"row.is_show"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"is_musts",fn:function(e){var r=e.row;e.index;return[n("i-switch",{attrs:{value:r.is_must,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsMust(r)}},model:{value:r.is_must,callback:function(e){t.$set(r,"is_must",e)},expression:"row.is_must"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("全部完成")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("达成其一")])])]}},{key:"action",fn:function(e){var r=e.row;e.index;return[n("a",{on:{click:function(e){return t.edit(r)}}},[t._v("编辑  | ")]),n("a",{on:{click:function(e){return t.del(r,"删除任务")}}},[t._v("  删除")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,"show-elevator":"","show-total":"","page-size":t.levelFrom.limit},on:{"on-change":t.pageChange}})],1),n("edit-from",{ref:"edits",attrs:{FromData:t.FromData,titleType:t.titleType},on:{submitFail:t.submitFail}})],1)},u=[],d={name:"relation",data:function(){return{modals:!1,grid:{xl:12,lg:12,md:12,sm:24,xs:24}}},methods:{handleReset:function(){this.modals=!1},userSearchs:function(){this.getList()},getList:function(){var t=this;this.loading=!0,taskListApi(this.levelId,this.levelFrom).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.levelLists=r.list,t.total=n.data.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.levelFrom.page=t,this.getList()}}},m=d,f=n("2877"),h=Object(f["a"])(m,l,u,!1,null,"5f603543",null),g=h.exports,p=n("61f7"),v=n("c4ad");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y={name:"addArticle",data:function(){return{modalTitleSs:"",currentTab:"",grid:{xl:8,lg:8,md:12,sm:24,xs:24},loading:!1,artFrom:{pid:0,title:"",page:1,limit:20},total:0,columns1:[{title:"ID",key:"id",width:80},{title:"文章图片",slot:"image_inputs",minWidth:90},{title:"文章名称",slot:"titles",minWidth:130},{title:"关联商品",key:"store_name",minWidth:130},{title:"浏览量",key:"visit",minWidth:80},{title:"时间",key:"add_time",sortable:!0,render:function(t,e){return t("div",Object(p["a"])(new Date(1e3*Number(e.row.add_time)),"yyyy-MM-dd hh:mm"))},minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:150}],cmsList:[],treeData:[],list:[],cid:0,cmsId:0,formValidate:{type:1},rows:{},modal_loading:!1,modals:!1}},components:{relationList:g,goodsList:v["default"]},computed:w(w({},Object(s["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){},mounted:function(){this.artFrom.pid=this.$route.query.id?this.$route.query.id:0,this.getList(),this.getClass()},methods:{getProductId:function(t){var e=this,n={product_id:t.id};Object(c["g"])(n,this.rows.id).then(function(){var n=Object(i["a"])(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$Message.success(r.msg),t.id=0,e.modal_loading=!1,e.modals=!1,setTimeout((function(){e.getList()}),500);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).catch((function(t){e.modal_loading=!1,e.loading=!1,e.$Message.error(t.msg)}))},cancel:function(){this.modals=!1},getList:function(){var t=this;this.loading=!0,Object(c["e"])(this.artFrom).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.cmsList=r.list,t.total=r.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},getClass:function(){var t=this;Object(c["c"])(this.formValidate).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.treeData=r,a={id:0,title:"全部"},t.treeData.unshift(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},pageChange:function(t){this.artFrom.page=t,this.getList()},handleCheckChange:function(t){var e="",n="";this.list=[],this.artFrom.pid=0,t.forEach((function(t,r){e+="".concat(t.id,","),n+="".concat(t.title,",")})),e=e.substring(0,e.length-1),n=n.substring(0,n.length-1),this.list.push({value:e,title:n}),this.artFrom.pid=e,this.artFrom.page=1,this.getList()},edit:function(t){this.$router.push({path:"/admin/cms/article/add_article/"+t.id})},artRelation:function(t,e,n){var r=this;if(this.rows=t,0===t.product_id)this.modals=!0;else{var a={title:e,num:n,url:"/cms/cms/unrelation/".concat(t.id),method:"PUT",ids:""};this.$modalSure(a).then((function(t){r.$Message.success(t.msg),r.getList()})).catch((function(t){r.$Message.error(t.msg)}))}},del:function(t,e,n){var r=this,a={title:e,num:n,url:"cms/cms/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(a).then((function(t){r.$Message.success(t.msg),r.cmsList.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))},userSearchs:function(){this.artFrom.page=1,this.getList()}}},O=y,_=(n("b4d1"),Object(f["a"])(O,r,a,!1,null,"43730552",null));e["default"]=_.exports},b4d1:function(t,e,n){"use strict";var r=n("1f92"),a=n.n(r);a.a}}]);