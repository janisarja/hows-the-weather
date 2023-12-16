import React from 'react';
import './temperature.css';

const Temperature = ({ temp }) => {
  if ( temp ) {
    return (
      <div>
        <p>{Math.round(temp-273.15)} °C</p>
      </div>
    )
  }
};

export default Temperature;
