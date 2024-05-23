import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "mocks/photos";
import topics from "mocks/topics";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  function displayModalWindow() {
    setModalVisible(modalVisible ? false : true);
    console.log('article clicked');
  }

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        displayModalWindow={displayModalWindow}
      />
      {modalVisible && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
