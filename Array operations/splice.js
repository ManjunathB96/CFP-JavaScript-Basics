//splice() ==> splice () mtd is used to  remove , add, or even replace an elements in an array

//remove single item

const marks = ["zero", "one", "two", "three"];
console.log(marks);

marks.splice(1, 1);

console.log(marks);

//remove ele from index 2  upto  array length

const marks1 = ["zero", "one", "two", "three", "four", "five", "six"];

marks1.splice(2);
console.log(marks1);

//remove between two indexs

const marks2 = ["zero", "one", "two", "three", "four", "five", "six"];

marks2.splice(2, 3);
console.log(marks2);





//******  splice()  mtd ==> can be used to add items  **************************/

const values = ["zero", "one", "two", "three", "four", "five", "six"];

values.splice(2, 0, "manju", "raju", "banu");

console.log(values);



//******  splice() mtd can be  used to replace the item  */

console.log('');
const nums=["zero", "one", "two", "three", "four", "five", "six"];

nums.splice(4,1,'India')

console.log(nums);

