import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar.jsx';
import BoulderOverview from './Components/BoulderOverview/BoulderOverview.jsx';
import MessageBoardOverview from './Components/MessageBoard/MessageBoardOverview.jsx';
import ReviewsOverview from './Components/Reviews/ReviewsOverview.jsx';
import 'bulma/css/bulma.min.css';

const App = () => {
  const [currentBoulder, setCurrentBoulder] = useState({})
  const [currentBoulderReviews, setCurrentBoulderReviews] = useState([]);
  const [allBoulders, setAllBoulders] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [updateBoulders, setUpdateBoulders] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [currentReviewMessage, setCurrentReviewMessage] = useState('');
  const [relevantTags, setRelevantTags] = useState([]);

  const getBoulder = async (sectorName) => {
    try {
      let boulder = await fetch(`http://127.0.0.1:3001/boulders/${sectorName}`, {method: 'GET', headers: {'Content-Type': 'application/json'}})
      let result = await boulder.json();
      return result;
    } catch(err) {
      console.log(err);
    }
  }

  const onBoulderClick = (event, boulder) => {
    setCurrentBoulder(boulder);
    var outerIndex = event.target.parentElement.id.slice(9);
    var innerIndex = event.target.id.slice(9);
    var fullIndex = (Number(outerIndex) * 4) + Number(innerIndex);
    setCurrentBoulderReviews(allBoulders[fullIndex].reviews);
  }

  const onMessageChange = (event) => {
    setCurrentMessage(event.target.value)
  };

  const onSubmitMessageButtonClick = async () => {
    var updatingBoulderName = currentBoulder.name;
    let post = {
      author: 'anonymous',
      message: currentMessage,
      date: Date.now(),
      boulder: currentBoulder.name
    }
    let stringifiedPost = JSON.stringify(post);
    try {
      await fetch(`http://127.0.0.1:3001/messages`, {method: 'POST', body: stringifiedPost, headers: {'Content-Type': 'application/json'}})
      let updatedInfo = await getBoulder(currentBoulder.sector);
      for (var i = 0; i < updatedInfo.length; i++) {
        if (updatingBoulderName === updatedInfo[i].name) {
          setCurrentBoulder(updatedInfo[i]);
          setCurrentBoulderReviews(updatedInfo[i].reviews);
          setAllBoulders(updatedInfo);
        }
      }
    } catch(err) {
      console.log(err);
    }
  };

  const onReviewPostChange = (event) => {
    setCurrentReviewMessage(event.target.value)
  };

  const onRelevantTagClick = (event) => {
    var reducedTags = relevantTags.slice();
    var removedIndex = reducedTags.indexOf(event.target.innerHTML);
    reducedTags.splice(removedIndex, 1);
    setRelevantTags(reducedTags);
  }

  const onTagClick = (event) => {
    if (!relevantTags.includes(event.target.innerHTML)) {
      var newTags = relevantTags.slice();
      newTags.push(event.target.innerHTML);
      setRelevantTags(newTags);
    } else {
      console.log('That tag is already selected!');
    }
  };

  const onCurrentRatingChange = (event) => {
    setCurrentRating(event.target.id.slice(5));
  };

  const onSubmitReviewButtonClick = async () => {
    var updatingBoulderName = currentBoulder.name;
    let review = {
      boulder: currentBoulder.name,
      rating: currentRating,
      date: Date.now(),
      body: currentReviewMessage,
      author: 'anonymous',
      tags: relevantTags
    }
    let stringifiedReview = JSON.stringify(review);
    try {
      await fetch(`http://127.0.0.1:3001/reviews`, {method: 'POST', body: stringifiedReview, headers: {'Content-Type': 'application/json'}})
      let updatedInfo = await getBoulder(currentBoulder.sector);
      for (var i = 0; i < updatedInfo.length; i++) {
        if (updatingBoulderName === updatedInfo[i].name) {
          setCurrentBoulder(updatedInfo[i]);
          setCurrentBoulderReviews(updatedInfo[i].reviews);
          setAllBoulders(updatedInfo);
        }
      }
    } catch(err) {
      console.log(err);
    }

  };

  useEffect(() => {
    getBoulder('The UFO Boulder')
    .then((result) => {
      setCurrentBoulder(result[0]);
      setAllBoulders(result);
      setCurrentBoulderReviews(result[0].reviews);
    })
  }, []);

  if (Object.keys(currentBoulder).length) {
    return (
      <div className="App">
        <Navbar />
        <BoulderOverview onBoulderClick={onBoulderClick} setCurrentBoulder={setCurrentBoulder} currentBoulder={currentBoulder} allBoulders={allBoulders}/>
        <MessageBoardOverview onMessageChange={onMessageChange} onSubmitMessageButtonClick={onSubmitMessageButtonClick} setCurrentBoulder={setCurrentBoulder} currentBoulder={currentBoulder}/>
        <ReviewsOverview onReviewPostChange={onReviewPostChange} onRelevantTagClick={onRelevantTagClick} onTagClick={onTagClick} relevantTags={relevantTags} onSubmitReviewButtonClick={onSubmitReviewButtonClick} onCurrentRatingChange={onCurrentRatingChange} currentBoulderReviews={currentBoulderReviews} currentBoulder={currentBoulder}/>
      </div>
    );
  }
}

export default App;
