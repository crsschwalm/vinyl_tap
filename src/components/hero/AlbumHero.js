import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 2, 6),
  },
}));

const AlbumHero = ({ heading, description, image, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Grid container>
        <img
          alt="album artwork"
          src={image}
          style={{
            maxWidth: '90%',
            maxHeight: '200px',
          }}
        />
        <Grid item>
          <Typography
            component="h1"
            variant="h4"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            {heading}
          </Typography>

          <Typography
            variant="subtitle1"
            align="left"
            color="textPrimary"
            paragraph
          >
            {description}
          </Typography>

          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default AlbumHero;
