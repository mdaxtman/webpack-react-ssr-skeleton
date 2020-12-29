/**
 * this file is strictly for legacy browsers
 */
 import {renderApp} from './index.js';

// include polyfills.
(async () => {
  await import(
    /* webpackChunkName: "whatwg-fetch" */
    'whatwg-fetch'
  );

  renderApp();
})();