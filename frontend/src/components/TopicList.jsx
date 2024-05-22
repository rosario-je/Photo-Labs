import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import topics from "mocks/topics";


const TopicList = () => {
  const allTopics = topics.map((topic) => 
    <TopicListItem key={topic.id} topic={topic} />
  )
  return (
    <div className="top-nav-bar__topic-list">
      {allTopics}
    </div>
  );
};

export default TopicList;
