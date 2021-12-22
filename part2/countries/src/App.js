import React, { useState, useEffect} from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'
import './index.css'

//import countryService from './services/countries'
const baseUrl = 'https://restcountries.com/v3.1'


const App = () => {

  const [countries, setCountries] = useState([])
  const [nameFilter, setNameFilter] = useState('')
  
  
  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)    
  }
  
  const selectCountryHandler = commonName  => (event) => {
    event.preventDefault()
    console.log('selectOneCountry button clicked', event.target.value, commonName)
    setNameFilter(commonName)
  }


  const countriesToShow = nameFilter === '' ?
    countries
    : countries.filter(country => country.name.common.toLowerCase().includes(nameFilter.toLowerCase()))

  useEffect(() => {
    console.log('effect')
    const request = axios.get(`${baseUrl}/all`)
    request.then( response => {
      setCountries(response.data)
    })
  }, [])
        
  return (
    <div>

      <Filter filterChangeHandler={handleNameFilterChange} value={nameFilter}/>

      <Countries countries={countriesToShow} selectCountryHandler = {selectCountryHandler}/>
    
  </div>
    
  )

}

export default App
