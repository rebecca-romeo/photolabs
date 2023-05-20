import React, { useCallback, useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {photos, topics, openModal} = props;

  const [ favouritedPhotos, setFavouritedPhotos ] = useState([]);


  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritedPhotos={favouritedPhotos} />
      <PhotoList photos={photos} favouritedPhotos={favouritedPhotos} setFavouritedPhotos={setFavouritedPhotos} openModal={openModal} />
    </div>
  )
}

export default HomeRoute;