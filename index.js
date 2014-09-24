'use strict';
var colors = require('./colors.json');
var uniqueRandom = require('unique-random')(0, colors.length - 1);

module.exports = function () {
	return colors[uniqueRandom()];
};

module.exports.colors = colors;
