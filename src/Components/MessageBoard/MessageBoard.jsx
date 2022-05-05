import React from 'react';
import CreatePost from './CreatePost.jsx';
import PostView from './PostView.jsx';

const MessageBoard = ({ currentBoulder, onMessageChange, onSubmitMessageButtonClick }) => {
  return (
    <div className='message-board'>
      <CreatePost onMessageChange={onMessageChange} onSubmitMessageButtonClick={onSubmitMessageButtonClick}/>
      <PostView currentBoulder={currentBoulder}/>
    </div>
  );
}

export default MessageBoard;