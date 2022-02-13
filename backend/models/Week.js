const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WeekSchema = new Schema({
    weekName : {
        type : String,
        required : true
    }
})

