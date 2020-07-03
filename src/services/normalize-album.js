export const normalizeTracks = (tracks = []) =>
  tracks
    .map(({ track_number, ...rest }, index) => ({
      ...rest,
      track_number: track_number || index + 1,
    }))
    .sort(tracksByNumber);

export const tracksByNumber = (a, b) => {
  if (a.track_number < b.track_number) {
    return -1;
  }
  if (a.track_number > b.track_number) {
    return 1;
  }
  return 0;
};

export const stringifyArtists = (artists) =>
  artists.map(({ name }) => name).join(', ');
