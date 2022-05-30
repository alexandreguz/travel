import connection from '../db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const postNewRegistration = async (firstName, lastName, email, password, vacationID, isAdmin) => {

    let result = {
        success: false,
        data: null
    }
    try {
        const hashedPassword = bcrypt.hashSync(password, 10)
        
        let res = await connection.promise().query(
            `insert into users(firstName, lastName, email, password, vacationID, isAdmin)
            Values
            ('${firstName}', '${lastName}', '${email}', '${hashedPassword}', ${null}, ${false});`
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
    // const generateToken = (userData) => {
    //     const token = jwt.sign({ email: userData }, "shhhhh")
    //     console.log(token)
    //     return token
    // }

const login = async (body) => {

    const hashedPassword = bcrypt.hashSync(body.password, 10)


    console.log("email, password - dal")

    console.log(body.email, hashedPassword)

    let result = {
        success: false,
        data: null
    }    
        let  [rows,fields] = await connection.promise().query(
            // `SELECT * FROM users where email = '${body.email}' AND password = '${hashedPassword}'`,
            `SELECT * FROM users where email = 'Lex@gmail.com' AND password = '$2b$10$uC8WkECzIPnPYFCz0Rfpau3d1fZAkkKqu6hTzWNNHbUHeeMdGKoTa'`,
            
            console.log("body"),
            
            console.log(hashedPassword)

        )
    if (rows.length > 0) {
        // const token = generateToken(userData)
        result = {
            success: true,
            // data: generateToken(body.email)
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