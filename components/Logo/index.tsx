import Image from 'next/image'
import Link from 'next/link'

import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        className={styles.img}
        src="/logo.svg"
        alt="An SVG of my logo"
        width={60}
        height={60}
      />
    </Link>
  )
}

export default Logo
