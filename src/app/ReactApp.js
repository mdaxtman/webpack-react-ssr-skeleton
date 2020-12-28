import './global.css';
import src from './kitty.png';
import React from 'react';

const App = () => {
  return (
      <React.Fragment>
        this is the test app!
        <img src={src} />
      </React.Fragment>
  );
};

export default App;
