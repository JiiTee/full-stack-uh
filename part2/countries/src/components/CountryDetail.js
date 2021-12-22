import React from 'react'
import Languages from './Languages'
import Flag from './Flag'
import Weather from './Weather'

  const CountryDetail = ({country}) => {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital}</p>
        <p>Population {country.population}</p>
        <h2>Languages</h2>
        <Languages languages={country.languages} />
        <Flag flagURL={country.flags.png}/>
        <Weather country={country} />
      </div>
    )
  }

export default CountryDetail
