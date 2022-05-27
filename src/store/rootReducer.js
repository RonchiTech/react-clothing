import { combineReducers } from 'redux';
import { userReducer } from './reducer/user.reducer';

export const rootReducer = combineReducers({ user: userReducer });
