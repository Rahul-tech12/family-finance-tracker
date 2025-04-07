import mongoose from "mongoose";
 
const transactionSchema=new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    account:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

export default mongoose.model('operation',transactionSchema)