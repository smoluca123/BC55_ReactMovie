import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signinAPI } from '../../../apis/userAPI';

export const signin = createAsyncThunk('auth/signin', async (values) => {
  try {
    const data = await signinAPI(values);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: JSON.parse(localStorage.getItem('user')) || null,
    isLoading: false,
    error: null,
  },
  reducers: {
    signOut: (state) => {
      localStorage.removeItem('user');
      return {
        ...state,
        currentUser: null,
        error: null,
        isLoading: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      })
      .addCase(signin.fulfilled, (state, action) => {
        return {
          ...state,
          currentUser: action.payload,
          isLoading: false,
          error: null,
        };
      })
      .addCase(signin.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.error.message,
        };
      });
  },
});

export default authSlice.reducer;
export const { signOut } = authSlice.actions;
