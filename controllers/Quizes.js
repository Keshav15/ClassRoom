const Class= require('../models/Classroom');
const Quiz=require('../models/Quiz');


exports.quiz=(req,res,next)=>{

    const quiz= new Quiz({
        name:req.body.name,
        instructions:req.body.instructions,
        classroom:req.params.classroom
        
    })
    quiz.save().then(result=>{
          return Class.findById(req.params.classroom);
    }).then({
        
    })
    
 
 }