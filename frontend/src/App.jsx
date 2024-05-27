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
    photos,
    topics,
    toggleFavourite,
    displayModalWindow,
    closeModalWindow,
    handleTopicClick,
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
      />
      {toggleModalWindow && (
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
