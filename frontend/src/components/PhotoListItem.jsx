import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { data, favourites, onToggleFavourite, displayModalWindow } = props;
  const {
    location: { city, country },
    user: { name, profile, username },
    urls: { regular },
  } = data;

  const selected = favourites.includes(data.id);

  const handleFavButtonClick = () => {
    onToggleFavourite(data.id);
  };

  const handleClick = () => {
    displayModalWindow(data);
  };

  return (
    <article key={data.key}>
      <div className="photo-list__item">
        <PhotoFavButton
          onClick={handleFavButtonClick}
          selected={selected}
        />
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
            <h3>@{username}</h3>
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
