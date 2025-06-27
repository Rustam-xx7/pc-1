# Use of get , post , put , delete req .

### to create a public folder write 
```
app.use(express.static("public"));
```

### To send a html file as res use 
- make the html file in a templets folder .
```
app.get("/index", (req, res) => {
    console.log("hey its index");

    res.sendFile("templets/index.html", {root: __dirname});

  })
  ```

### To send a json use 
```
res.json(....)
```


### Post 
-  Post req is use to send or recive secure data through req body , not through url.

### Put 
- Put req is use to update the data .

### To check Routes go for express router on web .

- To use any routes write this in main.js
```
const blog = require('./routes/blog')

app.use('/blog', blog); 
```
- and in the /routes/blog.js write 
```
const router = express.Router()

module.exports = router
```