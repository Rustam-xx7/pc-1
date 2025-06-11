const fs = require("fs");

// console.log(fs)

console.log("starting")    
// fs.writeFileSync("rustam.txt", "i am rustam")  // this process is working in syncronizey . but we want asyncoronize.

fs.writeFile("rustam2.txt", "hello hello ,rustam is here !", () => {
    console.log("done")
    fs.readFile("rustam2.txt", (error ,data) => {
        console.log(error,data)
    })
})  // better to use .

fs.appendFile("rustam.txt"," good boy appended", (e ,d) => {
    console.log(d);
})
console.log("ending")