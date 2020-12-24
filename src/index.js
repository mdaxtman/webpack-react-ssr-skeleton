import App from './components/ReactApp';
import ReactDOM from 'react-dom';

let mountFunction = process.env.NODE_ENV === 'production'
  ? ReactDOM.hydrate
  : ReactDOM.render;

Promise.all([
  import('core-js/stable'),
  import('regenerator-runtime/runtime')
]).then(() => {
  mountFunction(
    <App/>,
    document.getElementById('root')
  );
});


if (module.hot) {
  module.hot.accept();
}