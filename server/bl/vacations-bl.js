import vacationsDal from '../dal/vacations-dal.js'


const getAllVacations = async(body) => {
    return await vacationsDal.getAll()
}

const getVacationById = async(id) => {
    return await vacationsDal.getById(id)
}

const addVacations = async(body) => {
    return await vacationsDal.addVacation(body)
}

export {
    getAllVacations,
    addVacations,
    getVacationById
        }