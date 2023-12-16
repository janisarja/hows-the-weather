import React from 'react';
import './temperature.css';

const Temperature = ({ data }) => {
  if ( data ) {
    return (
      <div>
        <p>{Math.round(data['temp']-273.15)} °C</p>
        <p>feels like {Math.round(data['feels_like']-273.15)} °C</p>
      </div>
    )
  }
};

export default Temperature;
