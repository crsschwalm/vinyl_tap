import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hero from '../components/hero/Hero';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Create = () => {
  const classes = useStyles();

  return (
    <>
      <Hero
        heading="Create an Album"
        description="Go ahead and fill in the input please 🚀"
      />
      <Container className={classes.containerGrid} maxWidth="md">
        <Grid container spacing={4}></Grid>
      </Container>
    </>
  );
};

export default Create;
