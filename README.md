<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Reviver

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Revive a JSON-serialized 64-bit [complex number][@stdlib/complex/float32].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/complex-reviver-float32
```

</section>

<section class="usage">

## Usage

```javascript
var reviver = require( '@stdlib/complex-reviver-float32' );
```

#### reviver( key, value )

Revives a JSON-serialized 64-bit [complex number][@stdlib/complex/float32].

```javascript
var parseJSON = require( '@stdlib/utils-parse-json' );

var str = '{"type":"Complex64","re":5,"im":3}';

var z = parseJSON( str, reviver );
// returns <Complex64>
```

For details on the JSON serialization format, see [`Complex64`][@stdlib/complex/float32].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex-float32' );
var parseJSON = require( '@stdlib/utils-parse-json' );
var reviver = require( '@stdlib/complex-reviver-float32' );

var z = new Complex64( 5.0, 3.0 );
var str = JSON.stringify( z );
// returns '{"type":"Complex64","re":5,"im":3}'

var w = parseJSON( str, reviver );
if ( w instanceof Error ) {
    throw w;
}
var bool = ( w instanceof z.constructor );
// returns true

bool = ( w.re === z.re );
// returns true

bool = ( w.im === z.im );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex-reviver-float32.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex-reviver-float32

[test-image]: https://github.com/stdlib-js/complex-reviver-float32/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/complex-reviver-float32/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex-reviver-float32/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex-reviver-float32?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex-reviver-float32
[dependencies-url]: https://david-dm.org/stdlib-js/complex-reviver-float32/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex-reviver-float32/main/LICENSE

[@stdlib/complex/float32]: https://github.com/stdlib-js/complex-float32

</section>

<!-- /.links -->
