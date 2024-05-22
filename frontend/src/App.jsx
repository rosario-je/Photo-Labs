import React from "react";

import PhotoList from "components/PhotoList";
import "./App.scss";
import TopicList from "components/TopicList";

// Note: Rendering a single component to build components in isolation
const App = () => {
  

  // const photos = [...Array(3)];
  // const photoListItems = photos.map((photo, i) => (
  //   <PhotoListItem key={i} data={sampleDataForPhotoListItem} />
  // ));

  return (
    <div className="App">
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
