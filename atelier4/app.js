const mongoose = require('mongoose');
var express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const { urlencoded } = require('express');
const contactRouter = require('./routes/contacts.js');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/contacts',contactRouter);
const dbconfig = require('./database/mongodb.json');


app.use((req,res,next)=>{
    next(createError(404));
})

mongoose.connect(dbconfig.mongo.uri)
    

module.exports = app;
