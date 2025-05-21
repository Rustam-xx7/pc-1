//Bassc 
{
    // window is a global object , predefined by the browser . 
// every thing is a part of window obejct , like console.log ...
// in window object there is document object which is our html model ,
 console.log(window);
 console.log(window.document);
 console.dir(window.document); // console.dir is use to print properties .
 console.log(document.body); // to print the code .
 console.dir(document.body); // window.document... window ta nijer thekei niye nebe !.
console.log(document.body.childNodes[1]); // to prnt the first childNode .

// Select with id .
let heading = document.getElementById("heading1"); // heading id er value return korbe . h1
console.dir(heading);

// select with cass name .
let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);

//Select with tags
let parahs = document.getElementsByTagName("p");
console.log(parahs);
}
