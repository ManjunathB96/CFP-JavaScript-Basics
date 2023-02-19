// node freqOfChar.js

const prompt = require("prompt-sync")();

const ch = prompt("enter the charecter to count its frequency :  ");
let arr = ["manju", "kiran", "Rohan", "BANU"];

let result = freqOfCharInArr(arr, ch);
if (result === 0) {
  console.log(`the enterd charecter ${ch}  is not found`);
} else {
  console.log(`the enterd charecter ${ch}  and total count is ${result}`);
}

function freqOfCharInArr(arr, ch) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (ch.toLowerCase() === str.toLowerCase().charAt(j)) {
        count += 1;
      }
    }
  }

  return count;
}


