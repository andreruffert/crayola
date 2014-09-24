# crayola [![Build Status](https://travis-ci.org/andreruffert/crayola.svg?branch=master)](https://travis-ci.org/andreruffert/crayola)

> Get Crayola Names and Color Codes

Currently 133 colors.

The Crayola Names and Color Codes are just a [JSON file](colors.json) extracted from this [article](http://www.colourlovers.com/web/blog/2008/04/22/all-120-crayon-names-color-codes-and-fun-facts).


## Install

```sh
$ npm install --save crayola
```


## Usage

```js
var crayola = require('crayola');

crayola();
//=> { hex: '#FEFE22', name: 'Laser Lemon', rgb: '(254, 254, 34)' }

crayola().hex;
//=> #FEFE22

crayola().name;
//=> Laser Lemon

crayola().rgb;
//=> (254, 254, 34)

crayola.colors;
//=> [{ hex: '#FEFE22', name: 'Laser Lemon', rgb: '(254, 254, 34)'}, ...]
```


## API

### crayola()

Returns a random [crayola color](colors.json).

### crayola().hex;
Returns a random crayola hex color code

### crayola().name;
Returns a random crayola color name

### crayola().rgb;
Returns a random crayola rgb color code

### crayola.colors

Array with all the colors.


## CLI

```sh
$ npm install --global crayola
```

```sh
$ crayola --help

Example
  $ crayola.hex
  #FF5349
  
  $ crayola.name
  Red Orange
  
  $ crayola.rgb
  (255, 83, 73)
```


## License

Entirely based on [superb](https://github.com/sindresorhus/superb) by [Sindre Sorhus](http://sindresorhus.com/). MIT © [André Ruffert](http://andreruffert.com)
