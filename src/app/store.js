import { configureStore } from '@reduxjs/toolkit';
import allAlbumsReducer from '../state/all-albums-slice';
import albumReducer from '../state/album-slice';
import toastReducer from '../state/slice-of-toast';

export default configureStore({
  reducer: {
    albums: allAlbumsReducer,
    album: albumReducer,
    toast: toastReducer,
  },
});
