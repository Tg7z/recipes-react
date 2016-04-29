'use strict';
// import 'babel-core/polyfill';
import Root from './containers/Root';
import configureStore from './config/store';
import { loginUserSuccess } from './actions/authActions';

import './assets/icons/AppIcon152x152.png';
import './assets/icons/AppIcon120x120.png';
import './assets/icons/AppIcon76x76.png';
import './assets/icons/AppIcon60x60.png';
import './assets/manifest.json';
import './assets/favicon.ico';

// React, React-Router (and a few other libs) are globals via the webpack config
if (__DEV__) {
  require('./debugging');
}

const target = document.getElementById('root');
const store = configureStore(window.__INITIAL_STATE__);

let token = localStorage.getItem('token');
if (token !== null) {
  store.dispatch(loginUserSuccess(token));
}

// bootstrapping to the index.html
let mount = window.document.getElementById('app');
if (!mount){
  mount = window.document.createElement("div");
  mount.id = "app";
  window.document.body.appendChild(mount);
}

const node = (
  <Root store={store} />
);

ReactDom.render( node, mount);
