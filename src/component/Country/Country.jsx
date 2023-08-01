import React from 'react';
import './Country.css'

const Country = (props) => {
   const {name,population,area} = props.country;
    return (
        <div className='country'>
            <h1>Name:{name.common}</h1>
            <h3>Population:{population}</h3>
            <p>Area:{area}</p>
        </div>
    );
};

export default Country;