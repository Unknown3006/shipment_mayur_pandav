import mongoose from "mongoose";

const vesselSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    vessel_number:{
        type:String,
        required:true,
        unique:true
    },
    capacity:{
        type:String,
        required:true
    }
},{timestamps:true})

const Vessel= mongoose.model("Vessel",vesselSchema)


export default  Vessel;