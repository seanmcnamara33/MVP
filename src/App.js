import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar.jsx';
import BoulderOverview from './Components/BoulderOverview/BoulderOverview.jsx';
import MessageBoardOverview from './Components/MessageBoard/MessageBoardOverview.jsx';
import ReviewsOverview from './Components/Reviews/ReviewsOverview.jsx';
import 'bulma/css/bulma.min.css';

let boulderExample = {name: 'blah', grade: 5, type: 'Boulder', fa: 'me', description: 'Hard', ratings: [1, 2, 3, 1, 2, 5, 5], photos: ['//images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80]', './jerremy.jpg'], messages: [{author: 'john', message: 'I liked this climb', date: '08/16/1991', tags: ['short', 'run-out']}, {author: 'billy', message: 'I hated this climb', date: '09/16/2020', tags: ['short', 'run-out']}, {author: 'bilely', message: 'I hated this climb', date: '09/16/2020', tags: ['short', 'run-out', 'hard']}, {author: 'bildfly', message: 'I hated this climb', date: '09/16/2020', tags: ['short', 'run-out']}, {author: 'bilssly', message: 'I hated this climb', date: '09/16/2020', tags: ['short', 'run-out']}, {author: 'bidlly', message: 'I hated this climb', date: '09/16/2020', tags: ['short', 'run-out']}, {author: 'bigglly', message: 'I hated this climb', date: '09/16/2020', tags: ['short', 'run-out', 'bad-landing']}]};

const App = () => {
  const [currentBoulder, setCurrentBoulder] = useState(boulderExample)

  const [allBoulders, setAllBoulders] = useState([{name: 'Blah', grade: 5, type: 'Boulder', fa: 'me', description: 'Hard', reviews: [1, 2, 3, 1, 2, 5, 5], photos: []}, {name: 'BlahBlah', grade: 3, type: 'Boulder', fa: 'me', description: 'Hard', reviews: [1, 2, 3, 1, 2, 5, 5], photos: []}, {name: 'BlahBlahBlah', grade: 2, type: 'Boulder', fa: 'me', description: 'Hard', reviews: [1, 2, 3, 1, 2, 5, 5], photos: []}, {name: 'Okay', grade: 1, type: 'Boulder', fa: 'me', description: 'Hard', reviews: [1, 2, 3, 1, 2, 5, 5], photos: []}, {name: 'Alright', grade: 8, type: 'Boulder', fa: 'me', description: 'Hard', reviews: [1, 2, 3, 1, 2, 5, 5], photos: []}])
  return (
    <div className="App">
      <Navbar />
      <BoulderOverview setCurrentBoulder={setCurrentBoulder} currentBoulder={currentBoulder} allBoulders={allBoulders}/>
      <MessageBoardOverview currentBoulder={currentBoulder}/>
      <ReviewsOverview currentBoulder={currentBoulder}/>
    </div>
  );
}

export default App;
