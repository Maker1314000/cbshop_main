(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ba58d59"],{"0f7c":function(e,t,r){},3793:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"i-layout-page-header"},[r("div",{staticClass:"i-layout-page-header"},[r("span",{staticClass:"ivu-page-header-title"},[e._v(e._s(e.$route.meta.title))])])]),r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("div",{staticClass:"backs",on:{click:e.goBack}},[r("Icon",{staticClass:"mr5",attrs:{type:"ios-folder-outline"}}),r("span",[e._v("返回上级")])],1),r("Table",{ref:"selection",staticClass:"mt20",attrs:{columns:e.columns4,data:e.tabList,loading:e.loading,"no-data-text":"暂无数据","highlight-row":"","no-filtered-data-text":"暂无筛选结果"},on:{"on-current-change":e.currentChange},scopedSlots:e._u([{key:"filename",fn:function(t){var n=t.row;return[n.isDir?r("Icon",{staticClass:"mr5",attrs:{type:"ios-folder-outline"}}):r("Icon",{staticClass:"mr5",attrs:{type:"ios-document-outline"}}),r("span",[e._v(e._s(n.filename))])]}},{key:"isWritable",fn:function(t){var n=t.row;return[r("span",{domProps:{textContent:e._s(n.isWritable?"是":"否")}})]}},{key:"action",fn:function(t){var n=t.row;t.index;return[n.isDir?r("a",{on:{click:function(t){return e.open(n)}}},[e._v("打开")]):r("a",{on:{click:function(t){return e.edit(n)}}},[e._v("编辑")])]}}])})],1),r("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:e.title,"mask-closable":!1,width:"900"},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[r("Button",{staticClass:"mr5 mb15",attrs:{type:"primary",id:"savefile"},on:{click:e.savefile}},[e._v("保存")]),r("Button",{staticClass:"mr5 mb15",attrs:{id:"undo"},on:{click:e.undofile}},[e._v("撤销")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],ref:"mycode",staticClass:"codesql public_text",domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e.spinShow?r("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)],1)},a=[],i=r("c964"),o=(r("96cf"),r("8593")),s=r("56b3"),c=r.n(s);r("0f7c");r("f9d4");var u={name:"opendir",data:function(){return{code:"",modals:!1,spinShow:!1,loading:!1,tabList:[],columns4:[{title:"文件/文件夹名",slot:"filename",minWidth:150,back:"返回上级"},{title:"文件/文件夹路径",key:"real_path",minWidth:150},{title:"文件/文件夹大小",key:"size",minWidth:100},{title:"是否可写",slot:"isWritable",minWidth:100},{title:"更新时间",key:"mtime",minWidth:150},{title:"Action",slot:"action",minWidth:150}],formItem:{dir:"",superior:0,filedir:""},rows:{},pathname:"",title:""}},mounted:function(){this.editor=c.a.fromTextArea(this.$refs.mycode,{value:"http://www.crmeb.com",mode:"text/javascript",theme:"ambiance",indentUnit:4,smartIndent:!0,tabSize:4,readOnly:!1,showCursorWhenSelecting:!0,lineNumbers:!0})},created:function(){this.getList()},methods:{currentChange:function(e){e.isDir?this.open(e):this.edit(e)},getList:function(){var e=this;this.loading=!0,Object(o["J"])(this.formItem).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=r.data,e.tabList=n.list,e.dir=n.dir,e.loading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},goBack:function(){this.formItem={dir:this.dir,superior:1,filedir:""},this.getList()},open:function(e){this.rows=e,this.formItem={dir:e.path,superior:0,filedir:e.filename},this.getList()},edit:function(e){var t=this;this.modals=!0,this.spinShow=!0,this.pathname=e.pathname,this.title=e.filename,Object(o["K"])(e.pathname).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=r.data,t.code=n.content,t.editor.setValue(t.code),t.spinShow=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg)}))},savefile:function(){var e=this,t={comment:this.editor.getValue(),filepath:this.pathname};Object(o["P"])(t).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(r.msg),e.modals=!1;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},undofile:function(){this.editor.undo()},redofile:function(){this.editor.redo()},refreshfile:function(){this.editor.refresh()}}},l=u,f=(r("8de7"),r("2877")),d=Object(f["a"])(l,n,a,!1,null,"527d9c2a",null);t["default"]=d.exports},"8de7":function(e,t,r){"use strict";var n=r("9eee"),a=r.n(n);a.a},"9eee":function(e,t,r){},f9d4:function(e,t,r){(function(e){e(r("56b3"))})((function(e){"use strict";e.defineMode("javascript",(function(t,r){var n,a,i=t.indentUnit,o=r.statementIndent,s=r.jsonld,c=r.json||s,u=r.typescript,l=r.wordCharacters||/[\w$\xa1-\uffff]/,f=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("keyword d"),i=e("operator"),o={type:"atom",style:"atom"};return{if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:a,break:a,continue:a,new:e("new"),delete:n,void:n,throw:n,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:i,typeof:i,instanceof:i,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n}}(),d=/[+\-*&%=<>!?|~^@]/,m=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function p(e){var t,r=!1,n=!1;while(null!=(t=e.next())){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}function v(e,t,r){return n=e,a=r,t}function h(e,t){var r=e.next();if('"'==r||"'"==r)return t.tokenize=k(r),t.tokenize(e,t);if("."==r&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return v("number","number");if("."==r&&e.match(".."))return v("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(r))return v(r);if("="==r&&e.eat(">"))return v("=>","operator");if("0"==r&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return v("number","number");if(/\d/.test(r))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),v("number","number");if("/"==r)return e.eat("*")?(t.tokenize=y,y(e,t)):e.eat("/")?(e.skipToEnd(),v("comment","comment")):et(e,t,1)?(p(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),v("regexp","string-2")):(e.eat("="),v("operator","operator",e.current()));if("`"==r)return t.tokenize=w,w(e,t);if("#"==r&&"!"==e.peek())return e.skipToEnd(),v("meta","meta");if("#"==r&&e.eatWhile(l))return v("variable","property");if("<"==r&&e.match("!--")||"-"==r&&e.match("->"))return e.skipToEnd(),v("comment","comment");if(d.test(r))return">"==r&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=r&&"="!=r||e.eat("="):/[<>*+\-]/.test(r)&&(e.eat(r),">"==r&&e.eat(r))),"?"==r&&e.eat(".")?v("."):v("operator","operator",e.current());if(l.test(r)){e.eatWhile(l);var n=e.current();if("."!=t.lastType){if(f.propertyIsEnumerable(n)){var a=f[n];return v(a.type,a.style,n)}if("async"==n&&e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,!1))return v("async","keyword",n)}return v("variable","variable",n)}}function k(e){return function(t,r){var n,a=!1;if(s&&"@"==t.peek()&&t.match(m))return r.tokenize=h,v("jsonld-keyword","meta");while(null!=(n=t.next())){if(n==e&&!a)break;a=!a&&"\\"==n}return a||(r.tokenize=h),v("string","string")}}function y(e,t){var r,n=!1;while(r=e.next()){if("/"==r&&n){t.tokenize=h;break}n="*"==r}return v("comment","comment")}function w(e,t){var r,n=!1;while(null!=(r=e.next())){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=h;break}n=!n&&"\\"==r}return v("quasi","string-2",e.current())}var b="([{}])";function g(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){if(u){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index)}for(var a=0,i=!1,o=r-1;o>=0;--o){var s=e.string.charAt(o),c=b.indexOf(s);if(c>=0&&c<3){if(!a){++o;break}if(0==--a){"("==s&&(i=!0);break}}else if(c>=3&&c<6)++a;else if(l.test(s))i=!0;else if(/["'\/`]/.test(s))for(;;--o){if(0==o)return;var f=e.string.charAt(o-1);if(f==s&&"\\"!=e.string.charAt(o-2)){o--;break}}else if(i&&!a){++o;break}}i&&!a&&(t.fatArrowAt=o)}}var x={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0};function j(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function M(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}function C(e,t,r,n,a){var i=e.cc;_.state=e,_.stream=a,_.marked=null,_.cc=i,_.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);while(1){var o=i.length?i.pop():c?J:N;if(o(r,n)){while(i.length&&i[i.length-1].lex)i.pop()();return _.marked?_.marked:"variable"==r&&M(e,n)?"variable-2":t}}}var _={state:null,column:null,marked:null,cc:null};function I(){for(var e=arguments.length-1;e>=0;e--)_.cc.push(arguments[e])}function A(){return I.apply(null,arguments),!0}function V(e,t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}function E(e){var t=_.state;if(_.marked="def",t.context)if("var"==t.lexical.info&&t.context&&t.context.block){var n=z(e,t.context);if(null!=n)return void(t.context=n)}else if(!V(e,t.localVars))return void(t.localVars=new O(e,t.localVars));r.globalVars&&!V(e,t.globalVars)&&(t.globalVars=new O(e,t.globalVars))}function z(e,t){if(t){if(t.block){var r=z(e,t.prev);return r?r==t.prev?t:new T(r,t.vars,!0):null}return V(e,t.vars)?t:new T(t.prev,new O(e,t.vars),!1)}return null}function $(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function T(e,t,r){this.prev=e,this.vars=t,this.block=r}function O(e,t){this.name=e,this.next=t}var S=new O("this",new O("arguments",null));function W(){_.state.context=new T(_.state.context,_.state.localVars,!1),_.state.localVars=S}function L(){_.state.context=new T(_.state.context,_.state.localVars,!0),_.state.localVars=null}function P(){_.state.localVars=_.state.context.vars,_.state.context=_.state.context.prev}function q(e,t){var r=function(){var r=_.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new j(n,_.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function R(){var e=_.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function B(e){function t(r){return r==e?A():";"==e||"}"==r||")"==r||"]"==r?I():A(t)}return t}function N(e,t){return"var"==e?A(q("vardef",t),Me,B(";"),R):"keyword a"==e?A(q("form"),F,N,R):"keyword b"==e?A(q("form"),N,R):"keyword d"==e?_.stream.match(/^\s*$/,!1)?A():A(q("stat"),K,B(";"),R):"debugger"==e?A(B(";")):"{"==e?A(q("}"),L,fe,R,P):";"==e?A():"if"==e?("else"==_.state.lexical.info&&_.state.cc[_.state.cc.length-1]==R&&_.state.cc.pop()(),A(q("form"),F,N,R,Ee)):"function"==e?A(Oe):"for"==e?A(q("form"),ze,N,R):"class"==e||u&&"interface"==t?(_.marked="keyword",A(q("form","class"==e?e:t),qe,R)):"variable"==e?u&&"declare"==t?(_.marked="keyword",A(N)):u&&("module"==t||"enum"==t||"type"==t)&&_.stream.match(/^\s*\w/,!1)?(_.marked="keyword","enum"==t?A(Xe):"type"==t?A(We,B("operator"),he,B(";")):A(q("form"),Ce,B("{"),q("}"),fe,R,R)):u&&"namespace"==t?(_.marked="keyword",A(q("form"),J,N,R)):u&&"abstract"==t?(_.marked="keyword",A(N)):A(q("stat"),ae):"switch"==e?A(q("form"),F,B("{"),q("}","switch"),L,fe,R,R,P):"case"==e?A(J,B(":")):"default"==e?A(B(":")):"catch"==e?A(q("form"),W,D,N,R,P):"export"==e?A(q("stat"),De,R):"import"==e?A(q("stat"),Ue,R):"async"==e?A(N):"@"==t?A(J,N):I(q("stat"),J,B(";"),R)}function D(e){if("("==e)return A(Le,B(")"))}function J(e,t){return H(e,t,!1)}function U(e,t){return H(e,t,!0)}function F(e){return"("!=e?I():A(q(")"),K,B(")"),R)}function H(e,t,r){if(_.state.fatArrowAt==_.stream.start){var n=r?ee:Z;if("("==e)return A(W,q(")"),ue(Le,")"),R,B("=>"),n,P);if("variable"==e)return I(W,Ce,B("=>"),n,P)}var a=r?Q:G;return x.hasOwnProperty(e)?A(a):"function"==e?A(Oe,a):"class"==e||u&&"interface"==t?(_.marked="keyword",A(q("form"),Pe,R)):"keyword c"==e||"async"==e?A(r?U:J):"("==e?A(q(")"),K,B(")"),R,a):"operator"==e||"spread"==e?A(r?U:J):"["==e?A(q("]"),Qe,R,a):"{"==e?le(oe,"}",null,a):"quasi"==e?I(X,a):"new"==e?A(te(r)):"import"==e?A(J):A()}function K(e){return e.match(/[;\}\)\],]/)?I():I(J)}function G(e,t){return","==e?A(K):Q(e,t,!1)}function Q(e,t,r){var n=0==r?G:Q,a=0==r?J:U;return"=>"==e?A(W,r?ee:Z,P):"operator"==e?/\+\+|--/.test(t)||u&&"!"==t?A(n):u&&"<"==t&&_.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?A(q(">"),ue(he,">"),R,n):"?"==t?A(J,B(":"),a):A(a):"quasi"==e?I(X,n):";"!=e?"("==e?le(U,")","call",n):"."==e?A(ie,n):"["==e?A(q("]"),K,B("]"),R,n):u&&"as"==t?(_.marked="keyword",A(he,n)):"regexp"==e?(_.state.lastType=_.marked="operator",_.stream.backUp(_.stream.pos-_.stream.start-1),A(a)):void 0:void 0}function X(e,t){return"quasi"!=e?I():"${"!=t.slice(t.length-2)?A(X):A(J,Y)}function Y(e){if("}"==e)return _.marked="string-2",_.state.tokenize=w,A(X)}function Z(e){return g(_.stream,_.state),I("{"==e?N:J)}function ee(e){return g(_.stream,_.state),I("{"==e?N:U)}function te(e){return function(t){return"."==t?A(e?ne:re):"variable"==t&&u?A(ge,e?Q:G):I(e?U:J)}}function re(e,t){if("target"==t)return _.marked="keyword",A(G)}function ne(e,t){if("target"==t)return _.marked="keyword",A(Q)}function ae(e){return":"==e?A(R,N):I(G,B(";"),R)}function ie(e){if("variable"==e)return _.marked="property",A()}function oe(e,t){return"async"==e?(_.marked="property",A(oe)):"variable"==e||"keyword"==_.style?(_.marked="property","get"==t||"set"==t?A(se):(u&&_.state.fatArrowAt==_.stream.start&&(r=_.stream.match(/^\s*:\s*/,!1))&&(_.state.fatArrowAt=_.stream.pos+r[0].length),A(ce))):"number"==e||"string"==e?(_.marked=s?"property":_.style+" property",A(ce)):"jsonld-keyword"==e?A(ce):u&&$(t)?(_.marked="keyword",A(oe)):"["==e?A(J,de,B("]"),ce):"spread"==e?A(U,ce):"*"==t?(_.marked="keyword",A(oe)):":"==e?I(ce):void 0;var r}function se(e){return"variable"!=e?I(ce):(_.marked="property",A(Oe))}function ce(e){return":"==e?A(U):"("==e?I(Oe):void 0}function ue(e,t,r){function n(a,i){if(r?r.indexOf(a)>-1:","==a){var o=_.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),A((function(r,n){return r==t||n==t?I():I(e)}),n)}return a==t||i==t?A():r&&r.indexOf(";")>-1?I(e):A(B(t))}return function(r,a){return r==t||a==t?A():I(e,n)}}function le(e,t,r){for(var n=3;n<arguments.length;n++)_.cc.push(arguments[n]);return A(q(t,r),ue(e,t),R)}function fe(e){return"}"==e?A():I(N,fe)}function de(e,t){if(u){if(":"==e)return A(he);if("?"==t)return A(de)}}function me(e,t){if(u&&(":"==e||"in"==t))return A(he)}function pe(e){if(u&&":"==e)return _.stream.match(/^\s*\w+\s+is\b/,!1)?A(J,ve,he):A(he)}function ve(e,t){if("is"==t)return _.marked="keyword",A()}function he(e,t){return"keyof"==t||"typeof"==t||"infer"==t?(_.marked="keyword",A("typeof"==t?U:he)):"variable"==e||"void"==t?(_.marked="type",A(be)):"|"==t||"&"==t?A(he):"string"==e||"number"==e||"atom"==e?A(be):"["==e?A(q("]"),ue(he,"]",","),R,be):"{"==e?A(q("}"),ue(ye,"}",",;"),R,be):"("==e?A(ue(we,")"),ke,be):"<"==e?A(ue(he,">"),he):void 0}function ke(e){if("=>"==e)return A(he)}function ye(e,t){return"variable"==e||"keyword"==_.style?(_.marked="property",A(ye)):"?"==t||"number"==e||"string"==e?A(ye):":"==e?A(he):"["==e?A(B("variable"),me,B("]"),ye):"("==e?I(Se,ye):void 0}function we(e,t){return"variable"==e&&_.stream.match(/^\s*[?:]/,!1)||"?"==t?A(we):":"==e?A(he):"spread"==e?A(we):I(he)}function be(e,t){return"<"==t?A(q(">"),ue(he,">"),R,be):"|"==t||"."==e||"&"==t?A(he):"["==e?A(he,B("]"),be):"extends"==t||"implements"==t?(_.marked="keyword",A(he)):"?"==t?A(he,B(":"),he):void 0}function ge(e,t){if("<"==t)return A(q(">"),ue(he,">"),R,be)}function xe(){return I(he,je)}function je(e,t){if("="==t)return A(he)}function Me(e,t){return"enum"==t?(_.marked="keyword",A(Xe)):I(Ce,de,Ae,Ve)}function Ce(e,t){return u&&$(t)?(_.marked="keyword",A(Ce)):"variable"==e?(E(t),A()):"spread"==e?A(Ce):"["==e?le(Ie,"]"):"{"==e?le(_e,"}"):void 0}function _e(e,t){return"variable"!=e||_.stream.match(/^\s*:/,!1)?("variable"==e&&(_.marked="property"),"spread"==e?A(Ce):"}"==e?I():"["==e?A(J,B("]"),B(":"),_e):A(B(":"),Ce,Ae)):(E(t),A(Ae))}function Ie(){return I(Ce,Ae)}function Ae(e,t){if("="==t)return A(U)}function Ve(e){if(","==e)return A(Me)}function Ee(e,t){if("keyword b"==e&&"else"==t)return A(q("form","else"),N,R)}function ze(e,t){return"await"==t?A(ze):"("==e?A(q(")"),$e,R):void 0}function $e(e){return"var"==e?A(Me,Te):"variable"==e?A(Te):I(Te)}function Te(e,t){return")"==e?A():";"==e?A(Te):"in"==t||"of"==t?(_.marked="keyword",A(J,Te)):I(J,Te)}function Oe(e,t){return"*"==t?(_.marked="keyword",A(Oe)):"variable"==e?(E(t),A(Oe)):"("==e?A(W,q(")"),ue(Le,")"),R,pe,N,P):u&&"<"==t?A(q(">"),ue(xe,">"),R,Oe):void 0}function Se(e,t){return"*"==t?(_.marked="keyword",A(Se)):"variable"==e?(E(t),A(Se)):"("==e?A(W,q(")"),ue(Le,")"),R,pe,P):u&&"<"==t?A(q(">"),ue(xe,">"),R,Se):void 0}function We(e,t){return"keyword"==e||"variable"==e?(_.marked="type",A(We)):"<"==t?A(q(">"),ue(xe,">"),R):void 0}function Le(e,t){return"@"==t&&A(J,Le),"spread"==e?A(Le):u&&$(t)?(_.marked="keyword",A(Le)):u&&"this"==e?A(de,Ae):I(Ce,de,Ae)}function Pe(e,t){return"variable"==e?qe(e,t):Re(e,t)}function qe(e,t){if("variable"==e)return E(t),A(Re)}function Re(e,t){return"<"==t?A(q(">"),ue(xe,">"),R,Re):"extends"==t||"implements"==t||u&&","==e?("implements"==t&&(_.marked="keyword"),A(u?he:J,Re)):"{"==e?A(q("}"),Be,R):void 0}function Be(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||u&&$(t))&&_.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(_.marked="keyword",A(Be)):"variable"==e||"keyword"==_.style?(_.marked="property",A(Ne,Be)):"number"==e||"string"==e?A(Ne,Be):"["==e?A(J,de,B("]"),Ne,Be):"*"==t?(_.marked="keyword",A(Be)):u&&"("==e?I(Se,Be):";"==e||","==e?A(Be):"}"==e?A():"@"==t?A(J,Be):void 0}function Ne(e,t){if("?"==t)return A(Ne);if(":"==e)return A(he,Ae);if("="==t)return A(U);var r=_.state.lexical.prev,n=r&&"interface"==r.info;return I(n?Se:Oe)}function De(e,t){return"*"==t?(_.marked="keyword",A(Ge,B(";"))):"default"==t?(_.marked="keyword",A(J,B(";"))):"{"==e?A(ue(Je,"}"),Ge,B(";")):I(N)}function Je(e,t){return"as"==t?(_.marked="keyword",A(B("variable"))):"variable"==e?I(U,Je):void 0}function Ue(e){return"string"==e?A():"("==e?I(J):I(Fe,He,Ge)}function Fe(e,t){return"{"==e?le(Fe,"}"):("variable"==e&&E(t),"*"==t&&(_.marked="keyword"),A(Ke))}function He(e){if(","==e)return A(Fe,He)}function Ke(e,t){if("as"==t)return _.marked="keyword",A(Fe)}function Ge(e,t){if("from"==t)return _.marked="keyword",A(J)}function Qe(e){return"]"==e?A():I(ue(U,"]"))}function Xe(){return I(q("form"),Ce,B("{"),q("}"),ue(Ye,"}"),R,R)}function Ye(){return I(Ce,Ae)}function Ze(e,t){return"operator"==e.lastType||","==e.lastType||d.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}function et(e,t,r){return t.tokenize==h&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}return P.lex=!0,R.lex=!0,{startState:function(e){var t={tokenize:h,lastType:"sof",cc:[],lexical:new j((e||0)-i,0,"block",!1),localVars:r.localVars,context:r.localVars&&new T(null,null,!1),indented:e||0};return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),g(e,t)),t.tokenize!=y&&e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"==n?r:(t.lastType="operator"!=n||"++"!=a&&"--"!=a?n:"incdec",C(t,r,n,a,e))},indent:function(t,n){if(t.tokenize==y)return e.Pass;if(t.tokenize!=h)return 0;var a,s=n&&n.charAt(0),c=t.lexical;if(!/^\s*else\b/.test(n))for(var u=t.cc.length-1;u>=0;--u){var l=t.cc[u];if(l==R)c=c.prev;else if(l!=Ee)break}while(("stat"==c.type||"form"==c.type)&&("}"==s||(a=t.cc[t.cc.length-1])&&(a==G||a==Q)&&!/^[,\.=+\-*:?[\(]/.test(n)))c=c.prev;o&&")"==c.type&&"stat"==c.prev.type&&(c=c.prev);var f=c.type,d=s==f;return"vardef"==f?c.indented+("operator"==t.lastType||","==t.lastType?c.info.length+1:0):"form"==f&&"{"==s?c.indented:"form"==f?c.indented+i:"stat"==f?c.indented+(Ze(t,n)?o||i:0):"switch"!=c.info||d||0==r.doubleIndentSwitch?c.align?c.column+(d?0:1):c.indented+(d?0:i):c.indented+(/^(?:case|default)\b/.test(n)?i:2*i)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:c?null:"/*",blockCommentEnd:c?null:"*/",blockCommentContinue:c?null:" * ",lineComment:c?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:c?"json":"javascript",jsonldMode:s,jsonMode:c,expressionAllowed:et,skipExpression:function(e){var t=e.cc[e.cc.length-1];t!=J&&t!=U||e.cc.pop()}}})),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})}))}}]);