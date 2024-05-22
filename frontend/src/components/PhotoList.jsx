import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";


const PhotoList = () => {
  const allPhotos = photos.map((photo) => 
    <PhotoListItem key={photo.id} data={photo} />
  );
  return <ul className="photo-list">{allPhotos}</ul>;
};

export default PhotoList;