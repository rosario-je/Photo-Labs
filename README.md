## PhotoLabs Project

PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts.

## Description

PhotoLabs is designed to provide a frontend user experience for interacting with photos. Users can view photos, navigate through different photo categories, view larger versions of photos and like photos.

This project demonstrates the use of React, Webpack, Babel, and Express for building a dynamic web application. It includes both client-side and server-side components to handle user interactions, photo viewing, and liking photos. This project also demonstrates the use of PostgreSQL for data persistence.

This was a project for the Lighthouse Labs Web Development Bootcamp where students learned to finish a full stack application by doing the following:

- Building a frontend application using React components.
- Learning React hooks and state management.
- Refactoring from `useState` to `useReducer` for more complex state management.
- Learning and utilizing `useEffect` for side effects.
- Fetching data from an API and displaying it in the frontend.

## Features

- Users can view photos from the homepage loaded from the API.
- Users can navigate to different photo categories (topics).
- Users can click on a photo to view a larger version and similar photos.
- Users can like a photo from anywhere within the application.
- Users can view a heart icon with a notification in the navigation if there are liked photos.
- The navigation includes different topics and a heart icon.
- Client-side application makes API requests to load and persist data.

## Technologies Used

- React JS
- HTML
- SASS
- Express
- PostgreSQL (for data persistence)

## Setup Instructions

1. Clone the repository to your local machine.
2. Install Node.js if not already installed.
3. Navigate to the project directory in your terminal.

### Install dependencies

```sh
cd frontend
npm install
sh
Copy code
cd ../backend
npm install
```

### Running the Development Servers

**Frontend:** Running Webpack Development Server

```sh
cd frontend
npm start
```

**Backend:** Running Backend Server

Read backend/readme for further setup details, then navigate to the backend directory and start the server:

```sh
cd backend
npm start
```

## App / Component Structure and Flow

**App Structure**

App imports a custom useReducer hook to manage global state.
The global state used by App includes the following:

* photos: a state containing an array of photo objects.
* topics: a state containing an array of topic objects.
* favourites: a satete containing an array of liked photo's ids.
* selectedPhoto: the currently selected photo object.
* toggleModalWindow: a function to toggle the modal window.

App returns the following components:

* HomeRoute: the homepage component. It imports the following components:
    * TopNavigation: the navigation bar.
      * TopicList: a list of topics.
      * FavBadge: a badge for liked photos.
  * PhotoList: a list of photos.
    * AllPhotos: a variable that maps all the photos with the PhotoListItem component.
      * PhotoListItem: a single photo component.
* PhotoDetailsModal: A component displayed only when the modal state is true.
  * PhotoFavButton: a button to like a photo.
  * PhotoList (fed data to display similar photos only): a list of similar photos.

**App Flow**

1. App imports a custom useReducer hook to manage global state.

2. App fetches photos and topics from the API.

3. App renders the HomeRoute component.

4. HomeRoute renders the TopNavigation and PhotoList components.

5. PhotoList renders the AllPhotos component.

6. AllPhotos maps the photos to PhotoListItem components.

7. PhotoListItem renders a single photo.

8. User clicks on a photo.
    * App sets the selectedPhoto state to the clicked photo.
    * App sets the toggleModalWindow state to true.
9. PhotoDetailsModal renders the selected photo.

10. User clicks on the like button.
    * App adds the photo to the favourites array.
    * App sets the favourites state to the updated array.

11. App sets the toggleModalWindow state to false once the user clicks on the close button.

## Performance Statistics

- **10 Seconds Range Test:** 
  - 3 ms  Loading
  - 491 ms  Scripting
  - 22 ms  Rendering
  - 150 ms  System
  - **Total:** 0.666 s
- **10 Seconds Range Test #2:** 
  - 3ms to load the homepage and fetch photos from the API.
  - 538ms Scriping.
  - 27ms Rendering.
  - 162 ms  System
  - **Total:** 0.73s

## Screenshots

### Home Page
![Home Page](https://github.com/rosario-je/Photo-Labs/blob/main/frontend/docs/photo-labs-home.png)

### Photo Details Modal
![Photo Details Modal](https://github.com/rosario-je/Photo-Labs/blob/main/frontend/docs/photo-labs-modal.png)

### Related Photos
![Related Photos](https://github.com/rosario-je/Photo-Labs/blob/main/frontend/docs/photo-labs-modal-related_photos.png)

# Author
[Jose Eduardo Payamps](https://github.com/rosario-je)

# Contributor for initial template
Lighthouse Labs

