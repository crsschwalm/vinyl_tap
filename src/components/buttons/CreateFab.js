import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: '75px',
    right: '35px',
  },
}));

const CreateFab = () => {
  const classes = useStyles();

  return (
    <Fab
      className={classes.fab}
      color="primary"
      aria-label="add"
      href="/create"
    >
      <AddIcon />
    </Fab>
  );
};

export default CreateFab;
