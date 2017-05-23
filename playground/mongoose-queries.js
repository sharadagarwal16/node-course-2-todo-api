const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');

// var id = '59241743ffaa0328f47300db11';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID is not valid.');
// };
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo ', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('id not found.');
//   }
//   console.log('Todo by id ', todo);
// }).catch((e) => console.log(e));

var userId = '5921b426da1d0d0e504a4779';

User.findById(userId).then((user) => {
  if(!user){
    console.log('User not found.');
  }
  console.log('User ', user);
}).catch((e) => console.log(e));
