const express=require("express");

const { body }=require("express-validator/check");


const classController=require('../controllers/classes');
const middleware = require("../middleware");
const quizController=require('../controllers/Quizes')



const router=express.Router();


router.post("/createClass",middleware,classController.Class);



router.get("/getClass",middleware,classController.getClasslist);

router.put("/updateClassDetails",middleware,classController.UpdateClass);

router.get("/details",middleware,classController.getdetails);

router.post("/createQuiz",middleware,quizController.quiz);

module.exports=router;