import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Navbar.module.scss'

type Props = {
  isActive: boolean
  onClick: () => void
}

const Navbar = ({ isActive, onClick }: Props) => {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <nav className={`${styles.navbar} ${isActive ? styles.active : ''}`}>
      <Link
        href="/#About"
        className={currentRoute === '/about' ? styles.active : styles.nonActive}
      >
        <button type="button" onClick={onClick}>
          About
        </button>
      </Link>
      <Link
        href="/#Work"
        className={currentRoute === '/Work' ? styles.active : styles.nonActive}
      >
        <button type="button" onClick={onClick}>
          Work
        </button>
      </Link>
      <Link
        href="/#Contact"
        className={
          currentRoute === '/Contact' ? styles.active : styles.nonActive
        }
      >
        <button type="button" onClick={onClick}>
          Contact
        </button>
      </Link>
    </nav>
  )
}

export default Navbar

/* ;<li className={router.asPath === '/#About' ? 'active' : ''}>
  <Link href="/#About" replace>
    About
  </Link>
</li>
 */
