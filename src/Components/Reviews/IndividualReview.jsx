import React from 'react';
import {BsHandThumbsUp, BsHandThumbsDown} from 'react-icons/bs';
import Stars from '../../Helpers/Stars.jsx';

const IndividualReview = ({author, date, message, tags, rating}) => {
  return (
    <div className='individual-message'>
      <div className='review-body-container'>
        <div className='review-body'>{message}</div>
        <div className='review-rating'>
          <Stars singleReview={rating}/>
        </div>
      </div>
      <div className='review-footer-container'>
        <div className='post-tags'>
          {tags.map((tag, index) => {
            return <span className='post-tag tag'>{tag}</span>
          })}
        </div>
        <div className='like-dislike-container'>
          <div className='like-icon'><BsHandThumbsUp/></div>
          <div className='dislike-icon'><BsHandThumbsDown/></div>
        </div>
        <div className='review-author'>{author}</div>
        <div className='review-date'>{date}</div>
      </div>
    </div>
  );
}

export default IndividualReview;