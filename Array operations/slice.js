

// ********    slice() mtd  ==> the slice mtd slices the specified part of the array without modifying the original array  

let floors=['ground','first','second','third','fourth','fifth']
console.log(floors);

let allFloor=floors.slice();     //copy 
console.log(allFloor);

let nFloors=floors.slice(3);   //from  3 index the array is sliced 
console.log(nFloors);

let sliceFloor=floors.slice(0,3);  // from 0 idx to 3 idx  array is  sliced 
console.log(sliceFloor);





//********       spread  operator   */

const num=["zero", "one", "two", "three", "four", "five", "six"];

const newNum=[...num]      // spread  operator is used to clone the /copy the array
console.log(newNum);






//****     rest parameter     */


let [ground,first,...rest]=['ground','first','second','third','fourth','fifth']
console.log(ground);
console.log(first);
console.log(rest);

