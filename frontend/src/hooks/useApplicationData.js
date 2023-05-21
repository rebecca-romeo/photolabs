import { useState } from 'react';

const useApplicationData = () => {

  // State to control which photos are favourited
  const [favouritedPhotos, setFavouritedPhotos] = useState([]);

  //State to control which photo is selected in the modal
  const [selectPhoto, setSelectPhoto] = useState({});

  // State and fuctions to control whether the modal is open or closed
  const [modal, setModal] = useState(false);


  const openModal = (photo) => {
    setSelectPhoto(photo)
    setModal(true);
  }

  const closeModal = () => {
    setSelectPhoto(null)
    setModal(false);
  }

  return {
    modal,
    openModal,
    closeModal,
    selectPhoto,
    favouritedPhotos,
    setFavouritedPhotos

  };
};

export default useApplicationData;
