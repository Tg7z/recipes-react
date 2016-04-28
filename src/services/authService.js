'use strict';
import request from 'reqwest';
import when from 'when';
import { LOGIN_URL } from '../constants/loginConstants';
import { loginUser, logoutUser } from '../actions/loginActions';

class AuthService {

  login(data) {
    return this.handleAuth( when( request({
      url: LOGIN_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data,
    })));
  }

  logout() {
    logoutUser();
  }

  handleAuth(loginPromise) {
    return loginPromise.then( response => {
      var jwt = response.id_token;
      loginUser(jwt);
      return true;
    });
  }
}

export default new AuthService()
