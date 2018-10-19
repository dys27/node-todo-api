const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  db.collection('Todos').find().count().then((count)=>{
    console.log(count);
  },(err)=>{
    console.log('unable to fetch todos',err);
  });

  //db.close();
});
