// node replaceChar.js

const text="My Name  manjunath S Belagavi s";

const regex=/s/g;    //const regex=/s/gi;    /gi  for case insensitivity

const newText=text.replace(regex,'Sadashiv')
console.log(newText);


