'use strict';
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import auth from './auth';
import users from './users';

export default combineReducers({
  auth,
  users,
  router: routerStateReducer
});
