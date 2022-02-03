import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginOrRegister } from '../../api/user';

const initialState = {
  userName: null,
  id: null,
  userDetails: null,
  status: 'signout',
  error: null,
};

export const loginOrRegisterAsync = createAsyncThunk(
  'user/login-register',
  async (userName) => {
    const response = await loginOrRegister(userName);
    return response;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginOrRegisterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginOrRegisterAsync.fulfilled, (state, action) => {
        state.status = 'login';
        state.userName = action.payload.user_name;
        state.id = action.payload.id;
        state.error = null;
      })
      .addCase(loginOrRegisterAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export const selectUserState = (state) => state.user;

export default userSlice.reducer;
