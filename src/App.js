import React from 'react';
import { useState } from 'react';

import { Footer, Header, WeatherInfo } from './containers';

const App = () => {
  const [city, setCity] = useState([]);

  return (
    <div className='App'>
      <div className='gradient__top'>
        <Header />
        <WeatherInfo 
          city={city}
          handleCityChange={(c) => setCity(c)}
        />
      </div>
      <div className='gradient__bottom'>
        <Footer />
      </div>
    </div>
  )
}

export default App;
