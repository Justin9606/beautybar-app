import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  LoginUser: false,
  IsUserRegister: false,
  UserPhone: '',
  UserDetail: [],
};

export const AuthReducer = createSlice({
  name: 'Beauty',
  initialState,
  reducers: {
    LoginUser: (state, action) => {
      state.LoginUser = action.payload;
    },
    LogOutUser: (state, action) => {
      state.LoginUser = action.payload;
    },
    UserPhone: (state, action) => {
      console.log('Action', action);
      state.UserPhone = action.payload;
    },
    IsUserRegister: (state, action) => {
      state.IsUserRegister = true;
    },
    UserDetail: (state, action) => {
      state.UserDetail = action.payload;
    },
  },
});

export const {LoginUser, LogOutUser, UserPhone, IsUserRegister, UserDetail} =
  AuthReducer.actions;
export default AuthReducer.reducer;
