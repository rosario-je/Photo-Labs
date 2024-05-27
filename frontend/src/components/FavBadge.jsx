import React, { useState } from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist }) => {
  // If there is at least one favourited photo, trigger conditional rendering to show the appropriate icon by sending a truthy prop value to the FavIcon component
  const hasFavPhotos = isFavPhotoExist.length > 0;

  return (
    <div className="fav-badge">
      <FavIcon displayAlert={hasFavPhotos} selected={hasFavPhotos} />
    </div>
  );
};

export default FavBadge;
