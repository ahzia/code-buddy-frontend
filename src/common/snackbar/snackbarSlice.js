import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  message: '',
  serverity: 'info',
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSuccessSnackbar: (state, action) => {
      state.open = true;
      state.message = action.payload;
      state.serverity = 'success';
    },
    openErrorSnackbar: (state, action) => {
      state.open = true;
      state.message = action.payload;
      state.serverity = 'error';
    },
    closeSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { openSuccessSnackbar, openErrorSnackbar, closeSnackbar } = snackbarSlice.actions;

export const selectSnackbarState = (state) => state.snackbar;

export default snackbarSlice.reducer;
