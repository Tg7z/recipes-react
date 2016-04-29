'use strict';
import App from '../containers/App';
import HomeView from '../containers/Home';
import LoginView from '../containers/Login';
import RegisterView from '../containers/Register';
import ProtectedView from '../containers/Protected';
import { requireAuthentication } from '../helpers/requireAuth';

const { Route, IndexRoute } = ReactRouter;

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ HomeView }/>
    <Route path="login" component={ LoginView }/>
    <Route path="register" component={ RegisterView }/>
    <Route path="protected" component={ requireAuthentication( ProtectedView ) }/>
  </Route>
);
