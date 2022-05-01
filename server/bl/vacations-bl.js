import vacationsDal from '../dal/vacations-dal.js'


const getAllVacations = async(body) => {
    return await vacationsDal.getAll()
}

export {
    getAllVacations,
        }