'use strict';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import routes from '../config/routes';

export default class Root extends React.Component {

  static propTypes = {
    store: React.PropTypes.object.isRequired
  };

  render () {
    return (
      <Provider store={this.props.store}>
        <ReduxRouter>
          {routes}
        </ReduxRouter>
      </Provider>
    );
  }
}
