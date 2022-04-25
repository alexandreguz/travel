import usersDal from '../dal/users-dal.js'


const newUser = async(body) => {
    return await usersDal.postNewRegistration(body.firstName, body.lastName, body.email, body.password, body.vacationID, body.isAdmin)
}

const userLogin = async(body) => {

    return await usersDal.login(body)
}

export {
        userLogin,
        newUser
        }