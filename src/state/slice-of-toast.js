import { createSlice } from '@reduxjs/toolkit';

const sliceOfToast = createSlice({
  name: 'toast',
  initialState: {
    show: false,
    message: '',
    severity: 'info',
  },
  reducers: {
    showToast: (state, action) => {
      if (!state.show) {
        state.severity = action.payload.severity;
        state.message = action.payload.message;
        state.show = true;
      }
    },

    hideToast: (state) => {
      state.show = false;
    },
  },
  extraReducers: {},
});

export const { showToast, hideToast } = sliceOfToast.actions;

export default sliceOfToast.reducer;
