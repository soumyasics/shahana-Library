var mongoose=require("mongoose")
var Addbookschema=mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    isbn:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:Object,
        required:true
    }



})
module.exports=mongoose.model("ADDbook", Addbookschema)