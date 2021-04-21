const mongoose = require('mongoose')




const ClassSchema = new mongoose.Schema({

classname:{
type : String,
trim: true,
minlength: 3
},

batch:{
  type:String
},

subject:{
  type:String,
  required:true
},

creator:{
  type:Schema.Types.ObjectId,
  ref:'user',
  required:true


},
students:[
    {
      type:Schema.Types.ObjectId,
      ref:'user'
    }
],

Quizs:[{
  type:Schema.Types.ObjectId,
  ref:'Quiz'
}]


});

const Class = mongoose.model('Class', ClassSchema)

module.exports = Class