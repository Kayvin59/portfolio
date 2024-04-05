'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { useEffect, useState } from 'react'
import styles from './Navbar.module.scss'

type Props = {
  isActive: boolean
  onClick: () => void
}

const Navbar = ({ isActive, onClick }: Props) => {
  const pathname = usePathname()
  /*   const [activeRoute, setActiveRoute] = useState('')

  useEffect(() => {
    setActiveRoute(pathname)
  }, [pathname]) */

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
      <Link href="/" className={styles.navButton}>
        Accueil
      </Link>
      {links.map((link) => (
        <Link
          scroll
          key={link.href}
          className={`${styles.navButton} ${
            pathname === link.href ? styles.active : ''
          }`}
          href={link.href}
          replace
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
