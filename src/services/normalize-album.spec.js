import {
  normalizeTracks,
  tracksByNumber,
  stringifyArtists,
  makeAlbumSubmitable,
} from './normalize-album';

describe('normalizeTracks', () => {
  it('should fill in track_number', () => {
    const mockTracks = [
      { name: 'one', duration_ms: 3000, explicit: false },
      { name: 'two', duration_ms: 5000, explicit: false, track_number: 2 },
      { name: 'three', duration_ms: 5000, explicit: true },
    ];

    const subject = normalizeTracks(mockTracks);

    expect(subject).toEqual([
      { name: 'one', duration_ms: 3000, explicit: false, track_number: 1 },
      { name: 'two', duration_ms: 5000, explicit: false, track_number: 2 },
      { name: 'three', duration_ms: 5000, explicit: true, track_number: 3 },
    ]);
  });

  it('should sort by track_number', () => {
    const mockTracks = [
      { name: 'one', duration_ms: 3000, explicit: false, track_number: 1 },
      { name: 'three', duration_ms: 5000, explicit: true, track_number: 3 },
      { name: 'two', duration_ms: 5000, explicit: false, track_number: 2 },
    ];

    const subject = normalizeTracks(mockTracks);

    expect(subject).toEqual([
      { name: 'one', duration_ms: 3000, explicit: false, track_number: 1 },
      { name: 'two', duration_ms: 5000, explicit: false, track_number: 2 },
      { name: 'three', duration_ms: 5000, explicit: true, track_number: 3 },
    ]);
  });
});

describe('tracksByNumber', () => {
  it('should sort objects by track_number', () => {
    const elements = [
      { track_number: 1 },
      { track_number: 3 },
      { track_number: 9 },
      { track_number: 2 },
      { track_number: 7 },
    ];

    const subject = elements.sort(tracksByNumber);

    expect(subject).toEqual([
      { track_number: 1 },
      { track_number: 2 },
      { track_number: 3 },
      { track_number: 7 },
      { track_number: 9 },
    ]);
  });
});

describe('stringifyArtists', () => {
  it('should return a string', () => {
    const artists = [
      { name: 'jon' },
      { name: 'jacob' },
      { name: 'jingleheimer' },
    ];

    const subject = stringifyArtists(artists);

    expect(typeof subject).toEqual('string');
  });

  it('should return the names of artists separated by commas', () => {
    const artists = [
      { name: 'jon' },
      { name: 'jacob' },
      { name: 'jingleheimer' },
    ];

    const subject = stringifyArtists(artists);

    expect(subject).toEqual('jon, jacob, jingleheimer');
  });
});

describe('makeAlbumSubmitable', () => {
  it('should conditionally add items if they are available', () => {
    const album = {
      name: 'something',
      image: '',
      artists: '',
      tracks: [],
      genres: ['one'],
    };

    const subject = makeAlbumSubmitable(album);

    expect(subject).toEqual({ name: 'something', genres: ['one'] });
  });

  it('should normalize artists to first entry in array of artists', () => {
    const album = {
      name: 'something',
      image: '',
      artists: 'The person',
      tracks: [],
      genres: [],
    };

    const subject = makeAlbumSubmitable(album);

    expect(subject).toEqual({
      name: 'something',
      artists: [{ name: 'The person' }],
    });
  });
});
