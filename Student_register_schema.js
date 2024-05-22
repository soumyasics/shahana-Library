var mongoose=require("mongoose")
var student_schema=mongoose.Schema({

    studentname:{
        type:String,
        required:true
    },
    Rollno:{
        type:Number,
        required:true

    },
    class:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("student_register",student_schema)
