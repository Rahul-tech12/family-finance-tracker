import mongoose from "mongoose";
 
const milestoneSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    account:{
        type:String,
        required:true
    },
    curramount:{
        type:Number,
        required:true
    },
    targamount:{
        type:Number,
        required:true
    },
    start:{
        type:String,
        required:true
    },
    finish:{
        type:String,
        required:true
    }
})

export default mongoose.model('milestones',milestoneSchema)