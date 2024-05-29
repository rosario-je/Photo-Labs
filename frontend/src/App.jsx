import React from "react";

/*Components*/
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

/*Custom hooks*/
import useApplicationData from "hooks/useApplicationData";

/*Styles*/
import "./App.scss";

const App = () => {
  const {
    toggleModalWindow,
    selectedPhoto,
    favourites,
    favouritesState,
    photos,
    topics,
    toggleFavourite,
    displayModalWindow,
    closeModalWindow,
    handleTopicClick,
    displayFavPhotos
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        displayModalWindow={displayModalWindow}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        handleTopicClick={handleTopicClick}
        displayFavPhotos={displayFavPhotos}
      />
      {toggleModalWindow && (
        <PhotoDetailsModal
          onClose={closeModalWindow}
          photo={ favouritesState ? null : selectedPhoto}
          favourites={favourites}
          favouritesState={favouritesState}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
