// node asyncawait.js

//***********   Async-await  ********* */

//  asyncawait allow us to write asynchronous code that looks more like synchronous code and is more readable


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

// //*******    Error handling ************ */
// let isPresent = true;

// let promise = new Promise(function (resolve, reject) {
//   if (isPresent) {
//     setTimeout(() => {
//       resolve("Promise resolved");
//     }, 4000);
//   } else {
//     reject("promise rejected");
//   }
// });

// async function ayncFn() {
//   try {
//     let result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// ayncFn();


function getUser(userId) {
  return new Promise((resolve, reject) => {
      console.log('Get user from the database.');
      setTimeout(() => {
          resolve({
              userId: userId,
              username: 'Manjunath'
          });
      }, 2000);
  })
}

function getServices(user) {
  return new Promise((resolve, reject) => {
      console.log(`Get services of  ${user.username} from the API.`);
      setTimeout(() => {
          resolve(['Email', 'VPN', 'CDN']);
      }, 2 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
      console.log(`Calculate service costs of ${services}.`);
      setTimeout(() => {
          resolve(services.length * 100);
      }, 3 * 1000);
  });
}
async function showServiceCost() {
  let user = await getUser(100);
  let services = await getServices(user);
  let cost = await getServiceCost(services);
  console.log(`The service cost is ${cost}`);
}

showServiceCost();
