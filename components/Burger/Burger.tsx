import styles from './Burger.module.scss'

type Props = {
  isOpen: boolean
  handleToggle: () => void
}

/* interface Props extends React.ComponentProps<'button'> {
  isOpen: boolean
  handleToggle: () => void
} */

const Burger = ({ isOpen, handleToggle }: Props) => {
  return (
    <button
      type="button"
      className={`${styles.burger} ${isOpen ? styles.active : ''}`}
      aria-label="burger"
      onClick={handleToggle}
    >
      <span />
      <span />
      <span />
    </button>
  )
}

export default Burger
