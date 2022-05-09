import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import UpdateVacations from "./UpdateVacations";

const EditVacation = () => {
    let {id} = useParams();
    const [vacationObject, setVacationObject] = useState({})
    // const [description, setDescription] = useState("")



    // -----------
    // const editedVacation = (editedVacation) => {
    //     console.log(editedVacation)
    //     setVacationObject(editedVacation)
    // }

    // ----------------

    useEffect(() => {
        fetch(`http://localhost:3001/api/vacations/${id}`)
        .then(res => res.json())
        .then(data => { console.log(data.data[0])
            setVacationObject({...data.data[0]})
        })    
    },[])

    return (
        <div className="vacationPage">
            <div className="leftSide">
                <div className="vacation" id="individual">
                <div className="title">{vacationObject.discription}</div>
                <div className="body">{vacationObject.destiny}</div>
                <div className="body">{vacationObject.fromDay}</div>
                <div className="body">{vacationObject.untilDay}</div>
                <div className="footer">{vacationObject.price}</div>
            </div>
                
            </div>
            <div className="rightSide">
                {/* <UpdateVacations vacationObject={vacationObject} /> */}
            </div>

        </div>

    )
}

export default EditVacation