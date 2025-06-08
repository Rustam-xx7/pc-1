// Ftech Api. Appliccation Programming Interface.

let btn = document.querySelector("#btn");
let fact = document.querySelector("#factText");

const url = "https://catfact.ninja/fact";

const getFacts = async () => {
  console.log("getting facts from api...");
  let response = await fetch(url);
  console.log(response); // JSON , javascript object notation . Response is in this format.mordern format. its also called as AJAJ or AJAX.

  const data = await response.json();
  console.log(data); // data is in JSON format. we can use it in our code. return a second promise . in usable format.
  // console.log(data.fact);
  fact.innerText = data.fact;
};

// another format is AJAX . in which data response will be in XML format. but thats a old format.

btn.addEventListener("click", getFacts);
