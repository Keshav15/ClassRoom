const express=require("express");

const { body }=require("express-validator/check");

const authController=require('../controllers/auth')

const router=express.Router();

router.post("/signup",[body('email')
.isEmail()
.withMessage('Please enter a valid EmailId')
.custom((value,{ req }) => {
    return user.findOne({mobilenumber:value}).then(userDoc=>{
        if(userDoc) {
            return Promise.reject('EmailId Already Exist');
        }
    }) 

}),
body('password')
.trim()
.isLength({min:5}),

],
authController.signup

);

router.post("/login",authController.login);

module.exports=router;