import React from "react";

import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, favourites, onToggleFavourite, displayModalWindow } = props;

  const allPhotos = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      data={photo}
      favourites={favourites}
      onToggleFavourite={onToggleFavourite}
      displayModalWindow={displayModalWindow}
    />
  ));
  return <ul className="photo-list">{allPhotos}</ul>;
};

export default PhotoList;
