import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
  },
  secondRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}));

const AlbumFormGroup = ({ onChange, values }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TextField
        id="name-input"
        name="name"
        label="Name"
        type="name"
        variant="outlined"
        onChange={onChange}
        value={values.name}
        placeholder="Placeholder"
        helperText="Required!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <div className={classes.secondRow}>
        <TextField
          id="artist-input"
          name="artist"
          label="Artist Name"
          type="name"
          onChange={onChange}
          value={values.artist}
          className={classes.baseTextField}
          style={{ flex: 1, paddingRight: 16, minWidth: '100px' }}
        />
        <TextField
          id="image-input"
          name="image"
          label="Image Url"
          type="url"
          onChange={onChange}
          value={values.image}
          style={{ flex: 2, minWidth: '200px' }}
        />
      </div>
    </div>
  );
};

export default AlbumFormGroup;
