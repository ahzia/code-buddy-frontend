import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserMeetings } from '../../api/user';
import { getUserReservedMeetings, createReservation } from '../../api/reservation';
import { getMeetingTypesMeetings, getMeetingTypes } from '../../api/meetingType';
import { getAllMeetings, createMeeting } from '../../api/meeting';

const initialState = {
  userMeetings: [],
  allMeetings: [],
  catagoriesedMeetings: [],
  reservedMeetings: [],
  meetingTypes: [],
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

export const allMeetingsAsync = createAsyncThunk(
  'meetings/all',
  async () => {
    const response = await getAllMeetings();
    return response;
  },
);

export const meetingTypesAsync = createAsyncThunk(
  'meetings/types',
  async () => {
    const response = await getMeetingTypes();
    return response;
  },
);

export const createMeetingAsync = createAsyncThunk(
  'meetings/create',
  async (meeting) => {
    const response = await createMeeting(meeting);
    return response;
  },
);

export const createReservationAsync = createAsyncThunk(
  'meetings/reserved/create',
  async (reservationObject) => {
    const response = await createReservation(reservationObject);
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
      .addCase(meetingTypeMeetingsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(meetingTypeMeetingsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.catagoriesedMeetings = [...action.payload];
        state.error = null;
      })
      .addCase(meetingTypeMeetingsAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(allMeetingsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(allMeetingsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.allMeetings = action.payload;
        state.error = null;
      })
      .addCase(allMeetingsAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(meetingTypesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(meetingTypesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.meetingTypes = action.payload;
        state.error = null;
      })
      .addCase(meetingTypesAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(createMeetingAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createMeetingAsync.fulfilled, (state) => {
        state.status = 'created';
        state.error = null;
      })
      .addCase(createMeetingAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(createReservationAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createReservationAsync.fulfilled, (state) => {
        state.status = 'reserved';
        state.error = null;
      })
      .addCase(createReservationAsync.rejected, (state, action) => {
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
export const selectMeetingTypesState = (state) => state.meetings.meetingTypes;
export const selectMeetingsState = (state) => state.meetings;
export default meetingSlice.reducer;
