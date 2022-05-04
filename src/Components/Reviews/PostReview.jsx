import React from 'react';

const PostReview = ({relevantTags, onReviewPostChange, onRelevantTagClick}) => {
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
        <button className='review-submit'>Submit Post</button>
      </div>
    </div>
  );
};

export default PostReview;
