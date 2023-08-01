import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';


const Countries = () => {
    // step 1 set to the state 
    const [countries, setCountries] = useState([]);
    // step 2 set the useEffect 
    useEffect(() => {
        // step 3
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            // step 4 
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Wellcome to countries:{countries.length}</h1>
            {/* step 5  */}

            <div className='countries-container'>
                {
                    countries.map(country =>
                        <Country country={country}></Country>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;