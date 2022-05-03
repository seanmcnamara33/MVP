import React, {useState} from 'react';
const AllBoulders = ({allBoulders}) => {
  let boulderSet = [];
  let boulderContainer = [];
  let counter = 1;
  for (var i = 0; i < allBoulders.length; i++) {
    if (!allBoulders[i].photos[0]) {
      allBoulders[i].photos[0] = './jerremy.jpg';
    }
    boulderSet.push(allBoulders[i]);
    if (counter % 4 === 0 || i === allBoulders.length - 1) {
      boulderContainer.push(boulderSet);
      boulderSet = [];
    }
    counter++;
  }
  return (
    <div className='total-boulders'>
      {boulderContainer.map((boulders, index) => {
        return <div className='boulder-set'>
          {boulders.map((boulder, index) => {
            return <img src={boulder.photos[0]}className='boulder-thumbnail'></img>
          })}
        </div>
      })}
    </div>
  );
}

export default AllBoulders;