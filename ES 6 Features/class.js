//*****   Classes   ********** */

//  a classn is a blueprint for the object ,we can create an object from the class

//the JS class is special type of function and the typeOf  operator returns function for a class

class Main {
    constructor(employee,companyName){
        this.employee=employee
        this.companyName=companyName
    }
    company(){
        console.log(`${this.employee} is working in ${this.companyName} company fom last two years` );
    }
}

let manju=new Main('Manjunath','BetaFlux');

manju.company();