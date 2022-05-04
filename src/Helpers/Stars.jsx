import React from 'react';
import {averageRating} from './Helpers.js';

const Stars = ({currentBoulder, total = 5, singleReview}) => {
  if (currentBoulder) {
    let average = averageRating(currentBoulder.reviews);
    return (
      <div className='Stars' style={{'--rating': average, '--total': total}} aria-label={`Rating of this product is ${average} out of 5.`}></div>
    );
  } else {
    return (
      <div className='Stars' style={{'--rating': singleReview, '--total': 1}} aria-label={`Rating of this product is ${singleReview} out of 5.`}></div>
    );
  }
}

export default Stars;