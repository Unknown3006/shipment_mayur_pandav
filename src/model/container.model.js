import mongoose from "mongoose";
const containerSchema=new mongoose.Schema({
    container_number:{
        type:String,
        required:true,
        unique:true
    },
    voyage_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Voyage',
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    due_date:{
        type:Date,
        required:true
    },
    arrived_on:{
        type:Date,
        default:null
    },
    arrived_hop_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hop",
        default:null
    }
},{timestamps:true})

export default Container=mongoose.model("Container",containerSchema)