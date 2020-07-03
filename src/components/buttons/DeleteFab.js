import React from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: '75px',
    right: '35px',
  },
}));

const Delete = ({ id }) => {
  const classes = useStyles();

  return (
    <Fab
      className={classes.fab}
      color="primary"
      aria-label="add"
      onClick={() => alert('you are going to delete this album')}
    >
      <DeleteIcon />
    </Fab>
  );
};

export default Delete;
