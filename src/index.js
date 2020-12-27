import App, { store } from './app/ReactApp';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import { hot } from 'react-hot-loader/root';

// include polyfills before app mounts
Promise.all([
  import(
    /* webpackChunkName: "core-js" */
    'core-js/stable'
  ),
  import(
    /* webpackChunkName: "regenerator-runtime" */
    'regenerator-runtime/runtime'
  )
]).then(() => {

  const ReduxApplication = () => (
    <Provider store={store}>
      <App/>
    </Provider>
  );

  const ConfiguredApplication = hot(ReduxApplication)

  // if it's a production build we're doing server side rendering.
  const mountFunction = process.env.NODE_ENV === 'production'
    ? ReactDOM.hydrate
    : ReactDOM.render;

  mountFunction(
    <ConfiguredApplication />,
    document.getElementById('root')
  );
});


if (module.hot) {
  module.hot.accept();
}