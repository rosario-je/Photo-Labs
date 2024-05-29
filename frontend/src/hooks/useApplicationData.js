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
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC'
}

function reducer(state, action) {
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
      return { ...state, photos: payload.photoData };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: payload.topicsData }

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photos: payload.topicPhotoData }

    case ACTIONS.SET_SELECTED_TOPIC:
      return { ...state, selectedTopic: payload.topicId }

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
      favourites: [],
      photos: [],
      topics: []
    })

  // Fetch all photos from the API and updating the state with the retrieved data.
  useEffect(() => {
    axios.get("/api/photos")
      .then((res) => {
        const photoData = res.data;
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photoData } });
      })
      .catch((error) => console.log(error));
  }, []);

  // Fetch all topics from the API and updating the state with the retrieved data.
  useEffect(() => {
    axios.get("/api/topics")
      .then((res) => {
        const topicsData = res.data
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topicsData } });
      })
      .catch((error) => console.log(error))

  }, []);

  // Fetch all the photos that are under the specific category id and updating the state with the retrieved data.
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


  /*--------------    Set topic specific photos   --------------*/
  const handleTopicClick = (topicId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: { topicId } });
  };

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
    closeModalWindow,
    handleTopicClick
  };
}

export default useApplicationData;