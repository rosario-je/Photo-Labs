import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const { onClose, photo, favourites, toggleFavourite } = props;
  const { similar_photos } = photo;
  const photoArray = Object.values(similar_photos);
  const selected = favourites.includes(photo.id);

  const handleFavButtonClick = () => {
    toggleFavourite(photo.id);
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <article key={photo.id}>
        <div className="photo-details-modal__main__image">
          <PhotoFavButton
            onClick={handleFavButtonClick}
            selected={selected}
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
      <header className="photo-details-modal__header">Related Photos</header>
      <PhotoList
        photos={photoArray}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default PhotoDetailsModal;
