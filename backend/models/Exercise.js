const moongoose = require('mongoose')

const Schema = moongoose.Schema

const ExerciseSchema = new Schema({
    targetMuscleGroup : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    },
    videoId : {
        type : String,
        required : true
    },
    set : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    }
})

module.eports = mongoose.model('Excercise', ExerciseSchema);