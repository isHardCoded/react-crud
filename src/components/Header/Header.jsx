import s from './styles.module.css'

export const Header = () => {
  return <header className={s.root}>
    <h2 className={s.logo}>My App</h2>
    <nav>
      <ul className={s.nav}>
        <li>
          <a href="#" className={s.link}>Home</a>
        </li>
        <li>
          <a href="#" className={s.link}>Users</a>
        </li>
        <li>
          <a href="#" className={s.link}>Contacts</a>
        </li>
      </ul>
    </nav>
  </header>
}