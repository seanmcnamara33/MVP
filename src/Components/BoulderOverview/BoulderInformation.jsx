import React from 'react';
import AllBoulders from './AllBoulders.jsx';
import {BsFacebook, BsInstagram, BsFillChatLeftTextFill} from 'react-icons/bs';
import Stars from '../../Helpers/Stars.jsx';

const BoulderInformation = ({currentBoulder, allBoulders}) => {
  let sprayIcons = [<BsFacebook/>, <BsInstagram/>, <BsFillChatLeftTextFill/>]
  return (
    <div className='boulder-information'>
      <h3>Boulder Information</h3>
      <div className='name-and-grade container'>
        <h2><b>{currentBoulder.name}</b></h2>
        <Stars currentBoulder={currentBoulder}/>
      </div>
      <div className='grade-container container'>
        <p>Grade:</p>
        <p><b>V{currentBoulder.grade}</b></p>
      </div>
      <div className='type-container container'>
        <p>Type:</p>
        <p><b>{currentBoulder.type}</b></p>
      </div>
      <div className='fa-container container'>
        <p>FA:</p>
        <p><b>{currentBoulder.fa}</b></p>
      </div>
      <div className='description-container container'>
        <p>Description:</p>
        <p><b>{currentBoulder.description}</b></p>
      </div>
      <AllBoulders allBoulders={allBoulders}/>
      <div className='ticklist-buttons'>
        <button className='btn'>Add To To-Do</button>
        <button className='btn'>Add To Ticklist</button>
        {/* pops up a modal */}
        <button className='btn'>Book This Climb</button>
      </div>
      <div className='spray-box'>
        <h5>Spray:</h5>
        <div className='spray-icons'>
          {sprayIcons.map((icon, index) => {
            return <div className='spray-icon'>{icon}</div>
          })}
        </div>
      </div>
    </div>
  );
};

export default BoulderInformation;