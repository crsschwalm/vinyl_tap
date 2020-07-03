import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const Hero = ({ heading = 'This is Vinyl Tap', description }) => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Grid>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            display="block"
            color="textPrimary"
            gutterBottom
          >
            {heading}
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {description}
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
