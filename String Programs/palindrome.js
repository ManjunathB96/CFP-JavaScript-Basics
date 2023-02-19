// node palindrome.js
const prompt = require("prompt-sync")();


function palindrome(str) {
  let len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return "Not a palindrome";
    }
  }

  return "String is a palindrome";
}


const str=prompt("Enter a String :  ");

const result=palindrome(str);
console.log(result);


/*
function palindrome(str) {
  let strArray = str.split('');   //split('') mtd converts string into array
 
  let reverseStr = strArray.reverse();   //revrese()  mtd reverses the postion of array
 
  let newStr = reverseStr.join('');   //join('')  mtd joins the array into string

  console.log(newStr);

  if (str == newStr) {
    console.log("Palindrome");
  } else {
    console.log("Not palindrome");
  }
}
const str = prompt("Enter a String :  ");

palindrome(str);
*/
