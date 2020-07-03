import { configureStore } from '@reduxjs/toolkit';
import albumsReducer from '../services/albums-slice';

export default configureStore({
  reducer: {
    albums: albumsReducer,
  },
});
