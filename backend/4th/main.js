const express = require("express");
const app = express();
const port = 3000;


// to make something public 
app.use(express.static("public"))


app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello about!");
});
app.get("/contact", (req, res) => {
  res.send("Hello contact");
});
app.get("/blog", (req, res) => {
  res.send("Hello blog");
});
app.get("/blog/intro-to-js", (req, res) => {
  //logic to fetch intro to js from the db
  res.send("Hello intro to js");
});

// But we dont need to do this again and again . we can take as a paramerter.
app.get("/blog/:slug", (req, res) => {
  //logic to fetch intro to {slug} from the db

  // for url :- http://localhost:3000/blog/intro-to-anything?mode=dark&region=in
  console.log(req.params) // will return { slug: 'intro-to-anything' }
  console.log(req.query) // will return { mode: 'dark', region: 'in' }
  res.send(`Hello, intro to ${req.params.slug} `); // slug is a parameter.
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
