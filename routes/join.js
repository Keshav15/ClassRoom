const express=require('express');

const middleware = require("../middleware");
const router=express.Router();

const joiningController=require('../controllers/join');

router.post("/joinClass",middleware,joiningController.join);

router.get("/joinedclasses",middleware,joiningController.joinedClasses);

module.exports=router;
