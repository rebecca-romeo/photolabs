import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
// import FavIcon from './components/FavIcon';
import PhotoFavButton from './components/PhotoFavButton';
// import { FavBadge } from './components/FavBadge';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // const photos = [<PhotoListItem key="1" />, <PhotoListItem key="2" />, <PhotoListItem  key="3" />]

  return (
    <div>
      {/* {photos} */}
      {/* <FavIcon /> */}
      {/* <FavBadge /> */}
      <PhotoFavButton />

    </div>
  )
}
export default App