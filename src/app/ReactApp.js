import './global.css';
export { default as store } from './store';
import src from './kitty.png';
import React from 'react';

const App = () => {
  return (
      <React.Fragment>
        this is the app!
        <img src={src} />
      </React.Fragment>
  );
};

export default App;
