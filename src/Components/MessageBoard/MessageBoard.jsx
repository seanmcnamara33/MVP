import React from 'react';
import CreatePost from './CreatePost.jsx';
import PostView from './PostView.jsx';

const MessageBoard = ({ currentBoulder, onMessageChange }) => {
  return (
    <div className='message-board'>
      <CreatePost onMessageChange={onMessageChange}/>
      <PostView currentBoulder={currentBoulder}/>
    </div>
  );
}

export default MessageBoard;