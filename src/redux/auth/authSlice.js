import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, register, signIn, signOut } from './authThunk';

const handleRejection = (state, action) => {
  state.isRefreshing = false;
};
const isRejectedAction = action => action.type.endsWith('rejected');
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: {
      name: null,
      email: null,
    },
    isLoggedIn: false,
    isRefreshing: true,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher(isRejectedAction, handleRejection)
      .addDefaultCase((state, action) => state);
  },
});

export const authReducer = authSlice.reducer;
