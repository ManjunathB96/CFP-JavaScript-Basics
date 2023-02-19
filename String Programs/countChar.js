// node countChar.js

const prompt=require("prompt-sync")();

function countCharInStr(str,ch) {
    
    let count=0;
    for (let i = 0; i < str.length; i++) {
       if (str.charAt(i) == ch) {
        count++;
       }
        
    }
   return count;
}

const str=prompt("Enter String :  ")
const ch=prompt("Enter Character you want find it's occurence   :  ")

const result=countCharInStr(str,ch)
console.log(result);


/*
function countChar(str, ch) {

  const pattern = new RegExp(ch, "g");

  let count = str.match(pattern).length;

  return count;
}

const str=prompt("Enter String :  ")
const ch=prompt("Enter Character you want find it's occurence   :  ")

const result=countChar(str,ch)
console.log(result);
*/
