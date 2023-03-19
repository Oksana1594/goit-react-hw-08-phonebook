import { createSlice } from '@reduxjs/toolkit';

import { signup, login, getCurrent, logout } from './auth-operation';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(signup.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.loading = false;
        store.user = user;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(signup.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(login.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(login.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.user = user;
        store.token = token;
        store.loading = false;
        store.isLogin = true;
      })
      .addCase(login.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(getCurrent.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(getCurrent.fulfilled, (store, { payload }) => {
        const { name, email } = payload;
        store.loading = false;
        store.user.name = name;
        store.user.email = email;
        store.isLogin = true;
      })
      .addCase(getCurrent.rejected, (store, { payload }) => {
        store.loading = false;
        store.token = '';
        store.error = payload;
      })
      .addCase(logout.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(logout.fulfilled, store => {
        store.loading = false;
        store.user = {};
        store.token = '';
        store.isLogin = false;
      })
      .addCase(logout.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default authSlice.reducer;
