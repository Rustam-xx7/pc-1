# Envoironment Variables

- WE use a .env file to store server side secret data and we can access that from every where like 
``` 
let data = process.env.data;
```
- If ***{process.env.data}*** is written in a client side then it will take client side special data not the server side .

- .env.local file jodi thake tahole it gets more preference .