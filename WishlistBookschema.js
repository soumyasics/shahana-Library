var mongoose=require("mongoose")
 var wishschema=mongoose.Schema({
    bookid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ADDbook',
        required:true

    },
    Studentid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'student_register',
        required:true
    },
    Date:{
        type:Date,
        required:true
    }

 })
 module.exports=mongoose.model("wishlistitems",wishschema)