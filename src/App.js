import React, { useEffect } from 'react';
import { useState } from 'react';

import { Footer, Header, WeatherInfo } from './containers';
import axios from 'axios';

const apiKey = '9dd31d462321665a6103dba10ebe21d0';

const App = () => {
  const [city, setCity] = useState([]);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if ( city['lat'] && city['lon'] ) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${city['lat']}&lon=${city['lon']}&appid=${apiKey}`)
        .then(response => response.data)
        .then(data => {
          setWeather(data['weather'][0]);
        })
    }
  }, [city]);

  return (
    <div className='App'>
      <div className='gradient__top'>
        <Header />
        <WeatherInfo 
          city={city}
          handleCityChange={(c) => setCity(c)}
          weather={weather}
        />
      </div>
      <div className='gradient__bottom'>
        <Footer />
      </div>
    </div>
  )
}

export default App;
