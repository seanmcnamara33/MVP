import React from 'react';
import {BsHandThumbsUp, BsHandThumbsDown} from 'react-icons/bs';

const IndividualMessage = ({postTags, author, message, date}) => {
  return (
    <div className='individual-message'>
      <div className='message-body'>{message}</div>
      <div className='message-footer'>
        <div className='post-tags'>
          {postTags.map((tag, index) => {
            return <span className='post-tag tag'>{tag}</span>
          })}
        </div>
        <div className='like-dislike-container'>
          <div className='like-icon'><BsHandThumbsUp/></div>
          <div className='dislike-icon'><BsHandThumbsDown/></div>
        </div>
        <div className='message-author'>{author}</div>
        <div className='message-date'>{date}</div>
      </div>
    </div>
  );
}

export default IndividualMessage;