import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://www.youtube.com/watch?v=4xgx4k83zzc">
      SpinalTap
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        The Tech!
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        This is Material UI styles, React Front-End, and Redux State manager.
        The Data is interfaced via a REST API through the Serverless Framework
        on AWS with DynamoDB Storage.
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;
