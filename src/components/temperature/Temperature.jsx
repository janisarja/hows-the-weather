import React from 'react';
import './temperature.css';

const Temperature = ({ data }) => {
  if ( data ) {
    return (
      <div>
        <p>{Math.round(data['temp'])} °C</p>
        <p>feels like {Math.round(data['feels_like'])} °C</p>
      </div>
    )
  }
};

export default Temperature;
