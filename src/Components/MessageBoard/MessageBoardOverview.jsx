import React, {useState, useEffect} from 'react';
import FilterContainer from './FilterContainer.jsx';
import MessageBoard from './MessageBoard.jsx';

const MessageBoardOverview = ({currentBoulder, onMessageChange, onSubmitMessageButtonClick}) => {
  return (
    <div className='message-board-container'>
      <FilterContainer currentBoulder={currentBoulder}/>
      <MessageBoard currentBoulder={currentBoulder} onMessageChange={onMessageChange} onSubmitMessageButtonClick={onSubmitMessageButtonClick}/>
    </div>
  );
}

export default MessageBoardOverview;