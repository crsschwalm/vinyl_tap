import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

const GenreInput = ({ onAdd }) => {
  const [genre, setGenre] = React.useState('');

  const handleChange = ({ target: { value } }) => {
    setGenre(value);
  };

  const onSubmit = () => {
    onAdd(genre);
    setGenre('');
  };

  return (
    <div>
      <TextField
        id="genre-input"
        label="Genre"
        type="name"
        onChange={handleChange}
        value={genre}
      />

      <IconButton
        edge="end"
        aria-label="add"
        onClick={onSubmit}
        disabled={!genre}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default GenreInput;
