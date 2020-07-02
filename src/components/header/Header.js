import React from 'react';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <LibraryMusicIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Vinyl Tap
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
