import { NavLink } from 'react-router';
import s from './styles.module.css';

export const Header = () => {
  return (
    <header className={s.root}>
      <h2 className={s.logo}>My App</h2>
      <nav>
        <ul className={s.nav}>
          <li>
            <NavLink to="/" className={s.link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className={s.link}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={s.link}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
