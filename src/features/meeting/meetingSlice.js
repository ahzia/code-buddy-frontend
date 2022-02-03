// User Meetings
// All Meetings
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserMeetings } from '../../api/user';
import getUserReservedMeetings from '../../api/reservation';
import { getMeetingTypesMeetings } from '../../api/meetingType';

const initialState = {
  userMeetings: [],
  allMeetings: [],
  reservedMeetings: [],
  status: 'idle',
  error: null,
};

export const userMeetingsAsync = createAsyncThunk(
  'meetings/user',
  async (userId) => {
    const response = await getUserMeetings(userId);
    return response;
  },
);

export const userReservedMeetingsAsync = createAsyncThunk(
  'meetings/reserved',
  async (userId) => {
    const response = await getUserReservedMeetings(userId);
    return response;
  },
);

export const meetingTypeMeetingsAsync = createAsyncThunk(
  'meetings/catagorised',
  async (meetingId) => {
    const response = await getMeetingTypesMeetings(meetingId);
    return { meetingId: response };
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
      .addCase(meetingTypeMeetingsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(meetingTypeMeetingsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.allMeetings = [...action.payload];
        state.error = null;
      })
      .addCase(meetingTypeMeetingsAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export const selectUserMeetingsState = (state) => state.meetings.userMeetings;
export const selectAllMeetingsState = (state) => state.meetings.allMeetings;
export const selectReservedMeetingsState = (state) => state.meetings.reservedMeetings;
export const selectMeetingsStatusState = (state) => state.meetings.status;
export const selectMeetingsErrorState = (state) => state.meetings.error;

export default meetingSlice.reducer;
