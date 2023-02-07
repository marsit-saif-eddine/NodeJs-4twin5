const express = require("express");
const app = express();

const port = 8080;

const middle = (req,res,next)=>{
   console.log('hhhi');
   next();
};

app.get('/',middle,(req,res,next)=>{
   res.send('hi')
})



app.listen(port, () =>
  console.log(`Server listening on port: ${port}`)
);
