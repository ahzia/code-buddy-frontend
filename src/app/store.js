import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import meetingReducer from '../features/meeting/meetingSlice';
import snackbarReducer from '../common/snackbar/snackbarSlice';
import { slideBarReducer } from '../common/header/components/sideBarSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    snackbar: snackbarReducer,
    meeting: meetingReducer,
    slideBar: slideBarReducer,
  },
});

export default store;
