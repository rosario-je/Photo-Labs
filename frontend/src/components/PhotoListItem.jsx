import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  return (
    <article key={props.data.key}>
      <div className="photoItem">
        <img src={props.data.imageSource} alt="image" />
        <img src={props.data.profile} alt="" />
        <h2>{props.data.username}</h2>
        <h3>{props.data.location.city}, {props.data.location.country}</h3>
      </div>
    </article>
  );
};

export default PhotoListItem;
