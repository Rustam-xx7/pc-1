const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

// middileware
app.use(express.static("public"));

//middleware 1  - Logger for our application
app.use((req, res, next) => {
  console.log(req.headers)
  req.rustam = "I am rustam , the admin."
  fs.appendFileSync("./public/log.txt", `${Date.now()} is a ${req.method} \n`);
  console.log("M1");
  console.log(`${Date.now()} is a ${req.method}`);
  next();
});
//middleware 2
app.use((req, res, next) => {
  console.log("M2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello about! " + req.rustam);
});
app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
