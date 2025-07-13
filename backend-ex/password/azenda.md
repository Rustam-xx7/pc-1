# Use of mongoDb for data base . \

- Fisrt import and connect 
```
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
```
- Give name and create collection .
```

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();

  console.log('Connected successfully to server');

  const db = client.db(dbName);

  const collection = db.collection('documents');

  return 'done.';
}
```

- To insert use 
```
const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
```
- To find use 
```
const filteredDocs = await collection.find({ a: 3 }).toArray();
```
- To delete some thing use 
```
const deleteResult = await collection.deleteMany({ a: 3 });
```
- To update use 
```
const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
```