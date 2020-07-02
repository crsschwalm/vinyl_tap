import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          This Is Vinyl Tap
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          This is Vinyl Tap, a collection of albums for your data management
          pleasure. Check out an album or add your own. This is Material UI
          styles, React Front-End, and Redux State manager. The Data is
          interfaced via a REST API through the Serverless Framework on AWS with
          DynamoDB Storage.
        </Typography>
      </Container>
    </div>
  );
};

export default Hero;
