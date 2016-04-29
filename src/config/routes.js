'use strict';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import HomeView from '../containers/Home';
import LoginView from '../containers/Login';
import RegisterView from '../containers/Register';

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ HomeView }/>
    <Route path="login" component={ LoginView }/>
    <Route path="register" component={ RegisterView }/>
  </Route>
);
