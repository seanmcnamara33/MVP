import React, {useState} from 'react';
import ImageGallery from './ImageGallery.jsx';
import BoulderInformation from './BoulderInformation.jsx';
import ExpandedGallery from './ExpandedGallery.jsx';
import ExpandedThumbnail from './ExpandedThumbnail.jsx';

const BoulderOverview = ({currentBoulder, allBoulders}) => {
  const [currentView, setCurrentView] = useState('default');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onImageChange = (event) => {
    if (currentImageIndex > 0 && event.dataset.direction === 'backwards') {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (currentImageIndex < currentBoulder.photos.length - 1 && event.dataset.direction === 'forwards') {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  };

  const onImageClick = () => {
    setCurrentView('expanded');
  };

  if (currentView === 'default') {
    return (
      <div className='boulder-overview'>
        <ImageGallery currentBoulder={currentBoulder} allBoulders={allBoulders} onImageClick={onImageClick} currentImageIndex={currentImageIndex}/>
        <BoulderInformation currentBoulder={currentBoulder} allBoulders={allBoulders}/>
      </div>
    );
  } else if (currentView === 'expanded') {
    return (
      <div className='expanded-boulder-overview'>
        <ExpandedGallery currentBoulder={currentBoulder} currentImageIndex={currentImageIndex}/>
        <ExpandedThumbnail currentBoulder={currentBoulder} currentImageIndex={currentImageIndex}/>
      </div>
    )
  }
}
export default BoulderOverview;