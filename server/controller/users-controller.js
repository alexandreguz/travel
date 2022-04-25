import express from "express";
import { userLogin, newUser } from "../bl/users-bl.js";

const usersRouter = express.Router()

usersRouter.post('/registration', async (req, res) => {
    let result = await newUser(req.body);
    res.send(result)
})

usersRouter.post('/login', async (req, res) => {
    const authentication = await userLogin(req.body)
    console.log(authentication)
    if (authentication.success) {

        res.send(authentication)
    }
    else {
        res.send("The email and the password don't match")
    }

})

export default usersRouter
