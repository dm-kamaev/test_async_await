'use strict';

module.exports = function (a, b, c, d) {
  return six(
    five(
      fourth(
        third(
          second(
            first(
              { a, b, c, d }
            )
          )
        )
      )
    )
  )
}


function first(obj) {
  return obj;
}

function second(obj) {
  return obj;
}

function third(obj) {
  return obj;
}

function fourth(obj) {
  return obj;
}

function five(obj) {
  return obj;
}


function six({ a, b, c, d }) {
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


  return [ a, b, c, d ];
}