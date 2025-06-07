// base url :- https://api.frankfurter.dev/v1/1999-01-04?base=USD&symbols=INR

  const dropdowns = document.querySelectorAll(".dropdown select");
  const btn = document.querySelector("form button");
  const fromCurr = document.querySelector(".from select");
  const toCurr = document.querySelector(".to select");
  const msg = document.querySelector(".msg");
  window.addEventListener("load", () =>{
    updateExchangeRate();
  });
//   for (code in countryList) {
//   console.log(code , countryList[code]);
//   }

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);

        if (select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
    }

    select.addEventListener("change" , (evt) => {
        updateFlag(evt.target); // evt.target return where the cevent occers.
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    // console.log(currCode);
    let countryCode = countryList[currCode];
    // console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1 ){
        amtVal = 1;
        amount.value = 1;
    }
    // console.log(amtVal);
    
    // console.log(fromCurr.value, toCurr.value);
    const URL = `https://api.frankfurter.dev/v1/latest?base=${fromCurr.value}&symbols=${toCurr.value}`;
    // console.log(fromCurr.value,toCurr.value);
    let response = await fetch(URL);
    let data = await response.json();
    // console.log(data);
    let rate = data.rates;
    // console.log(rate);
    let acrate = rate[toCurr.value];
    console.log(acrate);
    let finalAmount = amtVal * acrate ;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}