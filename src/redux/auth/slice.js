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
          state.isCheckingLogin = true;
        }
      );
  },
});
// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: { name: null, email: null },
//     token: null,
//     isLoggedIn: null,
//     isRefetching: false,
//   },
//   extraReducers: builder => {
//     return builder
//       .addCase(registration.pending, (state, action) => state)
//       .addCase(registration.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(registration.rejected, (state, action) => state)
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.isLoggedIn = true;
//         state.user = action.payload.user;
//       })
//       .addCase(logOut.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = null;
//       })
//       .addCase(refreshUser.pending, state => {
//         state.isRefetching = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefetching = false;
//       })
//       .addCase(refreshUser.rejected, state => {
//         state.isRefetching = false;
//       })
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.rejected,
//           addContact.rejected,
//           updateContact.rejected,
//           deleteContact.rejected
//         ),
//         state => {
//           state.isLoading = null;
//         }
//       );
//   },
//   reducers: {},
// });

// export const authReducers = authSlice.reducer;
// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { logIn, logOut, refreshUser, register } from './operations';

// const extraActions = [register, logIn];
// const getActions = type => extraActions.map(action => action[type]);

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: { name: null, email: null },
//     token: null,
//     isLoggedIn: false,
//     isRefreshing: false,
//   },
//   extraReducers: builder =>
//     builder
//       .addCase(registration.pending, (state, action) => state)
//       .addCase(registration.rejected, (state, action) => state)
//       .addCase(logOut.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//       })
//       .addMatcher(isAnyOf(...getActions('fulfilled')), (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       }),
// });

export const authReducers = authSlice.reducer;
