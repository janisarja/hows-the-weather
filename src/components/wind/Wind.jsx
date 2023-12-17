import React from 'react';
import './wind.css';
import { WiDirectionUp } from "react-icons/wi";

const Wind = ({ wind }) => {
  if ( wind ) {
    return (
      <div>
        <div className='info'>
          <div className='arrow'><WiDirectionUp color='white' size={75} style={{transform: `rotate(${wind['deg']}deg)` }} /></div>
        </div>
        <p>speed {wind['speed']} m/s</p>
      </div>
    )
  }
}

export default Wind;
