import React from 'react';
import TopicList from "components/TopicList";
import '../styles/TopNavigationBar.scss'
import PhotoFavButton from './PhotoFavButton';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <span><PhotoFavButton /></span>
    </div>
  )
}

export default TopNavigation;