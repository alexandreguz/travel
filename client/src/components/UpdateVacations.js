import { useState } from "react"
// import EditVacation from "./EditVacations"

const UpdateVacations = ({vacationObject}) => {

    console.log(vacationObject.discription)
    console.log(`${vacationObject.destiny}`)


const [updateDiscription, setUpdateDiscription] = useState(`${vacationObject.discription}`)
console.log(updateDiscription)
const [updateDestiny, setUpdateDestiny] = useState(`${vacationObject.destiny}`)
const [updateFromDate, setUpdateFromDate] = useState(`${vacationObject.fromDate}`)
const [updateUntilDate, setUpdateUntilDate] = useState(`${vacationObject.untilDate}`)
const [updatePrice, setUpdatePrice] = useState(`${vacationObject.price}`)




    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submited")
        const updatedVacation = {
            updateDiscription,
            updateDestiny,
            updateFromDate,
            updateUntilDate,
            updatePrice
        }
        console.log("updatedVacation")
        console.log(updatedVacation)

        //  editedVacation(updatedVacation)



        // fetch('http://localhost:3001/api/updatevacations/', {
        //     method: "PUT",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(updatedVacation)
        // })
        // .then(() => {alert("edited")})

        
    }

    return (

        <div>
            Make update here
            <br/>
            <br/>
            <br/>
            <br/>
            
            <label>Discription:</label>
            <br/>
            <input type='text' 
            // id="inputCreateVacation"
            required
            onChange = {(e) => {setUpdateDiscription(e.target.value)}}
            value={updateDiscription}
            />
            <br/>
             <label>Destiny:</label>
            <br/>
            <input type='text' 
            // id="inputCreateVacation"
            required
            onChange = {(e) => {setUpdateDestiny(e.target.value)}}
            // value={updateDestiny}
            />
            <br/>
            <label>From date:</label>
            <br/>
            <input type='date' 
            // id="inputCreateVacation"
            required
            onChange = {(e) => {setUpdateFromDate(e.target.value)}}
            // value={updateFromDate}
            />
            <br/>
            <label>Until date:</label>
            <br/>
            <input type='date' 
            // id="inputCreateVacation"
            required
            onChange = {(e) => {setUpdateUntilDate(e.target.value)}}
            // value={updateUntilDate}
            />
            <br/>
            <label>Price:</label>
            <br/>
            <input type='text' 
            // id="inputCreateVacation"
            required
            onChange = {(e) => {setUpdatePrice(e.target.value)}}
            // value={updatePrice}
            />
            <br/>
            <br/>
            <button onClick={handleSubmit}>Edit</button>

        </div>
    )

}
// }

export default UpdateVacations