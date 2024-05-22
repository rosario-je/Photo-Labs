import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { data, favourites, onToggleFavourite } = props;

  const {
    location: { city, country },
    user: { name, profile, username },
    urls: { regular },
  } = data;

  const [selected, setSelected] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

  function handleFavButtonClick() {
    console.log("Fav button clicked");
    setSelected((prevSelected) => !prevSelected);
    setDisplayAlert((prevDisplayAlert) => !prevDisplayAlert);
    onToggleFavourite(data.id);
  }
  return (
    <article key={data.key}>
      <div className="photo-list__item">
        <PhotoFavButton
          onClick={handleFavButtonClick}
          selected={selected}
          displayAlert={displayAlert}
        />
        <img className="photo-list__image" src={regular} alt="image" />
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
