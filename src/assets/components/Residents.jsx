import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Residents = ({ residents }) => {
    const [resident, setResident] = useState({});

    useEffect(() => {
        axios.get(residents)
            .then(res => setResident(res.data))
    }, [])
    console.log(resident)
    /*const getColor = ()=>{
        if (resident.status === "Alive") {
            return "red"
        }
    }*/
    //resident.status==="Alive" ? "green":"red", unknown
    return (
        <div>
            <div className="resident">
                <li >{resident?.name}
                    <br />
                    <img src={resident.image} alt="" className='resident-image' />
                    <div className='resident-status'><i className="fa-solid fa-circle" style={{color: resident.status==="Alive" ? "green": resident.status==="Dead" ? "red" : "grey"}}></i> {resident.status} - {resident.species}</div>
                    <br />
                    <b>Origin:</b> {resident.origin?.name}
                    <br />
                    <b>Episodes where appear: </b>{resident.episode?.length}
                </li>
            </div>

        </div>
    );
};

export default Residents;