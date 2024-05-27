import React from "react";

import TopicList from "components/TopicList";
import FavBadge from "./FavBadge";

import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  const { topics, favourites, handleTopicClick } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
        <TopicList topics={topics} handleTopicClick={handleTopicClick} />
        <FavBadge isFavPhotoExist={favourites} />
      </div>
    </div>
  );
};

export default TopNavigation;
