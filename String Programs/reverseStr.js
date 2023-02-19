// node reverseStr.js

const prompt = require("prompt-sync")();

function reverseString(str) {
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
    
  }
  return temp;
}


const string = prompt("Enter a String :  ");
const result = reverseString(string);
console.log("Reverse of String is :  ", result);



const str2="manju";

let output=str2.split('').reverse().join('');

console.log(output);