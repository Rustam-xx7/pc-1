// till loop ...

//basic ..
{
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
}
// tournary operator
{
    let age=25;
    age >= 18 ? console.log(age,"addutlt") : console.log(age,"child");
}
// check 5 multiplyer or not.
{
    let num = prompt("Enter a number"); // a type of taking input from user.
    if (num % 5 === 0){
        console.log(num,"is a multiple of 5");
    } else {
        console.log(num,"is not a multiple of 5");
    }
}
// for loop to calculate sum n 

{
    let n = prompt("Enter value of n .");
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    console.log("Sum of first",n ,"number is ", sum);
}

// for of loop , uses for strings and arrays.
{
    let str = "Rustam.";
    let size = 0;
    for(let char of str){ // here char is the iterator.
        console.log("char is ",char);
        size++;
    }
    console.log("Size of string is ",size);
}

// for in loop , uses for objects .

{
    let student = {
        name: "rustam",
        age: 21,
        cgpa: 8,
    }
    for ( let key in student){
        console.log("key is =", key , ",value is =", student[key]);
    }
}