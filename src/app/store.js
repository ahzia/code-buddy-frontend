import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from '../features/user/userSlice';
import meetingReducer from '../features/meeting/meetingSlice';
import snackbarReducer from '../common/snackbar/snackbarSlice';
import slideBarReducer from '../common/header/components/sideBarSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    snackbar: snackbarReducer,
    slideBar: slideBarReducer,
    meetings: meetingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
