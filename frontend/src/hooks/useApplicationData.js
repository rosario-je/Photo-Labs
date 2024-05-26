import { useReducer, useEffect } from "react";
import axios from "axios";
import topics from "mocks/topics";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  const updatedState = { ...state }
  const { type, payload } = action
  switch (type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favourites: [...state.favourites, payload.photoId] }

    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favourites: [...state.favourites.filter((id) => id !== payload.photoId)] };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: payload.data }

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, toggleModalWindow: payload.modalWindowState }

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: payload.photoData};

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: payload.topicsData}


    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer,
    {
      toggleModalWindow: false,
      selectedPhoto: null,
      favourites: [],
      photos: [],
      topics: []
    })

  useEffect(() => {
    axios.get("/api/photos")
    .then((res) => {
      const photoData = res.data
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photoData } });
    })
  }, []);

  useEffect(() => {
    axios.get("/api/topics")
    .then((res) => {
      const topicsData = res.data
      console.log(topicsData);
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topicsData } });
    })
  }, []);

  /*--------------    Toggle Fav Photo   --------------*/
  const toggleFavourite = (photoId) => {
    state.favourites.includes(photoId)
      ? dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } })
      : dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } })
  };
  /*--------------    Display Modal Window   --------------*/
  const displayModalWindow = (data) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { data } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { modalWindowState: true } })
  };
  /*--------------    Close Modal Window   --------------*/
  const closeModalWindow = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { data: null } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { modalWindowState: false } })
  };

  return {
    toggleModalWindow: state.toggleModalWindow,
    selectedPhoto: state.selectedPhoto,
    favourites: state.favourites,
    photos: state.photos,
    topics: state.topics,
    toggleFavourite,
    displayModalWindow,
    closeModalWindow
  };
}

export default useApplicationData;