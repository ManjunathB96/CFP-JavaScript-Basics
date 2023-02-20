// node strings.js

//***************   String  ******************** */

//Note
//String : sequence of charecter is known as string
//string is a primitive data types in javascript
//strings in JS follow 0-based indexing

//*****  Ways to create String */

//1) as a Primitive  ==== string litterals
//2) as a Object  ==== using String() constructor

//1) as a primitive
 let name ="manju"
const str1 = "String with double quotes";
const str2 = "String with single quotes";
const str3 = `string with backticks ${name}`; //template literals

//2) as a Object
// the String() constructor is called using the new keyword and the value is assigned to a variable

const str4 = new String("Hey i am String object !");

//***  ways to access individual charaters in string  1) charAt()  and braket notation */

const str5 = "Manju";

console.log(str5.charAt(0));
console.log(str5.charAt(4));

console.log(str5[0]);
console.log(str5[4]);

//***   String() Constructor */
let num = 1234;

let str6 = new String(num);

console.log(str6);    //[String: '1234']    calling string() as a constructor  returns Obect

let str7 = String(num);

console.log(str7);   //1234     calling string() as a function returns primitive string

