import { Footer, Header, WeatherInfo } from './containers';

const apiKey = '9dd31d462321665a6103dba10ebe21d0';

const App = () => {


  return (
    <div className='App'>
      <div className='gradient__top'>
        <Header />
        <WeatherInfo />
      </div>
      <Footer />
    </div>
  )
}

export default App;
