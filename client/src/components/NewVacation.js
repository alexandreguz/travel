import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";


const NewVacation = () => {
    const navigate = useNavigate()

    const [newVacation, setNewVacation] = useState({
        discription: '',
        destiny: '',
        fromDay: '',
        untilDay: '',
        price: 0
    }) 

    const handleChange = (e, name) => {
        let inputValue = e.target.value
        console.log(inputValue)
        let tempNewVacation = {
            ...newVacation,
            [name]: inputValue
        }
        console.log(tempNewVacation)
        setNewVacation(tempNewVacation)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        addVacation()

        newVacation = {
            discription: '',
            destiny: '',
            fromDay: '',
            untilDay: '',
            price: 0
        }
    }

    const addVacation = () => {
        let body = {
            ...newVacation
        }

        fetch('http://localhost:3001/api/vacations',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                })
                .then(res => res.json())
                .then(data => {
                    // if (data.success) {
                    //     addCustomerToList(data.data)
                    // } else {
                    //     alert('Server error: failed to create new customer.')
                    // }
                    console.log('data')
                    console.log(data)
                })
                // .catch(err => {
                //     console.log('err')
                //     console.log(err)
                // })
            navigate("/home")
    }

    



    return (
        <div className="createVacationPage">
            
            <br/>
            <br/>
            <form className="formContainer">
                <label>Discription:</label>
            <br/>
            <input type='text' 
            id="inputCreateVacation"
            required
            onChange = {(e) => {handleChange(e, "discription" )}}
            value={newVacation.discription}
            />
            <br/>
            <label>Destiny:</label>
            <br/>
            <input type='text'
            id="inputCreateVacation"
            required
            onChange = {(e) => {handleChange(e, "destiny" )}}
            value={newVacation.destiny}
            />
            <br/>
            <label>From Day:</label>
            <br/>
            <input type='date' 
            id="inputCreateVacation"
            required
            onChange = {(e) => {handleChange(e, "fromDay" )}}
            value={newVacation.fromDay}
            />
            <br/>
            <label>To Day:</label>
            <br/>
            <input type='date'
            id="inputCreateVacation"
            required
            onChange = {(e) => {handleChange(e, "untilDay" )}}
            value={newVacation.untilDay}
            />
            <br/>
            <label>Price:</label>
            <br/>
            <input type='number'
            id="inputCreateVacation"
            required
            onChange = {(e) => {handleChange(e, "price" )}}
            value={newVacation.price}
            />
            <br/>
            <button onClick={handleSubmit}>Add</button>
            </form>    

            
        </div>
    )
}

export default NewVacation
