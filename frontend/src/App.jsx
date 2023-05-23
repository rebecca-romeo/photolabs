import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';
// import photos from './mocks/photos.json';
// import topics from './mocks/topics.js';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'


const App = () => {
  const {
    modal,
    openModal,
    closeModal,
    selectPhoto,
    favouritedPhotos,
    setFavouritedPhotos } = useApplicationData();

    const [ photos, setPhotos ] = useState([]);
    const [ topics, setTopics ] = useState([])

      useEffect( () => {
        axios({
          url: "http://localhost:8001/api/photos",
          method: "GET",
          dataResponse: "json"
        })
        .then( (res) => {
          setPhotos(prev => res.data)
          console.log("checking photo res", res.data)
        });
      }, []);

      useEffect( () => {
        axios({
          url: "http://localhost:8001/api/topics",
          method: "GET",
          dataResponse: "json"
        })
        .then( (res) => {
          setTopics(prev => res.data)
          console.log("checking topic res", res.data)
        });
      }, []);

      console.log("checking topics", topics)

      const handleTopicClick = (topicId) => {
        axios
          .get(`http://localhost:8001/api/topics/photos/${topicId}`)
          .then((res) => {
            setPhotos(prev => res.data);
          })
          .catch((error) => {
            console.error('Error fetching photos by topic:', error);
          });
      };

  return (
    <div>
      <HomeRoute
      photos={photos}
      topics={topics}
      openModal={openModal}
      favouritedPhotos={favouritedPhotos} setFavouritedPhotos={setFavouritedPhotos}
      handleTopicClick={handleTopicClick} />

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