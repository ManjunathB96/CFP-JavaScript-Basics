// node promise.js

//promise is a good way to handle the asynchronous operations in JS
//it is used to find out if the asynchronous operation is successfully completed or not

//Three states

//pending : the process is not completed
//fulfilles : the operation is successful
//rejected : error ocurred

/*
const count =true;

let countValue=new Promise(function (resolve,reject) {
    if (count) {
        resolve("there is a count value :")
        
    } else {
        reject("there is no count value ")
    }
});

console.log(countValue);

*/

//**************   Promise Chaining  **************** */

//  .then()  mtd is used with callback when the promise is successfully resolved
// .catch() mtd is used with a callbacks, when the promise is rejected
//   .finally() mtd is  executed either the promise is resolved or rejected

// let countValue=new Promise(function (resolve,reject) {
//     resolve("promise fulfilled....");

// });

// countValue
// .then(function successV(result) {
//     console.log(result);

// })
// .then(function success2() {
//     console.log("Success  2");

// });

// // returns a promise

// let countValue2 = new Promise(function (resolve, reject) {
//     resolve("Promise resolved");
//   });

//   // executes when promise is resolved successfully

//   countValue2
//     .then(function successValue(result) {
//       console.log(result);
//     })

//     .then(function successValue1() {
//       console.log("You can call multiple functions this way.");
//     });

/*
let countValue = new Promise(function (resolve, reject) {
  reject("Promise is rejected");
});

countValue
  .then(function success(result) {
    console.log(result);
  })
  .catch(function error(result) {
    console.log(result);
  });*/

let count = false;
let calFn = new Promise(function (resolve, reject) {
  if (count) {
    resolve("Promise is resolved ");
  } else {
    reject("Promise is rejected");
  }
});

calFn
  .then(function success(result) {
    console.log(result);
  })
  .catch(function error(result) {
    console.log(result);
  })
  .finally(function display() {
    console.log(
      "i am executed always either your promise resolved or rejected "
    );
  });
