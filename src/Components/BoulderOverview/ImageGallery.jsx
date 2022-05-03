import React, {useState} from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';

const ImageGallery = ({currentBoulder, allBoulders, onImageClick, onImageChange, currentImageIndex, onThumbnailClick}) => {
  return (
    <div className='image-gallery'>
      <div className='image-container'>
        <button data-direction='back' onClick={(event) => onImageChange(event)}className='image-nav-btn'>Back</button>
        <ThumbnailCarousel onThumbnailClick={onThumbnailClick} onImageChange={onImageChange} currentBoulder={currentBoulder} currentImageIndex={currentImageIndex}/>
        <div onClick={(event) => onImageClick(event)} className='image'>
          <img className='current-image' src={currentBoulder.photos[currentImageIndex] ? currentBoulder.photos[currentImageIndex] : './jerremy.jpg'}></img>
        </div>
        <button data-direction='forwards' onClick={(event) => onImageChange(event)}className='image-nav-btn'>Forwards</button>
      </div>
    </div>
  );
};

export default ImageGallery;