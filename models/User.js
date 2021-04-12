const mongoose=require('mongoose');
const Schema =mongoose.Schema;






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
    createdClasses:{
        type:mongoose.Types.ObjectId,
    },
    joinedClasses:{
        type:mongoose.Types.ObjectId

    }
    
    
});

user=mongoose.model("user",User);

module.exports=user