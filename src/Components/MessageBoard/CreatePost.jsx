import React from 'react';
import {BsFacebook, BsInstagram, BsFillChatLeftTextFill} from 'react-icons/bs';

const CreatePost = ({onMessageChange, onSubmitMessageButtonClick}) => {
  let sprayIcons = [<BsFacebook/>, <BsInstagram/>, <BsFillChatLeftTextFill/>]
  return (
    <div className='create-post-container'>
      <textarea onChange={(event) => onMessageChange(event)} id='post-message' name='post-message' placeholder='Create Post Here...'></textarea>
      <div className='post-footer-container'>
        <div className='post-social-icons'>
          {sprayIcons.map((icon, index) => {
            return <div key={`postSprayIcon${index}`} className='icon'>{icon}</div>
          })}
        </div>
        <button onClick={() => onSubmitMessageButtonClick()} className='post-submit'>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;