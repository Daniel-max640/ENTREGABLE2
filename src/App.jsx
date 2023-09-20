
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

function App() {
  
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
    
    navigator.geolocation.getCurrentPosition(success) //encardao de accereder a nuestra ubicacion
    
  }, [])

  useEffect(() => {
    if (coords) {
      const ApiKey = 'e57161c2c16fc3a9b4c2a3bbfcfee805'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`
      axios.get(url)
        .then(res => {
          setWeather(res.data)
          const obj = {
            celsius: (res.data.main.temp - 273.15).toFixed(1),
            farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
          }
          setTemp(obj)

        })
        .catch(err => console.log(err))
    }
   
  }, [coords])

  console.log(weather)

  return (  
    
      <div className='fondo'>        
        <WeatherCard
          weather = {weather}
          temp={temp}       
        />
      </div>
     
  )
}

export default App
