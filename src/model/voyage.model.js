import mongoose from "mongoose";

const voyageSchema=new mongoose.Schema({
    vessel_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Vessel",
        required:true
    },
    voyage_number:{
        type:String,
        required:true,
        unique:true
    },
    destination:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PLANNED","SAILING","COMPLETED"],
        default:"PLANNED"
    }
},{timestamps:true})

const Voyage=mongoose.model("Voyage",voyageSchema);

export default Voyage