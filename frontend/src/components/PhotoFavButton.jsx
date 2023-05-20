import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';



// when user clicks the button, say clicked
// if like is set to false, show heart outline
// if heart is set to true, show heart filled
// on click, change the state to opposite (ie true -> false)

function PhotoFavButton(props) {
  const { id, favouritedPhotos, setFavouritedPhotos } = props;

  // const [like, setLike] = useState(false);
  // const switchLike = () => setLike(like ? false : true);
  // console.log(like)

  const isFavorited = favouritedPhotos.includes(id);

  const handleFavourites = () => {
    if (isFavorited) {
      setFavouritedPhotos(favouritedPhotos.filter((photoId) => photoId !== id));
    } else {
      setFavouritedPhotos([...favouritedPhotos, id]);
    }
  };

  console.log("check favs", isFavorited)


  return (
    <div className="photo-list--fav-icon" onClick={handleFavourites}>
        <div className='photo-list--fav-icon-svg'>
          <FavIcon fill={isFavorited ? '#C80000'  : '#EEE'} />
        </div>
    </div>

  );
}

export default PhotoFavButton;
