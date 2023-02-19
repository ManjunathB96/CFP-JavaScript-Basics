// node setTimeOut.js
/*
console.log("execution  1");

function myFunc() {
  console.log("execution  2");
}

let intervalID = setTimeout(myFunc, 1000);
console.log("ID : " + intervalID);


console.log("execution  3");


function greet() {
  console.log("execution  4");
}
let intervalId = setTimeout(greet, 1000);
console.log("Id: " + intervalId);
*/

//display time every 3 sec

// function showTime() {
//   let dateTime = new Date();

//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
//   setTimeout(showTime, 3000);
// }
// showTime();
/*

let count=0;

function incCount() {
    count +=1;
    console.log(count);
}

let id=setTimeout(incCount,6000);

clearTimeout(id);              //the count is not increased bcz the setTimeOt is stopped before the inc of count
console.log("set time out is stoped ...");


*/

function myFn(name,city) {
    
    console.log(`my name is ${name}  and my city is ${city}`);
}

setTimeout(myFn,3000,'Manjunath','Koladur');


