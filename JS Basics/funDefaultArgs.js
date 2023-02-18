//node funDefaultArgs.js

//************  calling function with o argument  ***************
//if we call a function without passing any arguments then the parametr list of the fun is UNDEFINED
function myFunc(a,b) {
    console.log("The values are :");
    console.log("a =",a);
    console.log("b =",b);
}

myFunc();
/*
The values are :
a = undefined
b = undefined*/

//*********  setting default parameter  ES2015   *************************/

function add1(a=0,b=0) {
    return a+b;
}

console.log(add1(10,5));
console.log(add1(10));
console.log(add1());
/*
15
10
0
*/

//****     without default parametrs */

function add2(a,b) {
    return a+b;
}

console.log(add2(10,5));
console.log(add2(10));
console.log(add2());

/*
15
NaN
NaN*/