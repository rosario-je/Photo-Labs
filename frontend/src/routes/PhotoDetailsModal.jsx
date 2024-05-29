import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const { onClose, photo, favourites, toggleFavourite, favouritesState } =
    props;

  const photoArray = favouritesState
    ? favourites
    : Object.values(photo.similar_photos);

  // Turn selected to true if the photo id is found in the "favourites" state
  const selected = favourites.includes(photo);

  const handleFavButtonClick = () => {
    toggleFavourite(photo);
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {!favouritesState && (
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
      )}

      <header className="photo-details-modal__header">
        {favouritesState ? "Favourite Photos" : "Related Photos"}
      </header>

      <PhotoList
        photos={photoArray}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default PhotoDetailsModal;
