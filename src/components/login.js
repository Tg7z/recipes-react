'use strict';

const { PropTypes } = React;

const Login = props => {
  return (
    <form role="form" method="post" onSubmit={props.onLoginSubmit}>
      <div className="form-group">
        <input type="text" name="recipes-email" placeholder="Email" />
        <input type="password" name="recipes-password" placeholder="Password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

Login.propTypes = {
  onLoginSubmit: PropTypes.func.isRequired,
};

export default Login;
