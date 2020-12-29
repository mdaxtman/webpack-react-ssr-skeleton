import App from './app/ReactApp';
import createStore from './app/store';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';

// export the store and App for server consumption.
export { default as createStore } from './app/store';
export default App;
export { StaticRouter } from 'react-router-dom';

export const renderApp = () => {
  const preloadedState = window.__REDUX_STATE__ || undefined;
  delete window.__REDUX_STATE__;
  const store = createStore(preloadedState);
  
  const ConfiguredApp = hot(() => (
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  ));

  // if it's a production build we're doing server side rendering so we must hydrate.
  const mountFunction = process.env.NODE_ENV === 'production'
    ? ReactDOM.hydrate
    : ReactDOM.render;

  mountFunction(
    <ConfiguredApp />,
    document.getElementById('root')
  );

  if (module.hot) {
    module.hot.accept();
  }
};

// only mount the app if it's in the browser.
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  renderApp();
}
