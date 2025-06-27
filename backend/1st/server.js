//example from nodejs tutorial

// {
//   // there  is two type of module import process , common js and module process 

// // const { createServer } = require('node:http'); // this is the process for commonjs .

// import http from "http" // this the import process for modul

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
// res.statusCode = 200;
// res.setHeader('Content-Type', 'text/html');
// res.send('<h1>welcome</h1>');
// });

// server.listen(port, hostname, () => {
// console.log(`Server running at http://${hostname}:${port}/`);
// });
// }

// impoting type in ES ( module ) export ..... "type" :  "module".....

// import {a, b, d} from "./mymodule.js"
// console.log(a,b,d);  // import process for named export .

import rustam from "./mymodule.js"
console.log(rustam);  // as it was not a named export , name doesnt matter .


// now again changed to commonjs ....

// const a = require("./mymodule2") ;
// console.log(a);