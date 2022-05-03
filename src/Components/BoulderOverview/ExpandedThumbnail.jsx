import React from 'react';

const ExpandedThumbnail = ({currentBoulder, currentImageIndex}) => {
  if (!currentBoulder.photos[0]) {
    currentBoulder.photos[0] = './jerremy.jpg';
  }
  return (
    <div className='expanded-thumbnail-container'>
      {currentBoulder.photos.map((photo, index) => {
        if (index === currentImageIndex) {
          return <div className='selected-expanded-thumbnail'></div>
        } else {
          return <div className='expanded-thumbnail'></div>
        }
      })}
    </div>
  );
}

export default ExpandedThumbnail;