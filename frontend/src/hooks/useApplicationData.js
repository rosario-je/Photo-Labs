import { useState, useReducer } from "react";

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
      // const photoId = action.payload.photoId
      // const updatedFavourites = [...state.favourites, photoId]
      // updatedState.favourites = updatedFavourites
      // return updatedState
      return { ...state, favourites: [...state.favourites, payload.photoId] }
      
    case ACTIONS.FAV_PHOTO_REMOVED:
      // updatedState.favourites = state.favourites.filter((id) => id !== payload.photoId);
      // return updatedState;
      return { ...state, favourites: [...state.favourites.filter((id) => id !== payload.photoId)]};

    case ACTIONS.SELECT_PHOTO:
      // const updatedSelectedPhoto = payload.data
      // updatedState.selectedPhoto = updatedSelectedPhoto;
      // updatedState.selectedPhoto = payload.data;
      // return updatedState
      return {...state, selectedPhoto: payload.data}


    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      // const newModalState = payload.modalWindowState;
      // updatedState.toggleModalWindow = newModalState;
      // console.log("MODAL TEST");
      // updatedState.toggleModalWindow = payload.modalWindowState;
      // return updatedState;
      return {...state, toggleModalWindow: payload.modalWindowState}

    case ACTIONS.SET_PHOTO_DATA:
    //Logic to be implemented

    case ACTIONS.SET_TOPIC_DATA:
    //Logic to be implemented

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
      favourites: []
    })

  /*--------------    Toggle Fav Photo   --------------*/
  const toggleFavourite = (photoId) => {

    state.favourites.includes(photoId) ? dispatch({
      type: ACTIONS.FAV_PHOTO_REMOVED,
      payload: { photoId }
    }) : dispatch({
      type: ACTIONS.FAV_PHOTO_ADDED,
      payload: { photoId }
    })
  };

  /*--------------    Display Modal Window   --------------*/
  const displayModalWindow = (data) => {
    //Calls reducer function 
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { data }
    });
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: { modalWindowState: true }
    })
  };

  /*--------------    Close Modal Window   --------------*/
  const closeModalWindow = () => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { data: null }
    });
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: { modalWindowState: false }
    })

  };

  return {
    toggleModalWindow: state.toggleModalWindow,
    selectedPhoto: state.selectedPhoto,
    favourites: state.favourites,
    toggleFavourite,
    displayModalWindow,
    closeModalWindow
  };
}

export default useApplicationData;