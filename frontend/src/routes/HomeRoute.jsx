import React, { useCallback, useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {photos, topics, openModal, setFavouritedPhotos, favouritedPhotos} = props;



  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritedPhotos={favouritedPhotos} />
      <PhotoList photos={photos} favouritedPhotos={favouritedPhotos} setFavouritedPhotos={setFavouritedPhotos} openModal={openModal} />
    </div>
  )
}

export default HomeRoute;