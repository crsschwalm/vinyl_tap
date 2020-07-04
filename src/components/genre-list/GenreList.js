import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    width: '100%',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const GenreList = ({ genreItems = [] }) => {
  const classes = useStyles();

  return (
    <>
      <Typography
        style={{ marginTop: 16 }}
        variant="subtitle1"
        align="left"
        color="textSecondary"
        paragraph
      >
        Genres
      </Typography>
      <ul className={classes.root}>
        {genreItems.map((item, i) => (
          <li key={i}>
            <Chip className={classes.chip} {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
