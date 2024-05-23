import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const { onClose, photo, favourites, toggleFavourite } = props;
  const { similar_photos } = photo;
  const photoArray = [];
  let selected;

  for (const key in similar_photos) {
    if (similar_photos.hasOwnProperty(key)) {
      photoArray.push(similar_photos[key]);
    }
  }

  if (favourites.includes(photo.id)){
    selected = true;
  } else {
    selected = false;
  }

  function handleFavButtonClick() {
    toggleFavourite(photo.id);
  }

  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <article key={photo.id}>
        <div>
          <PhotoFavButton
          onClick={handleFavButtonClick}
          selected={selected}
          // displayAlert={displayAlert}
          />
          <img
            className="photo-details-modal__image"
            src={photo.urls.regular}
            alt="image"
          />
          <div className="photo-list__user-details">
            <img
              className="photo-list__user-profile"
              src={photo.user.profile}
              alt="user profile"
            />
            <div className="photo-list__user-info">
              <h2>{photo.user.name}</h2>
              <h3 className="photo-list__user-location">
                {photo.location.city}, {photo.location.country}
              </h3>
            </div>
          </div>
        </div>
      </article>
      <header className="photo-details-modal__header">Similar Photos</header>
      <PhotoList
        photos={photoArray}        
      />
    </div>
  );
};

export default PhotoDetailsModal;
