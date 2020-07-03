import React from 'react';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    '&:hover': { cursor: 'pointer' },
  },
  name: {
    '&:hover': { cursor: 'pointer' },
  },
}));

const Header = () => {
  const classes = useStyles();

  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <AppBar position="relative">
      <Toolbar>
        <LibraryMusicIcon className={classes.icon} onClick={handleClick} />
        <Typography
          className={classes.name}
          variant="h6"
          color="inherit"
          noWrap
          onClick={handleClick}
        >
          Vinyl Tap
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
