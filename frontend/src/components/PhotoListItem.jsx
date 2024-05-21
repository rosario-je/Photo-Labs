import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  return (
    <article key={props.key}>
      <div className="photoItem">
        <img src={props.imageSource} alt="image" />
        <img src={props.profile} alt="" />
        <h2>{props.username}</h2>
        <h3>{props.city}, {props.country}</h3>
      </div>
    </article>
  );
};

export default PhotoListItem;
