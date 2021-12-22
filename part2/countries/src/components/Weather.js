import React , { useState, useEffect} from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY
const weatherBaseUrl = 'http://api.weatherstack.com'


  const Weather = ({country}) => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
      console.log('effect')
      const request = axios.get(`${weatherBaseUrl}/current?access_key=${api_key}&query=${country.capital}&units=m`)
      request.then( response => {
        setWeather(response.data)
      })
      .catch(error => {
        setWeather(null)
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (weather === null) {
      return <div></div>
    } 

    return (
      <div>
        <h3>Weather in {weather.location.name}</h3>
        <p>temperature {weather.current.temperature} Celcius</p>
        <img src={weather.current.weather_icons[0]} alt="Weather symbol" />
        <p>wind {weather.current.wind_speed} km/h direction {weather.current.wind_dir}</p>
      </div>  
    )
  }

export default Weather
