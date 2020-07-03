import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
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
} from '../services/album-slice';
import { useSelector, useDispatch } from 'react-redux';

const Edit = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const { entry: album } = useSelector((state) => state.album);

  React.useEffect(() => {
    try {
      dispatch(fetchAlbum(id));
      // showToast('success', `Fetched Albums`)
    } catch (err) {
      console.warn('err :>> ', err);
      // showToast('error', `Fetch failed: ${err.message}`)
    }
  }, []);

  const history = useHistory();
  const handleCancel = () => {
    clearState();
    history.push('/');
  };

  const handleSubmit = () => {
    console.log('submitting :>> ', album);
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
            onCancel={handleCancel}
            canSubmit={!!album.name}
          />
        </Grid>
      </Container>
      <DeleteFab id={album.id} />
    </>
  );
};

export default Edit;
