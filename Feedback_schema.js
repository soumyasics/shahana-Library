var mongoose = require("mongoose")
var feedback_schema = mongoose.Schema({
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    bookname:{
        type:String,
        required:true

    },
    Comment: {
        type: String,
        required: true
    },


})
module.exports = mongoose.model("feedback", feedback_schema)