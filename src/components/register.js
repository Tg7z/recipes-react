'use strict';

const { PropTypes } = React;

const Register = props => {
  return (
    <form role="form" method="post" onSubmit={props.onRegisterSubmit}>
      <div className="form-group">
        <input type="text" name="recipes-email" placeholder="Email" />
        <input type="password" name="recipes-password" placeholder="Password" />
        <input type="password" name="recipes-password-confirm" placeholder="Confirm Password" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

Register.propTypes = {
  onRegisterSubmit: PropTypes.func.isRequired,
};

export default Register;
