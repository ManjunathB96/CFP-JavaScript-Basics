
//*****  Object destrcturing  *********/
/*
const classDetails={
    strength:78,
    benches:30,
    blackboard:1
}
const classStrength=classDetails.strngth;
const classBenches=classDetails.benches;
const classBlackBoard=classDetails.blackboard;
*/

const classDetails={
    strength:78,
    benches:30,
    blackboard:1
}

const {strength:classStrength,benches:classBenches,blackboard:classBlackBoard}=classDetails;

console.log(classStrength);
console.log(classBenches);
console.log(classBlackBoard);


//const {strength:strength}=classDetails

const {strength}=classDetails






//***        Array Destructuring   ************** */

const [one,two,three,four]=[1,2,3,4];
console.log(one);
console.log(two);
console.log(three);
console.log(four);
