import Vessel from "../model/vessels.model.js"

const createVessel=async(req,res)=>{
    try {
        const {name,vessel_number,capacity}=req.body;

        if(!name || !vessel_number || !capacity || capacity===undefined || capacity===null){
            return res.status(400).message("name, vessel_number and capacity are required").error("VALIDATION_ERROR")
        }
        if(!Number.isInteger(capacity) || capacity<=0){
            return res.status(400).message("capacity must be a whole number greater than 0").error("VALIDATION_ERROR")
        }

        const alreayExits= await Vessel.findOne({vessel_number});
        if(alreayExits){
            return res.status(400).message("A vessel with number VS001 already exists").error("VESSEL_ALREADY_EXISTS")
        }

        const vessel=await Vessel.create({name,vessel_number,capacity})

        res.status(200).json({
            id:vessel._id,
            name:vessel.name,
            vessel_number:vessel.vessel_number,
            capacity:vessel.capacity
        })

    } catch (error) {
        // next(err)
    }
}

export {createVessel}