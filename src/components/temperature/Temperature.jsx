import React from 'react';
import './temperature.css';

const Temperature = ({ data }) => {
  if ( data ) {
    return (
      <div>
        <div className='info'>
          <p className='temp'>{Math.round(data['temp'])} °C</p>
        </div>
        <p>feels like {Math.round(data['feels_like'])} °C</p>
      </div>
    )
  }
};

export default Temperature;
