'use strict';

const vue3App = require('..');
const assert = require('assert').strict;

assert.strictEqual(vue3App(), 'Hello from vue3App');
console.info('vue3App tests passed');
