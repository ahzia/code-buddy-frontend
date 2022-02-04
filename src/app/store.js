import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import meetingReducer from '../features/meeting/meetingSlice';
import snackbarReducer from '../common/snackbar/snackbarSlice';
import slideBarReducer from '../common/header/components/sideBarSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    snackbar: snackbarReducer,
    slideBar: slideBarReducer,
    meeting: meetingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
