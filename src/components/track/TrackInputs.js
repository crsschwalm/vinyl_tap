import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    border: '1px solid lightgrey',
    borderRadius: '10px',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  paddingLeft: {
    paddingLeft: '16px',
  },
}));

const TrackInputs = ({ onAdd }) => {
  const classes = useStyles();
  const defaultState = {
    name: '',
    duration_ms: 0,
    explicit: false,
  };

  const [state, setState] = React.useState(defaultState);

  const handleChange = ({ target: { value, checked, name } }) => {
    setState({ ...state, [name]: value || checked });
  };

  const onClear = () => {
    setState(defaultState);
  };

  const submit = () => {
    onAdd(state);
    onClear();
  };

  return (
    <div className={classes.container}>
      <Avatar>
        <PlayArrowIcon />
      </Avatar>
      <FormGroup row>
        <TextField
          id="name-input"
          name="name"
          label="Name"
          type="name"
          onChange={handleChange}
          value={state.name}
          helperText="Required!"
        />
        <TextField
          id="duration_ms-input"
          name="duration_ms"
          label="Duration (min)"
          type="number"
          onChange={handleChange}
          value={state.duration_ms}
          className={classes.paddingLeft}
        />
        <FormControlLabel
          className={classes.paddingLeft}
          control={
            <Checkbox
              checked={state.explicit}
              onChange={handleChange}
              name="explicit"
            />
          }
          label="Explicit"
        />
      </FormGroup>

      <div className={classes.buttonGroup}>
        <IconButton
          edge="end"
          aria-label="add"
          onClick={submit}
          disabled={!state.name}
        >
          <AddIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={onClear}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TrackInputs;
