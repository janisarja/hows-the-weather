import { Footer, Header, WeatherInfo } from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Header />
        <WeatherInfo />
      </div>
      <Footer />
    </div>
  )
}

export default App;
