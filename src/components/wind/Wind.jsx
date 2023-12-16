import React from 'react';
import { WiDirectionUp } from "react-icons/wi";

const Wind = ({ wind }) => {
  if ( wind ) {
    return (
      <div>
        <WiDirectionUp style = {{transform: `rotate(${wind['deg']}deg)` }} />
        <p>speed {wind['speed']} m/s</p>
      </div>
    )
  }
}

export default Wind;
