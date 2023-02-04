import { combineReducers } from 'redux';
import UserDetailSlice from './userDetails';
import UserLanguageSlice from './userLanguages';

const rootReducer = combineReducers({
  UserDetail: UserDetailSlice,
  UserLanguage: UserLanguageSlice
});

export default rootReducer;
