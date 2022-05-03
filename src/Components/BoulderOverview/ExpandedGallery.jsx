import React from 'react';

const ExpandedGallery = ({currentBoulder, currentImageIndex}) => {
  return (
    <div className='expanded-gallery'>
      <button className='image-nav-btn'>Back</button>
      <div className='expanded-image'>
        <img className='current-expanded-image' src={currentBoulder.photos[currentImageIndex] ? currentBoulder.photos[currentImageIndex] : './jerremy.jpg'}></img>
      </div>
      <button className='image-nav-btn'>Forwards</button>
      <button className='image-nav-btn'>Minify</button>
    </div>
  );
}

export default ExpandedGallery;