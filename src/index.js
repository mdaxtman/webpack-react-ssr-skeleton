import App from './app';
import ReactDOM from 'react-dom';

import('core-js/stable');
import('regenerator-runtime/runtime');

ReactDOM.hydrate(
  <App/>,
  document.getElementById('root')
);


if (module.hot) {
  module.hot.accept();
}