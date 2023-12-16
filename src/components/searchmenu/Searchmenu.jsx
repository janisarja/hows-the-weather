import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './searchmenu.css';
import axios from 'axios';

const apiKey = '9dd31d462321665a6103dba10ebe21d0';

const Searchmenu = ({ handleCityChange }) => {
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState([]);

  const handleSearch = () => {
    axios
      .get(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=10&appid=${apiKey}`)
      .then(response => response.data)
      .then(results => setOptions(results));
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setOptions([]);
  }

  const handleEnterKey = (event) => {
    if ( event.key === 'Enter' ) {
      handleSearch();
    }
  }

  const handleSelection = (city) => {
    handleCityChange(city);
    if ( city['state'] ) {
      setSearch(`${city['name']}, ${city['state']}, ${city['country']}`);
    }
    else {
      setSearch(`${city['name']}, ${city['country']}`);
    }
    setOptions([]);
  }

  return (
    <div>
      <div>
        <input 
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleEnterKey}
        ></input>
        <button onClick={handleSearch}>Enter</button>
      </div>
      <div>
        {options.map((option, index) => {
          if ( option['state'] ) {
            return (
              <div key={index} onClick={() => handleSelection(option)}>
                {option['name']}, {option['state']}, {option['country']}
              </div>
            );
          }
          return (
            <div key={index} onClick={() => handleSelection(option)}>
              {option['name']}, {option['country']}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Searchmenu;
