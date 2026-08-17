import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async (req, res) => {
    try {
        const conectionI = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("mongoDB connceted",conectionI.connection.host);
    } catch (error) {
        console.log("Error while connection with DB",error);
    }
}

export default connectDB