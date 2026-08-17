import mongoose from "mongoose";
const hopSchema=new mongoose.Schema({
    voyage_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Voyage",
        required:true
    },
    from :{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    reached_on:{
        type:Date,
        required:true
    },
    
},{timestamps:true})

export default Hop = mongoose.model("Hop",hopSchema)