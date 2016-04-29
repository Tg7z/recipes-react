'use strict';
const API_URL = 'http://localhost:5000/api/v1/';

export default {
  API_URL,
  LOGIN_URL: `${API_URL}authenticate`,
  SIGNUP_URL: `${API_URL}register`,
  PROTECTED_URL: `${API_URL}protected`,
};
