// node sortSentence.js

// const str = "my name is manju";

// let arrStr = str.split(" ");

// console.log(arrStr);

// for (let i = 0; i < arrStr.length; i++) {
//   for (let j = 0; j < arrStr.length; j++) {
//     if (arrStr[i] < arrStr[j]) {
//       let temp = arrStr[i];
//       arrStr[i] = arrStr[j];
//       arrStr[j] = temp;
//     }
//   }
// }
// console.log(arrStr);
// arrStr=arrStr.join("");
// console.log(arrStr);

const prompt = require("prompt-sync")();


function sortSentence(str) {
  let arrStr = str.toLowerCase().split(" ");
console.log(arrStr);
for (let i = 0; i < arrStr.length; i++) {
    for (let j = 0; j < arrStr.length; j++) {
      if (arrStr[i] < arrStr[j]) {
        let temp = arrStr[i];
        arrStr[i] = arrStr[j];
        arrStr[j] = temp;
      }
    }
  }
  console.log(arrStr);
  arrStr = arrStr.join(" ");
  console.log(arrStr);
}

const string = prompt("Enter a String :  ");
sortSentence(string);