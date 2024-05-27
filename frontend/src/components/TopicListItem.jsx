import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { topic, handleTopicClick } = props;

  function setTopicId() {
    handleTopicClick(topic.id);
  }

  return (
    <div className="topic-list__item">
      <span onClick={setTopicId}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
