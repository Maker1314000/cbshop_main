(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-goods_bargain_details-index~pages-activity-goods_combination_details-index~pages-acti~4093b5b6"],{"196a":function(t,e,o){"use strict";var n=o("656c"),i=o.n(n);i.a},"435e9":function(t,e,o){"use strict";o.r(e);var n=o("8e67"),i=o("7d70");for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);o("196a");var s,u=o("f0c5"),a=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"2d4be0f0",null,!1,n["a"],s);e["default"]=a.exports},5656:function(t,e,o){"use strict";var n=o("4ea4");o("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,r=n(o("81fb")),s={name:"zb-code",props:{cid:{type:String,default:"zb-code-canvas"},size:{type:Number,default:200},unit:{type:String,default:"upx"},show:{type:Boolean,default:!0},val:{type:String,default:""},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#000000"},pdground:{type:String,default:"#000000"},icon:{type:String,default:""},iconSize:{type:Number,default:40},lv:{type:Number,default:3},onval:{type:Boolean,default:!1},loadMake:{type:Boolean,default:!1},usingComponents:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!1},loadingText:{type:String,default:"二维码生成中"}},data:function(){return{result:""}},methods:{_makeCode:function(){var t=this;this._empty(this.val)?uni.showToast({title:"二维码内容不能为空",icon:"none",duration:2e3}):i=new r.default({context:t,canvasId:t.cid,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText,text:t.val,size:t.cpSize,background:t.background,foreground:t.foreground,pdground:t.pdground,correctLevel:t.lv,image:t.icon,imageSize:t.iconSize,cbResult:function(e){t._result(e)}})},_clearCode:function(){this._result(""),i.clear()},_saveCode:function(){var t=this;""!=this.result&&uni.saveImageToPhotosAlbum({filePath:t.result,success:function(){uni.showToast({title:"二维码保存成功",icon:"success",duration:2e3})}})},_result:function(t){this.result=t,this.$emit("result",t)},_empty:function(t){var e=typeof t,o=!1;return"number"==e&&""==String(t)||"undefined"==e?o=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(o=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(o=!0):"function"==e&&(o=!1),o}},watch:{size:function(t,e){var o=this;t==e||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout((function(){o._makeCode()}),100))},val:function(t,e){var o=this;this.onval&&(t==e||this._empty(t)||setTimeout((function(){o._makeCode()}),0))}},computed:{cpSize:function(){return"upx"==this.unit?uni.upx2px(this.size):this.size}},mounted:function(){var t=this;this.loadMake&&(this._empty(this.val)||setTimeout((function(){t._makeCode()}),0))}};e.default=s},"656c":function(t,e,o){var n=o("be9c3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("cedfadf8",n,!0,{sourceMap:!1,shadowMode:!1})},"7d70":function(t,e,o){"use strict";o.r(e);var n=o("5656"),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"81fb":function(t,e,o){"use strict";o("cb29"),o("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={};(function(){function t(t){var e,o,n;return t<128?[t]:t<2048?(e=192+(t>>6),o=128+(63&t),[e,o]):(e=224+(t>>12),o=128+(t>>6&63),n=128+(63&t),[e,o,n])}function e(e){for(var o=[],n=0;n<e.length;n++)for(var i=e.charCodeAt(n),r=t(i),s=0;s<r.length;s++)o.push(r[s]);return o}function o(t,o){this.typeNumber=-1,this.errorCorrectLevel=o,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=e(t),this.make()}o.prototype={constructor:o,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var o=-1;o<=7;o++)if(!(t+o<=-1||this.moduleCount<=t+o))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+o][e+n]=0<=o&&o<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==o||6==o)||2<=o&&o<=4&&2<=n&&n<=4)},createQrcode:function(){for(var t=0,e=0,o=null,n=0;n<8;n++){this.makeImpl(n);var i=s.getLostPoint(this);(0==n||t>i)&&(t=i,e=n,o=this.modules)}this.modules=o,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var o=0;o<t.length;o++){var n=t[e],i=t[o];if(null==this.modules[n][i])for(var r=-2;r<=2;r++)for(var u=-2;u<=2;u++)this.modules[n+r][i+u]=-2==r||2==r||-2==u||2==u||0==r&&0==u}},setupTypeNumber:function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),o=0;o<18;o++){var n=!t&&1==(e>>o&1);this.modules[Math.floor(o/3)][o%3+this.moduleCount-8-3]=n,this.modules[o%3+this.moduleCount-8-3][Math.floor(o/3)]=n}},setupTypeInfo:function(t,e){for(var o=i[this.errorCorrectLevel]<<3|e,n=s.getBCHTypeInfo(o),r=0;r<15;r++){var u=!t&&1==(n>>r&1);r<6?this.modules[r][8]=u:r<8?this.modules[r+1][8]=u:this.modules[this.moduleCount-15+r][8]=u;u=!t&&1==(n>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=u:r<9?this.modules[8][15-r-1+1]=u:this.modules[8][15-r-1]=u}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new c,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var n=0,i=this.utf8bytes.length;n<i;n++)t.put(this.utf8bytes[n],8);t.length+4<=8*this.totalDataCount&&t.put(0,4);while(t.length%8!=0)t.putBit(!1);while(1){if(t.length>=8*this.totalDataCount)break;if(t.put(o.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(o.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,o=0,n=0,i=this.rsBlock.length/3,r=new Array,u=0;u<i;u++)for(var a=this.rsBlock[3*u+0],h=this.rsBlock[3*u+1],c=this.rsBlock[3*u+2],d=0;d<a;d++)r.push([c,h]);for(var f=new Array(r.length),g=new Array(r.length),m=0;m<r.length;m++){var p=r[m][0],v=r[m][1]-p;o=Math.max(o,p),n=Math.max(n,v),f[m]=new Array(p);for(u=0;u<f[m].length;u++)f[m][u]=255&t.buffer[u+e];e+=p;var b=s.getErrorCorrectPolynomial(v),y=new l(f[m],b.getLength()-1),T=y.mod(b);g[m]=new Array(b.getLength()-1);for(u=0;u<g[m].length;u++){var w=u+T.getLength()-g[m].length;g[m][u]=w>=0?T.get(w):0}}var C=new Array(this.totalDataCount),P=0;for(u=0;u<o;u++)for(m=0;m<r.length;m++)u<f[m].length&&(C[P++]=f[m][u]);for(u=0;u<n;u++)for(m=0;m<r.length;m++)u<g[m].length&&(C[P++]=g[m][u]);return C},mapData:function(t,e){for(var o=-1,n=this.moduleCount-1,i=7,r=0,u=this.moduleCount-1;u>0;u-=2){6==u&&u--;while(1){for(var a=0;a<2;a++)if(null==this.modules[n][u-a]){var l=!1;r<t.length&&(l=1==(t[r]>>>i&1));var h=s.getMask(e,n,u-a);h&&(l=!l),this.modules[n][u-a]=l,i--,-1==i&&(r++,i=7)}if(n+=o,n<0||this.moduleCount<=n){n-=o,o=-o;break}}}}},o.PAD0=236,o.PAD1=17;for(var i=[1,0,3,2],r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return s.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,o){switch(t){case r.PATTERN000:return(e+o)%2==0;case r.PATTERN001:return e%2==0;case r.PATTERN010:return o%3==0;case r.PATTERN011:return(e+o)%3==0;case r.PATTERN100:return(Math.floor(e/2)+Math.floor(o/3))%2==0;case r.PATTERN101:return e*o%2+e*o%3==0;case r.PATTERN110:return(e*o%2+e*o%3)%2==0;case r.PATTERN111:return(e*o%3+(e+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new l([1],0),o=0;o<t;o++)e=e.multiply(new l([1,u.gexp(o)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),o=0,n=0,i=0;i<e;i++)for(var r=0,s=t.modules[i][0],u=0;u<e;u++){var a=t.modules[i][u];if(u<e-6&&a&&!t.modules[i][u+1]&&t.modules[i][u+2]&&t.modules[i][u+3]&&t.modules[i][u+4]&&!t.modules[i][u+5]&&t.modules[i][u+6]&&(u<e-10?t.modules[i][u+7]&&t.modules[i][u+8]&&t.modules[i][u+9]&&t.modules[i][u+10]&&(o+=40):u>3&&t.modules[i][u-1]&&t.modules[i][u-2]&&t.modules[i][u-3]&&t.modules[i][u-4]&&(o+=40)),i<e-1&&u<e-1){var l=0;a&&l++,t.modules[i+1][u]&&l++,t.modules[i][u+1]&&l++,t.modules[i+1][u+1]&&l++,0!=l&&4!=l||(o+=3)}s^a?r++:(s=a,r>=5&&(o+=3+r-5),r=1),a&&n++}for(u=0;u<e;u++)for(r=0,s=t.modules[0][u],i=0;i<e;i++){a=t.modules[i][u];i<e-6&&a&&!t.modules[i+1][u]&&t.modules[i+2][u]&&t.modules[i+3][u]&&t.modules[i+4][u]&&!t.modules[i+5][u]&&t.modules[i+6][u]&&(i<e-10?t.modules[i+7][u]&&t.modules[i+8][u]&&t.modules[i+9][u]&&t.modules[i+10][u]&&(o+=40):i>3&&t.modules[i-1][u]&&t.modules[i-2][u]&&t.modules[i-3][u]&&t.modules[i-4][u]&&(o+=40)),s^a?r++:(s=a,r>=5&&(o+=3+r-5),r=1)}var h=Math.abs(100*n/e/e-50)/5;return o+=10*h,o}},u={glog:function(t){if(t<1)throw new Error("glog("+t+")");return u.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return u.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},a=0;a<8;a++)u.EXP_TABLE[a]=1<<a;for(a=8;a<256;a++)u.EXP_TABLE[a]=u.EXP_TABLE[a-4]^u.EXP_TABLE[a-5]^u.EXP_TABLE[a-6]^u.EXP_TABLE[a-8];for(a=0;a<255;a++)u.LOG_TABLE[u.EXP_TABLE[a]]=a;function l(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var o=0;while(o<t.length&&0==t[o])o++;this.num=new Array(t.length-o+e);for(var n=0;n<t.length-o;n++)this.num[n]=t[n+o]}l.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var n=0;n<t.getLength();n++)e[o+n]^=u.gexp(u.glog(this.get(o))+u.glog(t.get(n)));return new l(e,0)},mod:function(t){var e=this.getLength(),o=t.getLength();if(e-o<0)return this;for(var n=new Array(e),i=0;i<e;i++)n[i]=this.get(i);while(n.length>=o){var r=u.glog(n[0])-u.glog(t.get(0));for(i=0;i<t.getLength();i++)n[i]^=u.gexp(u.glog(t.get(i))+r);while(0==n[0])n.shift()}return new l(n,0)}};var h=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function c(){this.buffer=new Array,this.length=0}o.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=h[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var o=e.length/3,n=0,i=0;i<o;i++){var r=e[3*i+0],s=e[3*i+2];n+=s*r}var u=t>9?2:1;if(this.utf8bytes.length+u<n||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=n;break}}},c.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var o=0;o<e;o++)this.putBit(t>>>e-o-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var d=[];n=function(t){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:t.canvasId,context:t.context,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText},"string"===typeof t&&(t={text:t}),t)for(var e in t)this.options[e]=t[e];for(var n=null,i=(e=0,d.length);e<i;e++)if(d[e].text==this.options.text&&d[e].text.correctLevel==this.options.correctLevel){n=d[e].obj;break}e==i&&(n=new o(this.options.text,this.options.correctLevel),d.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:n}));var r=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground},s=function(t){t.showLoading&&uni.showLoading({title:t.loadingText,mask:!0});for(var e=uni.createCanvasContext(t.canvasId,t.context),o=n.getModuleCount(),i=t.size,s=t.imageSize,u=(i/o).toPrecision(4),a=(i/o).toPrecision(4),l=0;l<o;l++)for(var h=0;h<o;h++){var c=Math.ceil((h+1)*u)-Math.floor(h*u),d=Math.ceil((l+1)*u)-Math.floor(l*u),f=r({row:l,col:h,count:o,options:t});e.setFillStyle(n.modules[l][h]?f:t.background),e.fillRect(Math.round(h*u),Math.round(l*a),c,d)}if(t.image){var g=function(e,o,n,i,r,s,u,a,l){e.setLineWidth(u),e.setFillStyle(t.background),e.setStrokeStyle(t.background),e.beginPath(),e.moveTo(o+s,n),e.arcTo(o+i,n,o+i,n+s,s),e.arcTo(o+i,n+r,o+i-s,n+r,s),e.arcTo(o,n+r,o,n+r-s,s),e.arcTo(o,n,o+s,n,s),e.closePath(),a&&e.fill(),l&&e.stroke()},m=Number(((i-s)/2).toFixed(2)),p=Number(((i-s)/2).toFixed(2));g(e,m,p,s,s,2,6,!0,!0),e.drawImage(t.image,m,p,s,s)}setTimeout((function(){e.draw(!0,(function(){setTimeout((function(){uni.canvasToTempFilePath({width:t.width,height:t.height,destWidth:t.width,destHeight:t.height,canvasId:t.canvasId,quality:Number(1),success:function(e){t.cbResult&&t.cbResult(e.tempFilePath)},fail:function(e){t.cbResult&&t.cbResult(e)},complete:function(){t.showLoading&&uni.hideLoading()}},t.context)}),t.text.length+100)}))}),t.usingComponents?0:150)};s(this.options)},n.prototype.clear=function(t){var e=uni.createCanvasContext(this.options.canvasId,this.options.context);e.clearRect(0,0,this.options.size,this.options.size),e.draw(!1,(function(){t&&t()}))}})();var i=n;e.default=i},"8e67":function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"zb-code"},[o("v-uni-canvas",{staticClass:"zb-code-canvas",style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{"canvas-id":t.cid}}),o("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{src:t.result}})],1)},r=[]},be9c3:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,".zb-code[data-v-2d4be0f0]{position:relative}.zb-code-canvas[data-v-2d4be0f0]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""]),t.exports=e},cb29:function(t,e,o){var n=o("23e7"),i=o("81d5"),r=o("44d2");n({target:"Array",proto:!0},{fill:i}),r("fill")}}]);