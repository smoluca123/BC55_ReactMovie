import { configureStore } from '@reduxjs/toolkit';

const initialLoadingState = {
  isLoading: true,
};

const loadingReducer = (state = initialLoadingState, action) => {
  switch (action.type) {
    case 'loading/SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});

export default store;
