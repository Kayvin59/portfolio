import React from 'react'
import styles from './Cardlist.module.scss'

import List from '../List'
import Subtitle from '../Subtitle'

type Props = {
  subtitle: string
  categories: string[]
  icons: React.ReactNode[]
}

const Cardlist = ({ subtitle, categories, icons }: Props) => {
  return (
    <div className={styles.cardlist}>
      <Subtitle content={subtitle} />
      <List items={categories} icons={icons} />
    </div>
  )
}
export default Cardlist
