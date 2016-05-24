'use strict';
const API_URL = 'http://localhost:5000/api/v1/';

export default {
  API_URL,
  LOGIN_URL: `${API_URL}authenticate`,
  REGISTER_URL: `${API_URL}register`,
  USERS_URL: `${API_URL}users`,
};
