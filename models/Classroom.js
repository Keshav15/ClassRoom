const mongoose = require('mongoose')
const { schema } = require('./Quiz')

const user=require('../models/User');

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

quizzes:{
  type:mongoose.Types.ObjectId
},
creator:{
  type:Schema.Types.ObjectId,
  ref:"user"

},
});

const Class = mongoose.model('Class', ClassSchema)

module.exports = Class