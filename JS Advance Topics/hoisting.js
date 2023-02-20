//node hoisting.js

//************   Hoisting ************ */

//hoisting is nothing but irrespective of variable and func declartion they are moved on the top of the scope the scope both local and global

//Global scope
num = 10;
console.log(num);
var num;

myFunc();

function myFunc() {
  console.log("Hello");
}

//Local scope

function display() {
  x = 10;
  console.log(x);
  var x;
}

//Note :  variable initialization is not hoisted, only the declation is hoisted    and to avoid hoisting we ==> "use strict";

var n;
console.log(x); //undifined
x = 10;
