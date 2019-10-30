'use strict';

module.exports = async function (a, b, c, d) {
  try {
    var res = { a, b, c, d };
    res = await first(res);
    res = await second(res);
    res = await third(res);
    res = await fourth(res);
    res = await five(res);
    return await six(res);
  } catch (err) {
    console.log(err);
    throw err;
  }
}


async function first(obj) {
  try {
    return obj;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function second(obj) {
  try {
    return obj;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function third(obj) {
  try {
    return obj;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function fourth(obj) {
  try {
    return obj;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function five(obj) {
  try {
    return obj;
  } catch (err) {
    console.log(err);
    throw err;
  }
}


async function six({ a, b, c, d }) {
  if (a > 20 && a < 45) {
    a *= 4;
  }

  if (b < 100 && b > 39) {
    b -=12;
  }

  if (c < 50 && c > 20) {
    c += c + a;
  }

  if (d > 20 && d < 120) {
    d *= d+1000;
  }

  if (a > 20 && b > 20 && c > 20 && d < 50) {
    a = a+b+c+d;
  }

  if ((a+b) % 2 === 0) {
    d = d*d;
  } else {
    d = c/a;
  }

  switch (a) {
    case 25:
      c = c/2;
      break;
    default:
      switch (b) {
        case 34:
          a+=a+20;
          break;
        default:
          switch (c) {
            case 89 :
              c = c+200;
              break;
            default:
              switch (d) {
                case 90:
                  d = d+150;
                  break;
                default:
                  a = a+b+c+d+200;
              }
          }
      }
  }


  return Promise.resolve([ a, b, c, d ]);
}