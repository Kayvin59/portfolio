import Image from 'next/image'
import Link from 'next/link'

import styles from './ScrollDown.module.scss'

/* type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  id: string
} */

const ScrollDown = () => {
  return (
    <Link href="/#About">
      <button className={styles.button} type="button">
        <Image
          className={styles.img}
          src="/down-arrow.svg"
          alt="An SVG of my logo"
          width={60}
          height={60}
        />
        <p>Scoll down</p>
      </button>
    </Link>
  )
  /*   return <button type="button" id={id} /> */
}

export default ScrollDown
