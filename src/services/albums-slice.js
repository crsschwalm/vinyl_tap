import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as albumAPI from './album-api';

export const fetchAlbums = createAsyncThunk(
  'albums/fetchAlbums',
  albumAPI.getAlbums,
);

export const albumsSlice = createSlice({
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
        state.list = action.payload;
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

export default albumsSlice.reducer;
