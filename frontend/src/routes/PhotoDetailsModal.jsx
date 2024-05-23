import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {onClose, photosObject} = props
  console.log(photosObject);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img src={photosObject.urls.regular} alt="" />
    </div>
  )
};

export default PhotoDetailsModal;
