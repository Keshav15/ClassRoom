const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
  option: {
    type: String,
    required: true
  }
});

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers: [optionSchema],

    answer: {
      type: String,
      required: true
    },

}, {
    timestamps: true
});
const quizSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    instructions: {
        type: String,
        required: true
    },
   
    questions: [questionSchema],

    classroom:{
     type:Schema.Types.ObjectId,
     ref:'Class'
    },

    duration :{
      hours : {
        type : Number,
        default: 0
      },

      minutes : {
        type : Number,
        default: 0
      },

      seconds : {
        type : Number,
        default: 0
      }

    }
}, {
    timestamps: true
});

 Quizes = mongoose.model('Quizes', quizSchema);
 ques=mongoose.model('ques',questionSchema);
 opt=mongoose.model('opt',optionSchema);

module.exports = {Quizes:Quizes,ques:ques,opt:opt}