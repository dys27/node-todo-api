const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5bca81964ee935103f76f987';

if (!ObjectID.isValid(id)){
  console.log('id not valid');
}

Todo.find({
  _id: id
}).then((todos)=>{
  console.log(todos);
});

Todo.findOne({
  _id: id
}).then((todo)=>{
  console.log(todo);
});

Todo.findById(id).then((todobyid)=>{
  console.log(todobyid);
});
