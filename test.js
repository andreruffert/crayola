'use strict';
var test = require('ava');
var crayola = require('./');

test('returns a random crayola color', function (t) {
	t.assert(crayola() !== null && typeof crayola() === 'object');
});

test('returns all the colors', function (t) {
	t.assert(Array.isArray(crayola.colors));
	t.assert(crayola.colors[3] !== null && typeof crayola() === 'object');
});
