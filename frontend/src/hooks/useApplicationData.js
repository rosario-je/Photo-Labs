import { useReducer, useEffect } from "react";
import axios from "axios";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC',
  DISPLAY_FAV_PHOTOS: 'DISPLAY_FAV_PHOTOS',
  CHANGE_FAVOURITES_STATE: 'CHANGE_FAVOURITES_STATE'
}

function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favourites: [...state.favourites, payload.photoData] }

    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favourites: [...state.favourites.filter((photo) => photo !== payload.photoData)] };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: payload.data }

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, toggleModalWindow: payload.modalWindowState }

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: payload.photoData };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: payload.topicsData }

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photos: payload.topicPhotoData }

    case ACTIONS.SET_SELECTED_TOPIC:
      return { ...state, selectedTopic: payload.topicId }

    case ACTIONS.DISPLAY_FAV_PHOTOS:
      return { ...state, favouritesState: payload.favouritesState }


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
      selectedTopic: null,
      favouritesState: false,
      favourites: [],
      photos: [],
      topics: []
    })

  // This useEffect is responsible for fetching all photos from the API and updating the state with the retrieved data.
  useEffect(() => {
    axios.get("/api/photos")
      .then((res) => {
        const photoData = res.data;
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photoData } });
      })
      .catch((error) => console.log(error));
  }, []);

  // This useEffect is responsible for fetchin all topics from the API and updating the state with the retrieved data.
  useEffect(() => {
    axios.get("/api/topics")
      .then((res) => {
        const topicsData = res.data
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topicsData } });
      })
      .catch((error) => console.log(error))

  }, []);

  // This useEffect is responsible for fetching all the photos that are under the specific category id and updating the state with the retrieved data.
  useEffect(() => {
    if (state.selectedTopic) {
      axios.get(`/api/topics/photos/${state.selectedTopic}`)
        .then(res => {
          const topicPhotoData = res.data;
          dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: { topicPhotoData } });
        })
        .catch(error => console.log(error));
    }
  }, [state.selectedTopic]);

  //Testing favs
  useEffect(() => {
    console.log(state.favourites);


  }, [state.favourites])


  /*--------------    Set topic specific photos   --------------*/
  const handleTopicClick = (topicId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: { topicId } });
  };

  /*--------------    Toggle Fav Photo   --------------*/
  const toggleFavourite = (photoData) => {
    state.favourites.includes(photoData)
      ? dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoData } })
      : dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoData } })
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
    dispatch({ type: ACTIONS.DISPLAY_FAV_PHOTOS, payload: { favouritesState: false } })
  };

  /*--------------    Display Fav Photos   --------------*/
  const displayFavPhotos = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { modalWindowState: true } })
    dispatch({ type: ACTIONS.DISPLAY_FAV_PHOTOS, payload: { favouritesState: true } })
  }

  return {
    toggleModalWindow: state.toggleModalWindow,
    selectedPhoto: state.selectedPhoto,
    favourites: state.favourites,
    photos: state.photos,
    topics: state.topics,
    favouritesState: state.favouritesState,
    toggleFavourite,
    displayModalWindow,
    closeModalWindow,
    handleTopicClick,
    displayFavPhotos
  };
}

export default useApplicationData;