import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AlbumHero from '../components/hero/AlbumHero';
import TrackList from '../components/track/TrackList';
import GenreList from '../components/genre-list/GenreList';
import EditFab from '../components/buttons/EditFab';
import { sortTracks } from '../services/sort-tracks';

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const mockAlbum = {
  artists: [{ name: 'Passenger' }],
  image: 'https://i.scdn.co/image/ab67616d0000b2736db1a5079623a15795064a09',
  tracks: [
    {
      name: 'Simple Song',
      duration_ms: 228480,
      explicit: false,
      track_number: 1,
      artists: [{ name: 'Passenger' }],
    },
    {
      name: 'Sweet Louise',
      duration_ms: 236866,
      explicit: false,
      track_number: 2,
      artists: [{ name: 'Passenger' }],
    },
    {
      name: 'The Boy Who Cried Wolf',
      duration_ms: 196813,
      explicit: false,
      track_number: 3,
      artists: [{ name: 'Passenger' }],
    },
    {
      name: 'Walls',
      duration_ms: 221663,
      explicit: false,
      track_number: 4,
      artists: [{ name: 'Passenger' }],
    },
    {
      name: 'Setting Suns',
      duration_ms: 257229,
      explicit: false,
      track_number: 5,
      artists: [{ name: 'Passenger' }],
    },
    {
      name: 'And I Love Her',
      duration_ms: 162666,
      explicit: false,
      track_number: 6,
      artists: [{ name: 'Passenger' }],
    },
    {
      name: 'Someday',
      duration_ms: 247893,
      explicit: false,
      track_number: 7,
      artists: [{ name: 'Passenger' }],
    },
    {
      name: 'In the End',
      duration_ms: 184933,
      explicit: false,
      track_number: 8,
      artists: [{ name: 'Passenger' }],
    },
    {
      name: 'Thunder and Lightning',
      duration_ms: 104824,
      explicit: false,
      track_number: 9,
      artists: [{ name: 'Passenger' }],
    },
    {
      name: 'Lanterns',
      duration_ms: 301425,
      explicit: false,
      track_number: 10,
      artists: [{ name: 'Passenger' }],
    },
  ],
  updatedAt: 1593710552799,
  createdAt: 1593710552799,
  id: 'ae24af93-1b85-454a-8edf-3ea738e14b86',
  genres: ['something'],
  name: 'The Boy Who Cried Wolf',
};

const View = ({ album = mockAlbum }) => {
  const classes = useStyles();
  const sortedTracks = sortTracks(album.tracks);
  const artist = album.artists.map(({ name }) => name).join(', ');
  const genreItems = album.genres.map((genre) => ({
    label: genre,
    color: 'primary',
  }));
  return (
    <>
      <AlbumHero image={album.image} heading={album.name} description={artist}>
        <GenreList genreItems={genreItems} />
      </AlbumHero>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container>
          <TrackList tracks={sortedTracks}></TrackList>
        </Grid>
      </Container>
      <EditFab id={album.id} />
    </>
  );
};

export default View;
