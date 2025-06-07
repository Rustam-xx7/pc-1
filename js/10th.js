// Async-Await .

// Async functions always return a promise.

function api() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve("200 ok");
        },1500);
    });
}

async function getWeatherData() {
    await api(); // 1st call .
    await api(); // 2nd call .
}

// getWeatherData() ;  // we can execute it in another IIEF style .

// async await for get data function

function getData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("data", dataId);
            resolve("success");
            // reject("error");
        },3200); //2s delay.
    });
}

async function getAllData() {
    console.log("getting data 1....");
    await getData(1); // 1st call .
    console.log("getting data 2....");
    await getData(2); // 2nd call .
    console.log("getting data 3....");
    await getData(3); // 3rd call .
    console.log("getting data 4....");
    await getData(4); // 4th call .
    console.log("getting data 5....");
    await getData(5); // 5th call .
}

(async function () {
    await getWeatherData();
    await getAllData();
})(); // IIFE - Immediately Invoked funtion expression, use to automatically call a function.