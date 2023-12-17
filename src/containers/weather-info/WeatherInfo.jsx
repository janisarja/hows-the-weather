import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './weather-info.css';
import { Searchmenu, Weather, Temperature, Wind } from '../../components';

const apiKey = '9dd31d462321665a6103dba10ebe21d0';

const WeatherInfo = () => {
  const [city, setCity] = useState([]);
  const [weather, setWeather] = useState([]);
  const [mainData, setMainData] = useState(0);
  const [wind, setWind] = useState(0);

  useEffect(() => {
    if ( city['lat'] && city['lon'] ) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${city['lat']}&lon=${city['lon']}&appid=${apiKey}&units=metric`)
        .then(response => response.data)
        .then(data => {
          setWeather(data['weather'][0]);
          setMainData(data['main']);
          setWind(data['wind']);
        })
    }
  }, [city]);
  return (
    <div>
      <div className='searchmenu'>
        <h2>City</h2>
        <div>
          <Searchmenu 
            city={city}
            handleCityChange={(c) => setCity(c)}
          />
        </div>
      </div>
      <div className='infoarea'>
        <div>
          <h2>Weather</h2>
          <div className='infobox'>
            <Weather 
              weather={weather}
            />
          </div>
        </div>
        <div>
          <h2>Temperature</h2>
          <div className='infobox'>
            <Temperature 
              data={mainData}
            />
          </div>
        </div>
        <div>
          <h2>Wind</h2>
          <div className='infobox'>
            <Wind 
              wind={wind}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo;
