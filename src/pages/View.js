import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AlbumHero from '../components/hero/AlbumHero';
import TrackList from '../components/track/TrackList';
import GenreList from '../components/genre-list/GenreList';
import EditFab from '../components/buttons/EditFab';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbum } from '../services/album-slice';

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const View = ({
  match: {
    params: { id },
  },
}) => {
  const classes = useStyles();
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

  const genreItems = album.genres.map((genre) => ({
    label: genre,
    color: 'primary',
  }));
  return (
    <>
      <AlbumHero
        image={album.image}
        heading={album.name}
        description={album.artists}
      >
        <GenreList genreItems={genreItems} />
      </AlbumHero>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container>
          <TrackList tracks={album.tracks}></TrackList>
        </Grid>
      </Container>
      <EditFab id={album.id} />
    </>
  );
};

export default View;
