// node currying.js

//********Currying   ********** */

//  currying is advance technique to transform More args fun to lesser args function

function add(a) {
  return function (b) {
    return a + b;
  }
}

const val=add(2, 5)
console.log(val);

function multiply(a, b) {
  return a * b;
}

function currying(fn) {
  return function (a) {
    return function (b) {
      return fn(a,b);
    };
  };
}

const result = currying(multiply);

console.log(result(2)(3));
