import React from 'react';

const PostReview = ({relevantTags, onReviewPostChange, onRelevantTagClick, onCurrentRatingChange, onSubmitReviewButtonClick}) => {
  return (
    <div className='post-review-container'>
      <textarea onChange={(event) => onReviewPostChange(event)} id='post-message' name='post-message' placeholder='Create Post Here...'></textarea>
      <div className='review-footer-container'>
        <div className='relevant-tags'>
          <h2>Relevant Tags:</h2>
          {relevantTags.map((tag, index) => {
            return (<span className='tag'>{tag}<button className='delete' onClick={(event) => onRelevantTagClick(event)}></button></span>);
          })}
        </div>
        <div className='submit-stars-container'>
          <h2>Select Rating:</h2>
          <div className="stars">
            <input type="radio" id="rate-5" name="rating-1" onChange={(event) => onCurrentRatingChange(event)}></input>
            <label htmlFor="rate-5"></label>
            <input type="radio" id="rate-4" name="rating-1" onChange={(event) => onCurrentRatingChange(event)}></input>
            <label htmlFor="rate-4"></label>
            <input type="radio" id="rate-3" name="rating-1" onChange={(event) => onCurrentRatingChange(event)}></input>
            <label htmlFor="rate-3"></label>
            <input type="radio" id="rate-2" name="rating-1" onChange={(event) => onCurrentRatingChange(event)}></input>
            <label htmlFor="rate-2"></label>
            <input type="radio" id="rate-1" name="rating-1" onChange={(event) => onCurrentRatingChange(event)}></input>
            <label htmlFor="rate-1"></label>
          </div>
          <button onClick={() => onSubmitReviewButtonClick()} className='review-submit'>Submit Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostReview;
