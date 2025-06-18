use("CrudDb");

//Creat

db.createCollection("practice");

db.practice.insertOne({
  name: "Rustam mongo Db practice ",
  massage: "I am SpiderMAN !",
});

db.practice.insertMany([
  {
    name: "Rustam mongo Db practice",
    message: "I am SpiderMAN!",
  },
  {
    name: "Alice MongoDB Test",
    message: "Hello from Wonderland!",
  },
  {
    name: "Bob's Data Entry",
    message: "Just another document.",
  },
  {
    name: "Charlie Practice",
    message: "Learning MongoDB is fun!",
  },
  {
    name: "Diana Example",
    message: "Sample message for testing.",
  },
  {
    name: "Eve's Experiment",
    message: "Trying out new things.",
  },
  {
    name: "Frank Demo",
    message: "MongoDB makes it easy.",
  },
  {
    name: "Grace Sample",
    message: "Practicing document creation.",
  },
  {
    name: "Heidi Test",
    message: "Testing is important.",
  },
  {
    name: "Ivan's Practice",
    message: "This is a dummy message.",
  },
]);

//Read

let a = db.practice.find({ massage: "I am SpiderMAN !" });
console.log(a.count());

let b = db.practice.findOne({ massage: "I am SpiderMAN !" });
console.log(b);

//Update

db.practice.updateOne(
  { massage: "I am SpiderMAN !" },
  { $set: { masage: "I am BatMan !" } }
);

db.practice.updateMany(
  { massage: "I am SpiderMAN !" },
  { $set: { massage: "I am BatMan !" } }
);

//Delete

db.practice.deleteMany({ masage: "I am BatMan !" });


// there are some more syntax like this , go to documentation and check for them.