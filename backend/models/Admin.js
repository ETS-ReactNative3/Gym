const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    name : {
        type : String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required : true,
    },
    isAdmin : {
        type : Boolean,
    }
})

module.exports = mongoose.model('Admin', AdminSchema);