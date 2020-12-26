import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './css/weatherComponent.css'

export default function Weather({latitude,longitude}) {
  const [weatherData, setWeatherData] = useState(null);
  console.log('latitude',latitude)
  useEffect(()=>{
    console.log('latitude in useEffect',latitude)

    axios.get(`http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=3115dd5f897c855de48b2d210f218903`).then(response => setWeatherData(response.data))
  },[latitude,longitude])
  return (
    <div className='weatherBackground'>
      <h2>Weather:</h2>
      {weatherData &&  
      <div>
        <p>Description: {weatherData.weather[0].description}</p>
        <p>Temperature: {weatherData.main.temp}</p>
      </div>
      }
    </div>
  )
}
