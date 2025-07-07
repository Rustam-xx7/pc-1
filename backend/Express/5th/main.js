const express = require("express");

const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express();
const port = 3000;
app.use('/blog', blog); 
app.use('/shop', shop);

app.use(express.static("public"));

app.get("/", (req, res) => { // to gate or send something from url 
  console.log("hey its a get request");
  res.send("Hello its a get req");
});

app.post("/", (req, res) => { // for access something not from url
    console.log("hey its a post request");
    res.send("Hello its a post req");
  }).put("/", (req, res) => {
    console.log("hey its a put request");
    res.send("Hello its a put req");
  }).delete("/", (req, res) => {
    // chaining.
    console.log("hey its a delete request");
    res.send("Hello its a delete req");
  });

  app.get("/index", (req, res) => {
    console.log("hey its index");
    res.sendFile("templets/index.html", {root: __dirname});
  })
  app.get("/api", (req, res) => {
    res.json({ a :1,b:2,c:3,d:4,e:5});
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
