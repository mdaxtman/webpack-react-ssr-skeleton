import './global.css';
import styles from './app.css';
import worker from './worker.svg';
import React from 'react';

const App = () => {
  return (
      <React.Fragment>
        this is the test app!
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={worker} />
        </div>
      </React.Fragment>
  );
};

export default App;
