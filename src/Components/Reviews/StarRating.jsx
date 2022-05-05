import React from 'react';
import Stars from '../../Helpers/Stars.jsx'
const StarRating = ({currentBoulder}) => {
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;
  let totalReviews = 0;

  for (var i = 0; i < currentBoulder.ratings.length; i++) {
    if (currentBoulder.ratings[i] === 1) {
      one++;
    } else if (currentBoulder.ratings[i] === 2) {
      two++;
    } else if (currentBoulder.ratings[i] === 3) {
      three++;
    } else if (currentBoulder.ratings[i] === 4) {
      four++;
    } else if (currentBoulder.ratings[i] === 5) {
      five++;
    }
    totalReviews++;
  }

  let ratings = [one, two, three, four, five]

  if (totalReviews > 0) {
    return (
      <div className='star-rating-container'>
        <h2>Star Rating:</h2>
        <Stars currentBoulder={currentBoulder}/>
        <div className='star-graph'>
          {ratings.map((value, index) => {
          return (
            <div key={index}>
              <label> {index + 1} Star <span className='ratings'> {value} total reviews</span></label>
              <div className='ratings-bar'>
                <div className='ratings-innerbar' style={{ width: Math.round(value / totalReviews * 100) + '%' }}>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default StarRating;