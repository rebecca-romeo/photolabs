import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import { FavBadge } from './FavBadge';
import '../styles/PhotoFavButton.scss';



// when user clicks the button, say clicked
// if like is set to false, show heart outline
// if heart is set to true, show heart filled
// on click, change the state to opposite (ie true -> false)

function PhotoFavButton() {

  const [like, setLike] = useState(false);
  const switchLike = () => setLike(like ? false : true);
  console.log(like)

  return (
    <button
      className="photo-list--fav-icon"
      onClick={switchLike}>
        {like ? <FavBadge /> : <FavIcon  />}
    </button>
  );
}

export default PhotoFavButton;
