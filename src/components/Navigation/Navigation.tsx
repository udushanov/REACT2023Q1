import { Link } from 'react-router-dom';
import Styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={Styles.Navigation}>
      <div className={Styles.Wrapper}>
        <span className={Styles.Logo}>React 20223Q1</span>
        <span>
          <Link className={Styles.Link} to="/">
            Main
          </Link>
          <Link className={Styles.Link} to="/about">
            About us
          </Link>
        </span>
      </div>
    </nav>
  );
}
