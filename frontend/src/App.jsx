import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "mocks/photos";
import topics from "mocks/topics";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [toggleMondalWindow, setToggleModalWindow] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favourites, setFavourites] = useState([]);


  const toggleFavourite = (photoId) => {
    favourites.includes(photoId)
      ? setFavourites(favourites.filter((id) => id !== photoId))
      : setFavourites([...favourites, photoId]);
  };

  const displayModalWindow = (data) => {
    setSelectedPhoto(data);
    setToggleModalWindow(true);
  };

  const closeModalWindow = () => {
    setToggleModalWindow(false);
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        displayModalWindow={displayModalWindow}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
      {toggleMondalWindow && (
        <PhotoDetailsModal
          onClose={closeModalWindow}
          photo={selectedPhoto}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
