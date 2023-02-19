/*
function countVowelAndCons(str, ch) {
  let vCount = 0;
  let cCount = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < ch.length; j++) {
      if (str[i] === ch[j]) {
        vCount += 1;
      } else if(str.charAt(i) >='a' && str.charAt(i) <='z' ) {
        cCount += 1;
      }
    }

  }
  console.log(vCount);
  console.log(cCount);
}

let str = "manjunath";

let ch = "aeiou";
countVowelAndCons(str, ch);
*/

function countVowelAndCons(str) {
  let vCount = 0;
  let cCount = 0;

  for (let i = 0; i < str.length; i++) {
   
      if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u') {
        vCount += 1;
      } else if(str.charAt(i) >='a' && str.charAt(i) <='z' ) {
        cCount += 1;
      }
    }
    console.log(vCount);
    console.log(cCount);
  }
  


let str = "manjunath s b a a i i";

countVowelAndCons(str);