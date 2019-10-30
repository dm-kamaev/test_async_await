'use strict';

const b_simple = require('./b_async.js');

module.exports = async function ({ a, b, c, d}) {
  var res = []
  try {
    for (var i = 0; i < 100000; i++) {
      res = res.concat(
        (await b_simple(a, b, c, d))
      );
    }
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}