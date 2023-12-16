import React from 'react';
import './weather.css';

const Weather = ({ weather }) => {
  if ( weather['icon'] ) {
    return (
      <div>
        <img 
          src={`https://openweathermap.org/img/wn/${weather['icon']}@2x.png`}
          alt={weather['description']}
        />
      </div>
    )
  }
};

export default Weather;
