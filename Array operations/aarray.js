

//**************  join() method   */

//the join() array mtd in js joins all the ele of an array and returns a new string separated by a separator ,
//by defaukt the separator is comma(,)

const groceryList =['rice','wheat','beans','butter']

console.log(groceryList.join());   //rice,wheat,beans,butter


console.log(groceryList.join(''));  //ricewheatbeansbutter

console.log(groceryList.join('-'));   //rice-wheat-beans-butter





//******* reverse() mtd */

const num=["zero", "one", "two", "three", "four", "five", "six"];

let reverse=num.reverse();
console.log(reverse);




//**  ******     sort()  mtd  *************** */


let arr=[5,1,6,7,8,0,2]

arr.sort()
console.log(arr);

/////**********    sort()  mtd not work  work for numbers  buz this mtd convert the array ele into string before comparing them  */

let arr2=[1,2,100,3,1000,5]
arr2.sort();

console.log(arr2);   //[ 1, 100, 1000, 2, 3, 5 ]     unexpected output


//***  compare function is used to sort the  array  containg  numbers  */

arr2.sort(function (a,b) {
 return a-b;    
})

console.log(arr2);    //[ 1, 2, 3, 5, 100, 1000 ]