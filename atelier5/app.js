const mongoose = require('mongoose');
var express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const { urlencoded } = require('express');
var path = require('path');
const StudentRouter = require('./routes/Student.js');
const ChatRouter = require('./routes/chat.js')



const app = express();
app.set('views', path.join(__dirname,"views"));
app.set('view engine',"twig");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/students',StudentRouter);
app.use('/Chat',ChatRouter);


app.use((req,res,next)=>{
    next(createError(404));
})

mongoose.connect("mongodb://localhost:27017/StudentDB")
    

module.exports = app;