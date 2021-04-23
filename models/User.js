const mongoose=require('mongoose');
const Schema =mongoose.Schema;
const Class=require('./Classroom')





const User=new Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    CollegeName:{
        type:String,
        // required:true
    },
    createdClasses:[{
        type:Schema.Types.ObjectId,
        ref:"Class"
    }],
    joinedClasses:
        [
            {
        type:Schema.Types.ObjectId,
        ref:"Class"
            }
        ]
    
    
    
});

user=mongoose.model("user",User);

module.exports=user