import React from "react";

/*Components*/
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

/*Custom hooks*/
import useApp from "hooks/useApp";

/*Custom data*/
import photos from "mocks/photos";
import topics from "mocks/topics";

/*Styles*/
import "./App.scss";


const App = () => {
  const {
    toggleMondalWindow,
    selectedPhoto,
    favourites,
    toggleFavourite,
    displayModalWindow,
    closeModalWindow,
  } = useApp()
  

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
