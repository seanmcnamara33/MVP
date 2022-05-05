import React from 'react';
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai';

const ThumbnailCarousel = ({currentBoulder, currentImageIndex, onImageChange, onThumbnailClick}) => {
  if (!currentBoulder.photos[0]) {
    currentBoulder.photos[0] = './jerremy.jpg';
  }
  return (
    <div className='thumbnail-carousel-container'>
      <button className='image-nav-btn'><AiOutlineArrowUp onClick={(event) => onImageChange(event)} data-direction='up'/></button>
      {currentBoulder.photos.map((photo, index) => {
        if (currentImageIndex === index) {
          return <img key={`selected_thumbnail${index}`}data-index={index} onClick={(event) => onThumbnailClick(event)} className='selected-thumbnail' src={photo}></img>
        } else {
          return <img key={`thumbnail${index}`} data-index={index} onClick={(event) => onThumbnailClick(event)} className='thumbnail' src={photo}></img>
        }
      })}
      <button className='image-nav-btn'><AiOutlineArrowDown onClick={(event) => onImageChange(event)} data-direction='down'/></button>
    </div>
  );
}

export default ThumbnailCarousel;