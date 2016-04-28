'use strict';
import Login from '../components/login';
import Auth from '../services/authService';
// let { PropTypes } = React;

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

    console.log(data);
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
