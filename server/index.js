import express from 'express'
import cors from 'cors'
import usersRouter from './controller/users-controller.js'
import vacationsRouter from './controller/vacations-controller.js'


const app = express()
 
app.use(express.json())
app.use(cors())
 
app.use('/api', usersRouter)  
app.use('/api', vacationsRouter)  

app.listen(3001, () => {
    console.log('Server started on port 3001');
})