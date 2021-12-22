import React from 'react'

  const ListedCountry = ({country, selectCountryHandler}) => {
    return (
      <li>
          {country.name.common} 
          <button onClick={selectCountryHandler(country.name.common)}>show</button>
      </li>
    )
  }

export default ListedCountry
