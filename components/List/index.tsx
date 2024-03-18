'use client'

import React, { forwardRef } from 'react'
import styles from './List.module.scss'

type Props = {
  items: string[]
  icons: React.ReactNode[]
}

const List = forwardRef<HTMLUListElement, Props>(({ items, icons }, ref) => {
  return (
    <ul className={styles.list} ref={ref}>
      {items.map((item, index) => (
        <li className={styles.listitem} key={item}>
          {icons[index]}
          {item}
        </li>
      ))}
    </ul>
  )
})

export default List
