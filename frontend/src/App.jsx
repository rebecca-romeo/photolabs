import React from 'react';

import FavBadge from './components/FavBadge';
import FavIcon from './components/FavIcon';
import PhotoFavButton from './components/PhotoFavButton';

import PhotoList from './components/PhotoList';
import PhotoListItem from './components/PhotoListItem';

import TopicList from './components/TopicList';
import TopicListItem from './components/TopicListItem';

import TopNavigation from './components/TopNavigationBar';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // const photos = [<PhotoListItem key="1" />, <PhotoListItem key="2" />, <PhotoListItem  key="3" />]

  return (
    <div>
      {/* <FavBadge /> */}
      {/* <FavIcon /> */}
      {/* <PhotoFavButton /> */}
      {/* <PhotoList /> */}
      {/* {photos} */}
      {/* <TopicList /> */}
      {/* <TopicListItem /> */}

      <TopNavigation />




    </div>
  )
}
export default App