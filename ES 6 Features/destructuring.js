// let foo =['one','two','three','four'];

// let [one,two,three]=foo

// console.log(one);
// console.log(two);
// console.log(three);

// let a,b;

// [a,b]=[1,2];
// console.log(a);
// console.log(b);

//example exchange two variable values   no out put

// let x = 20;
// let y = 10
// [x,y] = [y, x]

// console.log(x);
// console.log(y);

//********  Object destructuring  ******** */

const student = {
    myName: "manju",
  age: 25,
  city: "mumbai",
};
const{myName,age,city}=student
console.log(myName);
console.log(age);
console.log(city);
