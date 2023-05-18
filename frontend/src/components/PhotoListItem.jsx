
import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  return (
    <article className='photo-list--item'>

      <img src={props.imageSource} className='photo-list--image' />

      <div className='photo-list--user-details'>
        <img src={props.imageSource} alt="" className='photo-list--user-profile' />
        <div className='photo-list--user-info'>
          <p>{props.username}</p>
          <p className='photo-list--user-location'>{props.city}</p>
        </div>
      </div>

    </article>
  )
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  city: 'city, country',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem