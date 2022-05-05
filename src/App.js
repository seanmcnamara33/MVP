import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar.jsx';
import BoulderOverview from './Components/BoulderOverview/BoulderOverview.jsx';
import MessageBoardOverview from './Components/MessageBoard/MessageBoardOverview.jsx';
import ReviewsOverview from './Components/Reviews/ReviewsOverview.jsx';
import 'bulma/css/bulma.min.css';

// let boulderExample = {name: 'blah', grade: 5, type: 'Boulder', fa: 'me', description: 'Hard', reviews: [1, 2, 3, 1, 2, 5, 5], photos: ['//images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80]', './jerremy.jpg'], messages: [{author: 'john', message: 'I liked this climb', date: '08/16/1991', tags: ['short', 'run-out']}, {author: 'billy', message: 'I hated this climb', date: '09/16/2020', tags: ['short', 'run-out']}, {author: 'bilely', message: 'I hated this climb', date: '09/16/2020', tags: ['short', 'run-out', 'hard']}, {author: 'bildfly', message: 'I hated this climb', date: '09/16/2020', tags: ['short', 'run-out']}, {author: 'bilssly', message: 'I hated this climb', date: '09/16/2020', tags: ['short', 'run-out']}, {author: 'bidlly', message: 'I hated this climb', date: '09/16/2020', tags: ['short', 'run-out']}, {author: 'bigglly', message: 'I hated this climb', date: '09/16/2020', tags: ['short', 'run-out', 'bad-landing']}]};

// let boulderExampleReviews = [{author: 'billy', rating: 4, date: '08/16/2026', tags: ['short', 'hard', 'run-out'], message: 'I would definitely climb this one again'}, {author: 'bobby', rating: 2, date: '08/16/2028', tags: ['short', 'hard', 'run-out', 'scary'], message: 'Thought I was gonna die'}, {author: 'samuel', rating: 1, date: '08/16/2126', tags: ['run-out', 'dangerous'], message: 'I was terrified'}, {author: 'scott', rating: 5, date: '08/16/1906', tags: ['shorty-friendly'], message: 'Everyone else is a baby'}];

const App = () => {
  const [currentBoulder, setCurrentBoulder] = useState({})
  const [currentBoulderReviews, setCurrentBoulderReviews] = useState([]);
  const [allBoulders, setAllBoulders] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [updateBoulders, setUpdateBoulders] = useState(false);

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
        <ReviewsOverview currentBoulderReviews={currentBoulderReviews} currentBoulder={currentBoulder}/>
      </div>
    );
  }
}

export default App;
