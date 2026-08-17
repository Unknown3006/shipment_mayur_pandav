import Voyage from "../model/voyage.model.js"
import Vessel from "../model/vessels.model.js"
const createVoyage=async(req,res)=>{
    try {
        const {vessel_id,voyage_number,destination}=req.body;
        if(!vessel_id || !voyage_number || !destination){
            return res.status(400).message("vessel_id, voyage_number and destination are required").error("VALIDATION_ERROR")
        }
        const vesselF=await Vessel.findOne({vessel_id});
        if(!vesselF){
            return res.status(400).message("No vessel found with id").error("VESSEL_NOT_FOUND")
        }

        const voyage=await Voyage.create({
            vessel_id,
            voyage_number,
            destination,
            status:'PLANNED'
        })

        res.status(201).json({
            id=
        })

    } catch (error) {
        
    }
}