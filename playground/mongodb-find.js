// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');
  //
  // db.collection('Todos').find({
  //   _id: new ObjectID('591ba79432070965a1db174c')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos.', err);
  // });


    // db.collection('Todos').find().count().then((count)=>{
    //   console.log(`Todos count: ${count}`);
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch todos.', err);
    // });

    db.collection('Users').find({name: 'Sharad'}).toArray().then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs,undefined, 2));
    }, (err) => {
      console.log('Unable to find user.');
    });

  //db.close();
})
