import React from 'react';

const ClimbTags = ({currentBoulder}) => {
  let tags = new Set();
  for (var i = 0; i < currentBoulder.messages.length; i++) {
    for (var j = 0; j < currentBoulder.messages[i].tags.length; j++) {
      tags.add(currentBoulder.messages[i].tags[j]);
    }
  }
  let reducedTags = Array.from(tags);

  return (
    <div className='climb-tags-container'>
      <h2>Tags Associated With This Boulder:</h2>
      <div className='boulder-tags'>
        {reducedTags.map((tag, index) => {
          return <span className='tag'>{tag}</span>
        })}
      </div>
    </div>
  );
}

export default ClimbTags;