import { createSlice } from '@reduxjs/toolkit';

const loadingReducer = createSlice({
  name: 'loading',
  initialState: {
    isLoading: true,
  },
  reducers: {
    setLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
});

export const { setLoading } = loadingReducer.actions;

export default loadingReducer.reducer;
