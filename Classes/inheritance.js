
//*****  Inheritance   */

//    Acecessing or inheriting the properties and methods of parent class to child class is called inheritance

class Animal{
    constructor(legs){
        this.legs=legs;
    }
    walk(){
        console.log(`Walking on  ${this.legs}  legs`);
    }
    static display(){
        console.log("Hello World");
    }
}

class Dog extends Animal {
    constructor(legs,color){
        super(legs);
        this.color=color;
    }
    run(){
        console.log('running');
    }
}

let dog=new Dog(4);
dog.walk()
dog.run()








