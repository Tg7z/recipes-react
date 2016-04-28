'use strict';
import App from './App';
import routes from './config/routes';

const generate = function generate(path, props) {
  let html = null;
  Router.run(
    routes,
    path,
    (Handler) =>
      html = React.renderToString(React.createFactory(Handler)(props))
  );
  return html;
};

module.exports = generate;
