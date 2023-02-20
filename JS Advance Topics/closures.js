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
/*
closures are created every time a fun is created 

closure is created when function returning from another function  

when we return it return the inner fun as well as its scope


*********************************************************************/

function randomFunc(){
    var obj1={name:"RamKumar",age:28};  //randome func() instead of destroying the obj1 after execution 
    //saves the value in the memory for further reference 

    return function () {
        console.log(obj1.name+" is "+" awesome ");
    }
}

var closures=randomFunc();
closures();


/*
function outer() {
    let count = 0;
    function inner() {
      count++;
      console.log(count);
    }
   return inner
  }
  
let result=outer()
result()
result()

*/
/*


the &&&  "result"  &&&  will persist or remeber the count value i.e 1

when we invoke result first time  1 is printed 

result remmeber  the count value is 1  and next time we invoke it the output is   11  =====>   2
****************************************************************************************************
*/
