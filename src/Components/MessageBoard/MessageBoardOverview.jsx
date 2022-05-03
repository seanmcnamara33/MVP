import React, {useState, useEffect} from 'react';
import FilterContainer from './FilterContainer.jsx';
import MessageBoard from './MessageBoard.jsx';

const MessageBoardOverview = ({currentBoulder}) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [relevantTags, setRelevantTags] = useState([]);

  const onTagClick = (event) => {
    if (!relevantTags.includes(event.target.innerHTML)) {
      var newTags = relevantTags.slice();
      newTags.push(event.target.innerHTML);
      setRelevantTags(newTags);
    } else {
      console.log('That tag is already selected!');
    }
  };

  const onMessageChange = (event) => {
    setCurrentMessage(event.target.value)
  };

  const onRelevantTagClick = (event) => {
    var reducedTags = relevantTags.slice();
    var removedIndex = reducedTags.indexOf(event.target.innerHTML);
    reducedTags.splice(removedIndex, 1);
    setRelevantTags(reducedTags);
  }
  return (
    <div className='message-board-container'>
      <FilterContainer onTagClick={onTagClick} tags={relevantTags} onRelevantTagClick={onRelevantTagClick}/>
      <MessageBoard currentBoulder={currentBoulder} onMessageChange={onMessageChange}/>
    </div>
  );
}

export default MessageBoardOverview;