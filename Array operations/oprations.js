
//******  Array  ******* */

// **** Array Declaration

//array literal

let arr=[1,2,3,4,5,6];
console.log(arr);

//Array() constructor 

let arr2=new Array('manju','tanu','rohan','ram');
console.log((arr2));

//  array operations  *****

//push(item)  ==> add the item to the END  of array list  

let arr3=[30,40]
arr3.push(50,60,70);
console.log(arr3);



//pop()  ==> REMOVE an item  from the END of an array

arr3.pop();
console.log(arr3);


// unshift(item)  == ADD an iten BEgining of an array

let arr4=[60,70,80]

arr4.unshift(10,20,30,40,50)
console.log((arr4));


//shift()  ==> REmove an item from the begining of an array


arr4.shift();
console.log(arr4);



//indexOf(item) ==> if the specified ele is not present in the array retun -1 if found return index value

const idx=arr4.indexOf(20)
console.log(idx);

const idx2=arr4.indexOf(1000)
console.log(idx2);

//includes(item)  ==> check wheather item is present or not

if (arr4.includes(20)) {
    console.log('20 is present');
}


























