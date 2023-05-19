import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';
// import topics from '../mocks/topics.json';

const TopicList = (props) => {
  const { topics } = props;

  const topicComponents = topics.map(topic => {
    return <TopicListItem key={topic.id} label={topic.title} link="#"/>
  })


  return (
  <div className="top-nav-bar--topic-list">
    {topicComponents}
  </div>
  )
}

export default TopicList