'use client'

import styles from './Title.module.scss'

type Props = {
  content: string
}

const Title = ({ content }: Props) => {
  return <h2 className={styles.title}>{content}</h2>
}

export default Title
