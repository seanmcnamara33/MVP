import React from 'react';

const ExpandedThumbnail = ({currentBoulder, currentImageIndex, onThumbnailClick}) => {
  if (!currentBoulder.photos[0]) {
    currentBoulder.photos[0] = './jerremy.jpg';
  }
  return (
    <div className='expanded-thumbnail-container'>
      {currentBoulder.photos.map((photo, index) => {
        if (index === currentImageIndex) {
          return <div onClick={(event) => onThumbnailClick(event)} data-index={index} className='selected-expanded-thumbnail'></div>
        } else {
          return <div onClick={(event) => onThumbnailClick(event)} data-index={index} className='expanded-thumbnail'></div>
        }
      })}
    </div>
  );
}

export default ExpandedThumbnail;