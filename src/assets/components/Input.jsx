import axios from 'axios';
import React, { useState } from 'react';

const Input = ({ setLocation }) => {
    const [locationId, setLocationId] = useState("");


    const searchLocation = () => {
        if (locationId > 126 || locationId < 1) {
            alert("Enter a number from 1 to 126")
        } else {
            //${locationId}
            axios.get(`https://rickandmortyapi.com/api/location/${locationId}`)
                .then(res => setLocation(res.data))
        }

    }
    return (
        <div>
            <input type="text" value={locationId} onChange={e => setLocationId(e.target.value)} placeholder="Type a location id" list='locations' />
            <button onClick={searchLocation} className="searc">Search</button>
            <datalist id='locations'>
                <option value="Wolfgang"></option>
            </datalist>
        </div>
    );
};

export default Input;