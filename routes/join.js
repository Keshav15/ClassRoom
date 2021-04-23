const express=require('express');


const router=express.Router();

const joiningController=require('../controllers/join');

router.post("/joinClass",joiningController.join);

module.exports=router;
