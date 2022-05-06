import connection from '../db.js'

    const getAll = async () => {
        let result = {
            success: false,
            data: null
        }
        try {
            let res  = await connection.promise().query(
                'SELECT * FROM vacations'
            ) 
            result.success = true
            result.data = res[0]
            return result
        } 
        catch (err) {
            result.success = true
            result.data = err
            return result
        }
    }

    const addVacation = async (body) => {
        let result = {
            success: false, 
            data: null
        }
        try {
            let res  = await connection.promise().query(
                `INSERT INTO vacations(discription, destiny, fromDay, untilDay, price)
                 VALUES ('${body.discription}', '${body.destiny}', '${body.fromDay}', '${body.untilDay}', ${body.price})`
            ) 
            result.success = true
            result.data = res[0]
            return result
            
        } catch (err) {
            result.success = false
            result.data = err
            console.log(err)
            return result
        }
    }    

    const getById = async (id) => {
        let result = {
            success: false, 
            data: null
        }

        try {
            let res  = await connection.promise().query(
                `SELECT * FROM vacations WHERE vacationID = ${id}`
            ) 
            result.success = true
            result.data = res[0]
            return result
        } 
        catch (err) {
            result.success = true
            result.data = err
            return result
        }
    }

    const updateVacation = async (body) => {
                console.log("body") 
                console.log(body.vacationId) 
                console.log(body)
        let result = {
            success: false, 
            data: null
        }
        try {
            let res  = await connection.promise().query(

                

                `UPDATE vacations
                SET discription = '${body.discription}', destiny= '${body.destiny}', fromDay = '${body.fromDay}', untilDay = '${body.untilDay}', price = ${body.price}
                WHERE vacationID = ${body.vacationID};`
            
            ) 

            result.success = true
            result.data = res[0]
            return result
            
        } catch (err) {
            result.success = false
            result.data = err
            console.log(err)
            return result
        }
    }    

    

export default{
    addVacation,
    getAll,
    getById,
    updateVacation
}


