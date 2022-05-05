import React, {useState} from 'react';
import StarRating from './StarRating.jsx';
import ReviewsFilter from './ReviewsFilter.jsx';
import BoulderTags from './BoulderTags.jsx';
import ReviewsView from './ReviewsView.jsx';
import PostReview from './PostReview.jsx';

const ReviewsOverview = ({currentBoulder, currentBoulderReviews, onCurrentRatingChange, onSubmitReviewButtonClick, onReviewPostChange, onRelevantTagClick, onTagClick, relevantTags}) => {
  // const [currentReviewMessage, setCurrentReviewMessage] = useState('');
  // const [relevantTags, setRelevantTags] = useState([]);

  // const onReviewPostChange = (event) => {
  //   setCurrentReviewMessage(event.target.value)
  // };

  // const onRelevantTagClick = (event) => {
  //   var reducedTags = relevantTags.slice();
  //   var removedIndex = reducedTags.indexOf(event.target.innerHTML);
  //   reducedTags.splice(removedIndex, 1);
  //   setRelevantTags(reducedTags);
  // }

  // const onTagClick = (event) => {
  //   if (!relevantTags.includes(event.target.innerHTML)) {
  //     var newTags = relevantTags.slice();
  //     newTags.push(event.target.innerHTML);
  //     setRelevantTags(newTags);
  //   } else {
  //     console.log('That tag is already selected!');
  //   }
  // };

  return (
    <div className='reviews-overview-container'>
      <div className='left-bar-container'>
        <StarRating currentBoulder={currentBoulder}/>
        {/* <ReviewsFilter/> */}
        <BoulderTags onTagClick={onTagClick} currentBoulder={currentBoulder}/>
      </div>
      <div className='right-bar-container'>
        <ReviewsView currentBoulder={currentBoulder} currentBoulderReviews={currentBoulderReviews}/>
        <PostReview onSubmitReviewButtonClick={onSubmitReviewButtonClick} onCurrentRatingChange={onCurrentRatingChange} relevantTags={relevantTags} onRelevantTagClick={onRelevantTagClick} onReviewPostChange={onReviewPostChange}/>
      </div>
    </div>
  );
};

export default ReviewsOverview;