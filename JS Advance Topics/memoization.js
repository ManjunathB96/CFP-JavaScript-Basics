// node memoization.js

//**********  Memoization  ************** */

//Memoization is a form of caching , the returned value of function is cached based on it's parameters
//if the same parameters are passed to that function the cached version of that function is returned
/*
const prompt = require("prompt-sync")();

function memoizedFn() {
  var cache = {};
  return function (num) {
    if (num in cache) {
      console.log("Cached value");
        return cache[num]
    } else {
      cache[num] = num + 25;
      return cache[num]
    }
  }
}


//const num =parseInt(prompt("Enter a number :  "));
const result = memoizedFn();

result(10);
result(10);
*/


const prompt = require("prompt-sync")();

function memoizedFn() {
  var cache = {};
  return function (num) {
    if (num in cache) {
      console.log("Cached value");
        console.log(cache[num]); 
    } else {
      cache[num] = num + 25;
      console.log(cache[num]); 
    }
  }
}


const num =parseInt(prompt("Enter a number :  "));
const result = memoizedFn();

result(num);
result(num);

