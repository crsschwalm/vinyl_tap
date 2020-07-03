import { configureStore } from '@reduxjs/toolkit';
import allAlbumsReducer from '../services/all-albums-slice';
import albumReducer from '../services/album-slice';

export default configureStore({
  reducer: {
    albums: allAlbumsReducer,
    album: albumReducer,
  },
});
