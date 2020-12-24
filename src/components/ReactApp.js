import styles from './ReactApp.css';
import { hot } from 'react-hot-loader/root';

const App = () => {
  return <div className={styles.wrapper}>this is the app!</div>
};

export default hot(App);
