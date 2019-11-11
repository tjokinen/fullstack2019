import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {

    const [weather, setWeather] = useState([])

    useEffect(() => {

        axios
            .get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + process.env.REACT_APP_OPENWEATHER_API_KEY)
            .then(response => {
                setWeather(response.data)
            })
            .catch(error => {
                console.log('weather data not found')
            })
    }, [city])

    if (weather.main === undefined) {
        return (
            <></>
        )
    } else {
        return (
            <>
                <h2>Weather in {weather.name}</h2>
                <p><strong>temperature:</strong> {weather.main.temp} Celsius
          <br /><img src={"http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"} alt={weather.weather[0].main} />
                    <br /><strong>wind:</strong> {weather.wind.speed} meters/second, direction {weather.wind.deg} degrees</p>
            </>
        )
    }
}

export default Weather