(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3afc7a10"],{"01e3":function(t,e,a){"use strict";var n=a("490e");a.n(n).a},"490e":function(t,e,a){},"520c":function(t,e,a){},"5b832":function(t,e,a){t.exports=a.p+"img/abbreviationBig.8b2693c4.png"},"6dc8":function(t,e,a){"use strict";a.r(e),a("d3b7"),a("25f0");var n=a("b311"),r=a.n(n),o=(n=a("b0e7"),a("90e7")),i=(n={components:{uploadPictures:n.a},data:function(){return{modalPic:!1,saveType:0,isChoice:"单选",gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},positionId:1,positiontlt:"",formValidate:{thumb_big_height:"",thumb_big_width:"",thumb_mid_width:"",thumb_mid_height:"",thumb_small_height:"",thumb_small_width:"",image_watermark_status:!1,watermark_type:1,watermark_opacity:"",watermark_rotate:"",watermark_position:1},boxs:[{content:"左上",id:1},{content:"上",id:2},{content:"右上",id:3},{content:"左中",id:4},{content:"中",id:5},{content:"右中",id:6},{content:"左下",id:7},{content:"下",id:8},{content:"右下",id:9}],ruleValidate:{},configuModal:!1,configData:"",headerList:[{label:"储存配置",value:"1"},{label:"七牛云储存",value:"2"},{label:"阿里云储存",value:"3"},{label:"腾讯云储存",value:"4"}],columns:[{title:"储存空间名称",key:"name",align:"center",minWidth:200},{title:"区域",key:"_region",align:"center",minWidth:100},{title:"空间域名",key:"domain",align:"center",minWidth:200},{title:"使用状态",slot:"status",align:"center",width:90},{title:"创建时间",key:"_add_time",align:"center",minWidth:150},{title:"更新时间",key:"_update_time",align:"center",minWidth:150},{title:"操作",slot:"action",width:210,align:"center"}],total:0,list:{page:1,limit:15,type:"1"},levelLists:[],currentTab:"1",loading:!1,addData:{input:"",select:"",jurisdiction:"1",type:"1"},confData:{AccessKeyId:"",AccessKeySecret:""},localStorage:!1}},created:function(){var t=this;Object(o.rb)().then((function(e){1==e.data.type&&(t.localStorage=!0),t.formValidate.upload_type=e.data.type,t.changeTab(e.data.type.toString())}))},mounted:function(){this.$nextTick((function(){var t=this;new r.a(".copy-data").on("success",(function(){t.$Message.success("复制成功")}))}))},methods:{changeSave:function(t){var e=this;Object(o.ab)(t).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))},bindbox:function(t){this.positionId=t.id,this.positiontlt=t.content,this.formValidate.watermark_position=t.id},handleSubmit:function(t){var e=this;this.formValidate.image_watermark_status?this.formValidate.image_watermark_status=1:this.formValidate.image_watermark_status=0,this.formValidate.image_watermark_status?this.$refs[t].validate((function(t){t?e.postMessage(e.formValidate):e.$Message.error("Fail!")})):this.postMessage(this.formValidate)},postMessage:function(t){var e=this;Object(o.U)(t).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))},modalPicTap:function(){this.modalPic=!0},getPic:function(t){this.formValidate.watermark_image=t.att_dir,this.modalPic=!1},config:function(t){this.configuModal=!0,this.configData=t},synchro:function(){var t=this;Object(o.vb)(this.currentTab).then((function(e){t.$Message.success(e.msg),t.getlist()})).catch((function(e){t.$Message.error(e.msg)}))},addStorageBtn:function(){var t=this;this.$modalForm(Object(o.b)(this.currentTab)).then((function(){t.getlist()}))},addConfigBtn:function(){var t=this;this.$modalForm(Object(o.a)(this.currentTab)).then((function(){t.getlist()}))},edit:function(t){var e=this;this.$modalForm(Object(o.k)(t.id)).then((function(){e.getlist()}))},changeSwitch:function(t,e){var a=this;return new Promise((function(e){a.$Modal.confirm({title:"切换状态",content:"您确认要切换使用状态吗？",onOk:function(){Object(o.tb)(t.id).then((function(t){a.$Message.success(t.msg),a.getlist()})).catch((function(t){a.$Message.error(t.msg)}))},onCancel:function(){a.$Message.info("已取消"),a.getlist()}})}))},getlist:function(){var t=this;this.loading=!0,Object(o.sb)(this.list).then((function(e){t.total=e.data.count,t.levelLists=e.data.list,t.loading=!1}))},changeTab:function(t){this.currentTab=t,this.list.type=t,(this.list.page=1)==t?this.getposition():this.getlist()},getposition:function(){var t=this,e=this;Object(o.T)().then((function(a){t.formValidate=a.data,1==a.data.image_watermark_status?e.formValidate.image_watermark_status=!0:e.formValidate.image_watermark_status=!1,t.positionId=a.data.watermark_position;for(var n=0;n<t.boxs.length;n++)t.boxs[n].id==a.data.watermark_position&&e.bindbox(t.boxs[n])}))},addSwitch:function(t){var e=this;t&&(this.localStorage=1),Object(o.ub)({type:this.localStorage}).then((function(t){e.$Message.success(t.msg),e.getlist()})).catch((function(t){e.$Message.error(t.msg)}))},del:function(t,e,a){var n=this;e={title:e,num:a,url:"system/config/storage/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){n.$Message.success(t.msg),n.getlist()})).catch((function(t){n.$Message.error(t.msg)}))},pageChange:function(t){this.list.page=t,this.getlist()}}},a("bc2e"),a("01e3"),a("2877"));i=Object(i.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))]),n("div",[n("Tabs",{on:{"on-click":t.changeTab},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.headerList,(function(t,e){return n("TabPane",{key:e,attrs:{label:t.label,name:t.value.toString()}})})),1)],1)]),n("div",{staticClass:"table-box",staticStyle:{"padding-bottom":"0"}},[n("Card",{attrs:{bordered:!1,"dis-hover":""}},[n("h3",[t._v("使用说明")]),1==t.currentTab?[n("p",[t._v("上传图片时会生成缩略图")]),n("p",[t._v("未设置按照系统默认生成，系统默认：大图800*800，中图300*300，小图150*150")]),n("p",[t._v("水印只在上传图片时生成，原图，大中小缩略图上都按照比例存在。")]),n("p",[t._v("若上传图片时未开启水印，则该图在开启水印之后依旧无水印效果。")])]:[2==t.currentTab?n("p",[t._v("\n          七牛云开通方法："),n("a",{attrs:{href:"https://doc.crmeb.com/web/single/crmeb_v4/987",target:"_blank"}},[t._v("点击查看")])]):t._e(),3==t.currentTab?n("p",[t._v("\n          阿里云oss开通方法："),n("a",{attrs:{href:"https://doc.crmeb.com/web/single/crmeb_v4/985",target:"_blank"}},[t._v("点击查看")])]):t._e(),4==t.currentTab?n("p",[t._v("\n          腾讯云cos开通方法："),n("a",{attrs:{href:"https://doc.crmeb.com/web/single/crmeb_v4/986",target:"_blank"}},[t._v("点击查看")])]):t._e(),n("p",[t._v("第一步： 添加【存储空间】（空间名称不能重复）")]),n("p",[t._v("第二步： 开启【使用状态】")]),2==t.currentTab?[n("p",[t._v("第三步（必选）： 选择云存储空间列表上的修改【空间域名操作】")]),n("p",[t._v("第四步（必选）： 选择云存储空间列表上的修改【CNAME配置】，打开后复制记录值到对应的平台解析")])]:[n("p",[t._v("第三步（可选）： 选择云存储空间列表上的修改【空间域名操作】")]),n("p",[t._v("第四步（可选）： 选择云存储空间列表上的修改【CNAME配置】，打开后复制记录值到对应的平台解析")])]]],2)],1),1==t.currentTab?n("div",{staticClass:"table-box",staticStyle:{"padding-top":"10px"}},[n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Row",{attrs:{type:"flex"}},[n("Col",{attrs:{span:"24"}},[n("span",{staticClass:"save-type"},[t._v(" 存储方式： ")]),n("RadioGroup",{on:{"on-change":t.changeSave},model:{value:t.formValidate.upload_type,callback:function(e){t.$set(t.formValidate,"upload_type",e)},expression:"formValidate.upload_type"}},[n("Radio",{attrs:{label:"1"}},[t._v("本地存储")]),n("Radio",{attrs:{label:"2"}},[t._v("七牛云存储")]),n("Radio",{attrs:{label:"3"}},[t._v("阿里云存储")]),n("Radio",{attrs:{label:"4"}},[t._v("腾讯云存储")])],1)],1)],1)],1),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate}},[n("div",{staticClass:"abbreviation"},[n("div",{staticClass:"top"},[n("div",{staticClass:"topBox"},[n("div",{staticClass:"topLeft"},[n("div",{staticClass:"img"},[n("img",{staticClass:"imgs",attrs:{src:a("5b832"),alt:""}})]),n("div",[t._v("缩略大图")])]),n("div",{staticClass:"topRight"},[n("FormItem",{attrs:{label:"宽："}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入宽度"},model:{value:t.formValidate.thumb_big_width,callback:function(e){t.$set(t.formValidate,"thumb_big_width",e)},expression:"formValidate.thumb_big_width"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("px")])])],1),n("FormItem",{attrs:{label:"高："}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入高度"},model:{value:t.formValidate.thumb_big_height,callback:function(e){t.$set(t.formValidate,"thumb_big_height",e)},expression:"formValidate.thumb_big_height"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("px")])])],1)],1)]),n("div",{staticClass:"topBox"},[n("div",{staticClass:"topLeft"},[n("div",{staticClass:"img"},[n("img",{staticClass:"imgs",attrs:{src:a("ad20"),alt:""}})]),n("div",[t._v("缩略中图")])]),n("div",{staticClass:"topRight"},[n("FormItem",{attrs:{label:"宽："}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入宽度"},model:{value:t.formValidate.thumb_mid_width,callback:function(e){t.$set(t.formValidate,"thumb_mid_width",e)},expression:"formValidate.thumb_mid_width"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("px")])])],1),n("FormItem",{attrs:{label:"高："}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入高度"},model:{value:t.formValidate.thumb_mid_height,callback:function(e){t.$set(t.formValidate,"thumb_mid_height",e)},expression:"formValidate.thumb_mid_height"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("px")])])],1)],1)]),n("div",{staticClass:"topBox"},[n("div",{staticClass:"topLeft"},[n("div",{staticClass:"img"},[n("img",{staticClass:"imgs",attrs:{src:a("9efb"),alt:""}})]),n("div",[t._v("缩略小图")])]),n("div",{staticClass:"topRight"},[n("FormItem",{attrs:{label:"宽："}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入宽度"},model:{value:t.formValidate.thumb_small_width,callback:function(e){t.$set(t.formValidate,"thumb_small_width",e)},expression:"formValidate.thumb_small_width"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("px")])])],1),n("FormItem",{attrs:{label:"高："}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入高度"},model:{value:t.formValidate.thumb_small_height,callback:function(e){t.$set(t.formValidate,"thumb_small_height",e)},expression:"formValidate.thumb_small_height"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("px")])])],1)],1)])]),n("Divider"),n("div",{staticClass:"content"},[n("FormItem",{attrs:{label:"是否开启水印："}},[n("i-switch",{attrs:{size:"large"},model:{value:t.formValidate.image_watermark_status,callback:function(e){t.$set(t.formValidate,"image_watermark_status",e)},expression:"formValidate.image_watermark_status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])],1),1==t.formValidate.image_watermark_status?n("div",[n("FormItem",{attrs:{label:"水印类型："}},[n("RadioGroup",{model:{value:t.formValidate.watermark_type,callback:function(e){t.$set(t.formValidate,"watermark_type",e)},expression:"formValidate.watermark_type"}},[n("Radio",{attrs:{label:1}},[t._v("图片")]),n("Radio",{attrs:{label:2}},[t._v("文字")])],1)],1),1==t.formValidate.watermark_type?n("div",[n("div",{staticClass:"flex"},[n("FormItem",{staticClass:"contentIput",attrs:{label:"水印透明度：",prop:"name"}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入水印透明度"},model:{value:t.formValidate.watermark_opacity,callback:function(e){t.$set(t.formValidate,"watermark_opacity",e)},expression:"formValidate.watermark_opacity"}})],1),n("FormItem",{staticClass:"contentIput",attrs:{label:"水印倾斜度：",prop:"mail"}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入水印倾斜度"},model:{value:t.formValidate.watermark_rotate,callback:function(e){t.$set(t.formValidate,"watermark_rotate",e)},expression:"formValidate.watermark_rotate"}})],1)],1),n("div",{staticClass:"flex"},[n("FormItem",{staticClass:"contentIput",attrs:{label:"水印图片：",prop:"name"}},[n("div",{staticClass:"picBox",on:{click:function(e){return t.modalPicTap("单选")}}},[t.formValidate.watermark_image?n("div",{staticClass:"pictrue"},[n("img",{attrs:{src:t.formValidate.watermark_image}})]):n("div",{staticClass:"upLoad acea-row row-center-wrapper"},[n("Icon",{attrs:{type:"ios-camera-outline",size:"24"}})],1)])]),n("FormItem",{staticClass:"contentIput",attrs:{label:"水印位置：",prop:"mail"}},[n("div",{staticClass:"conents"},[n("div",{staticClass:"positionBox"},t._l(t.boxs,(function(e,a){return n("div",{key:a,staticClass:"topIput box",class:t.positionId==e.id?"on":"",on:{click:function(a){return t.bindbox(e)}}})})),0),n("div",{staticClass:"title"},[t._v(t._s(t.positiontlt))])])])],1),n("div",{staticClass:"flex"},[n("FormItem",{staticClass:"contentIput",attrs:{label:"水印横坐标偏移量：",width:"200",prop:"name"}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入水印横坐标偏移量"},model:{value:t.formValidate.watermark_x,callback:function(e){t.$set(t.formValidate,"watermark_x",e)},expression:"formValidate.watermark_x"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("px")])])],1),n("FormItem",{staticClass:"contentIput",attrs:{label:"水印纵坐标偏移量：",prop:"mail"}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入水印纵坐标偏移量"},model:{value:t.formValidate.watermark_y,callback:function(e){t.$set(t.formValidate,"watermark_y",e)},expression:"formValidate.watermark_y"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("px")])])],1)],1)]):n("div",[n("div",{staticClass:"flex"},[n("FormItem",{staticClass:"contentIput",attrs:{label:"水印文字：",prop:"name"}},[n("Input",{staticClass:"topIput",attrs:{placeholder:"请输入水印文字"},model:{value:t.formValidate.watermark_text,callback:function(e){t.$set(t.formValidate,"watermark_text",e)},expression:"formValidate.watermark_text"}})],1),n("FormItem",{staticClass:"contentIput",attrs:{label:"水印文字大小："}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入水印文字大小"},model:{value:t.formValidate.watermark_text_size,callback:function(e){t.$set(t.formValidate,"watermark_text_size",e)},expression:"formValidate.watermark_text_size"}})],1)],1),n("div",{staticClass:"flex"},[n("FormItem",{staticClass:"contentIput",attrs:{label:"水印字体颜色：",prop:"name"}},[n("ColorPicker",{model:{value:t.formValidate.watermark_text_color,callback:function(e){t.$set(t.formValidate,"watermark_text_color",e)},expression:"formValidate.watermark_text_color"}})],1),n("FormItem",{staticClass:"contentIput",attrs:{label:"水印位置：",prop:"mail"}},[n("div",{staticClass:"conents"},[n("div",{staticClass:"positionBox"},t._l(t.boxs,(function(e,a){return n("div",{key:a,staticClass:"topIput box",class:t.positionId==e.id?"on":"",on:{click:function(a){return t.bindbox(e)}}})})),0),n("div",{staticClass:"title"},[t._v(t._s(t.positiontlt))])])])],1),n("div",{staticClass:"flex"},[n("FormItem",{staticClass:"contentIput",attrs:{label:"水印字体旋转角度："}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入水印字体旋转角度"},model:{value:t.formValidate.watermark_text_angle,callback:function(e){t.$set(t.formValidate,"watermark_text_angle",e)},expression:"formValidate.watermark_text_angle"}})],1),n("FormItem",{staticClass:"contentIput",attrs:{label:"水印横坐标偏移量："}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入水印横坐标偏移量"},model:{value:t.formValidate.watermark_x,callback:function(e){t.$set(t.formValidate,"watermark_x",e)},expression:"formValidate.watermark_x"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("px")])])],1)],1),n("FormItem",{staticClass:"contentIput",attrs:{label:"水印横坐纵偏移量：",prop:"mail"}},[n("Input",{staticClass:"topIput",attrs:{type:"number",placeholder:"请输入水印横坐纵偏移量"},model:{value:t.formValidate.watermark_y,callback:function(e){t.$set(t.formValidate,"watermark_y",e)},expression:"formValidate.watermark_y"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("px")])])],1)],1)],1):t._e()],1),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("保存")])],1)],1)])],1)],1):5==t.currentTab?n("div",{staticClass:"table-box",staticStyle:{"padding-top":"10px"}}):n("div",{staticClass:"table-box",staticStyle:{"padding-top":"10px"}},[n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Row",{staticClass:"mb20",attrs:{type:"flex"}},[n("Col",{attrs:{span:"24"}},[n("Button",{attrs:{type:"primary"},on:{click:t.addStorageBtn}},[t._v("添加存储空间")]),n("Button",{staticStyle:{"margin-left":"20px"},attrs:{type:"success"},on:{click:t.synchro}},[t._v("同步存储空间")]),n("Button",{staticStyle:{float:"right"},on:{click:t.addConfigBtn}},[t._v("修改配置信息")])],1)],1),n("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns,data:t.levelLists,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"status",fn:function(e){var a=e.row,r=e.index;return[n("i-switch",{attrs:{value:a.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.changeSwitch(a,r)}},model:{value:a.status,callback:function(e){t.$set(a,"status",e)},expression:"row.status"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])]}},{key:"action",fn:function(e){var a=e.row,r=e.index;return[a.domain&&a.domain!=a.cname?[n("span",{staticClass:"btn",on:{click:function(e){return t.config(a)}}},[t._v("CNAME配置")]),n("Divider",{attrs:{type:"vertical"}})]:t._e(),n("span",{staticClass:"btn",on:{click:function(e){return t.edit(a)}}},[t._v("修改空间域名")]),n("Divider",{attrs:{type:"vertical"}}),n("span",{staticClass:"btn",on:{click:function(e){return t.del(a,"删除该数据",r)}}},[t._v("删除")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,current:t.list.page,"show-elevator":"","show-total":"","page-size":t.list.limit},on:{"on-change":t.pageChange}})],1)],1)],1),n("Modal",{attrs:{title:"CNAME配置"},model:{value:t.configuModal,callback:function(e){t.configuModal=e},expression:"configuModal"}},[n("div",[n("div",{staticClass:"confignv"},[n("span",{staticClass:"configtit"},[t._v("主机记录：")]),t._v(t._s(t.configData.domain))]),n("div",{staticClass:"confignv"},[n("span",{staticClass:"configtit"},[t._v("记录类型：")]),t._v("CNAME")]),n("div",{staticClass:"confignv"},[n("span",{staticClass:"configtit"},[t._v("记录值：")]),t._v(t._s(t.configData.cname)+"\n        "),n("span",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":t.configData.cname}},[t._v("复制")])])]),n("div",{attrs:{slot:"footer"},slot:"footer"})]),n("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":888},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?n("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic}}):t._e()],1)],1)}),[],!1,null,"5eab15fd",null);e.default=i.exports},"90e7":function(t,e,a){"use strict";a.d(e,"t",(function(){return r})),a.d(e,"j",(function(){return o})),a.d(e,"Gb",(function(){return i})),a.d(e,"Fb",(function(){return s})),a.d(e,"i",(function(){return c})),a.d(e,"cb",(function(){return u})),a.d(e,"Kb",(function(){return l})),a.d(e,"c",(function(){return d})),a.d(e,"d",(function(){return m})),a.d(e,"V",(function(){return p})),a.d(e,"bb",(function(){return f})),a.d(e,"hb",(function(){return b})),a.d(e,"B",(function(){return h})),a.d(e,"Tb",(function(){return g})),a.d(e,"nb",(function(){return _})),a.d(e,"mb",(function(){return v})),a.d(e,"y",(function(){return w})),a.d(e,"z",(function(){return k})),a.d(e,"l",(function(){return O})),a.d(e,"db",(function(){return j})),a.d(e,"m",(function(){return x})),a.d(e,"gb",(function(){return C})),a.d(e,"fb",(function(){return y})),a.d(e,"eb",(function(){return V})),a.d(e,"ib",(function(){return I})),a.d(e,"kb",(function(){return T})),a.d(e,"S",(function(){return $})),a.d(e,"lb",(function(){return M})),a.d(e,"xb",(function(){return F})),a.d(e,"G",(function(){return P})),a.d(e,"wb",(function(){return S})),a.d(e,"p",(function(){return B})),a.d(e,"n",(function(){return E})),a.d(e,"o",(function(){return R})),a.d(e,"q",(function(){return D})),a.d(e,"r",(function(){return G})),a.d(e,"ob",(function(){return L})),a.d(e,"Sb",(function(){return z})),a.d(e,"pb",(function(){return q})),a.d(e,"Nb",(function(){return A})),a.d(e,"qb",(function(){return N})),a.d(e,"Y",(function(){return U})),a.d(e,"Pb",(function(){return W})),a.d(e,"Z",(function(){return J})),a.d(e,"W",(function(){return K})),a.d(e,"X",(function(){return H})),a.d(e,"P",(function(){return Q})),a.d(e,"A",(function(){return X})),a.d(e,"E",(function(){return Y})),a.d(e,"D",(function(){return Z})),a.d(e,"v",(function(){return tt})),a.d(e,"F",(function(){return et})),a.d(e,"Rb",(function(){return at})),a.d(e,"s",(function(){return nt})),a.d(e,"Ob",(function(){return rt})),a.d(e,"Qb",(function(){return ot})),a.d(e,"x",(function(){return it})),a.d(e,"C",(function(){return st})),a.d(e,"w",(function(){return ct})),a.d(e,"u",(function(){return ut})),a.d(e,"O",(function(){return lt})),a.d(e,"h",(function(){return dt})),a.d(e,"e",(function(){return mt})),a.d(e,"f",(function(){return pt})),a.d(e,"Hb",(function(){return ft})),a.d(e,"Ib",(function(){return bt})),a.d(e,"Jb",(function(){return ht})),a.d(e,"jb",(function(){return gt})),a.d(e,"yb",(function(){return _t})),a.d(e,"Q",(function(){return vt})),a.d(e,"Ab",(function(){return wt})),a.d(e,"zb",(function(){return kt})),a.d(e,"Bb",(function(){return Ot})),a.d(e,"Cb",(function(){return jt})),a.d(e,"Db",(function(){return xt})),a.d(e,"Eb",(function(){return Ct})),a.d(e,"Lb",(function(){return yt})),a.d(e,"Mb",(function(){return Vt})),a.d(e,"R",(function(){return It})),a.d(e,"g",(function(){return Tt})),a.d(e,"rb",(function(){return $t})),a.d(e,"ub",(function(){return Mt})),a.d(e,"a",(function(){return Ft})),a.d(e,"b",(function(){return Pt})),a.d(e,"sb",(function(){return St})),a.d(e,"vb",(function(){return Bt})),a.d(e,"tb",(function(){return Et})),a.d(e,"k",(function(){return Rt})),a.d(e,"T",(function(){return Dt})),a.d(e,"U",(function(){return Gt})),a.d(e,"ab",(function(){return Lt})),a.d(e,"N",(function(){return zt})),a.d(e,"M",(function(){return qt})),a.d(e,"I",(function(){return At})),a.d(e,"H",(function(){return Nt})),a.d(e,"J",(function(){return Ut})),a.d(e,"L",(function(){return Wt})),a.d(e,"K",(function(){return Jt})),a("99af");var n=a("6b6c");function r(t){return Object(n.a)({url:"setting/config/header_basics",method:"get",params:t})}function o(t,e){return Object(n.a)({url:e,method:"get",params:t})}function i(t){return Object(n.a)({url:t.url,method:"get",params:t.data})}function s(){return Object(n.a)({url:"notify/sms/temp/create",method:"get"})}function c(t){return Object(n.a)({url:"serve/login",method:"post",data:t})}function u(t){return Object(n.a)({url:"serve/modify",method:"post",data:t})}function l(t){return Object(n.a)({url:"serve/update_phone",method:"post",data:t})}function d(t){return Object(n.a)({url:"serve/captcha",method:"post",data:t})}function m(t){return Object(n.a)({url:"serve/checkCode",method:"post",data:t})}function p(t){return Object(n.a)({url:"serve/register",method:"post",data:t})}function f(){return Object(n.a)({url:"serve/info",method:"get"})}function b(t){return Object(n.a)({url:"serve/sms/sign",method:"PUT",data:t})}function h(t){return Object(n.a)({url:"app/wechat/kefu/login/".concat(t),method:"get"})}function g(t){return Object(n.a)({url:"app/wechat/speechcraft",method:"get",params:t})}function _(t){return Object(n.a)({url:"app/wechat/speechcraft/".concat(t,"/edit"),method:"get"})}function v(){return Object(n.a)({url:"app/wechat/speechcraft/create",method:"get"})}function w(t){return Object(n.a)({url:"app/feedback",method:"get",params:t})}function k(t){return Object(n.a)({url:"app/feedback/".concat(t,"/edit"),method:"get"})}function O(){return Object(n.a)({url:"serve/export_all",method:"get"})}function j(){return Object(n.a)({url:"serve/open",method:"get"})}function x(t){return Object(n.a)({url:"serve/export_temp",method:"get",params:t})}function C(t){return Object(n.a)({url:"serve/record",method:"get",params:t})}function y(t){return Object(n.a)({url:"serve/open",method:"get",params:t})}function V(t){return Object(n.a)({url:"serve/opn_express",method:"post",data:t})}function I(t){return Object(n.a)({url:"serve/sms/open",method:"get",params:t})}function T(t){return Object(n.a)({url:"serve/meal_list",method:"get",params:t})}function $(t){return Object(n.a)({url:"serve/pay_meal",method:"post",data:t})}function M(t){return Object(n.a)({url:"notify/sms/record",method:"get",params:t})}function F(){return Object(n.a)({url:"merchant/store",method:"GET"})}function P(){return Object(n.a)({url:"merchant/store/address",method:"GET"})}function S(t){return Object(n.a)({url:"merchant/store/".concat(t.id),method:"POST",data:t})}function B(t){return Object(n.a)({url:"freight/express",method:"get",params:t})}function E(){return Object(n.a)({url:"/freight/express/create",method:"get"})}function R(t){return Object(n.a)({url:"freight/express/".concat(t,"/edit"),method:"get"})}function D(t){return Object(n.a)({url:"freight/express/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function G(){return Object(n.a)({url:"freight/express/sync_express",method:"get"})}function L(){return Object(n.a)({url:"app/wechat/speechcraftcate",method:"get"})}function z(){return Object(n.a)({url:"app/wechat_qrcode/cate/list",method:"get"})}function q(){return Object(n.a)({url:"app/wechat/speechcraftcate/create",method:"get"})}function A(t){return Object(n.a)({url:"app/wechat_qrcode/cate/create/".concat(t),method:"get"})}function N(t){return Object(n.a)({url:"app/wechat/speechcraftcate/".concat(t,"/edit"),method:"get"})}function U(t){return Object(n.a)({url:"setting/role",method:"GET",params:t})}function W(t){return Object(n.a)({url:"app/wechat_qrcode/list",method:"GET",params:t})}function J(t){return Object(n.a)({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function K(t){return Object(n.a)({url:"setting/role/".concat(t.id),method:"post",data:t})}function H(t){return Object(n.a)({url:"setting/role/".concat(t,"/edit"),method:"get"})}function Q(){return Object(n.a)({url:"setting/role/create",method:"get"})}function X(t){return Object(n.a)({url:"app/wechat/kefu",method:"get",params:t})}function Y(t){return Object(n.a)({url:"app/wechat/kefu/create",method:"get",params:t})}function Z(){return Object(n.a)({url:"app/wechat/kefu/add",method:"get"})}function tt(t){return Object(n.a)({url:"app/wechat/kefu",method:"post",data:t})}function et(t){return Object(n.a)({url:"app/wechat/kefu/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function at(t){return Object(n.a)({url:"app/wechat_qrcode/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function nt(t){return Object(n.a)({url:"app/wechat_qrcode/user_list/".concat(t.id),method:"get",params:t})}function rt(t){return Object(n.a)({url:"app/wechat_qrcode/info/".concat(t),method:"get"})}function ot(t,e){return Object(n.a)({url:"app/wechat_qrcode/save/".concat(t),method:"post",data:e})}function it(t){return Object(n.a)({url:"app/wechat/kefu/".concat(t,"/edit"),method:"GET"})}function st(t,e){return Object(n.a)({url:"app/wechat/kefu/record/".concat(e),method:"GET",params:t})}function ct(t){return Object(n.a)({url:"app/wechat/kefu/chat_list",method:"GET",params:t})}function ut(){return Object(n.a)({url:"notify/sms/is_login",method:"GET"})}function lt(){return Object(n.a)({url:"notify/sms/logout",method:"GET"})}function dt(t){return Object(n.a)({url:"setting/city/list/".concat(t),method:"get"})}function mt(t){return Object(n.a)({url:"setting/city/add/".concat(t),method:"get"})}function pt(t){return Object(n.a)({url:"setting/city/".concat(t,"/edit"),method:"get"})}function ft(t){return Object(n.a)({url:"setting/shipping_templates/list",method:"get",params:t})}function bt(t){return Object(n.a)({url:"setting/shipping_templates/city_list",method:"get"})}function ht(t,e){return Object(n.a)({url:"setting/shipping_templates/save/".concat(t),method:"post",data:e})}function gt(t){return Object(n.a)({url:"setting/shipping_templates/".concat(t,"/edit"),method:"get"})}function _t(){return Object(n.a)({url:"merchant/store/get_header",method:"get"})}function vt(t){return Object(n.a)({url:"merchant/store",method:"get",params:t})}function wt(t,e){return Object(n.a)({url:"merchant/store/set_show/".concat(t,"/").concat(e),method:"put"})}function kt(t){return Object(n.a)({url:"merchant/store/get_info/".concat(t),method:"get"})}function Ot(t){return Object(n.a)({url:"merchant/store_staff",method:"get",params:t})}function jt(){return Object(n.a)({url:"merchant/store_staff/create",method:"get"})}function xt(t){return Object(n.a)({url:"merchant/store_staff/".concat(t,"/edit"),method:"get"})}function Ct(t,e){return Object(n.a)({url:"merchant/store_staff/set_show/".concat(t,"/").concat(e),method:"put"})}function yt(t){return Object(n.a)({url:"merchant/verify_order",method:"get",params:t})}function Vt(t){return Object(n.a)({url:"merchant/verify/spread_info/".concat(t),method:"get"})}function It(){return Object(n.a)({url:"merchant/store_list",method:"get"})}function Tt(){return Object(n.a)({url:"setting/city/clean_cache",method:"get"})}function $t(){return Object(n.a)({url:"system/config/storage/config",method:"get"})}function Mt(t){return Object(n.a)({url:"system/config/storage/config",method:"post",data:t})}function Ft(t){return Object(n.a)({url:"system/config/storage/form/".concat(t),method:"get"})}function Pt(t){return Object(n.a)({url:"system/config/storage/create/".concat(t),method:"get"})}function St(t){return Object(n.a)({url:"system/config/storage",method:"get",params:t})}function Bt(t){return Object(n.a)({url:"system/config/storage/synch/".concat(t),method:"put"})}function Et(t){return Object(n.a)({url:"system/config/storage/status/".concat(t),method:"put"})}function Rt(t){return Object(n.a)({url:"system/config/storage/domain/".concat(t),method:"get"})}function Dt(){return Object(n.a)({url:"setting/config_list/31",method:"get"})}function Gt(t){return Object(n.a)({url:"setting/config/save_basics",method:"post",data:t})}function Lt(t){return Object(n.a)({url:"system/config/storage/save_type/".concat(t),method:"get"})}function zt(t){return Object(n.a)({url:"setting/lang_type/list",method:"get",params:t})}function qt(t){return Object(n.a)({url:"setting/lang_type/form/".concat(t),method:"get"})}function At(t){return Object(n.a)({url:"setting/lang_code/list",method:"get",params:t})}function Nt(t){return Object(n.a)({url:"setting/lang_code/info",method:"get",params:t})}function Ut(t){return Object(n.a)({url:"setting/lang_code/save",method:"post",data:t})}function Wt(t){return Object(n.a)({url:"setting/lang_country/list",method:"get",params:t})}function Jt(t){return Object(n.a)({url:"setting/lang_country/form/".concat(t),method:"get"})}},"9efb":function(t,e,a){t.exports=a.p+"img/abbreviationSmall.b17dca11.png"},ad20:function(t,e,a){t.exports=a.p+"img/abbreviation.a562fab6.png"},bc2e:function(t,e,a){"use strict";var n=a("520c");a.n(n).a}}]);