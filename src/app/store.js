import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import snackbarReducer from '../common/snackbar/snackbarSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    snackbar: snackbarReducer,
  },
});

export default store;
