import React, {useState} from 'react';
import ImageGallery from './ImageGallery.jsx';
import BoulderInformation from './BoulderInformation.jsx';
import ExpandedGallery from './ExpandedGallery.jsx';
import ExpandedThumbnail from './ExpandedThumbnail.jsx';

const BoulderOverview = ({currentBoulder, allBoulders}) => {
  const [currentView, setCurrentView] = useState('default');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onImageChange = (event) => {
    if (currentImageIndex > 0 && event.target.dataset.direction === 'back') {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (currentImageIndex > 0 && event.target.dataset.direction === 'up') {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (currentImageIndex < currentBoulder.photos.length - 1 && event.target.dataset.direction === 'forwards') {
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (currentImageIndex < currentBoulder.photos.length - 1 && event.target.dataset.direction === 'down') {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const onMinifyClick = () => {
    setCurrentView('default');
  };

  const onThumbnailClick = (event) => {
    setCurrentImageIndex(Number(event.target.dataset.index));
  };

  const onImageClick = () => {
    setCurrentView('expanded');
  };

  if (currentView === 'default') {
    return (
      <div className='boulder-overview'>
        <ImageGallery currentBoulder={currentBoulder} allBoulders={allBoulders} onImageClick={onImageClick} currentImageIndex={currentImageIndex} onImageChange={onImageChange} onThumbnailClick={onThumbnailClick}/>
        <BoulderInformation currentBoulder={currentBoulder} allBoulders={allBoulders}/>
      </div>
    );
  } else if (currentView === 'expanded') {
    return (
      <div className='expanded-boulder-overview'>
        <ExpandedGallery currentBoulder={currentBoulder} currentImageIndex={currentImageIndex} onImageChange={onImageChange} onMinifyClick={onMinifyClick}/>
        <ExpandedThumbnail onThumbnailClick={onThumbnailClick} currentBoulder={currentBoulder} currentImageIndex={currentImageIndex}/>
      </div>
    )
  }
}
export default BoulderOverview;