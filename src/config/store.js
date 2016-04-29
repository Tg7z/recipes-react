'use strict';
import { applyMiddleware, compose, createStore } from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunk from 'redux-thunk';
import createHistory from 'history/lib/createBrowserHistory';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import routes from './routes';

export default function configureStore(initialState) {
  let createStoreWithMiddleware;
  const logger = createLogger();
  const middleware = applyMiddleware(thunk, logger);

  createStoreWithMiddleware = compose(
    middleware,
    reduxReactRouter({routes, createHistory})
  );

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot
      .accept('../reducers', () => {
        const nextRootReducer = require('../reducers/index');
        store.replaceReducer(nextRootReducer);
      });
  }

  return store;
}
