const express=require('express');
const aiController=require("../controllers/ai.controller")
const router=express.Router();
//post method for frontend to backend communication
router.post("/get-review",aiController.getReview);

module.exports=router;