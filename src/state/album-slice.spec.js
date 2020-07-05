import albumReducer, {
  changeText,
  addTrack,
  removeTrack,
  addGenre,
  removeGenre,
  initialState,
  clearState,
} from './album-slice';

describe('album reducer', () => {
  it('should handle initial state', () => {
    expect(albumReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle changeText of `name`', () => {
    expect(
      albumReducer(initialState, {
        type: changeText.type,
        payload: { name: 'newName' },
      }),
    ).toEqual({
      entry: {
        name: 'newName',
        artists: '',
        image: '',
        genres: [],
        tracks: [],
      },
      loading: false,
      error: null,
    });
  });
  it('should handle changeText of `image`', () => {
    expect(
      albumReducer(initialState, {
        type: changeText.type,
        payload: { image: 'newImage' },
      }),
    ).toEqual({
      entry: {
        name: '',
        artists: '',
        image: 'newImage',
        genres: [],
        tracks: [],
      },
      loading: false,
      error: null,
    });
  });

  it('should handle addTrack', () => {
    const mockTrack = {
      name: 'test',
      track_number: 1,
      duration_ms: 30000,
      explicit: true,
    };

    const mockTrack2 = {
      name: 'test2',
      track_number: 2,
      duration_ms: 60000,
      explicit: false,
    };

    expect(
      albumReducer(
        { entry: { tracks: [mockTrack] } },
        {
          type: addTrack.type,
          payload: mockTrack2,
        },
      ),
    ).toEqual({ entry: { tracks: [mockTrack, mockTrack2] } });
  });

  it('should handle removeTrack', () => {
    expect(
      albumReducer(
        {
          entry: {
            name: '',
            artists: '',
            image: '',
            genres: [],
            tracks: [{ name: 'one' }, { name: 'two' }, { name: 'three' }],
          },
          loading: false,
          error: null,
        },
        {
          type: removeTrack.type,
          payload: 1,
        },
      ),
    ).toEqual({
      entry: {
        name: '',
        artists: '',
        image: '',
        genres: [],
        tracks: [{ name: 'one' }, { name: 'three' }],
      },
      loading: false,
      error: null,
    });
  });

  it('should handle addGenre', () => {
    expect(
      albumReducer(
        { entry: { genres: ['mock1'] } },
        {
          type: addGenre.type,
          payload: 'mock2',
        },
      ),
    ).toEqual({ entry: { genres: ['mock1', 'mock2'] } });
  });

  it('should handle removeTrack', () => {
    expect(
      albumReducer(
        { entry: { genres: ['mock1', 'mock2'] } },
        {
          type: removeGenre.type,
          payload: 0,
        },
      ),
    ).toEqual({ entry: { genres: ['mock2'] } });
  });

  it('should handle clearState', () => {
    expect(
      albumReducer(
        {
          ...initialState,
          entry: {
            name: 'name',
            tracks: [{ name: 'tName' }],
            genres: ['mock1', 'mock2'],
          },
        },
        {
          type: clearState.type,
        },
      ),
    ).toEqual(initialState);
  });
});
