'use strict';

const { PropTypes } = React;

const Login = props => {
  return (
    <form role="form" method="post" onSubmit={props.onLoginSubmit}>
      <div className="form-group">
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

Login.propTypes = {
  onLoginSubmit: PropTypes.func.isRequired,
};

export default Login;