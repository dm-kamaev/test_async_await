'use strict';

const fs = require('fs')
const a_async = require('./a_async.js');

console.time('Start')
void  async function () {
  try {
    var res = await a_async({
      a: random_digit({ min: 10, max: 100 }),
      b: random_digit({ min: 10, max: 100 }),
      c: random_digit({ min: 10, max: 100 }),
      d: random_digit({ min: 10, max: 100 }),
    });
    console.timeEnd('Start');
    console.log('Res=', res);
    fs.writeFileSync('./res.log', res, 'utf-8');
  } catch (err) {
    console.log(err);
  }
}();


var random = {};
function list_digit(number, option) {
  var res = [];
  var min = option.min || 0;
  var max = option.max;
  for (var i = 0; i < number; i++) {
    res.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return res;
};
// console.log(exports.list_digit(2, { max: 110 }));


// option { max , min }
// return 17
function random_digit(option) {
  return list_digit(1, option)[0];
}