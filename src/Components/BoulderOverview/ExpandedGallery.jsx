import React, {useState} from 'react';

const ExpandedGallery = ({currentBoulder, currentImageIndex, onImageChange, onMinifyClick, onImageClick}) => {
  const [zoomed, setZoomedState] = useState(false);
  const [zoomCoordinates, setZoomCoordinates] = useState({x: 0, y: 0});

  const onExpandedImageClick = (event) => {
    if (!zoomed) {
      setZoomedState(true);
      setZoomCoordinates({x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY});
    } else {
      setZoomedState(false);
      setZoomCoordinates({x: 0, y: 0});
    }
  }

  const onImageOver = (event) => {
    let coordinates = {x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY};
    setZoomCoordinates(coordinates);
  }

  if (!zoomed) {
    return (
      <div className='expanded-gallery'>
        <button onClick={(event) => onImageChange(event)} data-direction='back' className='image-nav-btn'>Back</button>
        <div className='expanded-image'>
          <img className='current-expanded-image' src={currentBoulder.photos[currentImageIndex] ? currentBoulder.photos[currentImageIndex] : './jerremy.jpg'} onClick={(event) => onExpandedImageClick(event)}></img>
        </div>
        <button onClick={(event) => onImageChange(event)} data-direction='forwards' className='image-nav-btn'>Forwards</button>
        <button onClick={(event) => onMinifyClick(event)} data-direction='minify' className='image-nav-btn'>Minify</button>
      </div>
    );
  } else {
    return (
      <img className='current-zoomed-image' src={currentBoulder.photos[currentImageIndex] ? currentBoulder.photos[currentImageIndex] : './jerremy.jpg'} onClick={(event) => onExpandedImageClick(event)} onPointerMove={(event) => onImageOver(event)} style={{'transformOrigin': `${zoomCoordinates.x}px ${zoomCoordinates.y}px`}}></img>
    );
  }
}

export default ExpandedGallery;