var mongoose=require("mongoose")

var borrowschema=mongoose.Schema({
    bookid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ADDbook',
        required:true
    },
    Studentid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'student_register',
        required:true,
    },
    Date:{
        type:Date,
        required:true
    },
    approve:{
        type:Boolean,
        default:false
    }
})


module.exports=mongoose.model("borrowBook",borrowschema)