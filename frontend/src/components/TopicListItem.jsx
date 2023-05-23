import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const { label, link, id, handleTopicClick } = props;

  return (
  <div className="topic-list--item">
    <a href={link}><span onClick={() => handleTopicClick(id)}>{label}</span></a>
  </div>
  )
}

TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  link: 'link placeholder'
}
export default TopicListItem