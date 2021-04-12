const Class= require('../models/Classroom');

exports.Class=(req,res,next)=>{

    const cla= new Class({

        classname:req.body.classname,
        batch:req.body.batch,
        subject:req.body.subject,




    })
    cla.save().then(result=>{
        res.status(201).json({
            message:"Class Created Successfully",classcode:result
        })
    }
        
    )



}