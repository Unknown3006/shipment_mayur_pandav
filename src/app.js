import express from "express";
import cors from "cors";

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({status:'ok'})
})

import {router1} from "./routes/vessel.routes.js"
app.use('/vessels',router1);

import { router2 } from "./routes/voyage.routes.js";
app.use('/voyages',router2)

export {app}