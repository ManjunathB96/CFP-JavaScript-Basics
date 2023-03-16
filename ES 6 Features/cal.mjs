//******   Module  ES6 feature */

//An ES6 Module is a JS file that executes in sctrict mode only ,
//it means that any variables or functions declared in the module  will not be added automatically to the global scope

// export let message='ES6 Module';

// export function display(msg) {
//     message=msg

// }

export let a = 10,
  b = 20,
  result = 0;

export function sum() {
  result = a + b;
  return result;
}

export function multiply() {
  result = a * b;
  return result;
}
