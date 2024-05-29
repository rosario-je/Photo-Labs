import React, { useState } from "react";

import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    displayModalWindow,
    toggleFavourite,
    favourites,
    handleTopicClick,
    displayFavPhotos
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favourites={favourites}
        handleTopicClick={handleTopicClick}
        displayFavPhotos={displayFavPhotos}
      />
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
