import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DeleteIcon from '@material-ui/icons/Delete';

const Track = ({ name, duration_ms = 0, onDelete, explicit }) => {
  const minutes = Math.round(Number(duration_ms) / 1000 / 60);

  const secondaryText = `${minutes} min${explicit ? ` | EXPLICIT` : ''}`;

  return (
    <ListItem style={{ borderBottom: 'lightgrey solid 1px' }}>
      <ListItemAvatar>
        <Avatar>
          <PlayArrowIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={secondaryText} />

      {onDelete && (
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};

export default Track;
