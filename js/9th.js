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
        
        function getData1(dataId, getNextData) {
            return new Promise((resolve,reject) => {
                setTimeout(() =>{
                    console.log("data", dataId);
                    resolve("success");
                    // reject("error");
                    if (getNextData) {
                        getNextData();
                    }
                },2000); //5s delay.
            });
        }
        
        let promise = getData1("123");
        // run promise in consle before getting data and after getting data.
        
        // to work on a promise if its fulfilled use , .then() 
        //and if its rejects use , .catch()
        
        const getPromise = () => {
            return new Promise((resolve,reject) => {
                console.log("this is new promise from get promise.");
                // resolve("success");
                reject("there is a error, created by me.");
            });
        };
        
        let newPromise = getPromise();
        newPromise.then((res) => {
            console.log("work after get promise fulfilled",res);
        });
        
        newPromise.catch((err) => {
            console.log("work after get promise rejected.", err);
        });
        
        //some more comolex.
        function asyncFunction1() {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    console.log("data 1");
                    resolve("success 1");
                }, 2000);
            });
        }
        function asyncFunction2() {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    console.log("data 2");
                    resolve("success 2");
                }, 2000);
            });
        }
        
        // promise chaining.
        console.log("fetching data 1....");
        let p1 = asyncFunction1();
        p1.then((res) => {
            console.log("fetching data 2.....");
            asyncFunction2().then((res) => {
                // console.log(res);
            });
        });

function getData2(dataId) {
            return new Promise((resolve,reject) => {
                setTimeout(() =>{
                    console.log("data", dataId);
                    resolve("success");
                    // reject("error");
                },4000); //2s delay.
            });
}

//promise chaining example.
getData2(1).then((res) => {
    return getData2(2);
}).then((res) =>{
    return getData2(3);
}).then((res) => {
    console.log(res);
});
        
// next is Asynv-Await. go to next file.                                                    
    