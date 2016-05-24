'use strict';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutAndRedirect } from '../actions/auth';
import '../sass/main.sass';

const { Link } = ReactRouter;

@connect((state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
})

export default class CoreLayout extends React.Component {
  render () {
    const { dispatch } = this.props;

    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li><Link className="navbar-brand" to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          { !this.props.isAuthenticated
           ? <li><Link to="/login">Login</Link></li>
           : ''
          }
          { !this.props.isAuthenticated
           ? <li><Link to="/register">Register</Link></li>
           : ''
          }
          { this.props.isAuthenticated
           ? <li><button onClick={() => this.props.dispatch(logoutAndRedirect())}>Logout</button></li>
           : ''
          }
        </ul>

        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
