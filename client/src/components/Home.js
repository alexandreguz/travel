import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import Vacations from "./Vacations";
import NewVacation from "./NewVacation";


const Home = () => {

    const [vacations, setVacations] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3001/api/vacations')
            .then(res => res.json())
            .then(data => {setVacations(data.data);
            })
    }, [])


    return (
        <div>

            <h3>Home</h3>
            <Vacations/>

            <NewVacation />
            <nav>
                <Link to="/">Vacations</Link>
            </nav>
        </div>


    )
}

export default Home