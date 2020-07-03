import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const ButtonGroup = ({ onSubmit, onCancel, canSubmit }) => (
  <div style={{ width: '100%', margin: 16 }}>
    <Grid container spacing={2} justify="center">
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          disabled={!canSubmit}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="primary" onClick={onCancel}>
          Cancel
        </Button>
      </Grid>
    </Grid>
  </div>
);

export default ButtonGroup;
