import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  
  const item = function () {
    return (
      <article key={props.data.key}>
        <div className="photo-list__item">
          <img
            className="photo-list__image"
            src={props.data.imageSource}
            alt="image"
          />
          <div className="photo-list__user-details">
            <img
              className="photo-list__user-profile"
              src={props.data.profile}
              alt=""
            />
            <div className="photo-list__user-info">
              <h2>{props.data.username}</h2>
              <h3 className="photo-list__user-location">
                {props.data.location.city}, {props.data.location.country}
              </h3>
            </div>
          </div>
        </div>
      </article>
    );
  }

  const displayThree = function () {
    return (
      <div className="photo-list">
        {item()}
        {item()}
        {item()}
      </div>
    );
  }

  return (
    <section className="photo-list">
      {displayThree()}
    </section>
  );
};

export default PhotoListItem;
