// classes and objects in js. 

const student = {
    fiullName : "rustam",
    marks : 90,
    printMarks : function() { // type 1 of writing a function in a obejct .
        console.log(`marks is ${this.marks} `); //this. is use to access the self object.
    } 
    // there is also a predefined object called prototype in every object.
}

const employee = {
    calcTax() {
        console.log("tax is 10% of salary");
    },
};

const karan = {
    salary : 50000,
}
const karan2 = {
    salary : 50000,
    calcTax() {
        console.log("tax is 20% of salary");
    }
}
// to use a object as a prototype we use , __ proto __

karan.__proto__ = employee; // now karan can use calcTax function.
console.log(karan.calcTax());
karan2.__proto__ = employee; // is there is same funtion in object and proto , then own object fucntion will be used.
console.log(karan2.calcTax()); 

//Classes is a blueprint for creating objects.

class ToyotaCar {
    constructor(brand, milage) { // constructor is alwayas called when a new object creat from class , it can be creat automatically or manually.
        this.brandName = brand;
        this.milage = milage;
        console.log(`consructor is called for ${this.brandName} ,milage is ${this.milage}`);
    }
    start(){
        console.log("sart");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand ;
    }
}

let fortuner = new ToyotaCar("frotuner" , 10); // templete used is ToyotaCar.  Constructor invoked.
fortuner.setBrand("Fortuner");
console.log(fortuner);// do this in console window .
let corolla = new ToyotaCar("corolla", 15); // Constructor invoked.
corolla.setBrand("Corolla");
console.log(corolla); 
// corolla.start(), do this in console window .


//inharitance . to give parents properties to child class . 

class parent {
    hello() {
        console.log("hello");
    }
}

class child extends parent {}

let obj = new child();
console.log(obj.hello());

//exmple .
class person {
    constructor(name){
        console.log("enter parent constructor .");
        this.species = "homo sapiens";
        this.name = name;
    }
        eat() {
            console.log("they can eat");
        }

        sleep(){
            console.log("they can sleep");
        }

        work() {
            console.log("do nothing");
        }
    };

    class Engineer extends person {
        constructor(branch , name){
            console.log(" enter child constructor .");
            super(name); // to invoke parent class constructor. we have to this bcs we have both constructor.
            this.branch = branch;
            console.log(" exit child constructor .");
        }
        code() {
            console.log("they can code");
        }

        work() {
            super.eat();
            console.log("they can solve problems");
        }
    };

    console.log("engObj ");
    let engObj = new Engineer("computer eng", "rustam");
    console.log(engObj);
    console.log(engObj.work());// childs method overwrites the parent's method.

    let p1 = new person("lol");
    console.log(p1);

    // error handling . using try and catch block.
    let a = 10;
    let b = 5;
    console.log("a = ",a);
    console.log("b = ",b);
    console.log("a + b = ", a + b);
    console.log("a + b = ", a + b);
    try {
        
        console.log("a + b = ", a + c);
        
    } catch (error) {
        console.log(error);
    }
    console.log("a + b = ", a + b);
    console.log("a + b = ", a + b);
