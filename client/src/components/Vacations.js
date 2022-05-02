import { useEffect, useState } from "react";

const Vacations = () => {
    const [vacations, setVacations] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/vacations')
            .then(res => res.json())
            .then(data => {
                setVacations(data.data);
            })
    }, [])

    return (
        <div>
            {vacations.map(vacation => (
                <div className="vacation" key={vacation.vacationID}>
                    <h2 className="title">{vacation.discription}</h2>
                    <h3 className="body">{vacation.destiny}</h3>
                    <h4 className="body">from: {vacation.fromDay}</h4> 
                    <h4 className="body">to: {vacation.fromDay}</h4> 
                    <h4 className="footer">Price {vacation.price} $</h4>
                </div>
            ))}
        </div>

    )



}

export default Vacations