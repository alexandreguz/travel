import { useState } from "react"

const Register = () => {

    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }) 

    const handleChange = (e, name) => {
        let inputValue = e.target.value
        let tempNewUser = {
            ... newUser,
            [name]: inputValue
        }
        setNewUser(tempNewUser)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        registration()
    }

    const registration = () => {
            let body = {
                ...newUser
            }
            fetch('http://localhost:3001/api/registration',
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
        
    }

    return (
        <div>
            <h3>REGISTRATION</h3>
            <label>Name:</label>
            <br/>
            <input type='text' 
            required
            onChange = {(e) => {handleChange(e, "firstName" )}}
            />
            <br/>
            <label>Last Name:</label>
            <br/>
            <input type='text' 
            required
            onChange = {(e) => {handleChange(e, "lastName")}}
            />
            <br/>
            <label>Email:</label>
            <br/>
            <input type='text' 
            required
            onChange = {(e) => {handleChange(e, "email")}}
            />
            <br/>
            <label>Password:</label>
            <br/>
            <input type='text' 
            required
            onChange = {(e) => {handleChange(e, "password")}}
            />
            <br/>
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default Register