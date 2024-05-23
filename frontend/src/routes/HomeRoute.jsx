import React, { useState } from "react";

import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, photos, displayModalWindow, toggleFavourite, favourites } =
    props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites} />
      <PhotoList
        photos={photos}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
        displayModalWindow={displayModalWindow}
      />
    </div>
  );
};

export default HomeRoute;
