import React from 'react';
import FilterPosts from './FilterPosts.jsx';
import ClimbTags from './ClimbTags.jsx';

const FilterContainer = ({currentBoulder}) => {
  return (
    <div className='filter-container'>
      <FilterPosts/>
      <ClimbTags currentBoulder={currentBoulder}/>
    </div>
  );
}

export default FilterContainer;