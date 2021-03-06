import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as albumAPI from '../services/album-api';
import { normalizeTracks, stringifyArtists } from '../services/normalize-album';

export const fetchAlbum = createAsyncThunk(
  'album/fetchAlbum',
  albumAPI.getAlbumById,
);

export const createAlbum = createAsyncThunk(
  'album/createAlbum',
  albumAPI.createAlbum,
);

export const updateAlbum = createAsyncThunk(
  'album/updateAlbum',
  albumAPI.updateAlbum,
);
export const deleteAlbum = createAsyncThunk(
  'album/deleteAlbum',
  albumAPI.deleteAlbumById,
);

export const initialState = {
  entry: {
    name: '',
    artists: '',
    image: '',
    genres: [],
    tracks: [],
  },
  loading: false,
  error: null,
};

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    changeText: (state, action) => {
      state.entry = { ...state.entry, ...action.payload };
    },

    addTrack: (state, action) => {
      state.entry.tracks = [...state.entry.tracks, action.payload];
    },

    removeTrack: (state, action) => {
      state.entry.tracks = state.entry.tracks.filter(
        (_t, i) => action.payload !== i,
      );
    },

    addGenre: (state, action) => {
      state.entry.genres = [...state.entry.genres, action.payload];
    },

    removeGenre: (state, action) => {
      state.entry.genres = state.entry.genres.filter(
        (_, i) => action.payload !== i,
      );
    },

    clearState: (state) => {
      state.entry = initialState.entry;
    },
  },
  extraReducers: {
    [fetchAlbum.pending]: (state, _action) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchAlbum.fulfilled]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        const album = action.payload;
        const artists = stringifyArtists(album.artists);
        const tracks = normalizeTracks(album.tracks);

        state.entry = { ...album, tracks, artists };
      }
    },
    [fetchAlbum.rejected]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
    [createAlbum.fulfilled]: (state, _action) => {
      if (state.loading) {
        state.loading = false;
      }
    },
    [createAlbum.rejected]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
    [updateAlbum.fulfilled]: (state, _action) => {
      if (state.loading) {
        state.loading = false;
      }
    },
    [updateAlbum.rejected]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
    [deleteAlbum.fulfilled]: (state, _action) => {
      if (state.loading) {
        state.loading = false;
      }
    },
    [deleteAlbum.rejected]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
  },
});

export const {
  clearState,
  addGenre,
  removeGenre,
  addTrack,
  removeTrack,
  changeText,
} = albumSlice.actions;

export default albumSlice.reducer;
