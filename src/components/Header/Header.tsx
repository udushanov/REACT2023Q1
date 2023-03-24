import { NavLink } from 'react-router-dom';
import Styles from './Header.module.css';

export function Header() {
  return (
    <nav className={Styles.Header}>
      <div className={Styles.Wrapper}>
        <span className={Styles.Logo}>React 20223Q1</span>
        <span>
          <NavLink className={({ isActive }) => (isActive ? Styles.Active : Styles.Link)} to="/">
            Main
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? Styles.Active : Styles.Link)}
            to="/forms"
          >
            Forms
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? Styles.Active : Styles.Link)}
            to="/about"
          >
            About us
          </NavLink>
        </span>
      </div>
    </nav>
  );
}
