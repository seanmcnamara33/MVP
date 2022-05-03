import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar.jsx';
import BoulderOverview from './Components/BoulderOverview/BoulderOverview.jsx';
import 'bulma/css/bulma.min.css';

const App = () => {
  const [currentBoulder, setCurrentBoulder] = useState({name: 'blah', grade: 5, type: 'Boulder', fa: 'me', description: 'Hard', ratings: [1, 2, 3, 1, 2, 5, 5], photos: []})
  const [allBoulders, setAllBoulders] = useState([{name: 'Blah', grade: 5, type: 'Boulder', fa: 'me', description: 'Hard', reviews: [1, 2, 3, 1, 2, 5, 5], photos: []}, {name: 'BlahBlah', grade: 3, type: 'Boulder', fa: 'me', description: 'Hard', reviews: [1, 2, 3, 1, 2, 5, 5], photos: []}, {name: 'BlahBlahBlah', grade: 2, type: 'Boulder', fa: 'me', description: 'Hard', reviews: [1, 2, 3, 1, 2, 5, 5], photos: []}, {name: 'Okay', grade: 1, type: 'Boulder', fa: 'me', description: 'Hard', reviews: [1, 2, 3, 1, 2, 5, 5], photos: []}, {name: 'Alright', grade: 8, type: 'Boulder', fa: 'me', description: 'Hard', reviews: [1, 2, 3, 1, 2, 5, 5], photos: []}])
  return (
    <div className="App">
      <Navbar />
      <BoulderOverview setCurrentBoulder={setCurrentBoulder} currentBoulder={currentBoulder} allBoulders={allBoulders}/>
    </div>
  );
}

export default App;
