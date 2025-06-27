# How to create a npm project and Connect modules and use .

- To initiate a npm file do , in terminal
```
npm init 
```
- To install some thing do 
``` 
npm i or npm install 
```
### there are tow type of module and export syntax . "common" and "module" (ecma script)

- to export in common type , in main.js write 
``` 
const { createServer } = require('node:http');
```
- to export in module type , in main.js write 
```
import http from "http"
```
- We can import some value from a module and use them in main.js
```
import rustam from "./mymodule.js"
```