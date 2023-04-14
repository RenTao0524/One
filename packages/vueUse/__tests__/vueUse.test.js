'use strict';

const vueuse = require('..');
const assert = require('assert').strict;

assert.strictEqual(vueuse(), 'Hello from vueuse');
console.info('vueuse tests passed');
