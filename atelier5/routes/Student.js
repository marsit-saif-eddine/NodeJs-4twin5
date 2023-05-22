const express = require("express");
const router = express.Router();
var Student = require("../models/Student.js");

router.get('',(req,res,next)=>{
    res.json({message:'hello'})
 })
 
router.post('add',async (req, res, next) => {
    const { name,age } = req.body;
    await Student.create({
        name,
        age

    }).then((res) => {
      res.json({
        message: res,
      });
    }).catch((error) =>
    res
      .json({ message: "An error occurred" , error: error.message })
  );
  
  }
 )
 
 
module.exports = router;