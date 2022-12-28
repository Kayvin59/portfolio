import React from 'react'
import styles from './List.module.scss'

type Props = {
  items: string[]
  icons: React.ReactNode[]
}

const List = ({ items, icons }: Props) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li className={styles.listitem} key={item}>
          {icons[index]}
          {item}
        </li>
      ))}
    </ul>
  )
}

export default List
