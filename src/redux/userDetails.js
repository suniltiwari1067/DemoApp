import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: "",
  loading: false,
  error: '',
  loginStatus: false
};

export const UserDetailSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    loadSignIn: state => {
      state.loading = true;
      state.error = '';
      loginStatus = false;
    },
    loginSuccess: (state, action) => {
console.log("action >>>",action)

      state.loading = false;
      state.username = action.payload.emailid;
      state.loginStatus = true
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.loginStatus = false
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadSignIn,
  loginSuccess,
  loginFailure,
} = UserDetailSlice.actions;

export default UserDetailSlice.reducer;
