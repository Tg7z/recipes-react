'use strict';
import App from '../App';

// const { Router, Route } = ReactRouter;

// routes
const routes = {
  path: '/',
  component: App,
  onEnter: (router, replaceWith) => {
    if (router.location.pathname === '/') {
      replaceWith(null, '/login');
    }
  },
  childRoutes:[
    {
      path:"/login",
      getComponents:(a, cb) => require.ensure([], require => {cb(null, require('containers/login'));})
    },
    {
      path:"/register",
      getComponents:(a, cb) => require.ensure([], require => {cb(null, require('containers/register'));})
    },
  ]
};

export default routes;
