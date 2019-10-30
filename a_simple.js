'use strict';

const b_simple = require('./b_simple.js');

module.exports = function ({ a, b, c, d}) {
  var res = []
  for (var i = 0; i < 100000; i++) {
    res = res.concat(
      b_simple(a, b, c, d)
    );
  }
  return res;
}