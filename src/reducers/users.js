'use strict';
import { createReducer } from '../helpers/utils';
import actions from '../constants/actions';
import jwtDecode from 'jwt-decode/lib';

const { RECEIVE_PROFILES, FETCH_PROFILES_REQUEST } = actions;

const initialState = {
  data: [],
  isFetching: false,
};

export default createReducer(initialState, {
  [RECEIVE_PROFILES]: (state, payload) => {
    return Object.assign({}, state, {
      'data': payload.data,
      'isFetching': false
    });
  },
  [FETCH_PROFILES_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      'isFetching': true
    });
  },
});
