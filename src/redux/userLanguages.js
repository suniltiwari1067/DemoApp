import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLanguage: "english",
  showModal: false
};

export const UserLanguageSlice = createSlice({
  name: 'userLanguages',
  initialState,
  reducers: {
    updatelLanguage: (state, action) => {
      state.currentLanguage = action.payload.language;
      state.showModal = false;
    },
    openModal: (state) => {
      state.showModal = true
    },
  },
});

export const {
  updatelLanguage,
  openModal
} = UserLanguageSlice.actions;

export default UserLanguageSlice.reducer;
