var mongoose = require("mongoose")
var register_schema = mongoose.Schema({
    Staffid: {
        type: Number,
        required: true
    },
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
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
    Phonenumber: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    }
})

  

module.exports = mongoose.model("staff_register", register_schema,)
