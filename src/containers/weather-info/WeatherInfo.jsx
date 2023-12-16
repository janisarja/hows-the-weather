import React from 'react';
import './weather-info.css';
import { Searchmenu, Weather, Temperature } from '../../components';

const WeatherInfo = ({ city, handleCityChange, weather }) => {
  return (
    <div>
      <h2>City</h2>
      <Searchmenu 
        city={city}
        handleCityChange={(c) => handleCityChange(c)}
      />
      <h2>Weather</h2>
      <Weather 
        weather={weather}
      />
    </div>
  )
}

export default WeatherInfo;
