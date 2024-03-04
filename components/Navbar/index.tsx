import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'

type Props = {
  isActive: boolean
  onClick: () => void
}

const Navbar = ({ isActive, onClick }: Props) => {
  const router = useRouter()
  const [activeRoute, setActiveRoute] = useState('')

  useEffect(() => {
    setActiveRoute(router.asPath)
  }, [router.asPath])

  const links = [
    { href: '/#About', label: 'À propos' },
    { href: '/#Skills', label: 'Compétences' },
    { href: '/#Work', label: 'Expériences' },
    { href: '/#Contact', label: 'Contact' }
  ]

  return (
    <nav
      id="toggleNavbar"
      className={`${styles.navbar} ${isActive ? styles.expanded : ''}`}
      role="navigation"
    >
      <Link href="/">
        <button type="button" onClick={onClick}>
          Accueil
        </button>
      </Link>
      {links.map((link) => (
        <Link key={link.href} href={link.href} passHref>
          <button
            type="button"
            onClick={onClick} // Call the passed onClick function when a link is clicked
            className={`${styles.navButton} ${
              activeRoute === link.href ? styles.active : ''
            }`}
          >
            {link.label}
          </button>
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
