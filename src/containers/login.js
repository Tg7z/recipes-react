'use strict';
import React, { PropTypes } from 'react';
import Login from '../components/login';
import Auth from '../services/authService';

class loginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount() {}
  // componentWillReceiveProps() {}
  // componentWillUnmount() {}

  handleSubmitLogin(ev, x) {
    ev.preventDefault();

    const form = ev.target;
    // const form = document.querySelector('form');
    const formData = new FormData(form);
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
    };

    Auth.login(data).catch( err => {
      console.log('Error logging in', err);
    });
  }

  render() {
    return (
      <Login
        onLoginSubmit={(event) => this.handleSubmitLogin(event)}
      />
    );
  }
}

// loginContainer.contextTypes = {};

module.exports = loginContainer;
