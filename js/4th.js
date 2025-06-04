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
// slect by quary selector , it will select by class or id or tag any .

let firstelem = document.querySelector("p");  // pick the first elements that match 
console.dir(firstelem);

let allelem = document.querySelectorAll("p");// to select all elements that match 
console.dir(allelem);
//for class use ".", and for id use "#" .
let allheading = document.querySelectorAll(".heading");
console.dir(allheading);

// properties

// there are some properties like children, firstChild, lastChild, this all are of some node . use for navigation .

console.log(firstelem.tagName); // to print tag name .

let div = document.querySelector("div");
console.dir(div);
console.dir(div.innerText); //  we can also use this to change the whole innerText . it returns all the text of its childern also .
console.dir(div.innerHTML);//  we can also use this to change the whole innerHTML .

let oldhead = document.querySelector("#headingold");
console.dir(oldhead.innerText);
console.dir(oldhead.textContent); // textContent is same as innerText but it will not return the text of its childern . it will return only the text of this element . also can retun the hidden text .

// to access attributes . 
let h1 = document.querySelector("h1");
console.log(h1.getAttribute("id")); // to get the value of id attribute .
console.log(h1.getAttribute("class")); // to get the value of class attribute .

// to set attributes
let para = document.querySelector("#para");
console.log(para.setAttribute("class", "newpara")); // "attribute name ", "value".

// to access the style .

let fdiv = document.querySelector("#fdiv");
console.dir(fdiv.style); 
fdiv.style.backgroundColor = "purple"; // to change 
fdiv.style.color = "white";
fdiv.innerText = " yo !";

// to creat a element and add . 
let newBtn1 = document.createElement("button"); 
let newBtn2 = document.createElement("button"); 
newBtn1.innerText = "Click Me-1";
newBtn2.innerText = "Click Me-2";
console.log(newBtn1);

fdiv.append(newBtn1); // to add inside and at the end .
fdiv.prepend(newBtn2); // to add inside and at the end .
// node.before() to add before and out side. 
// node.after() to add after and out side. 
 let newhd = document.createElement("h1");
 newhd.innerText = "New Heading";
 
 document.querySelector("body").prepend(newhd); 

 // to remove an element .
 document.querySelector("#heading3").remove();

 // use of classList.
 let hid = document.querySelector("#hid");
 console.dir(hid.classList); // to get the list of classes . 
 hid.classList.add("newClass"); // to add a class .and .remove("class name") to remove a class .
 console.dir(hid.classList);

}

// practice 

// {
//     let h1 = document.querySelector("h1");
// console.dir(h1.innerText)

// h1.innerText = h1.innerText + "from youtube"; // modefy .

// let divs = document.querySelectorAll(".box");
// console.dir(divs);

// let index = 1;
// for ( div of divs) {
//     div.innerText = ` new text ${index}`;
//     console.dir(div.innerText);
//     index++;
// }
// // divs[0].innerText = "new text";
// // divs[2].innerText = "new text";
// }