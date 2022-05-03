import React from 'react';
import FilterPosts from './FilterPosts.jsx';
import ClimbTags from './ClimbTags.jsx';

const FilterContainer = ({onTagClick, tags, onRelevantTagClick}) => {
  return (
    <div className='filter-container'>
      <FilterPosts tags={tags} onRelevantTagClick={onRelevantTagClick}/>
      <ClimbTags onTagClick={onTagClick}/>
    </div>
  );
}

export default FilterContainer;