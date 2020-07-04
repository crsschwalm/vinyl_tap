import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TrackList from '../components/track/TrackList';
import TrackInputs from '../components/track/TrackInputs';
import GenreList from '../components/genre-list/GenreList';
import AlbumFormGroup from '../components/album-form-group/AlbumFormGroup';
import ButtonGroup from '../components/album-form-group/ButtonGroup';
import GenreInput from '../components/genre-list/GenreInput';
import {
  clearState,
  addGenre,
  removeGenre,
  addTrack,
  removeTrack,
  changeText,
} from '../state/album-slice';
import { showToast } from '../state/slice-of-toast';
import Hero from '../components/hero/Hero';
import { createAlbum } from '../state/album-slice';
import { unwrapResult } from '@reduxjs/toolkit';
import { makeAlbumSubmitable } from '../services/normalize-album';

const Create = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    dispatch(clearState());
  }, []);

  const { entry: album } = useSelector((state) => state.album);

  const canSubmit = !!album.name && !!album.artists && album.tracks.length >= 0;

  const handleCancel = () => {
    dispatch(clearState());
    history.push('/');
  };

  const handleSubmit = async () => {
    try {
      const submission = makeAlbumSubmitable(album);
      const request = await dispatch(createAlbum(submission));
      const response = await unwrapResult(request);
      dispatch(
        showToast({ severity: 'success', message: 'Created Successfully :)' }),
      );
      setTimeout(() => {
        dispatch(clearState());
        history.push(`/view/${response.id}`);
      }, 1000);
    } catch (err) {
      dispatch(
        showToast({
          severity: 'error',
          message: `Fetch failed: ${err.message}`,
        }),
      );
    }
  };

  return (
    <>
      <Hero
        heading="Create an Album"
        description="Go ahead and fill in the input please 🚀"
      />
      <Container maxWidth="md">
        <Grid container>
          <AlbumFormGroup
            onChange={(e) => dispatch(changeText(e))}
            values={album}
          />
          <GenreList
            genreItems={album.genres.map((genre, i) => ({
              onDelete: () => dispatch(removeGenre(i)),
              label: genre,
              color: 'secondary',
            }))}
          />
          <GenreInput onAdd={(g) => dispatch(addGenre(g))} />

          <TrackList
            tracks={album.tracks.map((track, i) => ({
              onDelete: () => dispatch(removeTrack(i)),
              ...track,
            }))}
          ></TrackList>
          <TrackInputs onAdd={(t) => dispatch(addTrack(t))} />
          <ButtonGroup
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            canSubmit={canSubmit}
          />
        </Grid>
      </Container>
    </>
  );
};

export default Create;
