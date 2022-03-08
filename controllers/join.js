const Class= require('../models/Classroom');
const user=require('../models/User');

exports.join=(req,res,next)=>{

    const id=req.body.id
    
    user.findById(req.userId).then(userr=>{
        userr.joinedClasses.push(id);
        return userr.save();

    }).then(result=>{
        res.status(201).json({Message:"Class Joined successfully"});
    })
     
     
    }

    

    

exports.joinedClasses =(req,res,next)=>{

     user.findById(req.userId).populate("joinedClasses").then(result=>{
         res.status(201).json({Message:"Fetched Classes Successfully",Classes:result});
     })

}    
