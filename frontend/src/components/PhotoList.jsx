import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

// import photos from '../mocks/photos.json';

const PhotoList = (props) => {
  const { photos, favouritedPhotos, setFavouritedPhotos } = props;

  const photoComponents = photos.map(photo => {
    return <PhotoListItem key={photo.id} id={photo.id} username={photo.user.name} imageSource={photo.urls.regular} hideUserName={false} city={photo.location.city} country={photo.location.country} favouritedPhotos={favouritedPhotos} setFavouritedPhotos={setFavouritedPhotos} />
  })

  return (
  <ul className="photo-list">
    {photoComponents}
  </ul>
  )
}

export default PhotoList