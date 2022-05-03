import React from 'react';
import {averageRating} from './Helpers.js';

const Stars = ({currentBoulder}) => {
  let average = averageRating(currentBoulder.ratings);
  return (
    <div className='Stars' style={{'--rating': average}} aria-label={`Rating of this product is ${average} out of 5.`}></div>
  );
}

export default Stars;