import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './slices/loadingSlice';
import authSlice from '../modules/user/slices/authSlice';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authSlice,
  },
});

export default store;
