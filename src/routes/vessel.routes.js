import express from "express";
import { Router } from "express";
import {createVessel} from "../controller/vessel.controller.js"
const router1=Router()

router1.post("/",createVessel)

export {router1}