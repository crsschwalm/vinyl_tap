export const sortTracks = (tracks) =>
  tracks.sort((a, b) => {
    if (a.track_number < b.track_number) {
      return -1;
    }
    if (a.track_number > b.track_number) {
      return 1;
    }
    return 0;
  });
