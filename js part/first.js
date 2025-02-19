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