'use client'

import Image from 'next/image'
import { forwardRef } from 'react'
import Subtitle from '../Subtitle'
import styles from './Card.module.scss'

type Props = {
  subtitle: string
  description: string[]
  img: string
  altText: string
}

const Card = forwardRef<HTMLDivElement, Props>(
  ({ subtitle, description, img, altText }, ref) => {
    return (
      <div ref={ref} className={styles.card}>
        <div className={styles.cardheader}>
          <Image
            src={`/${img}`}
            alt={altText}
            width={300}
            height={200}
            style={{ width: '300px', height: '200px' }}
          />
        </div>
        <div className={styles.cardbody}>
          <Subtitle content={subtitle} />
          <ul>
            {description.map((item) => (
              <li className={styles.listitem} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
)

export default Card
