import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const { photos } = props;

  const photoComponents = photos.map(photo => {
    return <PhotoListItem key={photo.id} username={photo.username} imageSource={photo.imageSource} hideUserName={photo.hideUserName}/>
  })

  return (
  <ul className="photo-list">
    {photoComponents}
  </ul>
  )
}

PhotoList.defaultProps = {
  photos: [
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: true,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    }
  ]
}

export default PhotoList