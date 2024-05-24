import { useState } from "react";

const useApp = () => {
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


  return {
    toggleMondalWindow,
    selectedPhoto,
    favourites,
    toggleFavourite,
    displayModalWindow,
    closeModalWindow
  };
}

export default useApp;