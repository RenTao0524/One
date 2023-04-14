'use strict';

const ugc = require('..');
const assert = require('assert').strict;

assert.strictEqual(ugc(), 'Hello from ugc');
console.info('ugc tests passed');
