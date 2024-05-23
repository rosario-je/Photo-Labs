import React, { useState } from "react";

import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, photos, displayModalWindow } = props;
  
  //Set favorite state
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photoId) => {
    favourites.includes(photoId)
      ? setFavourites(favourites.filter((id) => id !== photoId))
      : setFavourites([...favourites, photoId]);
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites}/>
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
