import React, { useState } from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  const hasFavPhotos = isFavPhotoExist.length >= 1;
  
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={hasFavPhotos} selected={hasFavPhotos}/>
    </div>
  ) 
};

export default FavBadge;