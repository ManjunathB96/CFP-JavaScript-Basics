//node callbacks.js

//******  Callback  ********* */

// A callback function is a function passed into another function as an argument

// //Example : 1
// const prompt=require("prompt-sync")();

// //callback function
// function myFn(name) {
//     console.log(`Hello, ${name}`);
// }

// function processUserInPut(myFn) {
//     const name =prompt('Enter name  ');
//     myFn(name)
// }

// processUserInPut(myFn);

// //Example : 2
// function greet(name,callack) {
//     console.log(`hi ${name}`);
//     callack();
// }

// function callMe() {
//     console.log('I am callback function');
// }

// greet('Ram',callMe);

// //Example : 3

// function show(name,sayMyName) {
//     console.log('Hello world');

//     sayMyName(name);   //the callback function executed only after the show() is executed
// }

// //callback function
// function sayMyName(name) {
// console.log(`Hey ${name}`);
// }

// setTimeout(show,2000,'Banu',sayMyName);

//Example : 4
// //A synchronous callback is executed during the execution of the higher order functionthat uses the callback
// //the isOdd and isEeven  are examples of synchronous callbacks bcz they executed during the execition of the filter() mtd
// function isOdd(number) {                //callback function
//   return number % 2 != 0;
// }

// function isEven(number) {
//     return number% 2 ==0
// }

// function filter(numbers,fn) {               //filter function is high order function bcz it takes another function as an argument
//     let results=[];
//     for (const number of numbers) {
//         if (fn(number)) {
//             results.push(number);
//         }
//     }
//     return results;

// }

// let numbers=[1,2,3,4,5,6,7,8];
// let outPut1=filter(numbers,isOdd);
// console.log(outPut1);

// let outPut2=filter(numbers,isEven);
// console.log(outPut2);

////passing arrow function
// function filter2(numbers,callack) {
//     let result=[];
//     for (const num of numbers) {
//         if (callack(num)) {
//             result.push(num);
//         }
//     }return result;
// }

// let numbers=[11,12,13,14,15,16];

// let outPut=filter2(numbers,(num)=> num%2 !=0 );
// console.log(outPut);

//*****   asynchronous callback   ************* */

//An asynhronous callback is executed after the execution of the higher order function that uses the callback

// Asynchronous means  Javascript has to wait for an operation to complete ,it will execute the rest of the code while waiting

//Note : JavaScipt is single-threaded programming language it carries asynchronous operations via callback queue and event loop

// //example 5
// function download(url) {
//   setTimeout(() => {
//     console.log(`Downloading ${url} ...`);
//   }, 1000);
// }
// function process(picture) {
//   console.log(`Processing ${picture}`);
// }

// let url = "https://www.javascripttutorial.net/pic.jpg";

// download(url);
// process(url);

// /*

// Processing https://www.javascripttutorial.net/pic.jpg
// Downloading https://www.javascripttutorial.net/pic.jpg ...

//  this is not the expected output bcz first we need to download the picture and the process it
// */

// function download(url, process) {
//   setTimeout(() => {
//     console.log(`Downloadind ${url}`);

//     process(url);
//   }, 2000);
// }

// function process(picture) {
//   console.log(`Processing  ${url}`);
// }
// let url = "https://www.javascripttutorial.net/pic.jpg";
// download(url, process);

// /*
// Downloadind https://www.javascripttutorial.net/pic.jpg
// Processing  https://www.javascripttutorial.net/pic.jpg
// */

// /*
// the process() is a callback passed into an asynchronous function.

// When you use a callback to continue code execution after an asynchronous operation, the callback is called an asynchronous callback.*/

///******    Handling  error  ************** */

// function download(url,resolve,reject) {
//     setTimeout(() => {
//         console.log(`Downloading  ${url} ...`);
//         !url ? resolve(url):reject(url);
//     }, 2000);
// }

// download(
//     ' ',
//     ((url) => console.log(`Processing ${url}...`)),
//     ((url) => console.log(`the ${url} is not valid `))
// );

//********  Nesting callbacks and the Pyramid of Doom  or  callback hell    ****** */

// function download(url, callback) {
//   setTimeout(() => {
//     console.log(`Downloading ${url} ...`);
//     callback(url);
//   }, 1000);
// }

// const url1 = "https://www.javascripttutorial.net/pic1.jpg";
// const url2 = "https://www.javascripttutorial.net/pic2.jpg";
// const url3 = "https://www.javascripttutorial.net/pic3.jpg";

// download(url1, function (url) {
//   console.log(`Processing ${url}...`);

//   download(url2, function (url) {
//     console.log(`Processing ${url}...`);

//     download(url3, function (url) {
//       console.log(`Processing ${url}...`);
//     });
//   });
// });


//Example &
function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ]);
  }, 1000);
}

function findUser(username, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.username === username);
    callback(user);
  });
}

findUser('john', console.log);