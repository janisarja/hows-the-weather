import React from 'react';

import { Searchmenu, Weather, Temperature } from './components';
import { Footer, Header, WeatherInfo } from './containers';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__top'>
        <Header />
        <WeatherInfo />
      </div>
      <div className='gradient__bottom'>
        <Footer />
      </div>
    </div>
  )
};

export default App;
