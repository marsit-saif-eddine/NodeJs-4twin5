const express = require("express");
const router = express.Router();
var Contact = require("../models/Contact.js");

router.get('/',(req,res,next)=>{
   res.json({message:'hello'})
})

router.post('/add',async (req, res, next) => {
    const { fullName, phone } = req.body;
    await Contact.create({
        fullName,
        phone

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
 
router.put('/:id',async (req, res, next) => {
    await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json({
    description: "Successfully updated !",
  });
})
router.get('/getContacts',async (req, res, next) => {
    await Contact.find({})
    .then((contact) => {
      
      res.status(200).json({ contacts: contact });
    })
    .catch((err) =>
      res.status(401).json({ message: "Not successful", error: err.message })
    );
}
)

router.delete('/:id', async (req, res, next) => {
    const  id  = req.params.id;
    await Contact.findById(id)
      .then((contact) => contact.remove())
      .then((contact) =>
        res.status(200).json({ message: "contact successfully deleted", contact })
      )
      .catch((error) =>
        res
          .status(400)
          .json({ message: "An error occurred", error: error.message })
      );
  })



 
module.exports = router;