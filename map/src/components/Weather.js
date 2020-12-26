import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './css/weatherComponent.css'

export default function Weather({latitude,longitude}) {
  const [weatherData, setWeatherData] = useState(null);

  const dateBuilder = (d) => {
    console.log('date',d)
    console.log('day',d.getDay())
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }

  useEffect(()=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=3115dd5f897c855de48b2d210f218903`).then(response => setWeatherData(response.data))
  },[latitude,longitude])
  return (
    <div className='weatherComponent'>
      <h2>Weather:</h2>
      {weatherData &&  
        <div>
        <div className="location-box">
          <div className="location">location</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            Temperature: {weatherData.main.temp}
          </div>
          <div className="weather">Description: {weatherData.weather[0].description}</div>
        </div>
      </div>
      }
    </div>
  )
}
