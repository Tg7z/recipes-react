'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/login';
import * as actionCreators from '../actions/authActions';

class loginContainer extends React.Component {
  constructor(props) {
    super(props);

    const redirectRoute = this.props.location.query.next || '/';

    this.state = {
      redirectTo: redirectRoute,
    };
  }

  // componentDidMount() {}
  // componentWillReceiveProps() {}
  // componentWillUnmount() {}

  handleSubmitLogin(ev) {
    ev.preventDefault();

    const form = ev.target;
    const formData = new FormData(form);
    const username = formData.get('recipes-username');
    const password = formData.get('recipes-password');

    this.props.actions.loginUser(username, password, this.state.redirectTo);
  }

  render() {
    return (
      <Login
        onLoginSubmit={(event) => this.handleSubmitLogin(event)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticating : state.auth.isAuthenticating,
  statusText       : state.auth.statusText,
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch),
});

// loginContainer.contextTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(loginContainer);
