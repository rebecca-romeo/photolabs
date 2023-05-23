import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {
  const { topics, link, handleTopicClick } = props;

  const topicComponents = topics.map(topic => {
    return <TopicListItem
      key={topic.id}
      id={topic.id} l
      abel={topic.title}
      link={"#"}
      handleTopicClick={handleTopicClick}
    />
  });

  return (
    <div className="top-nav-bar--topic-list">
      {topicComponents}
    </div>
  );
};

export default TopicList