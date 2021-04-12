const { validationResult } =require('express-validator/check');

const bcrypt=require('bcryptjs');

const jwt=require('jsonwebtoken');

const nodemailer=require('nodemailer');

const sendgridTransport=require('nodemailer')

const user=require('../models/User');
const { use } = require('../routes/register');

exports.signup=(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        const error=new Error("validation failed");
        error.statusCode=422;
        error.data=errors.array();
        throw error;

    }
    const password=req.body.password;
    bcrypt.hash(password,12).then(hashedpw=>{
        const User= new user({
            email:req.body.email,
            password:hashedpw,
            collegeName:req.body.collegeName
    
        });
        return User.save(); 
                
    }).then(result=>{
        res.status(201).json({message:'User Created',userId: result})
    })

    .catch(err=>{
        if(!err.statusCode)
        {
            err.statusCode=500;
        }
        next(err);
    })
}

exports.login=(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    let loadedUser;
    user.findOne({email:email})
    .then(User=>{
        if(!User){
            const error=new Error('User with this Id donot exist');
            error.statusCode=401;
            throw error;

        }
        loadedUser=User;
        return bcrypt.compare(password,User.password);

    })
    .then(isEqual=>{
        if(!isEqual){
            const error=new Error("Incorrect Password");
            error.statusCode=401;
            throw error;
        }
        const token=jwt.sign(
            {
                email:loadedUser.email,
                userId:loadedUser._id.toString()
            },
            'SRKGRaDEr',
            {expiresIn:'1000h'}
        );
        res.status(200).json({token:token,userId:loadedUser._id.toString()});

    })
    
    .catch(err=>{
        if(!err.statusCode){
            err.statusCode=500;

        }
        next(err);
    })
}