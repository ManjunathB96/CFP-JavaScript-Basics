// node arrcountVowandCons.js

function countVowAndCons(array) {
  let vCount = 0;
  let cCount = 0;

  for (let i = 0; i < array.length; i++) {
    let str = array[i];
    console.log(str);
    str = str.toLocaleLowerCase();
    for (let j = 0; j < array.length; j++) {
      if (
        str.charAt(j) === "a" ||
        str.charAt(j) === "e" ||
        str.charAt(j) === "i" ||
        str.charAt(j) === "o" ||
        str.charAt(j) === "u"
      ) {
        vCount++;
      } else if (str.charAt(j) >= "a" && str.charAt(j) <= "z") {
        cCount++;
      }
    }
  }
  console.log(vCount);
  console.log(cCount);
}

const array = ["manu", "tea", "raj", "hello"];

countVowAndCons(array);

/*

function countVowAndCons(array) {
    let vCount = 0;
    let cCount = 0;
  
    for (let i = 0; i < array.length; i++) {
      let str = array[i];
      console.log(str);
      //str = str.toLocaleLowerCase();
      for (let j = 0; j < array.length; j++) {
 
        if (str.charAt(j) === 'a' || str.charAt(j) === 'e' || str.charAt(j) === 'i' || str.charAt(j) === 'o' || str.charAt(j) === 'u') {
            vCount += 1;
          } else if(str.charAt(j) >='a' && str.charAt(j) <='z' ) {
            cCount += 1;
          }
        }
    }
        console.log(vCount);
        console.log(cCount);
      
    }
   
  
  
  const array = ["manu", "tea", "raj", "hell"];
  
  countVowAndCons(array);

*/




