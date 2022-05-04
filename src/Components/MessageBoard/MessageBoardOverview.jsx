import React, {useState, useEffect} from 'react';
import FilterContainer from './FilterContainer.jsx';
import MessageBoard from './MessageBoard.jsx';

const MessageBoardOverview = ({currentBoulder}) => {
  const [currentMessage, setCurrentMessage] = useState('');

  const onMessageChange = (event) => {
    setCurrentMessage(event.target.value)
  };

  return (
    <div className='message-board-container'>
      <FilterContainer currentBoulder={currentBoulder}/>
      <MessageBoard currentBoulder={currentBoulder} onMessageChange={onMessageChange}/>
    </div>
  );
}

export default MessageBoardOverview;