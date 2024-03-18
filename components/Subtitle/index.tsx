'use client'

import styles from './Subtitle.module.scss'

type Props = {
  content: string
}

const Subitle = ({ content }: Props) => {
  return <h3 className={styles.subtitle}>{content}</h3>
}

export default Subitle
