var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim:true
  },
  completed:{
    type: Boolean,
    default:false
  },
  completedAt:{
    type: Number,
    default:null
  }
});

// var newTodo = new Todo({
//   text: "dinner"
// });
//
// newTodo.save().then((doc)=>{
//   console.log(doc);
// },(e)=>{
//   console.log('unable to save todo');
// });

module.exports = {Todo};
