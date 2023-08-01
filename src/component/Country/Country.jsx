import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    const {region,population,name} = props.country;
    return (
        <div className='country'>
            <h3>Country Name:{name.common}</h3>
            <p>Population:{population}</p>
            <p><small>Region:{region}</small></p>
        </div>
    );
};

export default Country;