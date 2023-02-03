import {combineReducers} from 'redux';
import UserDetailSlice from './userDetails';

const rootReducer = combineReducers({
  UserDetail: UserDetailSlice,
});

export default rootReducer;
