import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import Hero from '../components/hero/Hero';
import { fetchAlbums } from '../state/all-albums-slice';
import CreateFab from '../components/buttons/CreateFab';
import AlbumCard from '../components/album-card/AlbumCard';
import { showToast } from '../state/slice-of-toast';
import { unwrapResult } from '@reduxjs/toolkit';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const List = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { list: albums } = useSelector((state) => {
    return state.albums;
  });

  React.useEffect(() => {
    dispatch(fetchAlbums())
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

  return (
    <>
      <Hero
        heading="This is Vinyl Tap"
        description="This is Vinyl Tap, a collection of albums for your data management pleasure. Check out an album or add your own."
      />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {albums.map((album, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <AlbumCard
                id={album.id}
                heading={album.name}
                description={album.artists}
                image={album.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <CreateFab />
    </>
  );
};

export default List;
