import React from 'react'

import styles from './Section.module.scss'

type Props = {
  children: React.ReactNode
  id: string
}

const Section = ({ id, children }: Props) => {
  return (
    <section className={`${styles.section} ${id}`} id={id}>
      {children}
    </section>
  )
}

export default Section
