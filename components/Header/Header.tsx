import Logo from '../Logo/Logo'
/* import Navbar from '../Navbar/Navbar' */
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div>nav</div>
      <div>burger</div>
    </header>
  )
}

export default Header
