import React from 'react';
import './weather.css';

const Weather = ({ weather }) => {
  if ( weather['icon'] ) {
    return (
      <div>
        <div className='info'>
          <img 
            src={`https://openweathermap.org/img/wn/${weather['icon']}@2x.png`}
            alt={weather['description']}
          />
        </div>
        <p>{weather['description']}</p>
      </div>
    )
  }
};

export default Weather;
