import React from 'react';

const Location = ({ location }) => {
    return (
        <div className='location-one'>
            <h1>{location.name}</h1>
            <div className="location">
                <p><b>Type:</b> {location.type}</p>
                <p><b>Dimension:</b> {location.dimension}</p>
                <p><b>Population:</b> {location.residents?.length}</p>
            </div>

        </div>
    );
};

export default Location;