import fs from "fs/promises"

let a = await fs.readFile("rustam.txt") // we can directly use await no need to use async as we are in a module .

let b = await fs.appendFile("rustam.txt", "\n\n\n this is a new promise !")
console.log(a.toString())