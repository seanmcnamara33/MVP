import React from 'react';
import {averageRating} from './Helpers.js';

const Stars = ({currentBoulder, total = 5, singleReview}) => {
  if (currentBoulder && currentBoulder.ratings.length) {
    let average = averageRating(currentBoulder.ratings);
    return (
      <div className='Stars' style={{'--rating': average, '--total': total}} aria-label={`Rating of this product is ${average} out of 5.`}></div>
    );
  } else if (singleReview){
    return (
      <div className='Stars' style={{'--rating': singleReview, '--total': 1}} aria-label={`Rating of this product is ${singleReview} out of 5.`}></div>
    );
  }
}

export default Stars;