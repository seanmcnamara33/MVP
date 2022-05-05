import React from 'react';
import IndividualMessage from './IndividualMessage.jsx';

const PostView = ({currentBoulder}) => {
  return (
    <div className='post-view-container'>
      {currentBoulder.messages.map((message, index) => {
        return <IndividualMessage key={`${message.message}${index}`} postTags={message.tags} message={message.message} date={message.date} author={message.author}/>
      })}
    </div>
  );
}

export default PostView;