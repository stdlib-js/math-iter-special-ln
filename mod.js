// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,c=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var f,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||c.call(t,r)?(f=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=f):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var f=r;function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},A=Boolean.prototype.toString;var g=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},F="object"==typeof E?E:null;var N=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(F)return F;throw new Error("unexpected error. Unable to resolve global object.")}(),P=N.document&&N.document.childNodes,T=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(x,"REGEXP",V);var B=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function I(t){return null!==t&&"object"==typeof t}function G(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=V.exec(e.toString()))return r[1]}return I(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(I,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!B(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(I));var k="function"==typeof y||"object"==typeof T||"function"==typeof P?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function C(t){return"function"===k(t)}function L(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&C(t.next)}function M(t){return"number"==typeof t}var R=Number,X=R.prototype.toString;var Y=b();function q(t){return"object"==typeof t&&(t instanceof R||(Y?function(t){try{return X.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function z(t){return M(t)||q(t)}l(z,"isPrimitive",M),l(z,"isObject",q);var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var H,J=Object.getPrototypeOf;H=C(Object.getPrototypeOf)?J:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var K=H;var Q=Object.prototype;function W(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!B(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),K(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&C(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&C(r.isPrototypeOf)&&(r===Q||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Z(t,r){return W(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function $(t,r,n){var e,o,u,i;if(!L(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!C(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",a),l(o,"return",c),D&&C(t[D])&&l(o,D,f),o;function a(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:M(n.value)?r(n.value):e.invalid,done:!1}}function c(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return $(t[D](),r,e)}}var tt="function"==typeof Uint32Array;var rt="function"==typeof Uint32Array?Uint32Array:null;var nt,et="function"==typeof Uint32Array?Uint32Array:void 0;nt=function(){var t,r,n;if("function"!=typeof rt)return!1;try{r=new rt(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(tt&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?et:function(){throw new Error("not implemented")};var ot=nt,ut="function"==typeof Float64Array;var it="function"==typeof Float64Array?Float64Array:null;var at,ct="function"==typeof Float64Array?Float64Array:void 0;at=function(){var t,r,n;if("function"!=typeof it)return!1;try{r=new it([1,3.14,-3.14,NaN]),n=r,t=(ut&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?ct:function(){throw new Error("not implemented")};var ft=at,lt="function"==typeof Uint8Array;var yt="function"==typeof Uint8Array?Uint8Array:null;var pt,vt="function"==typeof Uint8Array?Uint8Array:void 0;pt=function(){var t,r,n;if("function"!=typeof yt)return!1;try{r=new yt(r=[1,3.14,-3.14,256,257]),n=r,t=(lt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?vt:function(){throw new Error("not implemented")};var bt=pt,st="function"==typeof Uint16Array;var dt="function"==typeof Uint16Array?Uint16Array:null;var mt,wt="function"==typeof Uint16Array?Uint16Array:void 0;mt=function(){var t,r,n;if("function"!=typeof dt)return!1;try{r=new dt(r=[1,3.14,-3.14,65536,65537]),n=r,t=(st&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?wt:function(){throw new Error("not implemented")};var jt,At={uint16:mt,uint8:bt};(jt=new At.uint16(1))[0]=4660;var gt=52===new At.uint8(jt.buffer)[0],_t=!0===gt?1:0,ht=new ft(1),Ot=new ot(ht.buffer);function Ut(t){return ht[0]=t,Ot[_t]}var St=!0===gt?1:0,Et=new ft(1),Ft=new ot(Et.buffer);var Nt=R.NEGATIVE_INFINITY;var Pt=.6931471803691238,Tt=1.9082149292705877e-10;function xt(t){var r,n,e,o,u,i,a,c,f,l,y,p;return 0===t?Nt:function(t){return t!=t}(t)||t<0?NaN:(u=0,(n=Ut(t))<1048576&&(u-=54,n=Ut(t*=0x40000000000000)),n>=2146435072?t+t:(u+=(n>>20)-1023|0,u+=(c=(n&=1048575)+614244&1048576|0)>>20|0,a=(t=function(t,r){return Et[0]=t,Ft[St]=r>>>0,Et[0]}(t,n|1072693248^c))-1,(1048575&2+n)<3?0===a?0===u?0:u*Pt+u*Tt:(i=a*a*(.5-.3333333333333333*a),0===u?a-i:u*Pt-(i-u*Tt-a)):(c=n-398458|0,f=440401-n|0,o=(y=(p=(l=a/(2+a))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),i=e+o,(c|=f)>0?(r=.5*a*a,0===u?a-(r-l*(r+i)):u*Pt-(r-(l*(r+i)+u*Tt)-a)):0===u?a-l*(a-i):u*Pt-(l*(a-i)-u*Tt-a))))}function Vt(t){return $(t,xt)}export{Vt as default};
//# sourceMappingURL=mod.js.map
