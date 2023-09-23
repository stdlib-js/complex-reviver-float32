// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs";function s(s,m){return m&&m.type&&"Complex64"===m.type&&e(m.re)&&e(m.im)?new t(m.re,m.im):m}export{s as default};
//# sourceMappingURL=index.mjs.map
