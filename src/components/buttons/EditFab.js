import React from 'react';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: '75px',
    right: '35px',
  },
}));

const EditFab = ({ id }) => {
  const classes = useStyles();

  return (
    <Fab
      className={classes.fab}
      color="primary"
      aria-label="add"
      href={`/edit/${id}`}
    >
      <EditIcon />
    </Fab>
  );
};

export default EditFab;
