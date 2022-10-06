import Image from 'next/image'
import Link from 'next/link'

import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <span className={styles.logo}>
        <Image
          className={styles.img}
          src="/KN-logo.svg"
          alt="An SVG of my logo"
          width={60}
          height={60}
        />
      </span>
    </Link>
  )
}

export default Logo
