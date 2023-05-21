import React from 'react';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';
import photos from './mocks/photos.json';
import topics from './mocks/topics.js';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'


const App = () => {
  const {
    modal,
    openModal,
    closeModal,
    selectPhoto,
    favouritedPhotos,
    setFavouritedPhotos} = useApplicationData();


  return (
    <div>
      <HomeRoute
      photos={photos}
      topics={topics}
      openModal={openModal}
      favouritedPhotos={favouritedPhotos} setFavouritedPhotos={setFavouritedPhotos}/>

      { modal &&
      <PhotoDetailsModal
      closeModal={closeModal}
      selectPhoto={selectPhoto}
      photos={photos}
      favouritedPhotos={favouritedPhotos} setFavouritedPhotos={setFavouritedPhotos}
      /> }

    </div>
  )
}
export default App