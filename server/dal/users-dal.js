import connection from '../db.js'


const postNewRegistration = async (firstName, lastName, email, password, vacationID, isAdmin) => {

    let result = {
        success: false,
        data: null
    }
    try {
        let res = await connection.promise().query(
            `insert into users(firstName, lastName, email, password, vacationID, isAdmin)
            Values
            ('${firstName}', '${lastName}', '${email}', '${password}', ${null}, ${false});`
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

const login = async (body) => {

    console.log("email, password - dal")

    console.log(body.email, body.password)

    let result = {
        success: false,
        data: null
    }
    
        let  [rows,fields] = await connection.promise().query(
            `SELECT * FROM users where email = '${body.email}' AND password = '${body.password}'`,
        )
    if (rows.length > 0) {
        result = {
            success: true,
            data: rows[0]
        }
    }
    console.log(result)
    return result

}

export default{
    login,
    postNewRegistration
}