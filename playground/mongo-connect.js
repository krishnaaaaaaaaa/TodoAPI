// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, objectID} = require('mongodb');
const url ="mongodb://localhost:27017";
const dbName = 'ToDoApp';
const Client = new MongoClient(url, { useNewUrlParser: true });
Client.connect(err => {
  if(err)
  console.log('not connected');
  else
	console.log('connection established!!');
  const db = Client.db(dbName);
  // db.collection('sampledata').insertOne({
  //   text:'sleep ',
  //   completed:false
  // },(err, result)=>{
  //   if(err)
  //   console.log('error in inserting data',err);
  //   else {
  //     console.log('inserted data=',result);
  //   }
  // });
  db.collection('sampledata').find({text:'sleep '}).toArray().then((docs)=>{
    console.log('docs:');
    console.log(docs);
  }, (err)=>{
    console.log('error:',err);
  });

});
