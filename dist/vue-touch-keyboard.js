!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTouchKeyboard=e():t.VueTouchKeyboard=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(77);t.exports={component:r,layouts:n(27),install:function(t){t.component("VueTouchKeyboard",r)}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(50),o=n(15);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(6),o=n(12);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(8),o=n(31),i=n(24),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(22)("wks"),o=n(13),i=n(1).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(36),o=n(16);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(6).f,o=n(2),i=n(7)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(22)("keys"),o=n(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),o=n(14),i=n(18),u=n(26),c=n(6).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(7)},function(t,e){"use strict";t.exports={normal:{_meta:{tab:{key:"\t",text:"Tab",width:60},shiftl:{keySet:"shifted",text:"Shift",width:100},shiftr:{keySet:"shifted",text:"Shift",width:100},caps:{keySet:"capsed",text:"Caps lock",width:80},space:{key:" ",text:"Space",width:180},enter:{key:"\r\n",text:"Enter",width:80},backspace:{func:"backspace",classes:"fa fa-arrow-left",width:80},accept:{func:"accept",text:"Close",classes:"featured"}},"default":["` 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} q w e r t y u i o p [ ] \\","{caps} a s d f g h j k l ; ' {enter}","{shiftl} z x c v b n m , . / {shiftr}","  {space} {accept}"],shifted:["~ ! @ # $ % ^ & * ( ) _ + {backspace}","{tab} Q W E R T Y U I O P { } |",'{caps} A S D F G H J K L : " {enter}',"{shiftl} Z X C V B N M < > ? {shiftr}","  {space} {accept}"],capsed:["` 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} Q W E R T Y U I O P [ ] \\","{caps} A S D F G H J K L ; ' {enter}","{shiftl} Z X C V B N M , . / {shiftr}","  {space} {accept}"]},compact:{_meta:{"default":{keySet:"default",text:"abc"},alpha:{keySet:"default",text:"Abc"},shift:{keySet:"shifted",text:"ABC"},numbers:{keySet:"numbers",text:"123"},space:{key:" ",text:"Space",width:200},backspace:{func:"backspace",classes:"fa fa-arrow-left"},accept:{func:"accept",text:"Close",classes:"featured"},zero:{key:"0",width:130}},"default":["q w e r t y u i o p"," a s d f g h j k l ","{shift} z x c v b n m .","{numbers} - {space} {backspace} {accept}"],shifted:["Q W E R T Y U I O P"," A S D F G H J K L","{default} Z X C V B N M ","{numbers} _ {space} {backspace} {accept}"],numbers:["1 2 3","4 5 6","7 8 9","  {alpha} . {zero} {backspace} {accept}  "]},numeric:{_meta:{backspace:{func:"backspace",classes:"fa fa-arrow-left"},accept:{func:"accept",text:"Close",classes:"featured"},zero:{key:"0",width:130}},"default":["1 2 3","4 5 6","7 8 9","_ - . {zero} {backspace} {accept}  "]}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(10),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(1),o=n(14),i=n(47),u=n(5),c="prototype",s=function(t,e,n){var f,a,p,l=t&s.F,y=t&s.G,h=t&s.S,d=t&s.P,v=t&s.B,b=t&s.W,x=y?o:o[e]||(o[e]={}),g=x[c],m=y?r:h?r[e]:(r[e]||{})[c];y&&(n=e);for(f in n)a=!l&&m&&void 0!==m[f],a&&f in x||(p=a?m[f]:n[f],x[f]=y&&"function"!=typeof m[f]?n[f]:v&&a?i(p,r):b&&m[f]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(p):d&&"function"==typeof p?i(Function.call,p):p,d&&((x.virtual||(x.virtual={}))[f]=p,t&s.R&&g&&!g[f]&&u(g,f,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){t.exports=!n(4)&&!n(9)(function(){return 7!=Object.defineProperty(n(29)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(18),o=n(30),i=n(37),u=n(5),c=n(2),s=n(17),f=n(52),a=n(20),p=n(59),l=n(7)("iterator"),y=!([].keys&&"next"in[].keys()),h="@@iterator",d="keys",v="values",b=function(){return this};t.exports=function(t,e,n,x,g,m,S){f(n,e,x);var k,w,O,_=function(t){if(!y&&t in K)return K[t];switch(t){case d:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",E=g==v,P=!1,K=t.prototype,C=K[l]||K[h]||g&&K[g],M=C||_(g),T=g?E?_("entries"):M:void 0,F="Array"==e?K.entries||C:C;if(F&&(O=p(F.call(new t)),O!==Object.prototype&&(a(O,j,!0),r||c(O,l)||u(O,l,b))),E&&C&&C.name!==v&&(P=!0,M=function(){return C.call(this)}),r&&!S||!y&&!P&&K[l]||u(K,l,M),s[e]=M,s[j]=b,g)if(k={values:E?M:_(v),keys:m?M:_(d),entries:T},S)for(w in k)w in K||i(K,w,k[w]);else o(o.P+o.F*(y||P),e,k);return k}},function(t,e,n){var r=n(8),o=n(56),i=n(16),u=n(21)("IE_PROTO"),c=function(){},s="prototype",f=function(){var t,e=n(29)("iframe"),r=i.length,o="<",u=">";for(e.style.display="none",n(49).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),f=t.F;r--;)delete f[s][i[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[s]=r(t),n=new c,c[s]=null,n[u]=t):n=f(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(36),o=n(16).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(2),o=n(3),i=n(46)(!1),u=n(21)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(41),i=r(o),u=n(27),c=r(u),s=n(75),f=r(s),a=n(73),p=r(a);e["default"]={props:{input:HTMLInputElement,layout:[String,Object],accept:Function,cancel:Function,change:Function,options:{type:Object,"default":function(){return{}}}},data:function(){return{currentKeySet:"default"}},computed:{keySet:function l(){var t=this.getLayout();if(t){var l=t[this.currentKeySet];if(l){var e=[],n=t._meta||{};return l.forEach(function(t){var r=[];t.split(" ").forEach(function(t){if((0,p["default"])(t))r.push(t);else if((0,f["default"])(t))if(t.length>2&&"{"==t[0]&&"}"==t[t.length-1]){var e=t.substring(1,t.length-1);n[e]?r.push(n[e]):console.warn("Missing named key from meta: "+e)}else""==t?r.push({placeholder:!0}):r.push({key:t,text:t})}),e.push(r)}),e}}}},watch:{layout:function(){console.log("Layout changed"),this.currentKeySet="default"}},methods:{getLayout:function(){return(0,f["default"])(this.layout)?c["default"][this.layout]:this.layout},changeKeySet:function(t){var e=this.getLayout();null!=e[t]&&(this.currentKeySet=t)},toggleKeySet:function(t){this.currentKeySet=this.currentKeySet==t?"default":t},getCaptionOfKey:function(t){return t.text||t.key||""},getClassesOfKey:function(t){if(t.placeholder)return"placeholder";var e="key "+(t.classes||"");return t.keySet&&this.currentKeySet==t.keySet&&(e+=" activated"),e},getKeyStyle:function(t){if(t.width)return{flex:t.width}},supportsSelection:function(){return/text|password|search|tel|url/.test(this.input.type)},getCaret:function(){if(this.supportsSelection()){var t={start:this.input.selectionStart||0,end:this.input.selectionEnd||0};return t.end<t.start&&(t.end=t.start),t}var e=this.input.value;return{start:e.length,end:e.length}},backspace:function(t,e){return e=e.substring(0,t.start-1)+e.substring(t.start),t.start-=1,t.end=t.start,e},insertChar:function(t,e,n){return e=e.substr(0,t.start)+n.toString()+e.substr(t.start),t.start+=n.length,t.end=t.start,e},clickKey:function(t){if(this.input){var e=this.getCaret(),n=this.input.value,r=null;if("object"==("undefined"==typeof t?"undefined":(0,i["default"])(t)))if(t.keySet)this.toggleKeySet(t.keySet);else if(t.func)switch(t.func){case"backspace":n=this.backspace(e,n);break;case"accept":return void(this.accept&&this.accept(n));case"cancel":return void(this.cancel&&this.cancel())}else r=t.key;else r=t;if(r){if(this.options.useKbEvents){var o=document.createEvent("Event");o.initEvent("keypress",!0,!0),o.which=o.keyCode=r.charCodeAt(),this.input.dispatchEvent(o)&&(n=this.insertChar(e,n,r))}else n=this.insertChar(e,n,r);"shifted"==this.currentKeySet&&this.changeKeySet("default")}this.input.value=n,this.setFocusToInput(e),this.change&&this.change(n,r)}},setFocusToInput:function(t){this.input.focus(),t&&this.supportsSelection()&&(this.input.selectionStart=t.start,this.input.selectionEnd=t.end)}},ready:function(){this.input&&this.setFocusToInput()}}},function(t,e,n){t.exports={"default":n(42),__esModule:!0}},function(t,e,n){t.exports={"default":n(43),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(40),i=r(o),u=n(39),c=r(u),s="function"==typeof c["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":typeof t};e["default"]="function"==typeof c["default"]&&"symbol"===s(i["default"])?function(t){return"undefined"==typeof t?"undefined":s(t)}:function(t){return t&&"function"==typeof c["default"]&&t.constructor===c["default"]?"symbol":"undefined"==typeof t?"undefined":s(t)}},function(t,e,n){n(67),n(65),n(68),n(69),t.exports=n(14).Symbol},function(t,e,n){n(66),n(70),t.exports=n(26).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(3),o=n(62),i=n(61);t.exports=function(t){return function(e,n,u){var c,s=r(e),f=o(s.length),a=i(u,f);if(t&&n!=n){for(;f>a;)if(c=s[a++],c!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===n)return t||a||0;return!t&&-1}}},function(t,e,n){var r=n(44);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(11),o=n(35),i=n(19);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),s=i.f,f=0;c.length>f;)s.call(t,u=c[f++])&&e.push(u);return e}},function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){var r=n(28);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(28);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(33),o=n(12),i=n(20),u={};n(5)(u,n(7)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(11),o=n(3);t.exports=function(t,e){for(var n,i=o(t),u=r(i),c=u.length,s=0;c>s;)if(i[n=u[s++]]===e)return n}},function(t,e,n){var r=n(13)("meta"),o=n(10),i=n(2),u=n(6).f,c=0,s=Object.isExtensible||function(){return!0},f=!n(9)(function(){return s(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},p=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";a(t)}return t[r].i},l=function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;a(t)}return t[r].w},y=function(t){return f&&h.NEED&&s(t)&&!i(t,r)&&a(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:p,getWeak:l,onFreeze:y}},function(t,e,n){var r=n(6),o=n(8),i=n(11);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,s=0;c>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e,n){var r=n(19),o=n(12),i=n(3),u=n(24),c=n(2),s=n(31),f=Object.getOwnPropertyDescriptor;e.f=n(4)?f:function(t,e){if(t=i(t),e=u(e,!0),s)try{return f(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(3),o=n(34).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,e,n){var r=n(2),o=n(63),i=n(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(23),o=n(15);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),s=r(n),f=c.length;return s<0||s>=f?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===f||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(23),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(45),o=n(53),i=n(17),u=n(3);t.exports=n(32)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){},function(t,e,n){"use strict";var r=n(60)(!0);n(32)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(1),o=n(2),i=n(4),u=n(30),c=n(37),s=n(55).KEY,f=n(9),a=n(22),p=n(20),l=n(13),y=n(7),h=n(26),d=n(25),v=n(54),b=n(48),x=n(51),g=n(8),m=n(3),S=n(24),k=n(12),w=n(33),O=n(58),_=n(57),j=n(6),E=n(11),P=_.f,K=j.f,C=O.f,M=r.Symbol,T=r.JSON,F=T&&T.stringify,A="prototype",I=y("_hidden"),N=y("toPrimitive"),L={}.propertyIsEnumerable,R=a("symbol-registry"),W=a("symbols"),z=a("op-symbols"),D=Object[A],J="function"==typeof M,B=r.QObject,G=!B||!B[A]||!B[A].findChild,V=i&&f(function(){return 7!=w(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=P(D,e);r&&delete D[e],K(t,e,n),r&&t!==D&&K(D,e,r)}:K,Y=function(t){var e=W[t]=w(M[A]);return e._k=t,e},H=J&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},Q=function(t,e,n){return t===D&&Q(z,e,n),g(t),e=S(e,!0),g(n),o(W,e)?(n.enumerable?(o(t,I)&&t[I][e]&&(t[I][e]=!1),n=w(n,{enumerable:k(0,!1)})):(o(t,I)||K(t,I,k(1,{})),t[I][e]=!0),V(t,e,n)):K(t,e,n)},U=function(t,e){g(t);for(var n,r=b(e=m(e)),o=0,i=r.length;i>o;)Q(t,n=r[o++],e[n]);return t},X=function(t,e){return void 0===e?w(t):U(w(t),e)},Z=function(t){var e=L.call(this,t=S(t,!0));return!(this===D&&o(W,t)&&!o(z,t))&&(!(e||!o(this,t)||!o(W,t)||o(this,I)&&this[I][t])||e)},$=function(t,e){if(t=m(t),e=S(e,!0),t!==D||!o(W,e)||o(z,e)){var n=P(t,e);return!n||!o(W,e)||o(t,I)&&t[I][e]||(n.enumerable=!0),n}},q=function(t){for(var e,n=C(m(t)),r=[],i=0;n.length>i;)o(W,e=n[i++])||e==I||e==s||r.push(e);return r},tt=function(t){for(var e,n=t===D,r=C(n?z:m(t)),i=[],u=0;r.length>u;)!o(W,e=r[u++])||n&&!o(D,e)||i.push(W[e]);return i};J||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),e=function(n){this===D&&e.call(z,n),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),V(this,t,k(1,n))};return i&&G&&V(D,t,{configurable:!0,set:e}),Y(t)},c(M[A],"toString",function(){return this._k}),_.f=$,j.f=Q,n(34).f=O.f=q,n(19).f=Z,n(35).f=tt,i&&!n(18)&&c(D,"propertyIsEnumerable",Z,!0),h.f=function(t){return Y(y(t))}),u(u.G+u.W+u.F*!J,{Symbol:M});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)y(et[nt++]);for(var et=E(y.store),nt=0;et.length>nt;)d(et[nt++]);u(u.S+u.F*!J,"Symbol",{"for":function(t){return o(R,t+="")?R[t]:R[t]=M(t)},keyFor:function(t){if(H(t))return v(R,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){G=!0},useSimple:function(){G=!1}}),u(u.S+u.F*!J,"Object",{create:X,defineProperty:Q,defineProperties:U,getOwnPropertyDescriptor:$,getOwnPropertyNames:q,getOwnPropertySymbols:tt}),T&&u(u.S+u.F*(!J||f(function(){var t=M();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!H(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&x(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!H(e))return e}),r[1]=e,F.apply(T,r)}}}),M[A][N]||n(5)(M[A],N,M[A].valueOf),p(M,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},function(t,e,n){n(25)("asyncIterator")},function(t,e,n){n(25)("observable")},function(t,e,n){n(64);for(var r=n(1),o=n(5),i=n(17),u=n(7)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var f=c[s],a=r[f],p=a&&a.prototype;p&&!p[u]&&o(p,u,f),i[f]=i.Array}},function(t,e){},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e,n){function r(t){return"string"==typeof t||!o(t)&&i(t)&&s.call(t)==u}var o=n(72),i=n(74),u="[object String]",c=Object.prototype,s=c.toString;t.exports=r},function(t,e){t.exports='<div class=vue-touch-keyboard><div class=keyboard><div v-for="line in keySet" track-by=$index class=line><span v-for="key in line" track-by=$index :class=getClassesOfKey(key) v-text=getCaptionOfKey(key) @click=clickKey(key) :style=getKeyStyle(key)></span></div></div></div>'},function(t,e,n){var r,o,i={};n(71),r=n(38),o=n(76),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(u.template=o),u.computed||(u.computed={}),Object.keys(i).forEach(function(t){var e=i[t];u.computed[t]=function(){return e}})}])});