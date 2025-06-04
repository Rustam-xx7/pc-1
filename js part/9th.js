// async await >> promise chain >> callback hell.

// {
//     console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("hello");
// },2000); // after how many time it will execute.
// console.log("three"); // as hello func takes 3 sec time , then rest of the code doesnt wait for it .
// }


//Callback hell :-  complex nested callbacks. 

// to get one data after another , not togather.
function getData(dataId, getNextData) {
    setTimeout(() =>{
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    },2000); //2s delay.
}

// example of callback hell.

// {
//     getData(1, ()=> {
//     console.log("getting data 2");
//     getData(2, ()=> {
//         console.log("getting data 3");
//         getData(3, ()=> {
//             console.log("getting data 4");
//             getData(4);
//         });
//     });
// });
// }

//promises. there are 3 states in promise . pending, resolved,rejected.

// {
//     let promise = new Promise((resolve,reject) =>{
//     console.log("promise started");
//     resolve("this is result!");
//     reject("this is error!");

// })
// }

// use of promise in get data.

function getData(dataId, getNextData) {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
        console.log("data", dataId);
        resolve("success");
        // reject("error");
        if (getNextData) {
            getNextData();
        }
    },7000); //5s delay.
    });
}

let promise = getData(123);
// run promise in consle before getting data and after getting data.

// to work on a promise if its fulfilled use , .then() 
//and if its rejects use , .catch()

const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("this is new promise from get promise.");
        // resolve("success");
        reject("there is a error");
    });
};

let newPromise = getPromise();
newPromise.then(() => {
    console.log("work after promise fulfilled");
});

newPromise.catch(() => {
    console.log("work after promise get rejected.");
});