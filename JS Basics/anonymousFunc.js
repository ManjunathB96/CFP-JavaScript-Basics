//  node anonymousFunc.js

//*************Arnonymous Function  *************** */
//Note
//Anonymous function do not have any name
//we can store the results returned by an anonymous func in variable

const prompt = require("prompt-sync")();

let demo = function () {
  console.log("Hello manjunath");
};
demo();

let area = function (lenght, breadth) {
  return lenght * breadth;
};

const l = prompt("Enter lenght   ");
const b = prompt("Enter Breadth  ");
let result = area(l, b);
console.log("Area of reactangle is :  ", result);


//using anonymous function as arguments in JavaScript

function greet(wish) {
  console.log(wish(),"EveryOne!....");
  
}
greet(function () {
  return "Good Morning";
})

setTimeout(function () {
  console.log("I will run after 5 seconds");
}, 5000);
