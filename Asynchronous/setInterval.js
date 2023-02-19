// node setInterval.js

//******   setInterval()  ******* */
//setIntreval() mtd repeats a block of code at every given timing event

// function display() {
//     console.log(`Hello world`);
// }

// setInterval(display,2000)

// // program to display time every 5 seconds
// function showTime() {
//   // return new date and time
//   let dateTime = new Date();

//   // return the time
//   let time = dateTime.toLocaleTimeString();

//   console.log(time);
// }
// setInterval(showTime, 2000);
// //let display = setInterval(showTime, 2000);

// program to stop the setInterval() method after five times

let count = 0;
let interval = setInterval(() => {
  count += 1;
  if (count === 5) {
    clearInterval(interval);
  }

  let dateTime = new Date();

  let time = dateTime.toLocaleTimeString();
  console.log(time);
}, 2000);
