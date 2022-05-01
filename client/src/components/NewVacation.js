const NewVacation = () => {
    return (
        <div>
            Add Vacation
            <br/>
            <br/>
            <label>Discription:</label>
            <br/>
            <input type='text' 
            required
            />
            <br/>
            <label>Destiny:</label>
            <br/>
            <input type='text'
            required
            />
            <br/>
            <label>From Day:</label>
            <br/>
            <input type='date' 
            required
            />
            <br/>
            <label>To Day:</label>
            <br/>
            <input type='date'
            required
            />
            <br/>
            <label>Price:</label>
            <br/>
            <input type='number'
            required
            />
        </div>
    )
}

export default NewVacation
