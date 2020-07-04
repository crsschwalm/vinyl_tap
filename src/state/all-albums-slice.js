import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as albumAPI from '../services/album-api';
import { stringifyArtists } from '../services/normalize-album';

export const fetchAlbums = createAsyncThunk(
  'albums/fetchAlbums',
  albumAPI.getAlbums,
);

export const allAlbumsSlice = createSlice({
  name: 'albums',
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: {
    [fetchAlbums.pending]: (state, _action) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchAlbums.fulfilled]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        const albums = action.payload;
        state.list = albums.map((album) => ({
          ...album,
          artists: stringifyArtists(album.artists),
        }));
      }
    },
    [fetchAlbums.rejected]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
  },
});

export default allAlbumsSlice.reducer;
