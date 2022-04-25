import { useState } from "react"

async function loginUser(credentials) {
    return fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


const Login = ({setToken}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password
        });
        setToken(token);
      }

    return (
        <div>
            <h3>PLEASE LOGIN</h3>
            <form onSubmit={handleSubmit}>

            <label>Email:</label>
            <br/>
            <input type='text' onChange={e => setEmail(e.target.value)}
            required
            />
            <br/>

            <label>Password:</label>
            <br/>
            <input type='text' onChange={e => setPassword(e.target.value)}
            required
            />
            <br/>
            <button>Login</button>
            </form>
        </div>
    )
}

export default Login


{/* <form className={classes.root}>
            <h3>create new customer</h3>
            <label>First Name:</label>
            <br/>
            <input type='text' 
            required
            onChange={(e) => handleChange(e, "firstName")}
            value={newCustomer.firstName}
            />
            <br/>
            <label>Last Name:</label>
            <br/>
            <input type='text' 
            required
            onChange={(e) => handleChange(e, "lastName")}
            value={newCustomer.lastName}
            />
            <br/>
            <label>Phone:</label>
            <br/>
            <input type='text' 
            required
            onChange={(e) => handleChange(e, "phone")}
            value={newCustomer.phone}
            />
            <br/>
            <label>Email:</label>
            <br/>
            <input type='email' 
            required
            onChange={(e) => handleChange(e, "email")}      
            value={newCustomer.email}      
            />
            <br/>
            <label>Password:</label>
            <br/>
            <input type='password' 
            required
            onChange={(e) => handleChange(e, "password")}
            value={newCustomer.password}
            />
            <br/>
            <label>Status:</label>
            <br/>
            <input type='number' 
            min={0}
            onChange={(e) => handleChange(e, "statusId")}
            value={newCustomer.statusId ?? 0}
            />
            <br/>
            <br/>
            <button onClick={handleSubmit} > 
                create
            </button>
        </form> */}
