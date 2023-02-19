// node asyncawait.js

//***********   Async-await  ********* */
//we use  async keyword with a function to represent that the function is asynchronous function
//async function returns promise

// the await keyword is used inside the async function to wait for the asynchronous operations

// async function asyncFn() {
//   console.log("Async function");

//   return Promise.resolve(1);
// }

// asyncFn()
//   .then(function success(result) {
//     console.log("Hey then");
//     console.log(result);
//   })
//   .catch(function error(result) {
//     console.log(('Hey catch '));
//     console.log(result);
//   });

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Promise is resolved ");
//   }, 4000);
// });

// async function ayncFn() {
//   console.log("Execution 1");

//   let result = await promise;

//   console.log(result);
//   console.log(" Execution 2 ");
// }

// ayncFn();

//*******    Error handling ************ */
let isPresent = true;

let promise = new Promise(function (resolve, reject) {
  if (isPresent) {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 4000);
  } else {
    reject("promise rejected");
  }
});

async function ayncFn() {
  try {
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

ayncFn();
