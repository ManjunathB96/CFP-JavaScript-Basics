// node closures.js

const Person = function (pName) {
  const name = pName;

  this.getName = function () {
    return name;
  };
};

const person = new Person("Manju");

console.log(person.getName());

//******************            Closures    **************** */
 //the ability of a fuction to store a variable in memory  for further reference even after it is  executed is called closure


function randomFunc(){
    var obj1={name:"RamKumar",age:28};  //randome func() instead of destroying the obj1 after execution 
    //saves the value in the memory for further reference 

    return function () {
        console.log(obj1.name+" is "+" awesome ");
    }
}

var closures=randomFunc();
closures();
