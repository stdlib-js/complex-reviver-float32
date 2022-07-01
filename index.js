// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__,c=r,f=function(t,e,r){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(a.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&u&&u.call(t,e,r.set),t},p=e()?c:f,y=p,m=function(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},b=function(t){return"number"==typeof t},s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=function(){return s&&"symbol"==typeof Symbol.toStringTag},d=Object.prototype.toString,_=d,h=function(t){return _.call(t)},w=Object.prototype.hasOwnProperty,g=function(t,e){return null!=t&&w.call(t,e)},E="function"==typeof Symbol?Symbol.toStringTag:"",j=g,S=E,T=d,P=h,O=function(t){var e,r,n;if(null==t)return T.call(t);r=t[S],e=j(t,S);try{t[S]=void 0}catch(e){return T.call(t)}return n=T.call(t),e?t[S]=r:delete t[S],n},A=v()?O:P,F=Number,N=F.prototype.toString,I=A,x=F,V=function(t){try{return N.call(t),!0}catch(t){return!1}},C=v(),M=function(t){return"object"==typeof t&&(t instanceof x||(C?V(t):"[object Number]"===I(t)))},k=b,L=M,R=m,Y=function(t){return k(t)||L(t)},B=M;R(Y,"isPrimitive",b),R(Y,"isObject",B);var G=Y,J="function"==typeof Math.fround?Math.fround:null,q=A,z="function"==typeof Float32Array,D=function(t){return z&&t instanceof Float32Array||"[object Float32Array]"===q(t)},H=Number.POSITIVE_INFINITY,K="function"==typeof Float32Array?Float32Array:null,Q=D,U=H,W=K,X="function"==typeof Float32Array?Float32Array:void 0,Z=function(){throw new Error("not implemented")},$=new(function(){var t,e;if("function"!=typeof W)return!1;try{e=new W([1,3.14,-3.14,5e40]),t=Q(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===U}catch(e){t=!1}return t}()?X:Z)(1),tt=J;"function"!=typeof tt&&(tt=function(t){return $[0]=t,$[0]});var et=tt,rt=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},nt=function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t},ot=G.isPrimitive,it=p,ut=m,at=et,lt=rt,ct=nt;function ft(t,e){if(!(this instanceof ft))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ot(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!ot(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return it(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:at(t)}),it(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:at(e)}),this}ut(ft,"BYTES_PER_ELEMENT",4),ut(ft.prototype,"BYTES_PER_ELEMENT",4),ut(ft.prototype,"byteLength",8),ut(ft.prototype,"toString",lt),ut(ft.prototype,"toJSON",ct);var pt=ft;return function(t,e){return e&&e.type&&"Complex64"===e.type&&G.isPrimitive(e.re)&&G.isPrimitive(e.im)?new pt(e.re,e.im):e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).reviver=e();
//# sourceMappingURL=index.js.map
