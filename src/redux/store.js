import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './slices/loadingSlice';
import authSlice from '../modules/user/slices/authSlice';
import TicketReducer from '../modules/purchase/slices/ticketSlice';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authSlice,
    ticket: TicketReducer,
  },
});

export default store;
