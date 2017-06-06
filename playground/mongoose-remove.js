const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove();

Todo.findByIdAndRemove('59369296771725af29754172').then((todo) => {
  console.log(todo);
});
