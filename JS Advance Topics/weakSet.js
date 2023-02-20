// node weakSet.js

//**********  WeakSet **********/

//weakset is a collection of unique elements(the ele is only objects and no other types)
//weakset has only three methods add(), delete()  and has()



let obj1={name:'Manju',
age:28};

const newSet=new WeakSet([obj1]);
console.log(newSet.has(obj1))  //true
newSet.add({city:'delhi'})

console.log(newSet);








