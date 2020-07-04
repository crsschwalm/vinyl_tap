import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { hideToast } from '../../state/slice-of-toast';
import { useSelector, useDispatch } from 'react-redux';

const Toast = () => {
  const dispatch = useDispatch();
  const { message, show, severity } = useSelector((state) => state.toast);

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(hideToast());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={show}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
