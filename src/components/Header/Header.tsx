import { Link } from 'react-router-dom';
import Styles from './Header.module.css';

export function Header() {
  return (
    <nav className={Styles.Header}>
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
