'use client'

import { useState } from 'react'

import Burger from '../Burger'
import Logo from '../Logo'
import Navbar from '../Navbar'

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
