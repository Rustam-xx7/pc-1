# installing mongoos . and use . 

### go to // https:/www.npmjs.com/package/mongodb
-  to explore the package , which is easy to use mongodb in express .

- To install mongoose 
```
npm i mongoose
```

- now in main.js
```
import mongoose from "mongoose";

let a = await mongoose.connect("mongodb://localhost:27017/test");
```
- we can create models to create schema .