import React from 'react';

const ThumbnailCarousel = ({currentBoulder, currentImageIndex, onImageChange, onThumbnailClick}) => {
  if (!currentBoulder.photos[0]) {
    currentBoulder.photos[0] = './jerremy.jpg';
  }
  return (
    <div className='thumbnail-carousel-container'>
      <button onClick={(event) => onImageChange(event)} data-direction='up' className='image-nav-btn'>Up</button>
      {currentBoulder.photos.map((photo, index) => {
        if (currentImageIndex === index) {
          return <img data-index={index} onClick={(event) => onThumbnailClick(event)} className='selected-thumbnail' src={photo}></img>
        } else {
          return <img data-index={index} onClick={(event) => onThumbnailClick(event)} className='thumbnail' src={photo}></img>
        }
      })}
      <button onClick={(event) => onImageChange(event)} data-direction='down' className='image-nav-btn'>Down</button>
    </div>
  );
}

export default ThumbnailCarousel;