'use strict';
// import jwtDecode from 'jwt-decode/lib';
import { push } from 'redux-router';
import { checkHttpStatus, parseJSON } from '../helpers/utils';
import { loginUserFailure } from './auth';
import actions from '../constants/actions';
import urls from '../constants/urls';
import { authHeaders } from '../helpers/auth';

const { FETCH_PROFILES_REQUEST, RECEIVE_PROFILES } = actions;
const { USERS_URL } = urls;

/* ------------------------ *
 * ----- USER ACTIONS ----- *
 * ------------------------ */

export function receiveProfileData(data) {
  return {
    type: RECEIVE_PROFILES,
    payload: {
      data: data
    }
  }
}

export function fetchProfileRequest() {
  return {
    type: FETCH_PROFILES_REQUEST
  }
}

export function fetchProfiles(token, user_id) {
  return (dispatch, state) => {
    dispatch(fetchProfileRequest());
    const fetchOptions = Object.assign({}, authHeaders(token));
    let fetchURL = USERS_URL;

    if (user_id) fetchURL += `/${user_id}`;

    return fetch(fetchURL, fetchOptions)
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        dispatch(receiveProfileData(response));
      })
      .catch(error => {
        if(error.response.status === 401) {
          dispatch(loginUserFailure(error));
          dispatch(push('/login'));
        }
      });
  }
}
