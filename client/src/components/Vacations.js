import { useEffect, useState } from "react";

const Vacations = () => {
    const [vacations, setVacations] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3001/api/vacations')
            .then(res => res.json())
            .then(data => {setVacations(data.data);
            })
    }, [])
   
        return(
            <ul>
            {vacations.map(vacation =>(
                <li key={vacation.vacationID}>
                    {vacation.discription} {vacation.vacationID}
                </li>
            ))}
        </ul>

        )
        
    

}

export default Vacations