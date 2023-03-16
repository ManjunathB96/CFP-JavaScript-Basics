//*****   Classes   ********** */

//  a classn is a blueprint for the object ,we can create an object from the class

//the JS class is special type of function and the typeOf  operator returns function for a class

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   display() {
//     console.log(`Hello ${this.name}`);
//   }
// }



// let p1=new Person('Manjunath')
// console.log(p1.name);
// p1.display();





 //Class in Java Script and Inheritance
 class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  sayMyName() {
    return this.firstName + "  " + this.lastName;
  }
}

const p2 = new Person("Manjunath", "Belagavi");
console.log(p2.sayMyName());


class SuperHero extends Person{

    constructor(fName, lName) {
       super(fName, lName)
       this.isSuperHero=true
      }
      fightCrime(){
        console.log("Fighting crime");
      }

}

const batman=new SuperHero('Ram','Rao')
console.log(batman.sayMyName());