const mongoose = require('mongoose');
const Schema = mongoose.Schema


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    id:{
        type: Number
    }
},
{ versionKey:false})


module.exports = mongoose.model('User', userSchema)





