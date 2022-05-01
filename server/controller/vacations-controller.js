import express from "express";
import { getAllVacations } from "../bl/vacations-bl.js"; 

const vacationsRouter = express.Router()

vacationsRouter.get('/vacations', async (req, res) => {
    let result = await getAllVacations();
    res.send(result)
})

export default vacationsRouter
