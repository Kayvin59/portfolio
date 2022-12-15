import { useState } from 'react'

import Burger from '../Burger/Burger'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'

import styles from './Header.module.scss'

type Props = {
  isVisible: boolean
}

const Header = ({ isVisible }: Props) => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <header className={`${styles.header} ${!isVisible ? styles.fixed : ''}`}>
      <Logo />
      <Navbar isActive={open} onClick={handleClose} />
      <Burger isOpen={open} handleToggle={handleToggle} />
    </header>
  )
}

export default Header
