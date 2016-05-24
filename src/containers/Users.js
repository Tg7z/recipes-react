'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import User from '../components/user';
import * as actionCreators from '../actions/user';

class usersContainer extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {};
  // }

  componentDidMount() {
    this.fetchUsers();
  }
  // componentWillReceiveProps() {}
  // componentWillUnmount() {}

  fetchUsers() {
    const token = this.props.token;
    this.props.actions.fetchProfiles(token);
  }

  render() {
    return (
      <ul>
        {this.props.users.map(user => {
          return <li key={user._id}>{user.username}</li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  users : state.users.data,
  isFetching: state.users.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(usersContainer);
