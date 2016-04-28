'use strict';
import { LOGIN_USER, LOGOUT_USER } from '../constants/loginConstants';

export const loginUser = (jwt) => {
  const savedJwt = localStorage.getItem('jwt');
  console.log(jwt, savedJwt);

  // TODO: dispatch redux action LOGIN_USER, jwt
  // foo.dispatch({
  //   actionType: LOGIN_USER,
  //   jwt: jwt
  // });

  if (savedJwt !== jwt) {
    localStorage.setItem('jwt', jwt);
  }
};

export const logoutUser = () => {
  localStorage.removeItem('jwt');
  // TODO: dispatch redux action LOGOUT_USER
}
