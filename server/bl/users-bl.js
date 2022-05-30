import usersDal from '../dal/users-dal.js'
// import bcrypt from 'bcrypt'


const newUser = async(body) => {
    // fazer destructure do password and hash password
    return await usersDal.postNewRegistration(body.firstName, body.lastName, body.email, body.password, body.vacationID, body.isAdmin)
}

const userLogin = async(body) => {

    return await usersDal.login(body)
}

export {
        userLogin,
        newUser
        }