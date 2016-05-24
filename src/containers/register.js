'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Register from '../components/register';
import * as actionCreators from '../actions/authActions';

class registerContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isPasswordValid: null,
    }
  }
  componentDidMount() {}
  componentWillReceiveProps() {}
  componentWillUnmount() {}

  validatePassword(password, confirmPassword) {
    this.setState({ isPasswordValid: (password === confirmPassword) });
  }
  handleSubmitRegister(ev) {
    ev.preventDefault();

    const form = ev.target;
    const formData = new FormData(form);
    const email = formData.get('recipes-email');
    const password = formData.get('recipes-password');
    const confirmPassword = formData.get('recipes-password-confirm');

    this.validatePassword(password, confirmPassword);

    if (password === confirmPassword) {
      this.props.actions.registerUser(email, password);
    }
  }

  render() {
    return (
      <Register
        onRegisterSubmit={(event) => this.handleSubmitRegister(event)}
      />
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(registerContainer);
