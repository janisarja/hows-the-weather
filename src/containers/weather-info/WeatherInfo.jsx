import React from 'react';
import './weather-info.css';
import { Searchmenu, Weather, Temperature } from '../../components';

const WeatherInfo = ({ city, handleCityChange }) => {
  return (
    <div>
      <h2>City</h2>
      <Searchmenu 
        city={city}
        handleCityChange={(c) => handleCityChange(c)}
      />
    </div>
  )
}

export default WeatherInfo;
