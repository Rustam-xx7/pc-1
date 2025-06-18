const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/employee");
const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/company");
app.set("view engine", "ejs");

const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * arr.length);
  return arr[rno];
};

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/generate", async (req, res) => {
  //clear the collection emplyees
  await Employee.deleteMany({})
  // genarate random deta.

  let randomNames = ["Rustam", "Guddu", "Bristi"];
  let randoLang = ["python", "js", "java"];
  let randomCities = ["Kolkata", "Dellih", "Bangaloure"];
  for (let i = 0; i < 10; i++) {
    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 500000),
      language: getRandom(randoLang),
      city: getRandom(randomCities),
      isManager: Math.random(0, 2) > 1 ? true : false,
    });

    console.log(e);
  }
  res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
