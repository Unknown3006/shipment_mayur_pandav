import express from "express";
import { Router } from "express";
import {createVoyage} from "../controller/voyage.controller.js"
const router2=Router()

router2.post("/",createVoyage)

export {router2}