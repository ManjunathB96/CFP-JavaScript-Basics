//node restPara.js

// ****************   Rest parameter   ES6 feature  ***********/

//rest parameter allow us to pass any number of arguments as an array
//Note
//A function definition can have only one ...restParameter
//the rest paramter must be the last parameter in the function definition

function myFunc(a,b,...restArgs) {
    console.log("a =",a);
    console.log("b =",b);
    console.log("rest args =",restArgs);
    
}

myFunc(1,2,3,4,5,6,7)
/*
a = 1
b = 2
rest args = [ 3, 4, 5, 6, 7 ]*/


//************ Rest Parameter in Array */
//array destructuring

const [tomato,banana,...rest]=['tomato','banana','carrot','beans','onion'];
console.log(tomato);
console.log(banana);
console.log(rest);
/*tomato
banana
[ 'carrot', 'beans', 'onion' ]*/














