import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import TrackList from '../components/track/TrackList';
import TrackInputs from '../components/track/TrackInputs';
import AlbumHero from '../components/hero/AlbumHero';
import GenreList from '../components/genre-list/GenreList';
import AlbumFormGroup from '../components/album-form-group/AlbumFormGroup';
import ButtonGroup from '../components/album-form-group/ButtonGroup';
import GenreInput from '../components/genre-list/GenreInput';
import DeleteFab from '../components/buttons/DeleteFab';
import {
  clearState,
  fetchAlbum,
  addGenre,
  removeGenre,
  addTrack,
  removeTrack,
  changeText,
  deleteAlbum,
  updateAlbum,
} from '../state/album-slice';
import { showToast } from '../state/slice-of-toast';
import { makeAlbumSubmitable } from '../services/normalize-album';

const Edit = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { entry: album } = useSelector((state) => state.album);

  const canSubmit = !!album.name && !!album.artists && album.tracks.length >= 0;

  React.useEffect(() => {
    dispatch(fetchAlbum(id))
      .then(unwrapResult)
      .catch((err) => {
        dispatch(
          showToast({
            severity: 'error',
            message: `Fetch failed: ${err.message}`,
          }),
        );
      });
  }, []);

  const headOut = () => {
    clearState();
    history.push('/');
  };

  const handleDelete = async () => {
    try {
      const request = await dispatch(deleteAlbum(id));
      await unwrapResult(request);

      dispatch(
        showToast({ severity: 'success', message: 'Deleted Successfully :)' }),
      );
      setTimeout(headOut, 1000);
    } catch (err) {
      dispatch(
        showToast({
          severity: 'error',
          message: `Delete failed: ${err.message}`,
        }),
      );
    }
  };

  const handleSubmit = async () => {
    try {
      const submission = makeAlbumSubmitable({ id, ...album });
      const request = await dispatch(updateAlbum(submission));
      await unwrapResult(request);
      dispatch(
        showToast({ severity: 'success', message: 'Updated Successfully :)' }),
      );
      setTimeout(headOut, 1000);
    } catch (err) {
      dispatch(
        showToast({
          severity: 'error',
          message: `Delete failed: ${err.message}`,
        }),
      );
    }
  };
  return (
    <>
      <AlbumHero
        image={album.image}
        heading={album.name}
        description={album.artists}
      >
        <GenreList
          genreItems={album.genres.map((genre, i) => ({
            onDelete: () => dispatch(removeGenre(i)),
            label: genre,
            color: 'secondary',
          }))}
        />
        <GenreInput onAdd={(g) => dispatch(addGenre(g))} />
      </AlbumHero>
      <Container maxWidth="md">
        <Grid container>
          <AlbumFormGroup
            onChange={(e) => dispatch(changeText(e))}
            values={album}
          />
          <TrackList
            tracks={album.tracks.map((track, i) => ({
              onDelete: () => dispatch(removeTrack(i)),
              ...track,
            }))}
          ></TrackList>
          <TrackInputs onAdd={(t) => dispatch(addTrack(t))} />
          <ButtonGroup
            onSubmit={handleSubmit}
            onCancel={headOut}
            canSubmit={canSubmit}
          />
        </Grid>
      </Container>
      <DeleteFab handleDelete={handleDelete} />
    </>
  );
};

export default Edit;
