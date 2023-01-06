import Link from 'next/link'

import { AiOutlineArrowDown } from 'react-icons/ai'

import styles from './ScrollDown.module.scss'

const ScrollDown = () => {
  return (
    <Link href="/#About">
      <button className={styles.button} type="button">
        <AiOutlineArrowDown />
      </button>
    </Link>
  )
}

export default ScrollDown
