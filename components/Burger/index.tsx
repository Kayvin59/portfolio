'use client'

import styles from './Burger.module.scss'

type Props = {
  isOpen: boolean
  handleToggle: () => void
}

const Burger = ({ isOpen, handleToggle }: Props) => {
  return (
    <button
      type="button"
      className={`${styles.burger} ${isOpen ? styles.active : ''}`}
      aria-label="Toggle navigation"
      aria-controls="toggleNavbar"
      onClick={handleToggle}
    >
      <span />
      <span />
      <span />
    </button>
  )
}

export default Burger
