// we can store key vaue pair in local storage

if (localStorage.getItem("name")) { // if there is some value in name then...
  a = localStorage.getItem("name"); // getting the value of name from local storage.
  document.querySelector("#div1").innerText = "Welcome " + a;
} else { // if there is no value in name then...
    let a = prompt("Enter your name : ");
    localStorage.setItem("name", a); // setting value of name in localStorage.
  document.querySelector("#div1").innerText = "Welcome " + a;
}


// we can also store objects in local storage in the format of strings.


let b = {
  "rustam": 1,
  "guddu": 2,
};

// to transform this object into stringf.

let c = JSON.stringify(b);

localStorage.setItem("guys", c);
document.querySelector("#div2").innerText = localStorage.getItem("guys");

// to get back in object use JSON.parse(localStorage.getItem(...)) .