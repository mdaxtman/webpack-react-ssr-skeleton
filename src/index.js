import App from './app/ReactApp';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

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
  const store = configureStore({
    reducer: (store = 0) => 0
  });

  console.log(store.getState());

  const application = (
    <Provider store={store}>
      <App/>
    </Provider>
  );

  const mountFunction = process.env.NODE_ENV === 'production'
    ? ReactDOM.hydrate
    : ReactDOM.render;

  mountFunction(
    application,
    document.getElementById('root')
  );
});


if (module.hot) {
  module.hot.accept();
}