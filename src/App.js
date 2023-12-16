import { Footer, Header, WeatherInfo } from './containers';

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
