import express from "express";
import { getAllVacations, addVacations, getVacationById } from "../bl/vacations-bl.js"; 

const vacationsRouter = express.Router()

vacationsRouter.get('/vacations', async (req, res) => {
    let result = await getAllVacations();
    res.send(result)
})

vacationsRouter.get('/vacations/:id', async (req, res) => {
    let id = +req.params.id
    let result = await getVacationById(id);
    res.send(result)
})

vacationsRouter.post('/vacations', async(req, res) => {
    let result = await addVacations(req.body)
    res.send(result)
})



export default vacationsRouter
