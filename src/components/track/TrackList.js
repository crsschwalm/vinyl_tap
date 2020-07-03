import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Track from './Track';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  listBackground: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const TrackList = ({ tracks }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Typography variant="h6" className={classes.title}>
        Tracks
      </Typography>
      <div className={classes.listBackground}>
        <List>
          {tracks.map((track, i) => (
            <Track {...track} key={i} />
          ))}
        </List>
      </div>
    </Grid>
  );
};

export default TrackList;
