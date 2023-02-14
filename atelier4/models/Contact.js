const mongoose = require('mongoose');
const schema = mongoose.Schema({
    fullName:String,
    phone:Number
})

module.exports = mongoose.model('Contact',schema);