import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import TrackList from '../components/track/TrackList';
import TrackInputs from '../components/track/TrackInputs';
import AlbumHero from '../components/hero/AlbumHero';
import GenreList from '../components/genre-list/GenreList';
import { sortTracks } from '../services/sort-tracks';
import AlbumFormGroup from '../components/album-form-group/AlbumFormGroup';
import ButtonGroup from '../components/album-form-group/ButtonGroup';
import GenreInput from '../components/genre-list/GenreInput';
import DeleteFab from '../components/buttons/DeleteFab';

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
const Edit = ({
  match: {
    params: { id },
  },
  album = mockAlbum,
}) => {
  const artist = album.artists.map(({ name }) => name).join(', ');

  const [albumMetaData, setAlbumInputs] = React.useState({
    name: album.name,
    artist,
    image: album.image,
  });

  const handleAlbumTextChange = ({ target: { value, name } }) => {
    setAlbumInputs({ ...albumMetaData, [name]: value });
  };

  const [tracks, setTracks] = React.useState(album.tracks);
  const sortedTracks = sortTracks(tracks);

  const handleAddTrack = (newTrack) => {
    const track_number = tracks.length + 1;
    setTracks([...tracks, { track_number, ...newTrack }]);
  };
  const handleDeleteTrack = (oldTrackNumber) => {
    setTracks(
      tracks.filter(({ track_number }) => track_number !== oldTrackNumber),
    );
  };

  const [genres, setGenres] = React.useState(album.genres);

  const handleAddGenre = (newGenre) => setGenres([...genres, newGenre]);
  const handleDeleteGenre = (index) =>
    setGenres(genres.filter((_, i) => index !== i));

  const history = useHistory();
  const handleCancel = () => history.push('/');

  const handleSubmit = () => {
    console.log('submitting :>> ', {
      name: albumMetaData.name,
      artists: [{ name: albumMetaData.artist }],
      image: albumMetaData.image,
      tracks,
      genres,
    });
  };

  return (
    <>
      <AlbumHero image={album.image} heading={album.name} description={artist}>
        <GenreList
          genreItems={genres.map((genre, i) => ({
            onDelete: () => handleDeleteGenre(i),
            label: genre,
            color: 'secondary',
          }))}
        />
        <GenreInput onAdd={handleAddGenre} />
      </AlbumHero>
      <Container maxWidth="md">
        <Grid container>
          <AlbumFormGroup
            onChange={handleAlbumTextChange}
            values={albumMetaData}
          />
          <TrackList
            tracks={sortedTracks.map((track) => ({
              onDelete: () => handleDeleteTrack(track.track_number),
              ...track,
            }))}
          ></TrackList>
          <TrackInputs onAdd={handleAddTrack} />
          <ButtonGroup
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            canSubmit={!!albumMetaData.name}
          />
        </Grid>
      </Container>
      <DeleteFab id={album.id} />
    </>
  );
};

export default Edit;
