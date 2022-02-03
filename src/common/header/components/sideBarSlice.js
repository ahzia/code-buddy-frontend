import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

export const slideBarSlice = createSlice({
  name: 'slideBar',
  initialState,
  reducers: {
    openSlideBar: (state) => {
      state.open = true;
    },
    closeSlideBar: (state) => {
      state.open = false;
    },
  },
});

export const { openSlideBar, closeSlideBar } = slideBarSlice.actions;

export const selectSlideBarState = (state) => state.slideBar.open;

export default slideBarSlice.reducer;
