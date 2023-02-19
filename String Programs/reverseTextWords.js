// node reverseTextWords.js
/*
const sentence = "go to school";

let words = sentence.split(" ");

console.log(words); //[ 'go', 'to', 'school' ]

let revStr = " ";

for (let i = 0; i < words.length; i++) {
  let w = words[i];
  let revWord = " ";
  for (let j = w.length - 1; j >= 0; j--) {
    revWord = revWord + w.charAt(j);
  }
  revStr = revStr + revWord + " ";
}

console.log(revStr);
*/

function reverseTextWords(sentence) {
  let words = sentence.split(" ");

  console.log(words); //[ 'go', 'to', 'school' ]

  let revStr = " ";

  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    let revWord = " ";
    for (let j = w.length - 1; j >= 0; j--) {
      revWord = revWord + w.charAt(j);
    }
    revStr = revStr + revWord + " ";
  }

  console.log(revStr);
}

const sentence = "go to school";

reverseTextWords(sentence);
