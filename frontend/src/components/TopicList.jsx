import React from "react";

import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topics } = props;
  const allTopics = topics.map((topic) => (
    <TopicListItem key={topic.id} topic={topic} />
  ));
  return <div className="top-nav-bar__topic-list">{allTopics}</div>;
};

export default TopicList;
