import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const [selected, setSelected] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

  function handleFavButtonClick() {
    console.log("Fav button clicked");
    setSelected((prevSelected) => !prevSelected);
    setDisplayAlert((prevDisplayAlert) => !prevDisplayAlert);
    
  }

  return (
    <article key={props.data.key}>
      <div className="photo-list__item">
        <PhotoFavButton
          onClick={handleFavButtonClick}
          selected={selected}
          displayAlert={displayAlert}
        />
        <img
          className="photo-list__image"
          src={props.data.urls.regular}
          alt="image"
        />
        <div className="photo-list__user-details">
          <img
            className="photo-list__user-profile"
            src={props.data.user.profile}
            alt="user profile"
          />
          <div className="photo-list__user-info">
            <h2>{props.data.user.username}</h2>
            <h3 className="photo-list__user-location">
              {props.data.location.city}, {props.data.location.country}
            </h3>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
