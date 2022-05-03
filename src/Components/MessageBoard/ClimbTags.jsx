import React from 'react';

let allTags = ['sandbagged', 'easy', 'monos', 'crimpy', 'pumpy', 'dynos', 'dynamic', 'endurance', 'hard', 'needs-new-hardware', 'dangerous', 'scary', 'shorty-friendly', 'not-shorty-friendly', 'tall', 'short', 'bad-landing', 'long', 'short', 'low-ball', 'run-out', 'fun', 'not-fun', 'skin-shredder', 'high-ball', '1-pad', '2-pad', '3-pad', '4-pad', '5+pad', 'broken', 'first-ascent', 'good-warmup', 'beginner-friendly', 'easy-approach', 'hard-approach', 'pockets', 'slopers', 'jugs', 'worth-the-hike', 'morpho'];

const ClimbTags = ({onTagClick}) => {
  return (
    <div className='climb-tags-container'>
      <h2>Tags:</h2>
      <div className='tags-box'>
        {allTags.map((tag, index) => {
          return <span onClick={(event) => onTagClick(event)} className='tag'>{tag}</span>
        })}
      </div>
    </div>
  );
}

export default ClimbTags;