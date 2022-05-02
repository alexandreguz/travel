import express from "express";
import { getAllVacations, addVacations } from "../bl/vacations-bl.js"; 

const vacationsRouter = express.Router()

vacationsRouter.get('/vacations', async (req, res) => {
    let result = await getAllVacations();
    res.send(result)
})

vacationsRouter.post('/vacations', async(req, res) => {
    let result = await addVacations(req.body)
    res.send(result)
})

export default vacationsRouter
