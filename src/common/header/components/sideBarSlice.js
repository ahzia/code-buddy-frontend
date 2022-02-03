import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

export const slideBarSlice = createSlice({
  name: 'slideBar',
  initialState,
  reducers: {
    openSlidebar: (state) => {
      state.open = true;
    },
    closeSlidebar: (state) => {
      state.open = false;
    },
  },
});

export const { openSlidebar, closeSlidebar } = slideBarSlice.actions;

export const selectSlidebarState = (state) => state.slideBar.open;

export default slideBarSlice.reducer;
