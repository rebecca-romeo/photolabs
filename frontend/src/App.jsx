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

  const [ favouritedPhotos, setFavouritedPhotos ] = useState([]);

  //State to control which photo is selected in the modal
  const [selectPhoto, setSelectPhoto] = useState({});

  // State and fuctions to control whether the modal is open or closed
  const [ modal, setModal ] = useState(false);

  const openModal = (photo) => {
    setSelectPhoto(photo)
    setModal(true);
  }

  const closeModal = () => {
    setSelectPhoto(null)
    setModal(false);
  }


  return (
    <div>
      <HomeRoute photos={photos} topics={topics} openModal={openModal} favouritedPhotos={favouritedPhotos} setFavouritedPhotos={setFavouritedPhotos}/>

      { modal &&
      <PhotoDetailsModal
      closeModal={closeModal}
      selectPhoto={selectPhoto}
      photos={photos}
      favouritedPhotos={favouritedPhotos} setFavouritedPhotos={setFavouritedPhotos}
      /> }



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