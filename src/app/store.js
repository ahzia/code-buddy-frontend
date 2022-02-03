import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import snackbarReducer from '../common/snackbar/snackbarSlice';
import meetingReducer from '../features/meeting/meetingSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    snackbar: snackbarReducer,
    meeting: meetingReducer,
  },
});

export default store;
