import './global.css';
import styles from './app.css';
import worker from './worker.svg';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
      <React.Fragment>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        {/* <Switch>
          <Route exact path='/'>
            this is the test app!
          </Route>
          <Route path='/about'>
            <div className={styles.imgWrapper}>
              <img className={styles.img} src={worker} />
            </div>
          </Route>
        </Switch> */}
      </React.Fragment>
  );
};

export default App;
