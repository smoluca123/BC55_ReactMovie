import { createSlice } from '@reduxjs/toolkit';

const TicketReducer = createSlice({
  name: 'ticket',
  initialState: {
    selectedTickets: [],
    totalPrice: 0,
  },
  reducers: {
    setSelectedTicket: (state, action) => {
      const isSelected = !!state.selectedTickets.find(
        (item) => item.maGhe == action.payload.maGhe
      );
      if (isSelected) {
        return {
          ...state,
          selectedTickets: state.selectedTickets.filter(
            (item) => item.maGhe != action.payload.maGhe
          ),
          totalPrice: state.totalPrice - action.payload.giaVe,
        };
      }
      return {
        ...state,
        selectedTickets: [...state.selectedTickets, action.payload],
        totalPrice: state.totalPrice + action.payload.giaVe,
      };
    },
    resetSelectedTicket: (state) => {
      return {
        ...state,
        selectedTickets: [],
        totalPrice: 0,
      };
    },
  },
});

export const { setSelectedTicket, resetSelectedTicket } = TicketReducer.actions;
export default TicketReducer.reducer;
