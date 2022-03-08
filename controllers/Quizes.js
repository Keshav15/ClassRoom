const Class= require('../models/Classroom');
const {Quizes}=require('../models/Quiz');
const {ques}=require('../models/Quiz');
const {opt}=require('../models/Quiz');



exports.quiz=(req,res,next)=>{

    const Quiz= new Quizes({
        name:req.body.name,
        instructions:req.body.instructions,
        classroom:req.body.classroom
        
    })
    Quiz.save().then(result=>{
          return Class.findById(req.body.classroom);
    }).then(classs=>{
        

        classs.Quizs.push(quiz);
        return classs.save();

    }).then(result=>{
        res.status(201).json({
            message:"Quiz Created Successfully",
            quiz:Quiz
        })

    })
    
 
 }
 exports.getQuizes=(req,res,next)=>{
    const classid=req.params.classid;
    Class.findById(classid).populate('Quizs').then(clase=>{
        res.status(201).json({message:"All Quiz details fetched",quizs:clase});
    })


}

exports.addQuest=(req,res,next)=>{
   const quizId=req.body.quizId;
   
   
   const question=new ques({
       question:req.body.ques,
       answer=req.body.answer,
       
        
    })

    

}


