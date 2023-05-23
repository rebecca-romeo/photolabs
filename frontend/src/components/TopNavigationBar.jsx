import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, favouritedPhotos, handleTopicClick } = props;

  const isFavPhotoExist = favouritedPhotos.length;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>

      <TopicList
        topics={topics}
        handleTopicClick={handleTopicClick}
      />

      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;