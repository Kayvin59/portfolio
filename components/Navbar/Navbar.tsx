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
    <nav className={`${styles.navbar} ${isActive ? styles.expanded : ''}`}>
      <Link href="/">
        <button
          type="button"
          onClick={onClick}
          className={currentRoute === '/' ? 'active' : ''}
        >
          Home
        </button>
      </Link>
      <Link href="/#About">
        <button
          type="button"
          onClick={onClick}
          className={currentRoute === '/#About' ? 'active' : ''}
        >
          About
        </button>
      </Link>
      <Link href="/#Work">
        <button
          type="button"
          onClick={onClick}
          className={currentRoute === '/#Work' ? 'active' : ''}
        >
          Work
        </button>
      </Link>
      <Link href="/#Contact">
        <button
          type="button"
          onClick={onClick}
          className={currentRoute === '/#Contact' ? 'active' : ''}
        >
          Contact
        </button>
      </Link>
    </nav>
  )
}

export default Navbar
