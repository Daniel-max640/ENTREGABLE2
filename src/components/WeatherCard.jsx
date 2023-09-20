import { useState } from "react"


const WeatherCard = ({ weather, temp }) => {
    const [isCelsius, seTIsCelsius] = useState(true)
    const handleChangeTemp = () => seTIsCelsius(!isCelsius)
    
    return (
    <article className="weather-card">
      <h1>Weather App</h1>
      <h2>{weather?.name}, {weather?.sys.country}</h2> 
      <div className="container"> 
        <div>
        <img  className="clima" src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        </div>
        <section>
            <h3>"{weather?.weather[0].description}"</h3>
            <ul className="weather-card2">
                <li><span>Wind Speed</span><span className="medicion">{weather?.wind.speed}m/s</span></li>
                <li><span>Clouds</span><span className="medicion">{weather?.clouds.all}%</span></li>
                <li><span>Pressure</span><span className="medicion">{weather?.main.pressure}hPa</span></li>
            </ul>
        </section>
      </div>
      <h2>{isCelsius ? `${temp?.celsius} °C`: `${temp?.farenheit} °F`}</h2>
      <button onClick={handleChangeTemp}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>

    </article>

  )
}

export default WeatherCard
