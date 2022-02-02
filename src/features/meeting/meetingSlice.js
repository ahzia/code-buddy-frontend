//User Meetings
//All Meetings
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {userMeetings} from '../../api/user';
import {userReservedMeetings} from './../api/reservations'

const initialState = {
  userMeetings: [],
  allMeetings: [],
  reservedMeetings: [],
  status: 'idle',
  error: null,
};

export const userMeetingsAsync = createAsyncThunk(
  'meetings/user-meetings',
  async (userId) => {
    const response = await userMeetings(userId);
    return response;
  },
);

export const userReservedMeetingsAsync = createAsyncThunk(
  'meetings/reserved-meetings',
  async (userId) => {
    const response = await userReservedMeetings(userId);
    return response;
  },
);

export const meetingSlice = createSlice({
  name: 'meetings',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(userMeetingsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userMeetingsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userMeetings = action.payload;
        state.error = null;
      })
      .addCase(userMeetingsAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(userReservedMeetingsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userReservedMeetingsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.reservedMeetings = action.payload;
        state.error = null;
      })
      .addCase(userReservedMeetingsAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })

  },
});

export const selectUserMeetingsState = (state) => state.meetings.userMeetings;
export const selectAllMeetingsState = (state) => state.meetings.allMeetings;
export const selectReservedMeetingsState = (state) => state.meetings.reservedMeetings;
export const selectMeetingsStatusState = (state) => state.meetings.status;
export const selectMeetingsErrorState = (state) => state.meetings.error;

export default meetingSlice.reducer;
