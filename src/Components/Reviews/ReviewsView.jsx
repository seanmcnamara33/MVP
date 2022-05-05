import React from 'react';
import IndividualReview from './IndividualReview.jsx';

const ReviewsView = ({currentBoulderReviews}) => {
  return (
    <div className='reviews-view-container'>
      {currentBoulderReviews.map((boulderReviews, index) => {
        return <IndividualReview key={`${boulderReviews.author}${boulderReviews.date}`} author={boulderReviews.author} date={boulderReviews.date} message={boulderReviews.message} rating={boulderReviews.rating} tags={boulderReviews.tags}/>
      })}
    </div>
  );
};

export default ReviewsView;