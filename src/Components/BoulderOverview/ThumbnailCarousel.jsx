import React from 'react';

const ThumbnailCarousel = ({currentBoulder, currentImageIndex}) => {
  if (!currentBoulder.photos[0]) {
    currentBoulder.photos[0] = './jerremy.jpg';
  }
  return (
    <div className='thumbnail-carousel-container'>
      <button className='image-nav-btn'>Up</button>
      {currentBoulder.photos.map((photo, index) => {
        if (currentImageIndex === index) {
          return <img className='selected-thumbnail' src={photo}></img>
        } else {
          return <img className='thumbnail' src={photo}></img>
        }
      })}
      <button className='image-nav-btn'>Down</button>
    </div>
  );
}

export default ThumbnailCarousel;