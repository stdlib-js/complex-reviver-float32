// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,a=r.__lookupGetter__,u=r.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(a.call(t,e)||u.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=c):t[e]=l.value),p="get"in l,y="set"in l,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,l.get),y&&i&&i.call(t,e,l.set),t};function c(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var s=y()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[v],i=v,e=null!=(o=t)&&m.call(o,i);try{t[v]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[v]=r:delete t[v],n}:function(t){return b.call(t)},_=Number,h=_.prototype.toString;var w=y();function d(t){return"object"==typeof t&&(t instanceof _||(w?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Number]"===s(t)))}function g(t){return f(t)||d(t)}c(g,"isPrimitive",f),c(g,"isObject",d);var E="function"==typeof Math.fround?Math.fround:null,S="function"==typeof Float32Array;var j=Number.POSITIVE_INFINITY,T="function"==typeof Float32Array?Float32Array:null;var O="function"==typeof Float32Array?Float32Array:void 0;var A=new(function(){var t,e,r;if("function"!=typeof T)return!1;try{e=new T([1,3.14,-3.14,5e40]),r=e,t=(S&&r instanceof Float32Array||"[object Float32Array]"===s(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===j}catch(e){t=!1}return t}()?O:function(){throw new Error("not implemented")})(1);var F="function"==typeof E?E:function(t){return A[0]=t,A[0]};function P(t,e){if(!(this instanceof P))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!f(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!f(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:F(t)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:F(e)}),this}function N(t,e){return e&&e.type&&"Complex64"===e.type&&f(e.re)&&f(e.im)?new P(e.re,e.im):e}c(P,"BYTES_PER_ELEMENT",4),c(P.prototype,"BYTES_PER_ELEMENT",4),c(P.prototype,"byteLength",8),c(P.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),c(P.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t}));export{N as default};
//# sourceMappingURL=mod.js.map