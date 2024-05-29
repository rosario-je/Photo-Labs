import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoDetailsModal.scss";

const PhotoListItem = (props) => {
  const { data, favourites, onToggleFavourite, displayModalWindow, className } =
    props;

  const {
    location: { city, country },
    user: { name, profile },
    urls: { regular },
  } = data;

  // Check if the photo is in the favorites list
  const selected = favourites.includes(data);


  // Toggle the favorite status of the photo
  const handleFavButtonClick = () => {
    onToggleFavourite(data);
  };
  // Display the modal window with photo details
  const handleClick = () => {
    displayModalWindow(data);
  };

  return (
    <article key={data.id} className={className}>
      <div className="photo-list__item">
        <PhotoFavButton onClick={handleFavButtonClick} selected={selected} />{" "}
        <img
          className="photo-list__image"
          src={regular}
          alt="image"
          onClick={handleClick}
        />
        <div className="photo-list__user-details">
          <img
            className="photo-list__user-profile"
            src={profile}
            alt="user profile"
          />
          <div className="photo-list__user-info">
            <h2>{name}</h2>
            <h3 className="photo-list__user-location">
              {city}, {country}
            </h3>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
