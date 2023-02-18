//node functions.js

//function in js usually take in data ,process it and return a result

//JS functions are called first-class-objects bcz they can have properties and methods just like any other object

//Regular function (parametrized and non-parametrized)
//arrow function
//anonymous function
//function expression
//IIFE function

//******************   Regular expression  ********************

function display() {
  console.log("Hello JavaScript");
}
display();

function multiply(a, b) {
  console.log(a * b);
}
multiply(2, 5);

function add(a, b) {
  let sum = a + b;
  return sum;
}

let result = add(2, 10);
console.log(result);

//*********        Function Expressions            ********** */

//the main difference between the function expression and function declaration is the function name which can be omitted in fun expression
//to create anonymous function

////uses  when we want to pass a function as an argument to another function and when we want to use our function as values

const division = function (a, b) {
  return a / b;
};
console.log(division(15, 3));

const addition = function (x, y) {
  const add = x + y;
  return add;
};

console.log(addition(10, 20));

////uses  when we want to pass a function as an argument to another function and when we want to use our function as values

const a = function () {
  console.log("Hello a");
};

function b(a) {
  console.log("Hey b");
  a();
}

b(a);

//**************          anonymous function ***************/

//Anonymous functions are the functions that do not have function name
//basically we call an aonymous fun by assiging it to a variable and calling that variable

let x = function () {
  console.log("I'm anonymous function");
};
x();

let qr = function () {
  console.log("Hello Manjunath");
};

//*****************    Arrow function       **************************/
// in arraow fun declaration  function keyword is not require
//if we have a single parameter and a single line of code we can skip the ()  and  {}

//Limitation
//arrow fun do not have their own 'this' binding
//not suitable to be used for call,apply and bind methods
// they can not be used as constructor either

let add2 = (a, b) => {
  return a + b;
};
console.log(add2(50, 50));

let add3 = (x, y) => x + y;
console.log(add3(100, 300));
