import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  LoginUser: false,
  User: [],
};

export const MainReducer = createSlice({
  name: 'Beauty',
  initialState,
  reducers: {
    LoginUser: (state, action) => {
      state.LoginUser = action.payload;
    },
    LogOutUser: (state, action) => {
      state.LoginUser = action.payload;
    },
  },
});

export const {LoginUser, LogOutUser} = MainReducer.actions;
export default MainReducer.reducer;
