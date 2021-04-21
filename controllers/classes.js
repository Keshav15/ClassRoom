const Class= require('../models/Classroom');
const user=require('../models/User');


exports.Class=(req,res,next)=>{

    let creator;
    const cla= new Class({

        classname:req.body.classname,
        batch:req.body.batch,
        subject:req.body.subject,
        creator:req.userId
        


    })
    cla.save().then(result=>{
        return user.findById(req.userId);

        
    }
        
    ).then(userr=>{
        creator=userr;
        userr.createdClasses.push(cla);
        return userr.save();


    }).then(result=>{
        res.status(201).json({
            message:'Class Created Successfully',
            class:cla,
        });


    })



}

