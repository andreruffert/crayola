#!/usr/bin/env node
'use strict';
var argv = require('minimist')(process.argv.slice(2));
var pkg = require('./package.json');
var crayola = require('./');

function help() {
	console.log([
		pkg.description,
		'',
		'Example',
		'  $ crayola',
		'  { hex: \'#FEFE22\', name: \'Laser Lemon\', rgb: \'(254, 254, 34)\' }'
	].join('\n'));
}

if (argv.help) {
	help();
	return;
}

if (argv.version) {
	console.log(pkg.version);
	return;
}

console.log(crayola());
