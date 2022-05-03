import React from 'react';

const FilterPosts = ({tags, onRelevantTagClick}) => {
  if (tags.length > 0) {
    return (
      <div className='filter-posts-container'>
        <h2>Relevant Tags:</h2>
        <div className='relevant-tags-list'>
          {tags.map((tag, index) => {
            return (<span className='tag'>{tag}<button className='delete' onClick={(event) => onRelevantTagClick(event)}></button></span>);
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className='filter-posts-container'>
        <h2>Relevant Tags:</h2>
      </div>
    )
  }
}

export default FilterPosts;