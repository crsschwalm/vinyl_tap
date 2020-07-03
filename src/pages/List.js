import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hero from '../components/hero/Hero';
import AlbumCard from '../components/album-card/AlbumCard';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  fab: {
    position: 'fixed',
    bottom: '75px',
    right: '35px',
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const List = () => {
  const classes = useStyles();

  return (
    <>
      <Hero
        heading="This is Vinyl Tap"
        description="This is Vinyl Tap, a collection of albums for your data management pleasure. Check out an album or add your own."
      />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <AlbumCard
                heading="Heading"
                description="This is a media card. You can use this section to describe
                      the content."
                image="https://source.unsplash.com/random"
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Fab
        className={classes.fab}
        color="primary"
        aria-label="add"
        href="/create"
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default List;
