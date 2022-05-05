import React, {useState} from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

const ImageGallery = ({currentBoulder, allBoulders, onImageClick, onImageChange, currentImageIndex, onThumbnailClick}) => {
  return (
    <div className='image-gallery'>
      <div className='image-container'>
        <ThumbnailCarousel onThumbnailClick={onThumbnailClick} onImageChange={onImageChange} currentBoulder={currentBoulder} currentImageIndex={currentImageIndex}/>
        <button className='image-nav-btn'><AiOutlineArrowLeft data-direction='back' onClick={(event) => onImageChange(event)}/></button>
        <div onClick={(event) => onImageClick(event)} className='image'>
          <img className='current-image' src={currentBoulder.photos[currentImageIndex] ? currentBoulder.photos[currentImageIndex] : './jerremy.jpg'}></img>
        </div>
        <button className='image-nav-btn'><AiOutlineArrowRight data-direction='forwards' onClick={(event) => onImageChange(event)}/></button>
      </div>
    </div>
  );
};

export default ImageGallery;