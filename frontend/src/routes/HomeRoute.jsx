import React from "react";

import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, photos } = props;
  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;
