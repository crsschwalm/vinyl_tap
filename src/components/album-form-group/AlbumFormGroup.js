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

const AlbumFormGroup = ({ onChange, values: { name, artists, image } }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    onChange({ [key]: value });
  };

  return (
    <div className={classes.container}>
      <TextField
        id="name-input"
        name="name"
        label="Name"
        type="name"
        variant="outlined"
        onChange={handleChange}
        value={name}
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
          id="artists-input"
          name="artists"
          label="Artist Name"
          helperText="Required!"
          type="name"
          onChange={handleChange}
          value={artists}
          className={classes.baseTextField}
          style={{ flex: 1, paddingRight: 16, minWidth: '100px' }}
        />
        <TextField
          id="image-input"
          name="image"
          helperText="optional"
          label="Image Url"
          type="url"
          onChange={handleChange}
          value={image}
          style={{ flex: 2, minWidth: '200px' }}
        />
      </div>
    </div>
  );
};

export default AlbumFormGroup;
