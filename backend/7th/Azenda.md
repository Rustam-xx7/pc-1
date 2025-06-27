 # Consept Templates 
### Ejs is a templete engine 
- To use Ejs first 
```
npm i ejs
```
- go to documentation or github of EJS with Express .

- 1st in main.js 
set view engine.
```
app.set("view engine", "ejs");
```
- create the html type file in views folder and make it .ejs not .html ....
- use res.render instade of res,sendFile 
siteName , searchText this are the variable .
```
  res.render("index", { siteName: siteName, searchText: searchText });
```
- to recive the variable in ejs file use 
```
<%= variable %>
```

