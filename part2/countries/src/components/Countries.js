import React from 'react'
import ListedCountry from './ListedCountry'
import CountryDetail from './CountryDetail'

  const Countries = ({countries, selectCountryHandler}) => {
    if (countries.length === 0)  {
      return (
        <div></div>
     )
    }
    if (countries.length > 10)  {
      return (
        <div><p>Too many matches ({countries.length}), give more specific filter.</p></div>
     )
    }
    if (countries.length === 1)  {
      return (
          <CountryDetail country = {countries[0]}/>
     )
    }
    
      return (
        <div>
          <ul>
            {countries.map(country =>
              <ListedCountry key={country.name.common} country = {country} selectCountryHandler={selectCountryHandler}/>
            )}
          </ul>
        </div>
      )
    }


export default Countries
