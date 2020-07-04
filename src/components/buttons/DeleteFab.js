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

const Delete = ({ handleDelete }) => {
  const classes = useStyles();

  const handleClick = () => {
    if (window.confirm('Do you really wanna delete this?')) {
      handleDelete();
    }
  };

  return (
    <Fab
      className={classes.fab}
      color="primary"
      aria-label="add"
      onClick={handleClick}
    >
      <DeleteIcon />
    </Fab>
  );
};

export default Delete;
