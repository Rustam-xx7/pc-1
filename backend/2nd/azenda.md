# Use of fs to Write Read and Append file .

- First import fs

```
const fs = require("fs");
```

- To create and Write in file use
- Asynchronous

```

fs.writeFile('example.txt', 'Hello, !', (err) => {
  if (err) throw err;
  console.log('File created and content written successfully!');
});

```

- Using fs.writeFileSync() (Synchronous).
- To read data use

```
fs.readFile("filename.txt", (error ,data) => {
        console.log(error,data)
    })
```
- To append use 
```
fs.appendFile("rustam.txt"," good boy appended", (e ,d) => {
    console.log(d);
})
```