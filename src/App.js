import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import AlbumCard from './components/album-card/AlbumCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
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
      </main>
      <Footer />
    </>
  );
};

export default App;
