import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { registration, logIn, logOut, refreshUser } from './operations';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: null,
    isRefetching: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefetching = false;
      })
      .addCase(registration.rejected, state => {
        state.user = { name: null, email: null };
        state.isRefetching = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefetching = false;
      })
      .addCase(logIn.rejected, state => {
        state.user = { name: null, email: null };
        state.isRefetching = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefetching = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.user = { name: null, email: null };
        state.isRefetching = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefetching = false;
      })
      .addCase(logOut.rejected, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefetching = false;
      })
      .addMatcher(
        isAnyOf(
          registration.pending,
          logIn.pending,
          logOut.pending,
          refreshUser.pending
        ),
        state => {
          state.isRefetching = true;
        }
      );
  },
});

export const authReducers = authSlice.reducer;
