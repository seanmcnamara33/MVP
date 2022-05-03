import React, {useState} from 'react';
import StarRating from './StarRating.jsx';
import ReviewsFilter from './ReviewsFilter.jsx';
import BoulderTags from './BoulderTags.jsx';
import ReviewsView from './ReviewsView.jsx';
import PostReview from './PostReview.jsx';

const ReviewsOverview = ({currentBoulder}) => {
  return (
    <div className='reviews-overview-container'>
      <div className='left-bar-container'>
        <StarRating/>
        <ReviewsFilter/>
        <BoulderTags/>
      </div>
      <div className='right-bar-container'>
        <ReviewsView/>
        <PostReview/>
      </div>
    </div>
  );
};

export default ReviewsOverview;