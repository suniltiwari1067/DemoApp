import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: "",
  loginStatus: false,
  loginTime:new Date().toLocaleString()
};

export const UserDetailSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.username = action.payload.emailid;
      state.loginStatus = true;
      loginTime=new Date().toLocaleString()
    },
    logOutSuccess: (state) => {
      state.username = "";
      state.loginStatus = false;
    },
  },
});

export const {
  loginSuccess,
  logOutSuccess,
} = UserDetailSlice.actions;

export default UserDetailSlice.reducer;
