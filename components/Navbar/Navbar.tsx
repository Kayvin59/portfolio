import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Navbar.module.scss'

type Props = {
  isActive: boolean
  onClick: () => void
}

const Navbar = ({ isActive, onClick }: Props) => {
  const router = useRouter()
  const currentRoute = router.asPath

  return (
    <nav
      id="toggleNavbar"
      className={`${styles.navbar} ${isActive ? styles.expanded : ''}`}
      role="navigation"
    >
      <Link href="/">
        <button type="button" onClick={onClick}>
          Home
        </button>
      </Link>
      <Link href="/#About">
        <button
          type="button"
          onClick={onClick}
          className={`${currentRoute === '/#About' ? styles.active : ''}`}
        >
          About
        </button>
      </Link>
      <Link href="/#Skills">
        <button
          type="button"
          onClick={onClick}
          className={`${currentRoute === '/#Skills' ? styles.active : ''}`}
        >
          Skills
        </button>
      </Link>
      <Link href="/#Work">
        <button
          type="button"
          onClick={onClick}
          className={`${currentRoute === '/#Work' ? styles.active : ''}`}
        >
          Work
        </button>
      </Link>
      <Link href="/#Contact">
        <button
          type="button"
          onClick={onClick}
          className={`${currentRoute === '/#Contact' ? styles.active : ''}`}
        >
          Contact
        </button>
      </Link>
    </nav>
  )
}

export default Navbar
