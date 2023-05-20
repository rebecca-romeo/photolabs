import React, { useState } from 'react';

import FavBadge from './components/FavBadge';
import FavIcon from './components/FavIcon';
import PhotoFavButton from './components/PhotoFavButton';

import PhotoList from './components/PhotoList';
import PhotoListItem from './components/PhotoListItem';

import TopicList from './components/TopicList';
import TopicListItem from './components/TopicListItem';

import TopNavigation from './components/TopNavigationBar';

import './App.scss';





import photos from './mocks/photos.json';
import topics from './mocks/topics.js';

import HomeRoute from './routes/HomeRoute';

import PhotoDetailsModal from './routes/PhotoDetailsModal'


const App = () => {

  const [ modal, setModal ] = useState(false);
  const openModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  // const photos = [<PhotoListItem key="1" />, <PhotoListItem key="2" />, <PhotoListItem  key="3" />]

  return (
    <div>
      <HomeRoute photos={photos} topics={topics} openModal={openModal} />
      { modal && <PhotoDetailsModal closeModal={closeModal} /> }



      {/* <FavBadge /> */}
      {/* <FavIcon /> */}
      {/* <PhotoFavButton /> */}
      {/* <PhotoList /> */}
      {/* {photos} */}
      {/* <TopicList /> */}
      {/* <TopicListItem /> */}

      {/* <TopNavigation /> */}
    </div>
  )
}
export default App