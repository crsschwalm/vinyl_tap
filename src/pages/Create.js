import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
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
} from '../services/album-slice';
import { useSelector, useDispatch } from 'react-redux';
import Hero from '../components/hero/Hero';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Create = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { entry: album } = useSelector((state) => state.album);

  React.useEffect(() => {
    clearState();
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
      <Hero
        heading="Create an Album"
        description="Go ahead and fill in the input please 🚀"
      />
      <Container maxWidth="md">
        <Grid container>
          <GenreList
            genreItems={album.genres.map((genre, i) => ({
              onDelete: () => dispatch(removeGenre(i)),
              label: genre,
              color: 'secondary',
            }))}
          />
          <GenreInput onAdd={(g) => dispatch(addGenre(g))} />
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
    </>
  );
};

export default Create;
