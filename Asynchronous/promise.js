// node promise.js
//********     Promise  ********** */

//A promise is an object that encapsulates the result of an Asynchronus operation

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

// let count = false;
// let calFn = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve("Promise is resolved ");
//   } else {
//     reject("Promise is rejected");
//   }
// });

// calFn
//   .then(function success(result) {
//     console.log(result);
//   })
//   .catch(function error(result) {
//     console.log(result);
//   })
//   .finally(function display() {
//     console.log(
//       "i am executed always either your promise resolved or rejected "
//     );
//   });

// //Example :5

// function getUsers() {
//   return [
//     { username: "Manju", email: "manju@gmail.com" },
//     { username: "Kavya", email: "kavya@gmail.com" },
//   ];
// }

// function findUser(username) {
//   const users=getUsers();

//   const result=users.find((u) => u.username === username);  //the find() method on the users array to search for a
//                                                               // user with a specific username, and returns the matched user.

//   return result;

// }
// console.log(findUser('Manju'));

//Example :6

// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { usename: "Ram", age: 20 },
//         { usename: "Bharat", age: 28 },
//       ]);
//     }, 2000);
//   });
// }

// const promise = getUsers();

// function onFulfilled(users) {
//   console.log(users);
// }
// promise.then(onFulfilled);

//Example : 7

let success = false;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject("Failed to the user list");
      }
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

const promise = getUsers();
promise.then(onFulfilled, onRejected);


getUsers()
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
