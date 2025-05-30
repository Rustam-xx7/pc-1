// EVENT
// to search about more event go to mdn.


{
     // js event handling is more prioretize than inline.
let btn2 = document.querySelector("#btn2");

btn2.ondblclick = (evt) => { // e is our event object
    console.log(evt);
    console.log("btn2 is duble clicked!");
    console.log("handled through js!");
    let a = 2;
    a++;
    console.log("2 + 1 =" ,a);
} // handler can be overwrite if we write again . 

let box = document.querySelector("#box");
box.onclick = (e) => {
    console.log(" js handled ");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX , e.clientY);
}

// Event listeners . it is more prifferable. 
// node.addEventListener(event,callback); we can exicute many listener for one .
let box2 = document.querySelector("#box2");
box2.addEventListener("click",(e) => {
    console.log("box 2 is clicked ! handller 1");
})
box2.addEventListener("click",(e) => {
    console.log("box 2 is clicked ! handller 2");
    console.log(e.target);
})

const handler3 = (e) => {
    console.log("box 2 is clicked ! handller 3");
}
box2.addEventListener("click",handler3)
box2.addEventListener("click",(e) => {
    console.log("box 2 is clicked ! handller 4");
})
// to remove function should be same .
box2.removeEventListener("click",handler3);
}

// practice 

{
    let para = document.querySelector("#para");
    let body = document.querySelector("body");
    let btn3 = document.querySelector("#btn3");
    let curmod = "light";
    btn3.addEventListener("click", (e) => {
        console.log("btn3 clicked !");
        if (curmod === "light") {
            body.style.backgroundColor = "black";
            para.classList.add("dark");
            para.classList.remove("light");
            curmod = "dark";
        } else {
            body.style.backgroundColor = "white";
            para.classList.add("light");
            para.classList.remove("dark");
            curmod = "light";
        }
    })
}