import mongoose from "mongoose";
 
const accountSchema=new mongoose.Schema({
    accname:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    acctype:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

export default mongoose.model('account',accountSchema)