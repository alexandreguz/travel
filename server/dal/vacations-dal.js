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


export default{
    getAll
}