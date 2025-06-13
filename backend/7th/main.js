const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let siteName = "Adidas";
  let searchText = "search Now";
  res.render("index", { siteName: siteName, searchText: searchText });
});

app.get("/blog/:slug", (req, res) => {
  res.render("blogpost", { blogTitle: blogTitle, blogContent: bogContent });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
