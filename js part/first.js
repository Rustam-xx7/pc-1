console.log("Welcome to reality!");
// variables
let age = 25;
age = 26; // let can be update , but not declare again.
console.log(age);
const x = null; // cant be redeclared or update .
console.log(x);
let price;
price = 19.90;
console.log(price);
const student = {
    name: "John",
    age: 25,
    isStudent: true ,
} ;
console.log(student);
console.log(student["name"]);
// student["age"] = student["age"] +1;
console.log(student["age"] + 1);
console.log(typeof student["name"]);
// arithmatic operators
let a = 5;
let b = 3;
let c = "10";
console.log("a = ",a ,"b = ",b , "c = (string)", c);
console.log("a+b = ", a + b);
console.log("a*b = ", a * b);
console.log("a**b = ", a ** b); // a^b exponation
console.log("a++ = ", a++ ); // post incriment operator
console.log(" now a = ", a ); // after incriment operator
console.log("a+= 4 = ", a+=4);
console.log("now a is =", a); // a = a+4
//comparition operator 
console.log("a == b " , a==b ); //false 
console.log("a == c " , a==c ); // true , string>>> number ==number. 
console.log("a === c " , a===c ); // false , equal to and type .

console.log(" conditional statements ");
{
    let mode =  "dark";
    let color;
    if ( mode === "dark") {
        color = "black";
    } else {
        color = "white";
    }
    console.log(mode);
    console.log(color);
}
// tournary operator
{
    let age=25;
    age >= 18 ? console.log(age,"addutlt") : console.log(age,"child");
}