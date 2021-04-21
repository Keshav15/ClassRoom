const express=require("express");

const { body }=require("express-validator/check");


const classController=require('../controllers/classes');
const middleware = require("../middleware");



const router=express.Router();


router.post("/createClass",middleware,classController.Class);

router.delete("/deleteClass/:classId",middleware,classController.deleteClass);

router.get("/getClass",middleware,classController.getClasslist);

router.put("/updateClassDetails",middleware,classController.UpdateClass);

router.get("/details",middleware,classController.getdetails);

router.post("/createQuiz",middleware,classController.quiz);

module.exports=router;