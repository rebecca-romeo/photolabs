
import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { username, location, imageSource, hideUserName } = props;
  return (
    <article className='photo-list--item'>

      <img src={imageSource} className='photo-list--image' />

      <div className='photo-list--user-details'>
        <img src={imageSource} alt="" className='photo-list--user-profile' />
        <div className='photo-list--user-info'>
          {!hideUserName && <p>{username}</p>}
          <p className='photo-list--user-location'>{location}</p>
        </div>
      </div>

    </article>
  )
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  location: 'city, country',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem